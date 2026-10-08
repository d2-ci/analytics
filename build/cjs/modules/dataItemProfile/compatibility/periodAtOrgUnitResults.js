"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriodAtOrgUnitResults = void 0;
var _constants = require("../constants.js");
var _orgUnitSelection = require("../orgUnits/orgUnitSelection.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
var _getDataItemProfileOrgUnitCompatibility = require("./getDataItemProfileOrgUnitCompatibility.js");
var _getDataItemProfilePeriodCompatibility = require("./getDataItemProfilePeriodCompatibility.js");
var _orgUnitSourceResults = require("./orgUnitSourceResults.js");
var _periodSourceResults = require("./periodSourceResults.js");
/* A period at an org unit: only the sources assigned there count, each
 * judged for the period. A monthly data set at district A and a weekly one
 * at B give nothing by week at A, and every value by week at B, which the
 * period and the org unit judged apart can't tell. */

const NOT_ASSIGNED = (0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_NOT_ASSIGNED]);

/* One source of an operand: not assigned there, it doesn't apply; its values
 * can't reach the level asked, they are left out; otherwise, the period
 * decides */
const getSourceResult = (orgUnitResult, periodResult) => {
  if ((0, _orgUnitSourceResults.isNotAssigned)(orgUnitResult)) {
    return null;
  }
  if (orgUnitResult.status !== _constants.COMPATIBILITY_FULL) {
    return (0, _combineResults.createResult)(orgUnitResult.status, orgUnitResult.reasons);
  }
  return (0, _combineResults.createResult)(periodResult.status, (0, _combineResults.unionOfReasons)([orgUnitResult, periodResult]));
};

// One operand, for one period query, at one requested level: its sources there add up
const getOperandResult = (operand, {
  query,
  counts
}) => {
  const periodResults = (0, _periodSourceResults.getOperandSourceResults)(operand, query);
  const results = (0, _orgUnitSourceResults.getOperandSourceResults)(operand, counts).map((orgUnitResult, i) => getSourceResult(orgUnitResult, periodResults[i])).filter(Boolean);
  return results.length ? (0, _combineResults.combineAddedUpResults)(results) : NOT_ASSIGNED;
};
const getItemResult = ({
  expression,
  operands
}, at) => {
  const results = new Map(operands.map(operand => [operand.key, getOperandResult(operand, at)]));
  return (0, _combineResults.combineExpressionResults)(expression, [...results.keys()], key => results.get(key));
};

// Under several parents, or at several member levels, the org units where it applies add up
const combineLevels = results => {
  const applying = results.filter(result => !(0, _orgUnitSourceResults.isNotAssigned)(result));
  return applying.length ? (0, _combineResults.combineAddedUpResults)(applying) : NOT_ASSIGNED;
};
const judgeSelectionItem = (item, {
  queries,
  selectionItem,
  parentItems,
  coverage
}) => {
  if (!coverage) {
    return (0, _combineResults.getUnknownResult)(_constants.REASON_UNKNOWN_ORG_UNIT);
  }
  const {
    result,
    levels
  } = (0, _getDataItemProfileOrgUnitCompatibility.getSelectionItemLevels)(selectionItem, {
    parentItems,
    coverage
  });
  if (result) {
    return (0, _combineResults.createResult)(result.status, result.reasons);
  }
  return (0, _getDataItemProfilePeriodCompatibility.judgePeriodQueries)(queries, query => combineLevels(levels.map(counts => getItemResult(item, {
    query,
    counts
  }))));
};

/**
 * Each period of a selection at each of its org unit selection items,
 * judged together (`{ periodId, orgUnitId, status, reasons }`), with the
 * options of getDataItemProfileCompatibility. Where a data set isn't
 * assigned, its period type doesn't count.
 */
const getPeriodAtOrgUnitResults = (profile, {
  periods = [],
  orgUnits = []
} = {}, {
  orgUnitCoverage: coverage,
  ...options
} = {}) => {
  const selectionYears = (0, _getDataItemProfilePeriodCompatibility.getSelectionYears)(periods, options);
  const {
    selectionItems,
    parentItems
  } = (0, _orgUnitSelection.readOrgUnitSelection)(orgUnits);
  const item = {
    expression: profile.expression,
    operands: (0, _sources.getItemOperands)(profile)
  };
  return periods.flatMap(period => {
    const {
      queries,
      unknownReason
    } = (0, _getDataItemProfilePeriodCompatibility.getPeriodQueries)(profile, period, {
      ...options,
      selectionYears
    });
    return selectionItems.map(selectionItem => ({
      periodId: period,
      orgUnitId: selectionItem.id,
      ...(unknownReason ? (0, _combineResults.getUnknownResult)(unknownReason) : judgeSelectionItem(item, {
        queries,
        selectionItem,
        parentItems,
        coverage
      }))
    }));
  });
};
exports.getPeriodAtOrgUnitResults = getPeriodAtOrgUnitResults;