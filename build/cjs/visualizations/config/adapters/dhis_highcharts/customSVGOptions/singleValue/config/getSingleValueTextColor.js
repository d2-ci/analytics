"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueTextColor = getSingleValueTextColor;
var _ui = require("@dhis2/ui");
var _legends = require("../../../../../../../modules/legends.js");
var _getSingleValueLegendColor = require("./getSingleValueLegendColor.js");
var _shouldUseContrastColor = require("./shouldUseContrastColor.js");
function getSingleValueTextColor(baseColor, value, legendOptions, legendSets) {
  const legendColor = (0, _getSingleValueLegendColor.getSingleValueLegendColor)(legendOptions, legendSets, value);
  if (!legendColor) {
    return baseColor;
  }
  if (legendOptions.style === _legends.LEGEND_DISPLAY_STYLE_TEXT) {
    return legendColor;
  }
  return (0, _shouldUseContrastColor.shouldUseContrastColor)(legendColor) ? _ui.colors.white : baseColor;
}