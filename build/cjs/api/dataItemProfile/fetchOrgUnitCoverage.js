"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOrgUnitCoverage = void 0;
var _orgUnitSelection = require("../../modules/dataItemProfile/orgUnits/orgUnitSelection.js");
var _assignedOrgUnitCounts = require("./assignedOrgUnitCounts.js");
var _coverageCounts = require("./coverageCounts.js");
var _orgUnitGroupCounts = require("./orgUnitGroupCounts.js");
var _orgUnitListCounts = require("./orgUnitListCounts.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
var _selectionOrgUnits = require("./selectionOrgUnits.js");
/* The counts of one org unit: per level a source is assigned at (at or
 * below the org unit), how many org units under it the source is assigned
 * to, and how many of its ancestors when the source is assigned higher
 * somewhere; with `withTotals`, how many org units each of those levels has
 * under it. */
const getOrgUnitQueries = (orgUnit, {
  sourceKeys,
  assignedOrgUnitCounts,
  withTotals
}) => {
  const under = `path:like:${orgUnit.id}`;
  const ancestorIds = (0, _orgUnitQueries.getAncestorIds)(orgUnit);
  const assignedLevelsOf = ({
    id
  }) => {
    var _assignedOrgUnitCount;
    return Object.keys((_assignedOrgUnitCount = assignedOrgUnitCounts[id]) !== null && _assignedOrgUnitCount !== void 0 ? _assignedOrgUnitCount : {}).map(Number);
  };
  const levelsUnder = source => assignedLevelsOf(source).filter(level => level >= orgUnit.level);
  const isAssignedHigher = source => assignedLevelsOf(source).some(level => level < orgUnit.level);
  const getAncestorsQuery = source => [[orgUnit.id, source.id, 'ancestors'], (0, _orgUnitQueries.countQuery)([`id:in:[${ancestorIds.join(',')}]`, (0, _orgUnitQueries.assignedTo)(source)])];
  return [...(withTotals ? [...new Set(sourceKeys.flatMap(levelsUnder))].map(level => [[orgUnit.id, 'total', level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`])]) : []), ...sourceKeys.flatMap(source => levelsUnder(source).map(level => [[orgUnit.id, source.id, level], (0, _orgUnitQueries.countQuery)([under, `level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])])), ...sourceKeys.filter(source => ancestorIds.length && isAssignedHigher(source)).map(getAncestorsQuery)];
};

/* Under the only root, a source's org units are those across the hierarchy:
 * the counts already fetched answer it, with no ancestors */
const getSoleRootCounts = (countedOrgUnits, {
  rootIds,
  sourceKeys,
  assignedOrgUnitCounts
}) => {
  const counts = {};
  const isCountedRoot = countedOrgUnits.some(({
    id
  }) => id === rootIds[0]);
  if (rootIds.length === 1 && isCountedRoot) {
    sourceKeys.forEach(({
      id
    }) => {
      var _assignedOrgUnitCount2;
      return Object.entries((_assignedOrgUnitCount2 = assignedOrgUnitCounts[id]) !== null && _assignedOrgUnitCount2 !== void 0 ? _assignedOrgUnitCount2 : {}).forEach(([level, count]) => (0, _coverageCounts.recordCount)(counts, [rootIds[0], id, Number(level)], count));
    });
  }
  return counts;
};

// Above this many source counts, lists of each source's org units are cheaper
const LIST_THRESHOLD = 100;

/* Counts the queries; above LIST_THRESHOLD source counts, from lists of each
 * source's org units, kept in `lists` for the next selection. Totals are
 * always server counts. */
