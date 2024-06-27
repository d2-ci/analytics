import isNumeric from 'd2-utilizr/lib/isNumeric';
import isString from 'd2-utilizr/lib/isString';
import objectClean from 'd2-utilizr/lib/objectClean';
import { FONT_STYLE_AXIS_LABELS, FONT_STYLE_REGRESSION_LINE_LABEL, FONT_STYLE_OPTION_TEXT_COLOR, FONT_STYLE_OPTION_FONT_SIZE, FONT_STYLE_OPTION_BOLD, FONT_STYLE_OPTION_ITALIC, FONT_STYLE_OPTION_TEXT_ALIGN, TEXT_ALIGN_LEFT, TEXT_ALIGN_CENTER, TEXT_ALIGN_RIGHT, mergeFontStyleWithDefault } from '../../../../modules/fontStyle.js';
import { isVerticalType } from '../../../../modules/visTypes.js';
import getFormatter from './getFormatter.js';
import { getTextAlignOption } from './getTextAlignOption.js';
const DEFAULT_MIN_VALUE = 0;
const DEFAULT_GRIDLINE_COLOR = '#F1F1F1';

const getPlotLineStyle = fontStyle => ({
  color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR] || '#000',
  width: 2,
  zIndex: 4
});

const getPlotLineLabelStyle = fontStyle => ({
  y: -7,
  style: {
    color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR],
    fontSize: "".concat(fontStyle[FONT_STYLE_OPTION_FONT_SIZE], "px"),
    fontWeight: fontStyle[FONT_STYLE_OPTION_BOLD] ? FONT_STYLE_OPTION_BOLD : 'normal',
    fontStyle: fontStyle[FONT_STYLE_OPTION_ITALIC] ? FONT_STYLE_OPTION_ITALIC : 'normal'
  }
});

const getLabelOffsetFromTextAlign = textAlign => {
  switch (textAlign) {
    case TEXT_ALIGN_LEFT:
      return 10;

    case TEXT_ALIGN_RIGHT:
      return -10;

    case TEXT_ALIGN_CENTER:
    default:
      return 0;
  }
};

const getLineLabelStyle = (textAlign, fontStyleType, isVertical) => {
  const alignKey = isVertical ? 'verticalAlign' : 'align';
  const alignValue = getTextAlignOption(textAlign, fontStyleType, isVertical);
  const offsetKey = isVertical ? 'y' : 'x';
  const offsetValue = getLabelOffsetFromTextAlign(textAlign);
  const result = {
    [alignKey]: alignValue,
    [offsetKey]: offsetValue
  };

  if (isVertical) {
    result.align = getTextAlignOption(textAlign, fontStyleType);
  }

  return result;
}; // outlierLineMin: if there are lines with smaller x or y than the data


export const getMinValue = (minValue, dataValues, outlierLineMin) => {
  if (isNumeric(minValue)) {
    return minValue;
  }

  if (isNumeric(outlierLineMin)) {
    return outlierLineMin;
  }

  return dataValues !== null && dataValues !== void 0 && dataValues.some(value => value < DEFAULT_MIN_VALUE) ? undefined : DEFAULT_MIN_VALUE;
}; // outlierLineMax: if there are lines with larger x or y than the data

export const getMaxValue = (maxValue, dataValues, outlierLineMax) => {
  if (isNumeric(maxValue)) {
    return maxValue;
  }

  if (isNumeric(outlierLineMax)) {
    return outlierLineMax;
  }

  return dataValues !== null && dataValues !== void 0 && dataValues.every(value => value < DEFAULT_MIN_VALUE) ? DEFAULT_MIN_VALUE : undefined;
};
export const getRegressionLine = function () {
  var _regressionLine$title, _regressionLine$title2;

  let regressionLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let visType = arguments.length > 1 ? arguments[1] : undefined;
  let isVertical = arguments.length > 2 ? arguments[2] : undefined;
  const fontStyle = mergeFontStyleWithDefault((_regressionLine$title = regressionLine.title) === null || _regressionLine$title === void 0 ? void 0 : _regressionLine$title.fontStyle, FONT_STYLE_REGRESSION_LINE_LABEL);
  const plotLineStyle = getPlotLineStyle(fontStyle);
  const plotLineLabelStyle = getPlotLineLabelStyle(fontStyle);
  return isNumeric(regressionLine.value) ? Object.assign({}, plotLineStyle, objectClean({
    value: regressionLine.value,
    color: regressionLine.color,
    width: regressionLine.width,
    dashStyle: regressionLine.dashStyle,
    label: isString((_regressionLine$title2 = regressionLine.title) === null || _regressionLine$title2 === void 0 ? void 0 : _regressionLine$title2.text) ? Object.assign({}, plotLineLabelStyle, {
      text: regressionLine.title.text,
      ...getLineLabelStyle(fontStyle[FONT_STYLE_OPTION_TEXT_ALIGN], FONT_STYLE_REGRESSION_LINE_LABEL, isVertical || isVerticalType(visType))
    }) : undefined
  })) : undefined;
};
export const getLabels = axis => {
  var _axis$label;

  const fontStyle = mergeFontStyleWithDefault((_axis$label = axis.label) === null || _axis$label === void 0 ? void 0 : _axis$label.fontStyle, FONT_STYLE_AXIS_LABELS);
  return {
    style: {
      color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: "".concat(fontStyle[FONT_STYLE_OPTION_FONT_SIZE], "px"),
      fontWeight: fontStyle[FONT_STYLE_OPTION_BOLD] ? FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[FONT_STYLE_OPTION_ITALIC] ? FONT_STYLE_OPTION_ITALIC : 'normal'
    },
    ...getFormatter(axis)
  };
};
export const getGridLineColor = () => DEFAULT_GRIDLINE_COLOR;