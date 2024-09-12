"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueBackgroundColor = getSingleValueBackgroundColor;
var _legends = require("../../../../../../modules/legends.js");
var _getSingleValueLegendColor = require("./getSingleValueLegendColor.js");
function getSingleValueBackgroundColor(legendOptions, legendSets, value) {
  const legendColor = (0, _getSingleValueLegendColor.getSingleValueLegendColor)(legendOptions, legendSets, value);
  return legendColor && legendOptions.style === _legends.LEGEND_DISPLAY_STYLE_FILL ? legendColor : 'transparent';
}