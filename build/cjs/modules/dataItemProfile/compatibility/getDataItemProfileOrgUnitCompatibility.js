"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItemProfileOrgUnitCompatibility = void 0;
var _constants = require("../constants.js");
var _orgUnitSelection = require("../orgUnits/orgUnitSelection.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
var _orgUnitSourceResults = require("./orgUnitSourceResults.js");
const addUpAssignments = results => {
  const assignments = results.map(({
    assignment
  }) => assignment).filter(Boolean);
  const sum = key => assignments.reduce((total, item) => total + item[key], 0);
  return assignments.length ? {
    assigned: sum('assigned'),
    total: sum('total'),
    level: Math.max(...assignments.map(({
      level
    }) => level))
  } : null;
};

// The item at one requested level: each operand over its sources, the most severe decides
const getResultAtLevel = (operands, counts) => {
  var _getMostSevere;
  const results = operands.map(operand => (0, _orgUnitSourceResults.getOperandResult)(operand, counts));
  return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.combineOperandResults)(results), (_getMostSevere = (0, _combineResults.getMostSevere)(results)) === null || _getMostSevere === void 0 ? void 0 : _getMostSevere.assignment);
};
const isEmptyGroup = (selectionItem, coverage) => {
  var _coverage$groups;
  return selectionItem.type === _constants.ORG_UNIT_ITEM_TYPE_GROUP && ((_coverage$groups = coverage.groups) === null || _coverage$groups === void 0 ? void 0 : _coverage$groups[selectionItem.groupId]) && !Object.values(coverage.groups[selectionItem.groupId]).some(members => members > 0);
};
const getSelectionItemCompatibility = (selectionItem, {
  operands,
  parentOrgUnitIds,
  coverage
}) => {
  if (isEmptyGroup(selectionItem, coverage)) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_EMPTY_GROUP]));
  }
  const requestedLevels = (0, _orgUnitSelection.getRequestedLevels)(selectionItem, parentOrgUnitIds, coverage);
  if (!requestedLevels) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.getUnknownResult)(_constants.REASON_UNKNOWN_ORG_UNIT));
  }
  const results = requestedLevels
  // Parents a group has no member under add nothing
  .filter(({
    groupId,
    countsKey,
    level
  }) => {
    var _coverage$counts$coun;
    return !groupId || ((_coverage$counts$coun = coverage.counts[countsKey]) === null || _coverage$counts$coun === void 0 || (_coverage$counts$coun = _coverage$counts$coun.totals) === null || _coverage$counts$coun === void 0 ? void 0 : _coverage$counts$coun[level]) > 0;
  }).map(({
    countsKey,
    level
  }) => getResultAtLevel(operands, {
    ...coverage.counts[countsKey],
    assignedOrgUnitCounts: coverage.assignedOrgUnitCounts,
    level
  }));
  if (!results.length) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_NOT_ASSIGNED]));
  }
  return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)((0, _combineResults.getMostSevere)(results).status, (0, _combineResults.unionOfReasons)(results)), addUpAssignments(results));
};

/**
 * Whether the org units of a selection (DV's org unit items) suit a data
 * item, from where its data sets and programs are assigned (`coverage`, from
 * fetchOrgUnitCoverage): one result per selection item, `{ id, status,
 * reasons, assignment }`, with the same statuses as for periods.
 *
 * Assigned only at higher levels: none, ASSIGNED_AT_HIGHER_LEVEL. Not
 * assigned there: none, NOT_ASSIGNED. Stopped by the element's aggregation
 * levels: none, STOPPED_BY_AGGREGATION_LEVEL. Assigned to only some org units
 * at the deepest level: full, since the others collect nothing, with
 * PARTLY_ASSIGNED and the counts (`assignment`). An element in several data
 * sets is full where one is assigned, and partial when another's values can't
 * reach the org unit. A group is judged at each level its members are at; a
 * group without members is refused by analytics (EMPTY_GROUP). An item with
 * no source (an expression of constants) has nothing limiting where it has
 * values: full.
 */
const getDataItemProfileOrgUnitCompatibility = (profile, {
  orgUnits = [],
  coverage
} = {}) => {
  const {
    selectionItems,
    parentOrgUnitIds
  } = (0, _orgUnitSelection.readOrgUnitSelection)(orgUnits);
  const judge = getResult => selectionItems.map(selectionItem => ({
    id: selectionItem.id,
    ...getResult(selectionItem)
  }));
  if (profile.unknown) {
    return judge(() => (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.getUnknownResult)(_constants.REASON_PROFILE_UNKNOWN)));
  }
  if (!coverage) {
    return judge(() => (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.getUnknownResult)(_constants.REASON_UNKNOWN_ORG_UNIT)));
  }
  const operands = (0, _sources.getItemOperands)(profile);
  return judge(selectionItem => getSelectionItemCompatibility(selectionItem, {
    operands,
    parentOrgUnitIds,
    coverage
  }));
};
exports.getDataItemProfileOrgUnitCompatibility = getDataItemProfileOrgUnitCompatibility;