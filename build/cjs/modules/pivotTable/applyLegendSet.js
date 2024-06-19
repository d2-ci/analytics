"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyLegendSet = void 0;

var _ui = require("@dhis2/ui");

var _legends = require("../legends.js");

var _isColorBright = require("./isColorBright.js");

const getLegendSet = (engine, dxDimension) => {
  var _engine$visualization, _engine$visualization2, _engine$visualization3;

  let legendSetId;

  switch ((_engine$visualization = engine.visualization.legend) === null || _engine$visualization === void 0 ? void 0 : _engine$visualization.strategy) {
    case _legends.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM:
      if (dxDimension && dxDimension.legendSet) {
        legendSetId = dxDimension.legendSet;
      }

      break;

    case _legends.LEGEND_DISPLAY_STRATEGY_FIXED:
    default:
      legendSetId = (_engine$visualization2 = engine.visualization.legend) === null || _engine$visualization2 === void 0 ? void 0 : (_engine$visualization3 = _engine$visualization2.set) === null || _engine$visualization3 === void 0 ? void 0 : _engine$visualization3.id;
      break;
  }

  return engine.legendSets[legendSetId];
};

const buildStyleObject = (legendColor, engine) => {
  var _engine$visualization4;

  const style = {};

  switch ((_engine$visualization4 = engine.visualization.legend) === null || _engine$visualization4 === void 0 ? void 0 : _engine$visualization4.style) {
    case _legends.LEGEND_DISPLAY_STYLE_TEXT:
      style.color = legendColor;
      break;

    case _legends.LEGEND_DISPLAY_STYLE_FILL:
    default:
      style.backgroundColor = legendColor;

      if ((0, _isColorBright.isColorBright)(legendColor)) {
        style.color = _ui.colors.grey900;
      } else {
        style.color = _ui.colors.white;
      }

      break;
  }

  return style;
};

const applyLegendSet = (value, dxDimension, engine) => {
  if (isNaN(value) || !engine.legendSets) {
    return {};
  }

  const legendSet = getLegendSet(engine, dxDimension);

  if (!legendSet) {
    return {};
  }

  const legendColor = (0, _legends.getColorByValueFromLegendSet)(legendSet, value);

  if (!legendColor) {
    return {};
  }

  return buildStyleObject(legendColor, engine);
};

exports.applyLegendSet = applyLegendSet;