"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyLegendSet = void 0;

var _isColorBright = require("./isColorBright");

var _uiCore = require("@dhis2/ui-core");

var _legends = require("../legends");

var getLegendSet = function getLegendSet(engine, dxDimension) {
  var legendSetId;

  switch (engine.visualization.legendDisplayStrategy) {
    case _legends.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM:
      if (dxDimension && dxDimension.legendSet) {
        legendSetId = dxDimension.legendSet;
      }

      break;

    case _legends.LEGEND_DISPLAY_STRATEGY_FIXED:
    default:
      legendSetId = engine.visualization.legendSet ? engine.visualization.legendSet.id : undefined;
      break;
  }

  return engine.legendSets[legendSetId];
};

var buildStyleObject = function buildStyleObject(legendColor, engine) {
  var style = {};

  switch (engine.visualization.legendDisplayStyle) {
    case _legends.LEGEND_DISPLAY_STYLE_TEXT:
      style.color = legendColor;
      break;

    case _legends.LEGEND_DISPLAY_STYLE_FILL:
    default:
      style.backgroundColor = legendColor;

      if ((0, _isColorBright.isColorBright)(legendColor)) {
        style.color = _uiCore.colors.grey900;
      } else {
        style.color = _uiCore.colors.white;
      }

      break;
  }

  return style;
};

var applyLegendSet = function applyLegendSet(value, dxDimension, engine) {
  if (isNaN(value) || !engine.legendSets) {
    return {};
  }

  var legendSet = getLegendSet(engine, dxDimension);

  if (!legendSet) {
    return {};
  }

  var legendColor = (0, _legends.getColorByValueFromLegendSet)(legendSet, value);

  if (!legendColor) {
    return {};
  }

  return buildStyleObject(legendColor, engine);
};

exports.applyLegendSet = applyLegendSet;