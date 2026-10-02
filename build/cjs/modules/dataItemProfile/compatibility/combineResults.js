"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unionOfReasons = exports.getUnknownResult = exports.getMostSevere = exports.createResult = exports.combineResults = exports.combineOperandResults = void 0;
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
const OPERAND_REASON_BY_STATUS = {
  [_constants.COMPATIBILITY_NONE]: _constants.REASON_OPERAND_EMPTY,
  [_constants.COMPATIBILITY_PARTIAL]: _constants.REASON_OPERAND_PARTIAL
};

/**
 * An expression's result, from its operands': the most severe decides, and
 * with more than one operand, a none or partial result says so first with
 * OPERAND_EMPTY or OPERAND_PARTIAL.
 */
const combineOperandResults = results => {
  const combined = combineResults(results);
  const reason = results.length > 1 && OPERAND_REASON_BY_STATUS[combined.status];
  return reason ? {
    ...combined,
    reasons: [reason, ...combined.reasons]
  } : combined;
};
exports.combineOperandResults = combineOperandResults;