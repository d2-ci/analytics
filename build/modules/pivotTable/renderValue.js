"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderValue = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _pivotTableConstants = require("./pivotTableConstants");

var trimTrailingZeros = function trimTrailingZeros(stringValue) {
  return stringValue.replace(/\.?0+$/, '');
};

var defaultDecimalSeparator = '.';

var separateDigitGroups = function separateDigitGroups(stringValue, decimalSeparator) {
  var _stringValue$split = stringValue.split('.'),
      _stringValue$split2 = (0, _slicedToArray2.default)(_stringValue$split, 2),
      integer = _stringValue$split2[0],
      remainder = _stringValue$split2[1];

  var groups = [];

  for (var i = integer.length; i > 0; i -= 3) {
    groups.unshift(integer.substring(i - 3, i));
  }

  if (remainder) {
    var trimmedRemainder = trimTrailingZeros(remainder);

    if (trimmedRemainder.length) {
      groups[groups.length - 1] += decimalSeparator + remainder;
    }
  }

  return groups;
};

var getSeparator = function getSeparator(visualization) {
  switch (visualization.digitGroupSeparator) {
    case 'SPACE':
      return ' ';

    case 'COMMA':
      return ',';
    // TODO: Requires backend support, and decimalSeparator would need to be separately configurable
    // case 'PERIOD':
    //     return '.'

    case 'NONE':
    default:
      return '';
  }
};

var toFixedPrecisionString = function toFixedPrecisionString(value, skipRounding) {
  if (typeof value !== 'number') {
    // Values returned from the server should keep their string representation
    return value;
  }

  var precision = skipRounding ? 10 : value > -1 && value < 1 ? 2 : 1;
  return value.toFixed(precision);
};

var renderValue = function renderValue(value, valueType, visualization) {
  if (valueType !== _pivotTableConstants.VALUE_TYPE_NUMBER || value === undefined) {
    return value;
  }

  if (visualization.numberType === _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE || visualization.numberType === _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE) {
    return trimTrailingZeros(toFixedPrecisionString(value * 100, visualization.skipRounding)) + '%';
  }

  var stringValue = toFixedPrecisionString(value, visualization.skipRounding);
  var digitGroups = separateDigitGroups(stringValue, defaultDecimalSeparator);
  return digitGroups.join(getSeparator(visualization));
};

exports.renderValue = renderValue;