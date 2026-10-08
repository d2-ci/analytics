"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseExpressionOperands = exports.getCategoryOptionComboId = void 0;
var _dataSets = require("../dataSets.js");
var _dataTypes = require("../dataTypes.js");
var _constants = require("./constants.js");
/* The full indicator and expression syntax (the library's parseExpression in
 * modules/expressions.js reads only the #{} of calculations) */
const OPERAND_TYPE_BY_PREFIX = {
  '#': _dataTypes.DIMENSION_TYPE_DATA_ELEMENT,
  R: _dataSets.REPORTING_RATE,
  N: _dataTypes.DIMENSION_TYPE_INDICATOR,
  I: _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR,
  D: _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT,
  A: _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE,
  C: _constants.OPERAND_TYPE_CONSTANT,
  OUG: _constants.OPERAND_TYPE_ORG_UNIT_GROUP
};

// An operand: `#{de.coc}`, `R{ds.REPORTING_RATE}`, `[days]`… (prefixes are 1 to 3 letters)
const OPERAND_REGEX = /(#|[A-Z]{1,3})\{([^}]*)\}|\[days\]/g;
// One function chained after it: `.periodOffset(-1)`, `.aggregationType(LAST)`
const FUNCTION_REGEX = /\.([a-zA-Z]+)\(([^)]*)\)/y;

// The functions chained at `position`, and where they end
const readFunctions = (expression, position) => {
  const functions = [];
  FUNCTION_REGEX.lastIndex = position;
  for (let match = FUNCTION_REGEX.exec(expression); match; match = FUNCTION_REGEX.exec(expression)) {
    functions.push({
      name: match[1],
      arg: match[2].trim()
    });
    position = FUNCTION_REGEX.lastIndex;
  }
  return {
    functions,
    end: position
  };
};

/* The object to fetch for the operand: the data element of `#{de.coc.aoc}`,
 * the data set of `R{ds.REPORTING_RATE}`, the whole content otherwise */
const getOperandObjectId = (type, content) => type === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT || type === _dataSets.REPORTING_RATE ? content.split('.')[0] : content;

// One operand found by OPERAND_REGEX: its type, the object behind it, its token and functions
const toOperand = (expression, match) => {
  var _OPERAND_TYPE_BY_PREF, _functions$find;
  const [operandToken, prefix, content] = match;
  const {
    functions,
    end
  } = readFunctions(expression, match.index + operandToken.length);
  const token = expression.slice(match.index, end);
  if (prefix === undefined) {
    return {
      type: _constants.OPERAND_TYPE_DAYS,
      token,
      functions
    };
  }
  const type = (_OPERAND_TYPE_BY_PREF = OPERAND_TYPE_BY_PREFIX[prefix]) !== null && _OPERAND_TYPE_BY_PREF !== void 0 ? _OPERAND_TYPE_BY_PREF : _constants.OPERAND_TYPE_UNKNOWN;
  // A disaggregation (de.coc, de.coc.aoc); a wildcard (de.*) is the whole element
  const isDisaggregation = type === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT && content.includes('.') && !content.includes('*');
  const aggregationType = (_functions$find = functions.find(({
    name
  }) => name === 'aggregationType')) === null || _functions$find === void 0 ? void 0 : _functions$find.arg;
  return {
    type,
    id: getOperandObjectId(type, content),
    ...(isDisaggregation && {
      operand: content
    }),
    token,
    functions,
    ...(aggregationType && {
      aggregationType
    })
  };
};

/**
 * Every operand of an indicator or expression dimension item expression, in
 * order: its type (a dimension item type, or a constant, org unit group,
 * [days] or unknown operand), the id of the object behind it, and the
 * functions chained after it.
 */
const parseExpressionOperands = expression => [...(expression !== null && expression !== void 0 ? expression : '').matchAll(OPERAND_REGEX)].map(match => toOperand(expression, match));

/**
 * The category option combo a disaggregation asks for (`de.coc`,
 * `de.coc.aoc`), or undefined for a whole element or a wildcard (`de.*`).
 */
exports.parseExpressionOperands = parseExpressionOperands;
const getCategoryOptionComboId = operand => {
  const id = operand === null || operand === void 0 ? void 0 : operand.split('.')[1];
  return id && id !== '*' ? id : undefined;
};
exports.getCategoryOptionComboId = getCategoryOptionComboId;