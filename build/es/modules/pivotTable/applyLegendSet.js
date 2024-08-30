import { colors } from '@dhis2/ui';
import { getColorByValueFromLegendSet, LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM, LEGEND_DISPLAY_STRATEGY_FIXED, LEGEND_DISPLAY_STYLE_TEXT, LEGEND_DISPLAY_STYLE_FILL } from '../legends.js';
import { isColorBright } from './isColorBright.js';

const getLegendSet = (engine, dxDimension) => {
  var _engine$visualization, _engine$visualization2, _engine$visualization3;

  let legendSetId;

  switch ((_engine$visualization = engine.visualization.legend) === null || _engine$visualization === void 0 ? void 0 : _engine$visualization.strategy) {
    case LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM:
      if (dxDimension && dxDimension.legendSet) {
        legendSetId = dxDimension.legendSet;
      }

      break;

    case LEGEND_DISPLAY_STRATEGY_FIXED:
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
    case LEGEND_DISPLAY_STYLE_TEXT:
      style.color = legendColor;
      break;

    case LEGEND_DISPLAY_STYLE_FILL:
    default:
      style.backgroundColor = legendColor;

      if (isColorBright(legendColor)) {
        style.color = colors.grey900;
      } else {
        style.color = colors.white;
      }

      break;
  }

  return style;
};

export const applyLegendSet = (value, dxDimension, engine) => {
  if (isNaN(value) || !engine.legendSets) {
    return {};
  }

  const legendSet = getLegendSet(engine, dxDimension);

  if (!legendSet) {
    return {};
  }

  const legendColor = getColorByValueFromLegendSet(legendSet, value);

  if (!legendColor) {
    return {};
  }

  return buildStyleObject(legendColor, engine);
};