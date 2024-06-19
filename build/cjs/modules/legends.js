"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLegendSetByDisplayStrategy = exports.getLegendByValueFromLegendSet = exports.getColorByValueFromLegendSet = exports.LEGEND_DISPLAY_STYLE_TEXT = exports.LEGEND_DISPLAY_STYLE_FILL = exports.LEGEND_DISPLAY_STRATEGY_FIXED = exports.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = void 0;
const LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = exports.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM = 'BY_DATA_ITEM';
const LEGEND_DISPLAY_STRATEGY_FIXED = exports.LEGEND_DISPLAY_STRATEGY_FIXED = 'FIXED';
const LEGEND_DISPLAY_STYLE_FILL = exports.LEGEND_DISPLAY_STYLE_FILL = 'FILL';
const LEGEND_DISPLAY_STYLE_TEXT = exports.LEGEND_DISPLAY_STYLE_TEXT = 'TEXT';
const getLegendByValueFromLegendSet = (legendSet, value) => {
  var _legendSet$legends;
  return Number.isInteger(parseInt(value)) ? legendSet === null || legendSet === void 0 ? void 0 : (_legendSet$legends = legendSet.legends) === null || _legendSet$legends === void 0 ? void 0 : _legendSet$legends.find(legend => value >= legend.startValue && value < legend.endValue // TODO: Confirm inclusive/exclusive bounds
  ) : null;
};
exports.getLegendByValueFromLegendSet = getLegendByValueFromLegendSet;
const getColorByValueFromLegendSet = (legendSet, value) => {
  const legend = getLegendByValueFromLegendSet(legendSet, value);
  return legend && legend.color;
};
exports.getColorByValueFromLegendSet = getColorByValueFromLegendSet;
const getLegendSetByDisplayStrategy = _ref => {
  let {
    displayStrategy,
    legendSets,
    legendSetId
  } = _ref;
  if (displayStrategy === LEGEND_DISPLAY_STRATEGY_FIXED && legendSets.length) {
    return legendSets[0];
  } else if (displayStrategy === LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM) {
    return legendSets.find(legendSet => legendSet.id === legendSetId);
  } else {
    return null;
  }
};
exports.getLegendSetByDisplayStrategy = getLegendSetByDisplayStrategy;