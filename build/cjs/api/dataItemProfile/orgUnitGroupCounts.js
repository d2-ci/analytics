"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupCountQueries = exports.fetchGroupMembersByLevel = void 0;
var _orgUnitSelection = require("../../modules/dataItemProfile/orgUnits/orgUnitSelection.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
/* Org units `depth` levels below a group's members (parent.parent…), or
 * `height` levels above them (children.children…). ancestors.* doesn't
 * filter; these work on 2.40 to 2.44 (checked by the test tool). */
const belowMembers = (groupId, depth) => 'parent.'.repeat(depth) + (0, _orgUnitQueries.inGroup)(groupId);
const aboveMembers = (groupId, height) => 'children.'.repeat(height) + (0, _orgUnitQueries.inGroup)(groupId);

/**
 * Each group's members per level: `{ groups: { [groupId]: { [level]: count } },
 * requests }`.
 */
const fetchGroupMembersByLevel = async (engine, {
  groupIds,
  levels,
  signal
}) => {
  const queries = groupIds.flatMap(groupId => levels.map(({
    level
  }) => [[groupId, level], (0, _orgUnitQueries.countQuery)([(0, _orgUnitQueries.inGroup)(groupId), `level:eq:${level}`])]));
  const {
    responses,
    requests
  } = await (0, _orgUnitQueries.queryAll)(engine, queries, {
    signal
  });
  const groups = Object.fromEntries(groupIds.map(groupId => [groupId, {}]));
  queries.forEach(([[groupId, level]], i) => {
    const total = (0, _orgUnitQueries.getTotal)(responses[i]);
    if (total) {
      groups[groupId][level] = total;
    }
  });
  return {
    groups,
    requests
  };
};
exports.fetchGroupMembersByLevel = fetchGroupMembersByLevel;
const NO_PARENT = {
  orgUnitId: null,
  minLevel: 1
};

/* Each level a group's members are at, under each parent that holds that
 * level (resolveParents), or anywhere without parents */
const getGroupLevelsUnderParents = ({
  groups,
  parents
}) => Object.entries(groups).flatMap(([groupId, membersByLevel]) => Object.keys(membersByLevel).map(Number).flatMap(memberLevel => (parents !== null && parents !== void 0 ? parents : [NO_PARENT]).filter(({
  minLevel
}) => minLevel <= memberLevel).map(({
  orgUnitId
}) => ({
  groupId,
  memberLevel,
  parentId: orgUnitId
}))));

/* The org units above the members at `level`, kept under the parent: below
 * the parent's level, the parent's own ancestors */
const getAboveMembersFilters = ({
  groupId,
  memberLevel,
  parentId
}, level, orgUnits) => {
  const parent = parentId && orgUnits[parentId];
  if (parent && level < parent.level) {
    return [`id:in:[${(0, _orgUnitQueries.getAncestorIds)(parent).join(',')}]`];
  }
  return [...(parent ? [`path:like:${parentId}`] : []), aboveMembers(groupId, memberLevel - level)];
};

/* The counts of one group level under one parent, as for an org unit: the
 * org units at each level under the members (the members' level included, to
 * know whether any lie under the parent), those each source is assigned to,
 * and the ones above the members each source is assigned to */
const getGroupLevelQueries = (groupLevel, {
  sourceKeys,
  assignedOrgUnitCounts,
  orgUnits
}) => {
  const {
    groupId,
    memberLevel,
    parentId
  } = groupLevel;
  const key = (0, _orgUnitSelection.getGroupCountsKey)(groupId, memberLevel, parentId);
  const underParent = parentId ? [`path:like:${parentId}`] : [];
  const levelsOf = ({
    id
  }) => {
    var _assignedOrgUnitCount;
    return Object.keys((_assignedOrgUnitCount = assignedOrgUnitCounts[id]) !== null && _assignedOrgUnitCount !== void 0 ? _assignedOrgUnitCount : {}).map(Number);
  };
  const atLevel = level => [...underParent, belowMembers(groupId, level - memberLevel), `level:eq:${level}`];
  const totalLevels = new Set([memberLevel, ...sourceKeys.flatMap(levelsOf).filter(level => level >= memberLevel)]);
  const getSourceQuery = (sourceKey, level) => level >= memberLevel ? [[key, sourceKey.id, level], (0, _orgUnitQueries.countQuery)([...atLevel(level), (0, _orgUnitQueries.assignedTo)(sourceKey)])] : [[key, sourceKey.id, 'ancestors'], (0, _orgUnitQueries.countQuery)([...getAboveMembersFilters(groupLevel, level, orgUnits), `level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(sourceKey)])];
  return [...[...totalLevels].map(level => [[key, 'total', level], (0, _orgUnitQueries.countQuery)(atLevel(level))]), ...sourceKeys.flatMap(sourceKey => levelsOf(sourceKey).map(level => getSourceQuery(sourceKey, level)))];
};

/**
 * The count queries for groups (`groups`, from fetchGroupMembersByLevel),
 * under the selection's parents (`parents`, from resolveParents; null for
 * none), kept by getGroupCountsKey, in the shape fetchOrgUnitCoverage reads.
 */
const getGroupCountQueries = ({
  groups,
  parents,
  orgUnits,
  sourceKeys,
  assignedOrgUnitCounts
}) => getGroupLevelsUnderParents({
  groups,
  parents
}).flatMap(groupLevel => getGroupLevelQueries(groupLevel, {
  sourceKeys,
  assignedOrgUnitCounts,
  orgUnits
}));
exports.getGroupCountQueries = getGroupCountQueries;