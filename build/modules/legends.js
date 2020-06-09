"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorByValueFromLegendSet = exports.LEGEND_DISPLAY_STYLE_TEXT = exports.LEGEND_DISPLAY_STYLE_FILL = exports.LEGEND_DISPLAY_STRATEGY_FIXED = exports.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = void 0;
var LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = 'BY_DATA_ITEM';
exports.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM;
var LEGEND_DISPLAY_STRATEGY_FIXED = 'FIXED';
exports.LEGEND_DISPLAY_STRATEGY_FIXED = LEGEND_DISPLAY_STRATEGY_FIXED;
var LEGEND_DISPLAY_STYLE_FILL = 'FILL';
exports.LEGEND_DISPLAY_STYLE_FILL = LEGEND_DISPLAY_STYLE_FILL;
var LEGEND_DISPLAY_STYLE_TEXT = 'TEXT';
exports.LEGEND_DISPLAY_STYLE_TEXT = LEGEND_DISPLAY_STYLE_TEXT;

var getColorByValueFromLegendSet = function getColorByValueFromLegendSet(legendSet, value) {
  var legend = legendSet.legends.find(function (legend) {
    return value >= legend.startValue && value < legend.endValue;
  } // TODO: Confirm inclusive/exclusive bounds
  );
  return legend && legend.color;
};

exports.getColorByValueFromLegendSet = getColorByValueFromLegendSet;