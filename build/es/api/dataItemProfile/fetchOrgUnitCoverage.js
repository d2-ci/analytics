import { getOrgUnitsToFetch, readOrgUnitSelection, resolveParents } from '../../modules/dataItemProfile/orgUnits/orgUnitSelection.js';
import { fetchAssignedOrgUnitCounts } from './assignedOrgUnitCounts.js';
import { fetchGroupMembersByLevel, getGroupCountQueries } from './orgUnitGroupCounts.js';
import { createListCounter } from './orgUnitListCounts.js';
import { assignedTo, getAncestorIds, countQuery, getTotal, inGroup, levelsQuery, queryAll, readLevels } from './orgUnitQueries.js';
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

// The org units, roots, user's org units and levels a selection needs, beyond those already known
const fetchOrgUnits = async (engine, {
  orgUnitItems,
  previous,
  signal
}) => {
  var _previous$orgUnits, _previous$rootIds, _previous$levels, _response$me, _response$me2, _response$orgUnits, _response$roots2;
  const {
    orgUnitIds,
    needsRoots,
    needsUserOrgUnits
  } = getOrgUnitsToFetch(orgUnitItems);
  const known = (_previous$orgUnits = previous === null || previous === void 0 ? void 0 : previous.orgUnits) !== null && _previous$orgUnits !== void 0 ? _previous$orgUnits : {};
  const missingIds = orgUnitIds.filter(id => !known[id]);
  const fetchRoots = needsRoots && !(previous !== null && previous !== void 0 && (_previous$rootIds = previous.rootIds) !== null && _previous$rootIds !== void 0 && _previous$rootIds.length);
  const fetchUser = needsUserOrgUnits && !(previous !== null && previous !== void 0 && previous.userOrgUnitIds);
  const query = {
    ...(!(previous !== null && previous !== void 0 && (_previous$levels = previous.levels) !== null && _previous$levels !== void 0 && _previous$levels.length) && levelsQuery),
    ...(missingIds.length && {
      orgUnits: orgUnitsQuery(`id:in:[${missingIds.join(',')}]`)
    }),
    ...(fetchRoots && {
      roots: orgUnitsQuery('level:eq:1')
    }),
    ...(fetchUser && {
      me: {
        resource: 'me',
        params: {
          fields: `organisationUnits[${ORG_UNIT_FIELDS}],dataViewOrganisationUnits[${ORG_UNIT_FIELDS}]`
        }
      }
    })
  };
  const response = Object.keys(query).length ? await engine.query(query, {
    signal
  }) : {};
  // Analytics reads the user's data view org units when there are some
  const userOrgUnits = (_response$me = response.me) !== null && _response$me !== void 0 && (_response$me = _response$me.dataViewOrganisationUnits) !== null && _response$me !== void 0 && _response$me.length ? response.me.dataViewOrganisationUnits : (_response$me2 = response.me) === null || _response$me2 === void 0 ? void 0 : _response$me2.organisationUnits;
  const getRootIds = () => {
    var _response$roots$organ, _response$roots, _previous$rootIds2;
    return fetchRoots ? ((_response$roots$organ = (_response$roots = response.roots) === null || _response$roots === void 0 ? void 0 : _response$roots.organisationUnits) !== null && _response$roots$organ !== void 0 ? _response$roots$organ : []).map(({
      id
    }) => id) : (_previous$rootIds2 = previous === null || previous === void 0 ? void 0 : previous.rootIds) !== null && _previous$rootIds2 !== void 0 ? _previous$rootIds2 : [];
  };
  const getUserOrgUnitIds = () => {
    var _previous$userOrgUnit;
    return fetchUser ? (userOrgUnits !== null && userOrgUnits !== void 0 ? userOrgUnits : []).map(({
      id
    }) => id) : (_previous$userOrgUnit = previous === null || previous === void 0 ? void 0 : previous.userOrgUnitIds) !== null && _previous$userOrgUnit !== void 0 ? _previous$userOrgUnit : null;
  };
  return {
    levels: response.levels ? readLevels(response) : previous.levels,
    orgUnits: {
      ...known,
      ...byId((_response$orgUnits = response.orgUnits) === null || _response$orgUnits === void 0 ? void 0 : _response$orgUnits.organisationUnits),
      ...byId((_response$roots2 = response.roots) === null || _response$roots2 === void 0 ? void 0 : _response$roots2.organisationUnits),
      ...byId(userOrgUnits)
    },
    rootIds: needsRoots ? getRootIds() : [],
    userOrgUnitIds: needsUserOrgUnits ? getUserOrgUnitIds() : null,
    requests: Object.keys(query).length
  };
};

