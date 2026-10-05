"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unionOfReasons = exports.getUnknownResult = exports.getMostSevere = exports.createResult = exports.combineResults = exports.combineOperandResults = exports.combineExpressionResults = exports.combineAddedUpResults = void 0;
var _constants = require("../constants.js");
const createResult = (status, reasons = []) => ({
  status,
  reasons
});
exports.createResult = createResult;
const getUnknownResult = reason => createResult(_constants.COMPATIBILITY_UNKNOWN, [reason]);

// Every reason of the results, once each, in REASON_ORDER
exports.getUnknownResult = getUnknownResult;
const unionOfReasons = results => _constants.REASON_ORDER.filter(reason => results.some(({
  reasons
}) => reasons.includes(reason)));

// The result with the most severe status, or undefined for none
exports.unionOfReasons = unionOfReasons;
const getMostSevere = results => _constants.COMPATIBILITY_SEVERITY.map(status => results.find(result => result.status === status)).find(Boolean);

// The most severe status, with every reason; full for no results
exports.getMostSevere = getMostSevere;
const combineResults = results => {
  var _getMostSevere$status, _getMostSevere;
  return createResult((_getMostSevere$status = (_getMostSevere = getMostSevere(results)) === null || _getMostSevere === void 0 ? void 0 : _getMostSevere.status) !== null && _getMostSevere$status !== void 0 ? _getMostSevere$status : _constants.COMPATIBILITY_FULL, unionOfReasons(results));
};
exports.combineResults = combineResults;
const hasStatus = (...statuses) => ({
  status
}) => statuses.includes(status);

/**
 * Results whose values add up, such as a relative period over its fixed
 * periods, or a selection over its periods and org units: none when all are,
 * partial when some give values and others none or only some, otherwise the
 * most severe of the rest. When those without none are all unknown, so is
 * the result.
 */
const combineAddedUpResults = results => {
  var _getMostSevere$status2, _getMostSevere2;
  const reasons = unionOfReasons(results);
  const isNone = hasStatus(_constants.COMPATIBILITY_NONE);
  if (results.length && results.every(isNone)) {
    return createResult(_constants.COMPATIBILITY_NONE, reasons);
  }
  const givesValues = results.some(hasStatus(_constants.COMPATIBILITY_FULL, _constants.COMPATIBILITY_PARTIAL));
  if (results.some(hasStatus(_constants.COMPATIBILITY_PARTIAL))) {
    return createResult(_constants.COMPATIBILITY_PARTIAL, reasons);
  }
  if (results.some(isNone)) {
    return createResult(givesValues ? _constants.COMPATIBILITY_PARTIAL : _constants.COMPATIBILITY_UNKNOWN, reasons);
  }
  return createResult((_getMostSevere$status2 = (_getMostSevere2 = getMostSevere(results)) === null || _getMostSevere2 === void 0 ? void 0 : _getMostSevere2.status) !== null && _getMostSevere$status2 !== void 0 ? _getMostSevere$status2 : _constants.COMPATIBILITY_FULL, reasons);
};
exports.combineAddedUpResults = combineAddedUpResults;
const OPERAND_REASON_BY_STATUS = {
  [_constants.COMPATIBILITY_NONE]: _constants.REASON_OPERAND_EMPTY,
  [_constants.COMPATIBILITY_PARTIAL]: _constants.REASON_OPERAND_PARTIAL
};

/**
 * An expression's result, from its operands', by its missing value
 * strategy. SKIP_IF_ANY_VALUE_MISSING (the default): the most severe
 * decides. SKIP_IF_ALL_VALUES_MISSING or NEVER_SKIP: a missing value counts
 * as 0, so the operands add up (combineAddedUpResults). With more than one
 * operand, OPERAND_EMPTY and OPERAND_PARTIAL say first that one gives none
 * or only some values.
 */
const combineOperandResults = (results, missingValueStrategy = _constants.SKIP_IF_ANY_VALUE_MISSING) => {
  const needsAll = missingValueStrategy === _constants.SKIP_IF_ANY_VALUE_MISSING;
  const combined = needsAll ? combineResults(results) : combineAddedUpResults(results);
  if (results.length < 2) {
    return combined;
  }
  const operandReasons = needsAll ? [OPERAND_REASON_BY_STATUS[combined.status]] : results.map(({
    status
  }) => OPERAND_REASON_BY_STATUS[status]);
  return createResult(combined.status, unionOfReasons([{
    reasons: operandReasons.filter(Boolean)
  }, combined]));
};

/**
 * An item's result from its operands' results (`resultOf(key)`), combined
 * as its expression says (profile.expression); without one, all are needed.
 * A part with no operand (constants only) never misses: it is left out.
 */
exports.combineOperandResults = combineOperandResults;
const combineExpressionResults = (expression, operandKeys, resultOf) => {
  var _combine;
  const combine = ({
    operand,
    missingValueStrategy,
    parts
  }) => {
    if (operand) {
      return resultOf(operand);
    }
    const results = parts.map(combine).filter(Boolean);
    return results.length ? combineOperandResults(results, missingValueStrategy) : null;
  };
  return (_combine = combine(expression !== null && expression !== void 0 ? expression : {
    missingValueStrategy: _constants.SKIP_IF_ANY_VALUE_MISSING,
    parts: operandKeys.map(key => ({
      operand: key
    }))
  })) !== null && _combine !== void 0 ? _combine : createResult(_constants.COMPATIBILITY_FULL);
};
exports.combineExpressionResults = combineExpressionResults;