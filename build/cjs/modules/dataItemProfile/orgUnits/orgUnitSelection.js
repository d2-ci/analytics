"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readOrgUnitSelection = exports.parseOrgUnitSelectionItem = exports.getRequestedLevels = exports.getOrgUnitsToFetch = exports.getGroupCountsKey = void 0;
var _index = require("../../ouIdHelper/index.js");
var _constants = require("../constants.js");
/* An org unit selection is DV's org unit items: org unit ids, LEVEL-n (a
 * number or a level id), OU_GROUP-id, and the user's org units
 * (USER_ORGUNIT, its children or grandchildren). A selection item is one of
 * them, not a data item. */

// How many levels below the user's org units each user item reaches
const USER_ITEM_DEPTHS = {
  [_index.USER_ORG_UNIT]: 0,
  [_index.USER_ORG_UNIT_CHILDREN]: 1,
  [_index.USER_ORG_UNIT_GRANDCHILDREN]: 2
};
const UID = /^[a-zA-Z][a-zA-Z0-9]{10}$/;
const parseOrgUnitSelectionItem = id => {
  if (id in USER_ITEM_DEPTHS) {
    return {
      id,
      type: _constants.ORG_UNIT_ITEM_TYPE_USER,
      depth: USER_ITEM_DEPTHS[id]
    };
  }
  if (_index.ouIdHelper.hasLevelPrefix(id)) {
    const level = _index.ouIdHelper.removePrefix(id);
    return {
      id,
      type: _constants.ORG_UNIT_ITEM_TYPE_LEVEL,
      level: /^\d+$/.test(level) ? Number(level) : level
    };
  }
  if (_index.ouIdHelper.hasGroupPrefix(id)) {
    return {
      id,
      type: _constants.ORG_UNIT_ITEM_TYPE_GROUP,
      groupId: _index.ouIdHelper.removePrefix(id)
    };
  }
  return {
    id,
    type: UID.test(id) ? _constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT : _constants.ORG_UNIT_ITEM_TYPE_UNKNOWN
  };
};
exports.parseOrgUnitSelectionItem = parseOrgUnitSelectionItem;
const isOfType = (...types) => {
  const typeSet = new Set(types);
  return ({
    type
  }) => typeSet.has(type);
};
const isLevelOrGroup = isOfType(_constants.ORG_UNIT_ITEM_TYPE_LEVEL, _constants.ORG_UNIT_ITEM_TYPE_GROUP);

/**
 * A selection as analytics reads it: with a level or a group in it, the org
 * units are parents (districts in Bo, a group's members in Bo), not items of
 * their own. Gives the `selectionItems` to judge and the `parentOrgUnitIds`.
 */
const readOrgUnitSelection = (orgUnits = []) => {
  const parsed = orgUnits.map(parseOrgUnitSelectionItem);
  const hasParents = parsed.some(isLevelOrGroup);
  const isOrgUnit = isOfType(_constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT);
  return {
    selectionItems: hasParents ? parsed.filter(item => !isOrgUnit(item)) : parsed,
    parentOrgUnitIds: hasParents ? parsed.filter(isOrgUnit).map(({
      id
    }) => id) : []
  };
};

/**
 * What a selection needs fetched: its org units, the roots (a level with no
 * parent), the user's org units, and its groups.
 */
exports.readOrgUnitSelection = readOrgUnitSelection;
const getOrgUnitsToFetch = (orgUnits = []) => {
  const parsed = orgUnits.map(parseOrgUnitSelectionItem);
  const ofType = type => parsed.filter(isOfType(type));
  return {
    orgUnitIds: ofType(_constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT).map(({
      id
    }) => id),
    needsRoots: ofType(_constants.ORG_UNIT_ITEM_TYPE_LEVEL).length > 0 && !ofType(_constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT).length,
    needsUserOrgUnits: ofType(_constants.ORG_UNIT_ITEM_TYPE_USER).length > 0,
    groupIds: [...new Set(ofType(_constants.ORG_UNIT_ITEM_TYPE_GROUP).map(({
      groupId
    }) => groupId))]
  };
};

// Where the counts of a group's members at one level, under one parent, are kept
exports.getOrgUnitsToFetch = getOrgUnitsToFetch;
const getGroupCountsKey = (groupId, level, parentOrgUnitId) => `${groupId}:${level}:${parentOrgUnitId !== null && parentOrgUnitId !== void 0 ? parentOrgUnitId : ''}`;
exports.getGroupCountsKey = getGroupCountsKey;
const getLevelNumber = (level, levels) => {
  var _levels$find$level, _levels$find;
  return typeof level === 'number' ? level : (_levels$find$level = (_levels$find = levels.find(({
    id
  }) => id === level)) === null || _levels$find === void 0 ? void 0 : _levels$find.level) !== null && _levels$find$level !== void 0 ? _levels$find$level : null;
};

/* A group's members at each level they are at, under each parent at or
 * above them: analytics keeps the members inside the parents */
const getGroupRequestedLevels = (groupId, parentOrgUnitIds, {
  orgUnits,
  groups
}) => {
  const membersByLevel = groups === null || groups === void 0 ? void 0 : groups[groupId];
  const parents = parentOrgUnitIds.length ? parentOrgUnitIds : [null];
  if (!membersByLevel || parentOrgUnitIds.some(id => !orgUnits[id])) {
    return null;
  }
  return Object.keys(membersByLevel).map(Number).filter(level => membersByLevel[level] > 0).flatMap(level => parents.filter(parentId => !parentId || orgUnits[parentId].level <= level).map(parentId => ({
    countsKey: getGroupCountsKey(groupId, level, parentId),
    level,
    groupId
  })));
};

/**
 * The levels analytics aggregates to for a selection item, each with where
 * its counts are kept in the coverage (fetchOrgUnitCoverage): an org unit at
 * its own level; LEVEL-n at level n under each parent (or under the roots);
 * the user's org units at their level plus the item's depth; a group at each
 * level its members are at, under each parent. Null when it can't be told:
 * an unknown id or level, or an org unit or group that isn't loaded.
 */
const getRequestedLevels = (selectionItem, parentOrgUnitIds, coverage) => {
  const {
    orgUnits,
    rootIds = [],
    userOrgUnitIds,
    levels = []
  } = coverage;
  const atOwnLevel = (orgUnitId, depth = 0) => orgUnits[orgUnitId] && {
    countsKey: orgUnitId,
    level: orgUnits[orgUnitId].level + depth
  };
  switch (selectionItem.type) {
    case _constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT:
      {
        const requested = atOwnLevel(selectionItem.id);
        return requested ? [requested] : null;
      }
    case _constants.ORG_UNIT_ITEM_TYPE_LEVEL:
      {
        const level = getLevelNumber(selectionItem.level, levels);
        const parents = parentOrgUnitIds.length ? parentOrgUnitIds : rootIds;
        if (!level || parents.some(id => !orgUnits[id])) {
          return null;
        }
        return parents.filter(id => orgUnits[id].level <= level).map(id => ({
          countsKey: id,
          level
        }));
      }
    case _constants.ORG_UNIT_ITEM_TYPE_USER:
      {
        const requested = (userOrgUnitIds !== null && userOrgUnitIds !== void 0 ? userOrgUnitIds : []).map(id => atOwnLevel(id, selectionItem.depth));
        return userOrgUnitIds && !requested.includes(undefined) ? requested : null;
      }
    case _constants.ORG_UNIT_ITEM_TYPE_GROUP:
      return getGroupRequestedLevels(selectionItem.groupId, parentOrgUnitIds, coverage);
    default:
      return null;
  }
};
exports.getRequestedLevels = getRequestedLevels;