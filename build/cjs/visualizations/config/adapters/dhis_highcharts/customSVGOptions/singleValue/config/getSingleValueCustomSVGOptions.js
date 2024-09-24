"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueCustomSVGOptions = getSingleValueCustomSVGOptions;
var _ui = require("@dhis2/ui");
var _getSingleValueFormattedValue = require("./getSingleValueFormattedValue.js");
var _getSingleValueSubtext = require("./getSingleValueSubtext.js");
var _getSingleValueTextColor = require("./getSingleValueTextColor.js");
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
    fontColor: (0, _getSingleValueTextColor.getSingleValueTextColor)(_ui.colors.grey900, value, layout.legend, extraOptions.legendSets),
    formattedValue: (0, _getSingleValueFormattedValue.getSingleValueFormattedValue)(value, layout, metaData),
    icon,
    dashboard,
    subText: (0, _getSingleValueSubtext.getSingleValueSubtext)(metaData)
  };
}