"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateExpression = exports.parseExpressionToArray = exports.parseExpression = exports.parseArrayToExpression = exports.getOperators = exports.getItemIdsFromExpression = exports.VALID_EXPRESSION = exports.INVALID_EXPRESSION = exports.EXPRESSION_TYPE_OPERATOR = exports.EXPRESSION_TYPE_NUMBER = exports.EXPRESSION_TYPE_DATA = void 0;
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const EXPRESSION_TYPE_NUMBER = 'EXPRESSION_TYPE_NUMBER';
exports.EXPRESSION_TYPE_NUMBER = EXPRESSION_TYPE_NUMBER;
const EXPRESSION_TYPE_OPERATOR = 'EXPRESSION_TYPE_OPERATOR';
exports.EXPRESSION_TYPE_OPERATOR = EXPRESSION_TYPE_OPERATOR;
const EXPRESSION_TYPE_DATA = 'EXPRESSION_TYPE_DATA';
exports.EXPRESSION_TYPE_DATA = EXPRESSION_TYPE_DATA;
const VALID_EXPRESSION = 'OK';
exports.VALID_EXPRESSION = VALID_EXPRESSION;
const INVALID_EXPRESSION = 'ERROR';
exports.INVALID_EXPRESSION = INVALID_EXPRESSION;
const getOperators = () => [{
  value: '+',
  label: '+',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: '-',
  label: '-',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: '*',
  label: '×',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: '/',
  label: '/',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: '(',
  label: '(',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: ')',
  label: ')',
  type: EXPRESSION_TYPE_OPERATOR
}, {
  value: '',
  label: _index.default.t('Number'),
  type: EXPRESSION_TYPE_NUMBER
}];
exports.getOperators = getOperators;
const parseExpression = input => {
  const regex = /(#{[a-zA-Z0-9#.]+}|[+\-*/()])|(\d+(\.\d+)?)/g;
  return input.match(regex) || [];
};
exports.parseExpression = parseExpression;
const parseExpressionToArray = function () {
  let expression = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return parseExpression(expression).map(value => {
    if (value.startsWith('#{') && value.endsWith('}')) {
      var _metadata$find;
      const id = value.slice(2, -1);
      const label = ((_metadata$find = metadata.find(item => item.id === id)) === null || _metadata$find === void 0 ? void 0 : _metadata$find.name) || id;
      return {
        value,
        label,
        type: EXPRESSION_TYPE_DATA
      };
    }
    if (isNaN(value)) {
      return {
        value,
        label: getOperators().find(op => op.value === value).label,
        type: EXPRESSION_TYPE_OPERATOR
      };
    }
    return {
      value,
      label: value,
      type: EXPRESSION_TYPE_NUMBER
    };
  }) || [];
};
exports.parseExpressionToArray = parseExpressionToArray;
const parseArrayToExpression = function () {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return input.map(item => item.value).join('');
};
exports.parseArrayToExpression = parseArrayToExpression;
const validateExpression = expression => {
  let result;
  const leftParenthesisCount = expression.split('(').length - 1;
  const rightParenthesisCount = expression.split(')').length - 1;
  if (!expression) {
    // empty formula
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Formula is empty. Add items to the formula from the lists on the left.')
    };
    // TODO: reimplement this but allow negative values, e.g. 10 / -5
    // } else if (/[-+/*]{2,}/.test(expression)) {
    //     // two math operators next to each other
    //     result = {
    //         status: INVALID_EXPRESSION,
    //         message: i18n.t('Consecutive math operators'),
    //     }
  } else if (/}#/.test(expression)) {
    // two data elements next to each other
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Consecutive data elements')
    };
  } else if (/^[+\-*/]|[+\-*/]$/.test(expression)) {
    // starting or ending with a math operator
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Starts or ends with a math operator')
    };
  } else if (/\(\)/.test(expression)) {
    // contains an empty set of parentheses
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Empty parentheses')
    };
  } else if (leftParenthesisCount > rightParenthesisCount) {
    // ( but no )
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Missing right parenthesis )')
    };
  } else if (rightParenthesisCount > leftParenthesisCount) {
    // ) but no (
    result = {
      status: INVALID_EXPRESSION,
      message: _index.default.t('Missing left parenthesis (')
    };
  }
  return result;
};
exports.validateExpression = validateExpression;
const getItemIdsFromExpression = function () {
  let expression = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const regex = /#{([a-zA-Z0-9#]+.*?)}/g;
  const matches = expression.match(regex);
  return matches ? matches.map(match => match.slice(2, -1)) : [];
};
exports.getItemIdsFromExpression = getItemIdsFromExpression;