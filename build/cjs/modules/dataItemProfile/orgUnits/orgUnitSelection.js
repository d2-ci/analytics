"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveParents = exports.readOrgUnitSelection = exports.parseOrgUnitSelectionItem = exports.getRequestedLevels = exports.getOrgUnitsToFetch = exports.getGroupCountsKey = void 0;
var _index = require("../../ouIdHelper/index.js");
var _constants = require("../constants.js");
/* An org unit selection is DV's org unit items: org unit ids, LEVEL-n (a
 * number or a level id), OU_GROUP-id, and the user's org units
 * (USER_ORGUNIT, its children or grandchildren). A selection item is one of
 * them, not a data item. */

// How many levels below the user's org units each user item reaches
const USER_ITEM_DEPTHS = new Map([[_index.USER_ORG_UNIT, 0], [_index.USER_ORG_UNIT_CHILDREN, 1], [_index.USER_ORG_UNIT_GRANDCHILDREN, 2]]);
const UID = /^[a-zA-Z][a-zA-Z0-9]{10}$/;
const parseOrgUnitSelectionItem = id => {
  if (USER_ITEM_DEPTHS.has(id)) {
    return {
      id,
      type: _constants.ORG_UNIT_ITEM_TYPE_USER,
      depth: USER_ITEM_DEPTHS.get(id)
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
 * units and the user's org units are parents (districts in Bo, a group's
 * members in the user's district), not items of their own. Gives the
 * `selectionItems` to judge and the `parentItems`.
 */
const readOrgUnitSelection = (orgUnits = []) => {
  const parsed = orgUnits.map(parseOrgUnitSelectionItem);
  const isParent = isOfType(_constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT, _constants.ORG_UNIT_ITEM_TYPE_USER);
  return parsed.some(isLevelOrGroup) ? {
    selectionItems: parsed.filter(item => !isParent(item)),
    parentItems: parsed.filter(isParent)
  } : {
    selectionItems: parsed,
    parentItems: []
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
    needsRoots: ofType(_constants.ORG_UNIT_ITEM_TYPE_LEVEL).length > 0 && !ofType(_constants.ORG_UNIT_ITEM_TYPE_ORG_UNIT).length && !ofType(_constants.ORG_UNIT_ITEM_TYPE_USER).length,
    needsUserOrgUnits: ofType(_constants.ORG_UNIT_ITEM_TYPE_USER).length > 0,
    groupIds: [...new Set(ofType(_constants.ORG_UNIT_ITEM_TYPE_GROUP).map(({
      groupId
    }) => groupId))]
  };
};

/**
 * The org units a level or a group is kept under, each with the shallowest
 * level it holds (`minLevel`): an org unit at its own level and below; the
 * user's org units, below their level plus the item's depth (the children of
 * the user's org units hold levels from one below theirs). Without parents,
 * the roots. A parent given twice, or within another that holds its levels,
 * counts once. Null when one isn't loaded.
 */
exports.getOrgUnitsToFetch = getOrgUnitsToFetch;
const resolveParents = (parentItems, coverage) => {
  const {
    orgUnits,
    rootIds = [],
    userOrgUnitIds
  } = coverage;
  if (!parentItems.length) {
    return rootIds.map(id => ({
      orgUnitId: id,
      minLevel: 1
    }));
  }
  const parents = parentItems.flatMap(({
    type,
    id,
    depth
  }) => {
    var _orgUnits$id;
    return type === _constants.ORG_UNIT_ITEM_TYPE_USER ? (userOrgUnitIds !== null && userOrgUnitIds !== void 0 ? userOrgUnitIds : [undefined]).map(userId => {
      var _orgUnits$userId$leve, _orgUnits$userId;
      return {
        orgUnitId: userId,
        minLevel: ((_orgUnits$userId$leve = (_orgUnits$userId = orgUnits[userId]) === null || _orgUnits$userId === void 0 ? void 0 : _orgUnits$userId.level) !== null && _orgUnits$userId$leve !== void 0 ? _orgUnits$userId$leve : 0) + depth
      };
    }) : [{
      orgUnitId: id,
      minLevel: (_orgUnits$id = orgUnits[id]) === null || _orgUnits$id === void 0 ? void 0 : _orgUnits$id.level
    }];
  });
  if (!parents.every(({
    orgUnitId
  }) => orgUnits[orgUnitId])) {
    return null;
  }

  // A parent given twice counts once, from the shallowest level either holds
  const distinct = [...parents.reduce((byId, parent) => {
    const known = byId.get(parent.orgUnitId);
    return known && known.minLevel <= parent.minLevel ? byId : byId.set(parent.orgUnitId, parent);
  }, new Map()).values()];
  // Analytics takes the org units under all parents once each
  const isWithin = (parent, other) => other !== parent && orgUnits[parent.orgUnitId].path.includes(`/${other.orgUnitId}/`) && other.minLevel <= parent.minLevel;
  return distinct.filter(parent => !distinct.some(other => isWithin(parent, other)));
};

// Where the counts of a group's members at one level, under one parent, are kept
exports.resolveParents = resolveParents;
const getGroupCountsKey = (groupId, level, parentOrgUnitId) => `${groupId}:${level}:${parentOrgUnitId !== null && parentOrgUnitId !== void 0 ? parentOrgUnitId : ''}`;
exports.getGroupCountsKey = getGroupCountsKey;
const getLevelNumber = (level, levels) => {
  var _levels$find$level, _levels$find;
  return typeof level === 'number' ? level : (_levels$find$level = (_levels$find = levels.find(({
    id
  }) => id === level)) === null || _levels$find === void 0 ? void 0 : _levels$find.level) !== null && _levels$find$level !== void 0 ? _levels$find$level : null;
};

/* A group's members at each level they are at, under each parent that holds
 * that level (or anywhere, without parents) */
const getGroupRequestedLevels = (groupId, parents, groups) => {
  const membersByLevel = groups === null || groups === void 0 ? void 0 : groups[groupId];
  if (!membersByLevel) {
    return null;
  }
  return Object.keys(membersByLevel).map(Number).filter(level => membersByLevel[level] > 0).flatMap(level => (parents !== null && parents !== void 0 ? parents : [{
    orgUnitId: null,
    minLevel: 1
  }]).filter(({
    minLevel
  }) => minLevel <= level).map(({
    orgUnitId
  }) => ({
    countsKey: getGroupCountsKey(groupId, level, orgUnitId),
    level,
    groupId
  })));
};

/**
 * The levels analytics aggregates to for a selection item, each with where
 * its counts are kept in the coverage (fetchOrgUnitCoverage): an org unit at
 * its own level; LEVEL-n at level n under each parent that holds it (or under
 * the roots); the user's org units at their level plus the item's depth; a
 * group at each level its members are at, under each parent. An empty list
 * when no parent holds the level. Null when it can't be told: an unknown id
 * or level, or an org unit or group that isn't loaded.
 */
const getRequestedLevels = (selectionItem, parentItems, coverage) => {
  const {
    orgUnits,
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
        const parents = resolveParents(parentItems, coverage);
        if (!level || !parents) {
          return null;
        }

        // A level deeper than the hierarchy holds no org unit
        if (levels.length && level > levels[levels.length - 1].level) {
          return [];
        }
        return parents.filter(({
          minLevel
        }) => minLevel <= level).map(({
          orgUnitId
        }) => ({
          countsKey: orgUnitId,
          level
        }));
      }
    case _constants.ORG_UNIT_ITEM_TYPE_USER:
      {
        const requested = (userOrgUnitIds !== null && userOrgUnitIds !== void 0 ? userOrgUnitIds : []).map(id => atOwnLevel(id, selectionItem.depth));
        return userOrgUnitIds && !requested.includes(undefined) ? requested : null;
      }
    case _constants.ORG_UNIT_ITEM_TYPE_GROUP:
      {
        const parents = parentItems.length ? resolveParents(parentItems, coverage) : undefined;
        return parents === null ? null : getGroupRequestedLevels(selectionItem.groupId, parents, coverage.groups);
      }
    default:
      return null;
  }
};
exports.getRequestedLevels = getRequestedLevels;