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
/* The org units of all requested levels add up: only those that are
 * assigned count, and the assignment adds up over all of them (an org unit
 * with nothing assigned adds its org units to the total) */
const addUpAssignments = judged => {
  const assignments = judged.map(({
    result
  }) => result.assignment).filter(Boolean);
  if (!assignments.length) {
    return null;
  }
  const level = Math.max(...assignments.map(assignment => assignment.level));
  const assigned = assignments.reduce((sum, item) => sum + item.assigned, 0);
  const total = judged.reduce((sum, {
    result,
    counts
  }) => {
    var _ref, _result$assignment$to, _result$assignment, _counts$totals;
    return sum + ((_ref = (_result$assignment$to = (_result$assignment = result.assignment) === null || _result$assignment === void 0 ? void 0 : _result$assignment.total) !== null && _result$assignment$to !== void 0 ? _result$assignment$to : (_counts$totals = counts.totals) === null || _counts$totals === void 0 ? void 0 : _counts$totals[level]) !== null && _ref !== void 0 ? _ref : 0);
  }, 0);
  return {
    assigned,
    total,
    level
  };
};

/* Where an operand has no value, the values of the others are dropped: they
 * are left out, unlike values of an org unit nothing is assigned to */
const DROPPED_BY_OPERAND_REASONS = new Set([_constants.REASON_OPERAND_EMPTY, _constants.REASON_OPERAND_PARTIAL]);
const leavesValuesOut = ({
  status,
  reasons
}) => status === _constants.COMPATIBILITY_PARTIAL || reasons.some(reason => _constants.LEFT_OUT_REASONS.has(reason) || DROPPED_BY_OPERAND_REASONS.has(reason));

/* A level under several parents, or a group with members at several levels:
 * the values of all add up. Where nothing is assigned, nothing is left out,
 * only fewer org units are assigned (PARTLY_ASSIGNED); where values can't
 * reach the level asked, or an operand has none, they are left out
 * (partial). */
const combineRequestedLevels = judged => {
  const results = judged.map(({
    result
  }) => result);
  const reasons = (0, _combineResults.unionOfReasons)(results);
  if (results.every(({
    status
  }) => status === _constants.COMPATIBILITY_NONE)) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, reasons));
  }
  const assignment = addUpAssignments(judged);
  const status = results.some(leavesValuesOut) ? _constants.COMPATIBILITY_PARTIAL : (0, _combineResults.getMostSevere)(results.filter(({
    status
  }) => status !== _constants.COMPATIBILITY_NONE)).status;
  const isPartlyAssigned = assignment && assignment.assigned < assignment.total;
  return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(status, (0, _combineResults.unionOfReasons)([{
    reasons: reasons.filter(reason => reason !== _constants.REASON_NOT_ASSIGNED && reason !== _constants.REASON_PARTLY_ASSIGNED)
  }, {
    reasons: isPartlyAssigned ? [_constants.REASON_PARTLY_ASSIGNED] : []
  }])), assignment);
};

/* The item at one requested level: each operand over its sources, combined
 * as its expression says; the assignment of the most severe operand */
const getResultAtLevel = ({
  expression,
  operands
}, counts) => {
  var _getMostSevere;
  const results = new Map(operands.map(operand => [operand.key, (0, _orgUnitSourceResults.getOperandResult)(operand, counts)]));
  return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.combineExpressionResults)(expression, [...results.keys()], key => results.get(key)), (_getMostSevere = (0, _combineResults.getMostSevere)([...results.values()])) === null || _getMostSevere === void 0 ? void 0 : _getMostSevere.assignment);
};
const isEmptyGroup = (selectionItem, coverage) => {
  var _coverage$groups;
  return selectionItem.type === _constants.ORG_UNIT_ITEM_TYPE_GROUP && ((_coverage$groups = coverage.groups) === null || _coverage$groups === void 0 ? void 0 : _coverage$groups[selectionItem.groupId]) && !Object.values(coverage.groups[selectionItem.groupId]).some(members => members > 0);
};
const getSelectionItemCompatibility = (selectionItem, {
  item,
  parentItems,
  coverage
}) => {
  if (isEmptyGroup(selectionItem, coverage)) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_EMPTY_GROUP]));
  }
  const requestedLevels = (0, _orgUnitSelection.getRequestedLevels)(selectionItem, parentItems, coverage);
  if (!requestedLevels) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.getUnknownResult)(_constants.REASON_UNKNOWN_ORG_UNIT));
  }
  const judged = requestedLevels
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
  }) => {
    const counts = {
      ...coverage.counts[countsKey],
      level
    };
    return {
      counts,
      result: getResultAtLevel(item, counts)
    };
  });
  if (!judged.length) {
    return (0, _orgUnitSourceResults.withAssignment)((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_NO_ORG_UNITS_AT_LEVEL]));
  }
  return judged.length === 1 ? judged[0].result : combineRequestedLevels(judged);
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
 * at the deepest level: full, since nothing is left out, with
 * PARTLY_ASSIGNED and the counts (`assignment`). An element in several data
 * sets is full where one is assigned, and partial when another's values can't
 * reach the org unit. A group is judged at each level its members are at; a
 * group without members is refused by analytics (EMPTY_GROUP). An item with
 * no source (an expression of constants) has nothing limiting where it has
 * values: full.
 */
const getDataItemProfileOrgUnitCompatibility = (profile, {
  orgUnits = []
} = {}, {
  orgUnitCoverage: coverage
} = {}) => {
  const {
    selectionItems,
    parentItems
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
  const item = {
    expression: profile.expression,
    operands: (0, _sources.getItemOperands)(profile)
  };
  return judge(selectionItem => getSelectionItemCompatibility(selectionItem, {
    item,
    parentItems,
    coverage
  }));
};
exports.getDataItemProfileOrgUnitCompatibility = getDataItemProfileOrgUnitCompatibility;