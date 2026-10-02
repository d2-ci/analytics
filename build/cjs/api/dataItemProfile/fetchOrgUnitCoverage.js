"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOrgUnitCoverage = void 0;
var _orgUnitSelection = require("../../modules/dataItemProfile/orgUnits/orgUnitSelection.js");
var _assignedOrgUnitCounts = require("./assignedOrgUnitCounts.js");
var _orgUnitGroupCounts = require("./orgUnitGroupCounts.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
const ORG_UNIT_FIELDS = 'id,level,path,displayName';
const orgUnitsQuery = filter => ({
  resource: 'organisationUnits',
  params: {
    filter,
    fields: ORG_UNIT_FIELDS,
    paging: false
  }
});
const byId = (orgUnits = []) => Object.fromEntries(orgUnits.map(({
  id,
  level,
  path,
  displayName
}) => [id, {
  id,
  level,
  path,
  name: displayName
}]));
const getAncestorIds = ({
  id,
  path
}) => path.split('/').filter(ancestorId => ancestorId && ancestorId !== id);

// The org units, roots and user's org units a selection needs, with the levels
const fetchOrgUnits = async (engine, orgUnitItems) => {
  var _response$me, _response$me2, _response$orgUnits, _response$roots, _response$roots$organ, _response$roots2;
  const {
    orgUnitIds,
    needsRoots,
    needsUserOrgUnits
  } = (0, _orgUnitSelection.getOrgUnitsToFetch)(orgUnitItems);
  const response = await engine.query({
    ..._orgUnitQueries.levelsQuery,
    ...(orgUnitIds.length && {
      orgUnits: orgUnitsQuery(`id:in:[${orgUnitIds.join(',')}]`)
    }),
    ...(needsRoots && {
      roots: orgUnitsQuery('level:eq:1')
    }),
    ...(needsUserOrgUnits && {
      me: {
        resource: 'me',
        params: {
          fields: `organisationUnits[${ORG_UNIT_FIELDS}],dataViewOrganisationUnits[${ORG_UNIT_FIELDS}]`
        }
      }
    })
  });
  // Analytics reads the user's data view org units when there are some
  const userOrgUnits = (_response$me = response.me) !== null && _response$me !== void 0 && (_response$me = _response$me.dataViewOrganisationUnits) !== null && _response$me !== void 0 && _response$me.length ? response.me.dataViewOrganisationUnits : (_response$me2 = response.me) === null || _response$me2 === void 0 ? void 0 : _response$me2.organisationUnits;
  return {
    levels: (0, _orgUnitQueries.readLevels)(response),
    orgUnits: {
      ...byId((_response$orgUnits = response.orgUnits) === null || _response$orgUnits === void 0 ? void 0 : _response$orgUnits.organisationUnits),
      ...byId((_response$roots = response.roots) === null || _response$roots === void 0 ? void 0 : _response$roots.organisationUnits),
      ...byId(userOrgUnits)
    },
    rootIds: needsRoots ? ((_response$roots$organ = (_response$roots2 = response.roots) === null || _response$roots2 === void 0 ? void 0 : _response$roots2.organisationUnits) !== null && _response$roots$organ !== void 0 ? _response$roots$organ : []).map(({
      id
    }) => id) : [],
    userOrgUnitIds: needsUserOrgUnits ? (userOrgUnits !== null && userOrgUnits !== void 0 ? userOrgUnits : []).map(({
      id
    }) => id) : null
  };
};

/* The counts of one org unit: how many org units each level under it has,
 * how many of them each source is assigned to, and how many of its
 * ancestors. Only levels a source is assigned at somewhere are counted. */
const getOrgUnitQueries = (orgUnit, {
  sources,
  assignedOrgUnitCounts
}) => {
  const under = `path:like:${orgUnit.id}`;
  const ancestorIds = getAncestorIds(orgUnit);
  const assignedLevelsOf = ({
    id
  }) => {
    var _assignedOrgUnitCount;
    return Object.keys((_assignedOrgUnitCount = assignedOrgUnitCounts[id]) !== null && _assignedOrgUnitCount !== void 0 ? _assignedOrgUnitCount : {}).map(Number);
  };
  const levelsUnder = source => assignedLevelsOf(source).filter(level => level >= orgUnit.level);
  const isAssignedHigher = source => assignedLevelsOf(source).some(level => level < orgUnit.level);
  const getAncestorsQuery = source => [[orgUnit.id, source.id, 'ancestors'], (0, _orgUnitQueries.countQuery)([`id:in:[${ancestorIds.join(',')}]`, (0, _orgUnitQueries.assignedTo)(source)])];
  return [...[...new Set(sources.flatMap(levelsUnder))].map(level => [[orgUnit.id, 'total', level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`])]), ...sources.flatMap(source => levelsUnder(source).map(level => [[orgUnit.id, source.id, level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])])), ...sources.filter(source => ancestorIds.length && isAssignedHigher(source)).map(getAncestorsQuery)];
};
const readCounts = (queries, response) => {
  const counts = {};
  queries.forEach(([[countsKey, what, level]], i) => {
    counts[countsKey] ??= {
      totals: {},
      sources: {}
    };
    const counted = counts[countsKey];
    const total = (0, _orgUnitQueries.getTotal)(response[`count${i}`]);
    if (what === 'total') {
      counted.totals[level] = total;
      return;
    }
    counted.sources[what] ??= {
      byLevel: {},
      ancestors: 0
    };
    if (level === 'ancestors') {
      counted.sources[what].ancestors += total;
    } else {
      counted.sources[what].byLevel[level] = total;
    }
  });
  return counts;
};

/**
 * Where data sets and programs (`sources`, getCountableSources) are assigned,
 * for an org unit selection (`orgUnits`, DV's org unit items). Gives:
 * - `levels`, and `orgUnits` by id (the selection's, the roots for a level
 *   alone, the user's), with `rootIds` and `userOrgUnitIds`;
 * - `groups`: each group's members per level;
 * - `assignedOrgUnitCounts`: each source's assigned org units per level,
 *   across the hierarchy (those given are reused);
 * - `counts`, by org unit id (and by getGroupCountsKey for groups): per level
 *   a source is assigned at, the number of org units and of those each
 *   source is assigned to, plus the ancestors each one is assigned to;
 * - `requests`: how many counts were sent.
 * All metadata; each round of requests goes out together.
 * getDataItemProfileOrgUnitCompatibility reads the result.
 */
const fetchOrgUnitCoverage = async (engine, {
  sources = [],
  orgUnits: orgUnitItems = [],
  assignedOrgUnitCounts = {}
}) => {
  const {
    levels,
    orgUnits,
    rootIds,
    userOrgUnitIds
  } = await fetchOrgUnits(engine, orgUnitItems);
  const missing = sources.filter(({
    id
  }) => !assignedOrgUnitCounts[id]);
  const [assigned, grouped] = await Promise.all([(0, _assignedOrgUnitCounts.fetchAssignedOrgUnitCounts)(engine, missing, levels), (0, _orgUnitGroupCounts.fetchGroupMembersByLevel)(engine, (0, _orgUnitSelection.getOrgUnitsToFetch)(orgUnitItems).groupIds, levels)]);
  const allAssignedOrgUnitCounts = {
    ...assignedOrgUnitCounts,
    ...assigned.assignedOrgUnitCounts
  };
  const context = {
    sources,
    assignedOrgUnitCounts: allAssignedOrgUnitCounts
  };
  const queries = [...Object.values(orgUnits).flatMap(orgUnit => getOrgUnitQueries(orgUnit, context)), ...(0, _orgUnitGroupCounts.getGroupCountQueries)({
    ...context,
    groups: grouped.groups,
    parentOrgUnitIds: (0, _orgUnitSelection.readOrgUnitSelection)(orgUnitItems).parentOrgUnitIds,
    orgUnits
  })];
  return {
    levels,
    orgUnits,
    rootIds,
    userOrgUnitIds,
    groups: grouped.groups,
    assignedOrgUnitCounts: allAssignedOrgUnitCounts,
    counts: readCounts(queries, await (0, _orgUnitQueries.queryAll)(engine, queries)),
    requests: assigned.requests + grouped.requests + queries.length
  };
};
exports.fetchOrgUnitCoverage = fetchOrgUnitCoverage;