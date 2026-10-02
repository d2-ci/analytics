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
const fetchGroupMembersByLevel = async (engine, groupIds, levels) => {
  const queries = groupIds.flatMap(groupId => levels.map(({
    level
  }) => [[groupId, level], (0, _orgUnitQueries.countQuery)([(0, _orgUnitQueries.inGroup)(groupId), `level:eq:${level}`])]));
  const response = await (0, _orgUnitQueries.queryAll)(engine, queries);
  const groups = Object.fromEntries(groupIds.map(groupId => [groupId, {}]));
  queries.forEach(([[groupId, level]], i) => {
    const total = (0, _orgUnitQueries.getTotal)(response[`count${i}`]);
    if (total) {
      groups[groupId][level] = total;
    }
  });
  return {
    groups,
    requests: queries.length
  };
};

/* Each place to count a group in: the level its members are at, under each
 * parent org unit at or above it (or none) */
exports.fetchGroupMembersByLevel = fetchGroupMembersByLevel;
const getGroupPlaces = ({
  groups,
  parentOrgUnitIds,
  orgUnits
}) => {
  const parents = parentOrgUnitIds.length ? parentOrgUnitIds : [null];
  return Object.entries(groups).flatMap(([groupId, membersByLevel]) => Object.keys(membersByLevel).map(Number).flatMap(memberLevel => parents.filter(parentId => {
    var _orgUnits$parentId;
    return !parentId || ((_orgUnits$parentId = orgUnits[parentId]) === null || _orgUnits$parentId === void 0 ? void 0 : _orgUnits$parentId.level) <= memberLevel;
  }).map(parentId => ({
    groupId,
    memberLevel,
    parentId
  }))));
};

/* The counts of one place, as for an org unit: the org units at each level
 * under the members (the members' level included, to know whether any lie
 * under the parent), those each source is assigned to, and the ones above
 * the members each source is assigned to (above any member: the filter can't
 * keep them under the parent, and they only tell ASSIGNED_AT_HIGHER_LEVEL
 * from NOT_ASSIGNED) */
const getPlaceQueries = ({
  groupId,
  memberLevel,
  parentId
}, {
  sources,
  assignedOrgUnitCounts
}) => {
  const key = (0, _orgUnitSelection.getGroupCountsKey)(groupId, memberLevel, parentId);
  const underParent = parentId ? [`path:like:${parentId}`] : [];
  const levelsOf = ({
    id
  }) => {
    var _assignedOrgUnitCount;
    return Object.keys((_assignedOrgUnitCount = assignedOrgUnitCounts[id]) !== null && _assignedOrgUnitCount !== void 0 ? _assignedOrgUnitCount : {}).map(Number);
  };
  const atLevel = level => [...underParent, belowMembers(groupId, level - memberLevel), `level:eq:${level}`];
  const totalLevels = new Set([memberLevel, ...sources.flatMap(levelsOf).filter(level => level >= memberLevel)]);
  const getSourceQuery = (source, level) => level >= memberLevel ? [[key, source.id, level], (0, _orgUnitQueries.countQuery)([...atLevel(level), (0, _orgUnitQueries.assignedTo)(source)])] : [[key, source.id, 'ancestors'], (0, _orgUnitQueries.countQuery)([aboveMembers(groupId, memberLevel - level), `level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])];
  return [...[...totalLevels].map(level => [[key, 'total', level], (0, _orgUnitQueries.countQuery)(atLevel(level))]), ...sources.flatMap(source => levelsOf(source).map(level => getSourceQuery(source, level)))];
};

/**
 * The count queries for groups (`groups`, from fetchGroupMembersByLevel),
 * kept by getGroupCountsKey, in the shape fetchOrgUnitCoverage reads.
 */
const getGroupCountQueries = ({
  groups,
  parentOrgUnitIds,
  orgUnits,
  sources,
  assignedOrgUnitCounts
}) => getGroupPlaces({
  groups,
  parentOrgUnitIds,
  orgUnits
}).flatMap(place => getPlaceQueries(place, {
  sources,
  assignedOrgUnitCounts
}));
exports.getGroupCountQueries = getGroupCountQueries;