const fetchCounts = async (engine, {
  queries,
  sourceKeys,
  groupIds,
  lists,
  signal
}) => {
  const counts = {};
  const totalQueries = queries.filter(([[, what]]) => what === 'total');
  const sourceQueries = queries.filter(([[, what]]) => what !== 'total');
  const useLists = sourceQueries.length > LIST_THRESHOLD;
  const [fetched, listed] = await Promise.all([(0, _orgUnitQueries.queryAll)(engine, useLists ? totalQueries : queries, {
    signal
  }), useLists ? (0, _orgUnitListCounts.countFromLists)(engine, {
    sourceQueries,
    sourceKeys,
    groupIds,
    lists,
    signal
  }) : {
    totals: [],
    lists,
    requests: 0
  }]);
  (useLists ? totalQueries : queries).forEach(([key], i) => (0, _coverageCounts.recordCount)(counts, key, (0, _orgUnitQueries.getTotal)(fetched.responses[i])));
  if (useLists) {
    sourceQueries.forEach(([key], i) => (0, _coverageCounts.recordCount)(counts, key, listed.totals[i]));
  }
  return {
    counts,
    lists: listed.lists,
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
  counts: {},
  lists: {},
  requests: 0
};

// The org units whose counts a selection reads: its own, the user's, and the roots for a level alone
const getCountedOrgUnits = (orgUnitItems, {
  orgUnits,
  rootIds,
  userOrgUnitIds
}) => {
  const {
    orgUnitIds,
    needsRoots,
    needsUserOrgUnits
  } = (0, _orgUnitSelection.getOrgUnitsToFetch)(orgUnitItems);
  const ids = new Set([...orgUnitIds, ...(needsUserOrgUnits ? userOrgUnitIds !== null && userOrgUnitIds !== void 0 ? userOrgUnitIds : [] : []), ...(needsRoots ? rootIds : [])]);
  return [...ids].map(id => orgUnits[id]).filter(Boolean);
};

/**
 * Where data sets and programs (`sourceKeys`, getDataItemProfileSourceKeys)
 * are assigned, for an org unit selection (`orgUnits`, DV's org unit items).
 * Gives:
 * - `levels`, and `orgUnits` by id (the selection's, the roots, the user's),
 *   with `rootIds` and `userOrgUnitIds`;
 * - `groups`: each group's members per level;
 * - `assignedOrgUnitCounts`: each source's assigned org units per level,
 *   across the hierarchy (those given are reused);
 * - `counts`, by org unit id (and by getGroupCountsKey for groups): per level
 *   a source is assigned at, how many org units under it the source is
 *   assigned to, and how many of its ancestors; with `withAssignmentTotals`,
 *   also how many org units each level has under it (for "x of y" and
 *   PARTLY_ASSIGNED); for a group, its members under each parent;
 * - `lists`: the lists of org units counted from, for large selections;
 * - `requests`: how many requests were sent.
 * All metadata. Identical counts are sent once, in batches. Above
 * LIST_THRESHOLD source counts, one list per source of its org units (and
 * one per group of its members) answers them instead. `previous`, the
 * coverage of an earlier selection, gives what it already counted: its org
 * units, levels, groups, lists and counts, source by source. `signal`
 * cancels the requests. getDataItemProfileOrgUnitCompatibility reads the
 * result.
 */
const fetchOrgUnitCoverage = async (engine, {
  sourceKeys = [],
  orgUnits: orgUnitItems = [],
  assignedOrgUnitCounts = {},
  withAssignmentTotals = false,
  previous,
  signal
}) => {
  var _previous$groups, _resolveParents, _counted$lists;
  if (!orgUnitItems.length) {
    return {
      ...EMPTY_COVERAGE,
      ...previous,
      assignedOrgUnitCounts: {
        ...(previous === null || previous === void 0 ? void 0 : previous.assignedOrgUnitCounts),
        ...assignedOrgUnitCounts
      },
      requests: 0
    };
  }
  const fetched = await (0, _selectionOrgUnits.fetchSelectionOrgUnits)(engine, {
    orgUnitItems,
    previous,
    signal
  });
  const {
    levels,
    orgUnits,
    rootIds
  } = fetched;
  const knownCounts = {
    ...(previous === null || previous === void 0 ? void 0 : previous.assignedOrgUnitCounts),
    ...assignedOrgUnitCounts
  };
  const knownGroups = (_previous$groups = previous === null || previous === void 0 ? void 0 : previous.groups) !== null && _previous$groups !== void 0 ? _previous$groups : {};
  const {
    groupIds
  } = (0, _orgUnitSelection.getOrgUnitsToFetch)(orgUnitItems);
  const [assigned, grouped] = await Promise.all([(0, _assignedOrgUnitCounts.fetchAssignedOrgUnitCounts)(engine, sourceKeys.filter(({
    id
  }) => !knownCounts[id]), {
    levels,
    signal
  }), (0, _orgUnitGroupCounts.fetchGroupMembersByLevel)(engine, {
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
    assignedOrgUnitCounts: allAssignedOrgUnitCounts,
    withTotals: withAssignmentTotals
  };
  const countedOrgUnits = getCountedOrgUnits(orgUnitItems, fetched);
  const known = (0, _coverageCounts.mergeCounts)(previous === null || previous === void 0 ? void 0 : previous.counts, getSoleRootCounts(countedOrgUnits, {
    ...context,
    rootIds
  }));
  const {
    parentItems
  } = (0, _orgUnitSelection.readOrgUnitSelection)(orgUnitItems);
  const queries = [...countedOrgUnits.flatMap(orgUnit => getOrgUnitQueries(orgUnit, context)), ...(0, _orgUnitGroupCounts.getGroupCountQueries)({
    ...context,
    groups: Object.fromEntries(groupIds.map(groupId => [groupId, groups[groupId]])),
    parents: parentItems.length ? (_resolveParents = (0, _orgUnitSelection.resolveParents)(parentItems, fetched)) !== null && _resolveParents !== void 0 ? _resolveParents : [] : null,
    orgUnits
  })].filter(([key]) => !(0, _coverageCounts.isCounted)(known, key));
  const counted = await fetchCounts(engine, {
    queries,
    sourceKeys,
    groupIds,
    lists: previous === null || previous === void 0 ? void 0 : previous.lists,
    signal
  });
  return {
    levels,
    orgUnits,
    rootIds,
    userOrgUnitIds: fetched.userOrgUnitIds,
    groups,
    assignedOrgUnitCounts: allAssignedOrgUnitCounts,
    counts: (0, _coverageCounts.mergeCounts)(known, counted.counts),
    lists: (_counted$lists = counted.lists) !== null && _counted$lists !== void 0 ? _counted$lists : {},
    requests: fetched.requests + assigned.requests + grouped.requests + counted.requests
  };
};
exports.fetchOrgUnitCoverage = fetchOrgUnitCoverage;