/* The counts of one org unit: how many org units each level under it has,
 * how many of them each source is assigned to, and how many of its
 * ancestors. Only levels a source is assigned at somewhere are counted. */
const getOrgUnitQueries = (orgUnit, {
  sourceKeys,
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
  const getAncestorsQuery = source => [[orgUnit.id, source.id, 'ancestors'], countQuery([`id:in:[${ancestorIds.join(',')}]`, assignedTo(source)])];
  return [...[...new Set(sourceKeys.flatMap(levelsUnder))].map(level => [[orgUnit.id, 'total', level], countQuery([under, `level:eq:${level}`])]), ...sourceKeys.flatMap(source => levelsUnder(source).map(level => [[orgUnit.id, source.id, level], countQuery([under, `level:eq:${level}`, assignedTo(source)])])), ...sourceKeys.filter(source => ancestorIds.length && isAssignedHigher(source)).map(getAncestorsQuery)];
};
const recordCount = (counts, [countsKey, what, level], total) => {
  counts[countsKey] ??= {
    totals: {},
    sources: {}
  };
  const counted = counts[countsKey];
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
};

// Above this many source counts, lists of each source's org units are cheaper
const LIST_THRESHOLD = 100;
const listQuery = filter => ({
  resource: 'organisationUnits',
  params: {
    filter,
    fields: 'path',
    paging: false
  }
});
const getPaths = response => {
  var _response$organisatio;
  return ((_response$organisatio = response === null || response === void 0 ? void 0 : response.organisationUnits) !== null && _response$organisatio !== void 0 ? _response$organisatio : []).map(({
    path
  }) => path);
};

/* The source counts, answered from one list per source of the org units it
 * is assigned to, and one list per group of its members */
const countFromLists = async (engine, {
  sourceQueries,
  sourceKeys,
  groupIds,
  signal
}) => {
  const lists = [...sourceKeys.map(sourceKey => [['source', sourceKey.id], listQuery(assignedTo(sourceKey))]), ...groupIds.map(groupId => [['group', groupId], listQuery(inGroup(groupId))])];
  const {
    responses,
    requests
  } = await queryAll(engine, lists, {
    signal
  });
  const pathsOf = kind => Object.fromEntries(lists.map(([[listKind, id]], i) => [listKind, id, responses[i]]).filter(([listKind]) => listKind === kind).map(([, id, response]) => [id, getPaths(response)]));
  const sourcePaths = pathsOf('source');
  const count = createListCounter(pathsOf('group'));
  const sourceFilterOf = sourceId => assignedTo(sourceKeys.find(({
    id
  }) => id === sourceId));
  return {
    totals: sourceQueries.map(([[, sourceId], query]) => count(sourcePaths[sourceId], query.params.filter.filter(condition => condition !== sourceFilterOf(sourceId)))),
    requests
  };
};
const fetchCounts = async (engine, {
  queries,
  sourceKeys,
  groupIds,
  signal
}) => {
  const counts = {};
  const totalQueries = queries.filter(([[, what]]) => what === 'total');
  const sourceQueries = queries.filter(([[, what]]) => what !== 'total');
  const useLists = sourceQueries.length > LIST_THRESHOLD;
  const fetched = await queryAll(engine, useLists ? totalQueries : queries, {
    signal
  });
  const listed = useLists ? await countFromLists(engine, {
    sourceQueries,
    sourceKeys,
    groupIds,
    signal
  }) : {
    totals: [],
    requests: 0
  };
  (useLists ? totalQueries : queries).forEach(([key], i) => recordCount(counts, key, getTotal(fetched.responses[i])));
  if (useLists) {
    sourceQueries.forEach(([key], i) => recordCount(counts, key, listed.totals[i]));
  }
  return {
    counts,
    requests: fetched.requests + listed.requests
  };
};
const EMPTY_COVERAGE = {
  levels: [],
  orgUnits: {},
  rootIds: [],
  userOrgUnitIds: null,
  groups: {},
  assignedOrgUnitCounts: {},
  sourceIds: [],
  counts: {},
  requests: 0
};

// The counts of the previous coverage that still hold: same sources, same org unit or group level
const getReusableCounts = (previous, sourceKeys) => previous && sourceKeys.every(({
  id
}) => {
  var _previous$sourceIds;
  return (_previous$sourceIds = previous.sourceIds) === null || _previous$sourceIds === void 0 ? void 0 : _previous$sourceIds.includes(id);
}) ? previous.counts : {};

/**
 * Where data sets and programs (`sourceKeys`, getDataItemProfileSourceKeys) are assigned,
 * for an org unit selection (`orgUnits`, DV's org unit items). Gives:
 * - `levels`, and `orgUnits` by id (the selection's, the roots for a level
 *   alone, the user's), with `rootIds` and `userOrgUnitIds`;
 * - `groups`: each group's members per level;
 * - `assignedOrgUnitCounts`: each source's assigned org units per level,
 *   across the hierarchy (those given are reused);
 * - `counts`, by org unit id (and by getGroupCountsKey for groups): per level
 *   a source is assigned at, the number of org units and of those each
 *   source is assigned to, plus the ancestors each one is assigned to;
 * - `sourceIds`, and `requests`: how many requests were sent.
 * All metadata. Identical counts are sent once, in batches. Above
 * LIST_THRESHOLD source counts, one list per source of its org units (and
 * one per group of its members) answers them instead. `previous`, the
 * coverage of an earlier selection, gives what it already knows: its org
 * units, levels, groups, assigned counts, and its counts when the sources
 * are the same. `signal` cancels the requests.
 * getDataItemProfileOrgUnitCompatibility reads the result.
 */
export const fetchOrgUnitCoverage = async (engine, {
  sourceKeys = [],
  orgUnits: orgUnitItems = [],
  assignedOrgUnitCounts = {},
  previous,
  signal
}) => {
  var _previous$groups, _resolveParents;
  if (!orgUnitItems.length) {
    var _previous$levels2;
    return {
      ...EMPTY_COVERAGE,
      levels: (_previous$levels2 = previous === null || previous === void 0 ? void 0 : previous.levels) !== null && _previous$levels2 !== void 0 ? _previous$levels2 : [],
      assignedOrgUnitCounts,
      sourceIds: sourceKeys.map(({
        id
      }) => id)
    };
  }
  const fetched = await fetchOrgUnits(engine, {
    orgUnitItems,
    previous,
    signal
  });
  const {
    levels,
    orgUnits,
    rootIds,
    userOrgUnitIds
  } = fetched;
  const knownCounts = {
    ...(previous === null || previous === void 0 ? void 0 : previous.assignedOrgUnitCounts),
    ...assignedOrgUnitCounts
  };
  const knownGroups = (_previous$groups = previous === null || previous === void 0 ? void 0 : previous.groups) !== null && _previous$groups !== void 0 ? _previous$groups : {};
  const {
    groupIds
  } = getOrgUnitsToFetch(orgUnitItems);
  const [assigned, grouped] = await Promise.all([fetchAssignedOrgUnitCounts(engine, sourceKeys.filter(({
    id
  }) => !knownCounts[id]), {
    levels,
    signal
  }), fetchGroupMembersByLevel(engine, {
    groupIds: groupIds.filter(groupId => !knownGroups[groupId]),
    levels,
    signal
  })]);
  const allAssignedOrgUnitCounts = {
    ...knownCounts,
    ...assigned.assignedOrgUnitCounts
  };
  const groups = {
    ...knownGroups,
    ...grouped.groups
  };
  const context = {
    sourceKeys,
    assignedOrgUnitCounts: allAssignedOrgUnitCounts
  };
  const {
    parentItems
  } = readOrgUnitSelection(orgUnitItems);
  const reusable = getReusableCounts(previous, sourceKeys);
  const queries = [...Object.values(orgUnits).flatMap(orgUnit => getOrgUnitQueries(orgUnit, context)), ...getGroupCountQueries({
    ...context,
    groups: Object.fromEntries(groupIds.map(groupId => [groupId, groups[groupId]])),
    parents: parentItems.length ? (_resolveParents = resolveParents(parentItems, fetched)) !== null && _resolveParents !== void 0 ? _resolveParents : [] : null,
    orgUnits
  })].filter(([[countsKey]]) => !reusable[countsKey]);
  const counted = await fetchCounts(engine, {
    queries,
    sourceKeys,
    groupIds,
    signal
  });
  return {
    levels,
    orgUnits,
    rootIds,
    userOrgUnitIds,
    groups,
    assignedOrgUnitCounts: allAssignedOrgUnitCounts,
    sourceIds: sourceKeys.map(({
      id
    }) => id),
    counts: {
      ...reusable,
      ...counted.counts
    },
    requests: fetched.requests + assigned.requests + grouped.requests + counted.requests
  };
};