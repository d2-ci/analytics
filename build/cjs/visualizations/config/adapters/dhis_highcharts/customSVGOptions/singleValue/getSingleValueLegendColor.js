"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueLegendColor = getSingleValueLegendColor;
var _legends = require("../../../../../../modules/legends.js");
function getSingleValueLegendColor(legendOptions, legendSets, value) {
  const legendSet = legendOptions && legendSets[0];
  return legendSet ? (0, _legends.getColorByValueFromLegendSet)(legendSet, value) : undefined;
}