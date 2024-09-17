"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueCustomSVGOptions = getSingleValueCustomSVGOptions;
var _getSingleValueFormattedValue = require("./getSingleValueFormattedValue.js");
var _getSingleValueSubtext = require("./getSingleValueSubtext.js");
function getSingleValueCustomSVGOptions(_ref) {
  let {
    layout,
    extraOptions,
    metaData,
    series
  } = _ref;
  const {
    dashboard,
    icon
  } = extraOptions;
  const value = series[0];
  return {
    value,
    formattedValue: (0, _getSingleValueFormattedValue.getSingleValueFormattedValue)(value, layout, metaData),
    icon,
    dashboard,
    subText: (0, _getSingleValueSubtext.getSingleValueSubtext)(metaData)
  };
}