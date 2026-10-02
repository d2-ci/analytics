"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpressionItems = exports.PERIOD_LIMITING_OPERANDS = exports.OPERAND_UNKNOWN = exports.OPERAND_REPORTING_RATE = exports.OPERAND_PROGRAM_INDICATOR = exports.OPERAND_PROGRAM_DATA_ELEMENT = exports.OPERAND_PROGRAM_ATTRIBUTE = exports.OPERAND_ORG_UNIT_GROUP = exports.OPERAND_INDICATOR = exports.OPERAND_DAYS = exports.OPERAND_DATA_ELEMENT = exports.OPERAND_CONSTANT = void 0;
const OPERAND_DATA_ELEMENT = exports.OPERAND_DATA_ELEMENT = 'DATA_ELEMENT';
const OPERAND_REPORTING_RATE = exports.OPERAND_REPORTING_RATE = 'REPORTING_RATE';
const OPERAND_INDICATOR = exports.OPERAND_INDICATOR = 'INDICATOR';
const OPERAND_PROGRAM_INDICATOR = exports.OPERAND_PROGRAM_INDICATOR = 'PROGRAM_INDICATOR';
const OPERAND_PROGRAM_DATA_ELEMENT = exports.OPERAND_PROGRAM_DATA_ELEMENT = 'PROGRAM_DATA_ELEMENT';
const OPERAND_PROGRAM_ATTRIBUTE = exports.OPERAND_PROGRAM_ATTRIBUTE = 'PROGRAM_ATTRIBUTE';
const OPERAND_CONSTANT = exports.OPERAND_CONSTANT = 'CONSTANT';
const OPERAND_ORG_UNIT_GROUP = exports.OPERAND_ORG_UNIT_GROUP = 'ORG_UNIT_GROUP';
const OPERAND_DAYS = exports.OPERAND_DAYS = 'DAYS';
const OPERAND_UNKNOWN = exports.OPERAND_UNKNOWN = 'UNKNOWN';
const OPERAND_BY_PREFIX = {
  '#': OPERAND_DATA_ELEMENT,
  R: OPERAND_REPORTING_RATE,
  N: OPERAND_INDICATOR,
  I: OPERAND_PROGRAM_INDICATOR,
  D: OPERAND_PROGRAM_DATA_ELEMENT,
  A: OPERAND_PROGRAM_ATTRIBUTE,
  C: OPERAND_CONSTANT,
  OUG: OPERAND_ORG_UNIT_GROUP
};

// Operands whose value depends on data collected in periods
const PERIOD_LIMITING_OPERANDS = exports.PERIOD_LIMITING_OPERANDS = [OPERAND_DATA_ELEMENT, OPERAND_REPORTING_RATE, OPERAND_INDICATOR];

/* An operand (`#{de.coc}`, `R{ds.REPORTING_RATE}`, `[days]`…) and the
 * functions chained after it (`.periodOffset(-1)`, `.aggregationType(LAST)`) */
const OPERAND_REGEX = /(?:(#|[A-Z]+)\{([^}]*)\}|\[days\])((?:\.[a-zA-Z]+\([^)]*\))*)/g;
const FUNCTION_REGEX = /\.([a-zA-Z]+)\(([^)]*)\)/g;
const parseFunctions = chain => [...chain.matchAll(FUNCTION_REGEX)].map(([, name, arg]) => ({
  name,
  arg: arg.trim()
}));

// The id of the object behind the operand: `de` in `#{de.coc.aoc}`, `ds` in `R{ds.METRIC}`
const getObjectId = (type, content) => [OPERAND_DATA_ELEMENT, OPERAND_REPORTING_RATE].includes(type) ? content.split('.')[0] : content;
const toOperand = ([token, prefix, content, chain]) => {
  var _functions$find, _OPERAND_BY_PREFIX$pr;
  const functions = parseFunctions(chain);
  const aggregationType = (_functions$find = functions.find(({
    name
  }) => name === 'aggregationType')) === null || _functions$find === void 0 ? void 0 : _functions$find.arg;
  if (prefix === undefined) {
    return {
      type: OPERAND_DAYS,
      token,
      functions
    };
  }
  const type = (_OPERAND_BY_PREFIX$pr = OPERAND_BY_PREFIX[prefix]) !== null && _OPERAND_BY_PREFIX$pr !== void 0 ? _OPERAND_BY_PREFIX$pr : OPERAND_UNKNOWN;
  // A disaggregation (de.coc, de.coc.aoc); a wildcard (de.*) is the whole element
  const isDisaggregation = type === OPERAND_DATA_ELEMENT && content.includes('.') && !content.includes('*');
  return {
    type,
    id: getObjectId(type, content),
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
 * order, with the functions chained after it.
 */
const getExpressionItems = (expression = '') => [...(expression !== null && expression !== void 0 ? expression : '').matchAll(OPERAND_REGEX)].map(toOperand);
exports.getExpressionItems = getExpressionItems;