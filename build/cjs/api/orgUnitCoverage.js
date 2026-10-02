"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfilesSources = exports.fetchSourceOrgUnitLevels = exports.fetchOrgUnitCoverage = void 0;
var _orgUnitSelection = require("../modules/dataItemProfile/orgUnitSelection.js");
var _sources = require("../modules/dataItemProfile/sources.js");
var _orgUnitGroupCounts = require("./orgUnitGroupCounts.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
const UNIT_FIELDS = 'id,level,path,displayName';
const unitsQuery = filter => ({
  resource: 'organisationUnits',
  params: {
    filter,
    fields: UNIT_FIELDS,
    paging: false
  }
});
const byId = (units = []) => Object.fromEntries(units.map(({
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

/**
 * The data sets and programs behind profiles (getDataItemProfile results),
 * whose assignment fetchOrgUnitCoverage counts: `[{ id, field }]`, `field`
 * being the org unit field that lists them (dataSets or programs).
 */
const getProfilesSources = (profiles = []) => [...new Map(profiles.flatMap(profile => {
  var _profile$sources;
  return (_profile$sources = profile === null || profile === void 0 ? void 0 : profile.sources) !== null && _profile$sources !== void 0 ? _profile$sources : [];
}).filter(source => (0, _sources.getSourceId)(source) && !(0, _sources.isPlacedAnywhere)(source)).map(source => [(0, _sources.getSourceId)(source), {
  id: (0, _sources.getSourceId)(source),
  field: (0, _sources.getSourceField)(source)
}])).values()];

// The units, roots and user's units a selection needs, with the levels
exports.getProfilesSources = getProfilesSources;
const fetchUnits = async (engine, orgUnits) => {
  var _response$me, _response$me2, _response$units, _response$roots, _response$roots$organ, _response$roots2;
  const {
    unitIds,
    needsRoots,
    needsUser
  } = (0, _orgUnitSelection.getUnitsToCount)(orgUnits);
  const response = await engine.query({
    ...levelsQuery,
    ...(unitIds.length && {
      units: unitsQuery(`id:in:[${unitIds.join(',')}]`)
    }),
    ...(needsRoots && {
      roots: unitsQuery('level:eq:1')
    }),
    ...(needsUser && {
      me: {
        resource: 'me',
        params: {
          fields: `organisationUnits[${UNIT_FIELDS}],dataViewOrganisationUnits[${UNIT_FIELDS}]`
        }
      }
    })
  });
  // Analytics reads the user's data view units when there are some
  const userUnits = (_response$me = response.me) !== null && _response$me !== void 0 && (_response$me = _response$me.dataViewOrganisationUnits) !== null && _response$me !== void 0 && _response$me.length ? response.me.dataViewOrganisationUnits : (_response$me2 = response.me) === null || _response$me2 === void 0 ? void 0 : _response$me2.organisationUnits;
  const levels = readLevels(response);
  return {
    levels,
    units: {
      ...byId((_response$units = response.units) === null || _response$units === void 0 ? void 0 : _response$units.organisationUnits),
      ...byId((_response$roots = response.roots) === null || _response$roots === void 0 ? void 0 : _response$roots.organisationUnits),
      ...byId(userUnits)
    },
    roots: needsRoots ? ((_response$roots$organ = (_response$roots2 = response.roots) === null || _response$roots2 === void 0 ? void 0 : _response$roots2.organisationUnits) !== null && _response$roots$organ !== void 0 ? _response$roots$organ : []).map(({
      id
    }) => id) : [],
    userUnits: needsUser ? (userUnits !== null && userUnits !== void 0 ? userUnits : []).map(({
      id
    }) => id) : null
  };
};

// Each source's assigned units per level, across the whole hierarchy
const getAssignedLevelQueries = (sources, levels) => sources.flatMap(source => levels.map(({
  level
}) => [[source.id, level], (0, _orgUnitQueries.countQuery)([`level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])]));
const readAssignedLevels = (sources, queries, response) => {
  const bySource = Object.fromEntries(sources.map(({
    id
  }) => [id, {}]));
  queries.forEach(([[sourceId, level]], i) => {
    const byLevel = bySource[sourceId];
    const total = (0, _orgUnitQueries.getTotal)(response[`count${i}`]);
    if (total) {
      byLevel[level] = total;
    }
  });
  return bySource;
};
const levelsQuery = {
  levels: {
    resource: 'organisationUnitLevels',
    params: {
      fields: 'id,level,displayName',
      paging: false
    }
  }
};
const readLevels = response => {
  var _response$levels$orga, _response$levels;
  return ((_response$levels$orga = response === null || response === void 0 || (_response$levels = response.levels) === null || _response$levels === void 0 ? void 0 : _response$levels.organisationUnitLevels) !== null && _response$levels$orga !== void 0 ? _response$levels$orga : []).map(({
    id,
    level,
    displayName
  }) => ({
    id,
    level,
    name: displayName
  })).sort((a, b) => a.level - b.level);
};

/**
 * Each source's assigned units per level, across the hierarchy, as counts
 * (pageSize=1): where its data is entered. `sources` are `[{ id, field }]`
 * (getProfilesSources), `levels` are fetched when not given. Gives
 * `{ levels, assignedLevels: { [sourceId]: { [level]: count } }, requests }`;
 * getDataItemProfile reads `assignedLevels` for the profile's org unit side.
 */
const fetchSourceOrgUnitLevels = async (engine, sources, levels) => {
  const knownLevels = levels !== null && levels !== void 0 ? levels : readLevels(await engine.query(levelsQuery));
  const queries = getAssignedLevelQueries(sources, knownLevels);
  return {
    levels: knownLevels,
    assignedLevels: readAssignedLevels(sources, queries, await (0, _orgUnitQueries.queryAll)(engine, queries)),
    requests: queries.length
  };
};

/* For each unit: how many units each level under it has, how many of them
 * each source is assigned to, and how many of its ancestors. Only levels a
 * source is assigned at somewhere are counted. */
exports.fetchSourceOrgUnitLevels = fetchSourceOrgUnitLevels;
const getCountQueries = (units, sources, assignedLevels) => Object.values(units).flatMap(unit => {
  const under = `path:like:${unit.id}`;
  const ancestorIds = getAncestorIds(unit);
  const levelsOf = ({
    id
  }) => {
    var _assignedLevels$id;
    return Object.keys((_assignedLevels$id = assignedLevels[id]) !== null && _assignedLevels$id !== void 0 ? _assignedLevels$id : {}).map(Number).filter(level => level >= unit.level);
  };
  const isAssignedAbove = ({
    id
  }) => {
    var _assignedLevels$id2;
    return Object.keys((_assignedLevels$id2 = assignedLevels[id]) !== null && _assignedLevels$id2 !== void 0 ? _assignedLevels$id2 : {}).some(level => Number(level) < unit.level);
  };
  const totalLevels = [...new Set(sources.flatMap(levelsOf))];
  return [...totalLevels.map(level => [[unit.id, 'total', level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`])]), ...sources.flatMap(source => [...levelsOf(source).map(level => [[unit.id, source.id, level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])]), ...(ancestorIds.length && isAssignedAbove(source) ? [[[unit.id, source.id, 'ancestors'], (0, _orgUnitQueries.countQuery)([`id:in:[${ancestorIds.join(',')}]`, (0, _orgUnitQueries.assignedTo)(source)])]] : [])])];
});
const readCounts = (queries, response) => {
  const counts = {};
  queries.forEach(([[unitId, what, level]], i) => {
    const unit = counts[unitId] || (counts[unitId] = {
      totals: {},
      sources: {}
    });
    const total = (0, _orgUnitQueries.getTotal)(response[`count${i}`]);
    if (what === 'total') {
      unit.totals[level] = total;
      return;
    }
    const source = unit.sources[what] || (unit.sources[what] = {
      byLevel: {},
      ancestors: 0
    });
    if (level === 'ancestors') {
      source.ancestors += total;
    } else {
      source.byLevel[level] = total;
    }
  });
  return counts;
};

/**
 * Where data sets and programs (`sources`, getProfilesSources) are assigned,
 * under the units of an org unit selection (DV's org unit items): the
 * levels, the units (boundaries, roots for a level alone, the user's units),
 * each group's members per level (`groups`), each source's `assignedLevels`
 * across the hierarchy, and for each unit (and group, by getGroupCountsKey), per
 * level below it that a source is assigned at, the number of units and of
 * units each source is assigned to, plus its ancestors each one is assigned
 * to. Only counts are fetched
 * (pageSize=1), so large hierarchies cost the same; each round of requests
 * goes out together. getDataItemOrgUnitCompatibility reads the result.
 */
const fetchOrgUnitCoverage = async (engine, {
  sources = [],
  orgUnits = [],
  assignedLevels: known = {}
}) => {
  const {
    levels,
    units,
    roots,
    userUnits
  } = await fetchUnits(engine, orgUnits);
  const missing = sources.filter(({
    id
  }) => !known[id]);
  const [counted, grouped] = await Promise.all([fetchSourceOrgUnitLevels(engine, missing, levels), (0, _orgUnitGroupCounts.fetchGroupLevels)(engine, (0, _orgUnitSelection.getUnitsToCount)(orgUnits).groupIds, levels)]);
  const assignedLevels = {
    ...known,
    ...counted.assignedLevels
  };
  const queries = [...getCountQueries(units, sources, assignedLevels), ...(0, _orgUnitGroupCounts.getGroupCountQueries)({
    groups: grouped.groups,
    boundaries: (0, _orgUnitSelection.readOrgUnitSelection)(orgUnits).boundaries,
    units,
    sources,
    assignedLevels
  })];
  return {
    levels,
    units,
    roots,
    userUnits,
    groups: grouped.groups,
    assignedLevels,
    counts: readCounts(queries, await (0, _orgUnitQueries.queryAll)(engine, queries)),
    requests: counted.requests + grouped.requests + queries.length
  };
};
exports.fetchOrgUnitCoverage = fetchOrgUnitCoverage;