"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateDigitGroups = exports.renderValue = void 0;
var _pivotTableConstants = require("./pivotTable/pivotTableConstants.js");
var _valueTypes = require("./valueTypes.js");
const trimTrailingZeros = stringValue => stringValue.replace(/\.?0+$/, '');
const separateDigitGroups = function (stringValue) {
  let decimalSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  const isNegative = stringValue[0] === '-';
  const [integer, remainder] = stringValue.replace(/^-/, '').split('.');
  const groups = [];
  for (let i = integer.length; i > 0; i -= 3) {
    groups.unshift(integer.substring(i - 3, i));
  }
  if (isNegative) {
    groups[0] = '-' + groups[0];
  }
  if (remainder) {
    const trimmedRemainder = trimTrailingZeros(remainder);
    if (trimmedRemainder.length) {
      groups[groups.length - 1] += decimalSeparator + remainder;
    }
  }
  return groups;
};
exports.separateDigitGroups = separateDigitGroups;
const getSeparator = visualization => {
  switch (visualization.digitGroupSeparator) {
    case 'SPACE':
      return ' ';
    case 'COMMA':
      return ',';
    case 'NONE':
    default:
      return '';
  }
};
const toFixedPrecisionString = (value, skipRounding) => {
  if (typeof value !== 'number') {
    // Values returned from the server should keep their string representation
    return value;
  }
  const precision = skipRounding ? 10 : value > -1 && value < 1 ? 2 : 1;
  return value.toFixed(precision);
};
const renderValue = (value, valueType, visualization) => {
  if (!((0, _valueTypes.isNumericValueType)(valueType) || (0, _valueTypes.isBooleanValueType)(valueType)) || value === undefined) {
    return String(value).replace(/[^\S\n]+/, ' ');
  }
  if (visualization.numberType === _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE || visualization.numberType === _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE) {
    const stringValue = trimTrailingZeros(toFixedPrecisionString(value * 100, visualization.skipRounding));
    return separateDigitGroups(stringValue).join(getSeparator(visualization)) + '%';
  } else {
    const stringValue = toFixedPrecisionString(value, visualization.skipRounding);
    return separateDigitGroups(stringValue).join(getSeparator(visualization));
  }
};
exports.renderValue = renderValue;