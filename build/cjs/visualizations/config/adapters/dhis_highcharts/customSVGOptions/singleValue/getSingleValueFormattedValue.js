"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDICATOR_FACTOR_100 = void 0;
exports.getSingleValueFormattedValue = getSingleValueFormattedValue;
var _renderValue = require("../../../../../../modules/renderValue.js");
var _valueTypes = require("../../../../../../modules/valueTypes.js");
const INDICATOR_FACTOR_100 = 100;
exports.INDICATOR_FACTOR_100 = INDICATOR_FACTOR_100;
function getSingleValueFormattedValue(value, layout, metaData) {
  const valueType = metaData.items[metaData.dimensions.dx[0]].valueType;
  const indicatorType = metaData.items[metaData.dimensions.dx[0]].indicatorType;
  let formattedValue = (0, _renderValue.renderValue)(value, valueType || _valueTypes.VALUE_TYPE_TEXT, {
    digitGroupSeparator: layout.digitGroupSeparator,
    skipRounding: layout.skipRounding
  });

  // only show the percentage symbol for per cent
  // for other factors, show the full text under the value
  if ((indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.factor) === INDICATOR_FACTOR_100) {
    formattedValue += '%';
  }
  return formattedValue;
}