"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOperandReason = exports.REASON_PROFILE_UNKNOWN = exports.REASON_OPERAND_PARTIAL = exports.REASON_OPERAND_EMPTY = exports.OPERAND_REASONS = exports.COMPATIBILITY_UNKNOWN = exports.COMPATIBILITY_PARTIAL = exports.COMPATIBILITY_NONE = exports.COMPATIBILITY_FULL = void 0;
const COMPATIBILITY_FULL = exports.COMPATIBILITY_FULL = 'full';
const COMPATIBILITY_PARTIAL = exports.COMPATIBILITY_PARTIAL = 'partial';
const COMPATIBILITY_NONE = exports.COMPATIBILITY_NONE = 'none';
const COMPATIBILITY_UNKNOWN = exports.COMPATIBILITY_UNKNOWN = 'unknown';

// The profile is unknown: see its reasons
const REASON_PROFILE_UNKNOWN = exports.REASON_PROFILE_UNKNOWN = 'PROFILE_UNKNOWN';

/* An expression whose operand gives no value has none (a ratio without its
 * denominator); one whose operand leaves values out is computed from
 * incomplete data, and can be off either way */
const REASON_OPERAND_EMPTY = exports.REASON_OPERAND_EMPTY = 'OPERAND_EMPTY';
const REASON_OPERAND_PARTIAL = exports.REASON_OPERAND_PARTIAL = 'OPERAND_PARTIAL';
const OPERAND_REASONS = exports.OPERAND_REASONS = [REASON_OPERAND_EMPTY, REASON_OPERAND_PARTIAL];

/**
 * An expression's result, from its most severe operand's: with more than one
 * operand, a none or partial result says so with OPERAND_EMPTY or
 * OPERAND_PARTIAL, first.
 */
const withOperandReason = (result, operandCount) => {
  const reason = operandCount > 1 && {
    [COMPATIBILITY_NONE]: REASON_OPERAND_EMPTY,
    [COMPATIBILITY_PARTIAL]: REASON_OPERAND_PARTIAL
  }[result.status];
  return reason ? {
    ...result,
    reasons: [reason, ...result.reasons]
  } : result;
};
exports.withOperandReason = withOperandReason;