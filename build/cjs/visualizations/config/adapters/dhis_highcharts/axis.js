"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegressionLine = exports.getMinValue = exports.getMaxValue = exports.getLabels = exports.getGridLineColor = void 0;
var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _fontStyle = require("../../../../modules/fontStyle.js");
var _visTypes = require("../../../../modules/visTypes.js");
var _getFormatter = _interopRequireDefault(require("./getFormatter.js"));
var _getTextAlignOption = require("./getTextAlignOption.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DEFAULT_MIN_VALUE = 0;
const DEFAULT_GRIDLINE_COLOR = '#F1F1F1';
const getPlotLineStyle = fontStyle => ({
  color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] || '#000',
  width: 2,
  zIndex: 4
});
const getPlotLineLabelStyle = fontStyle => ({
  y: -7,
  style: {
    color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
    fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
    fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
    fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
  }
});
const getLabelOffsetFromTextAlign = textAlign => {
  switch (textAlign) {
    case _fontStyle.TEXT_ALIGN_LEFT:
      return 10;
    case _fontStyle.TEXT_ALIGN_RIGHT:
      return -10;
    case _fontStyle.TEXT_ALIGN_CENTER:
    default:
      return 0;
  }
};
const getLineLabelStyle = (textAlign, fontStyleType, isVertical) => {
  const alignKey = isVertical ? 'verticalAlign' : 'align';
  const alignValue = (0, _getTextAlignOption.getTextAlignOption)(textAlign, fontStyleType, isVertical);
  const offsetKey = isVertical ? 'y' : 'x';
  const offsetValue = getLabelOffsetFromTextAlign(textAlign);
  const result = {
    [alignKey]: alignValue,
    [offsetKey]: offsetValue
  };
  if (isVertical) {
    result.align = (0, _getTextAlignOption.getTextAlignOption)(textAlign, fontStyleType);
  }
  return result;
};

// outlierLineMin: if there are lines with smaller x or y than the data
const getMinValue = (minValue, dataValues, outlierLineMin) => {
  if ((0, _isNumeric.default)(minValue)) {
    return minValue;
  }
  if ((0, _isNumeric.default)(outlierLineMin)) {
    return outlierLineMin;
  }
  return dataValues !== null && dataValues !== void 0 && dataValues.some(value => value < DEFAULT_MIN_VALUE) ? undefined : DEFAULT_MIN_VALUE;
};

// outlierLineMax: if there are lines with larger x or y than the data
exports.getMinValue = getMinValue;
const getMaxValue = (maxValue, dataValues, outlierLineMax) => {
  if ((0, _isNumeric.default)(maxValue)) {
    return maxValue;
  }
  if ((0, _isNumeric.default)(outlierLineMax)) {
    return outlierLineMax;
  }
  return dataValues !== null && dataValues !== void 0 && dataValues.every(value => value < DEFAULT_MIN_VALUE) ? DEFAULT_MIN_VALUE : undefined;
};
exports.getMaxValue = getMaxValue;
const getRegressionLine = function () {
  var _regressionLine$title, _regressionLine$title2;
  let regressionLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let visType = arguments.length > 1 ? arguments[1] : undefined;
  let isVertical = arguments.length > 2 ? arguments[2] : undefined;
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)((_regressionLine$title = regressionLine.title) === null || _regressionLine$title === void 0 ? void 0 : _regressionLine$title.fontStyle, _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL);
  const plotLineStyle = getPlotLineStyle(fontStyle);
  const plotLineLabelStyle = getPlotLineLabelStyle(fontStyle);
  return (0, _isNumeric.default)(regressionLine.value) ? Object.assign({}, plotLineStyle, (0, _objectClean.default)({
    value: regressionLine.value,
    color: regressionLine.color,
    width: regressionLine.width,
    dashStyle: regressionLine.dashStyle,
    label: (0, _isString.default)((_regressionLine$title2 = regressionLine.title) === null || _regressionLine$title2 === void 0 ? void 0 : _regressionLine$title2.text) ? Object.assign({}, plotLineLabelStyle, {
      text: regressionLine.title.text,
      ...getLineLabelStyle(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL, isVertical || (0, _visTypes.isVerticalType)(visType))
    }) : undefined
  })) : undefined;
};
exports.getRegressionLine = getRegressionLine;
const getLabels = axis => {
  var _axis$label;
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)((_axis$label = axis.label) === null || _axis$label === void 0 ? void 0 : _axis$label.fontStyle, _fontStyle.FONT_STYLE_AXIS_LABELS);
  return {
    style: {
      color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
    },
    ...(0, _getFormatter.default)(axis)
  };
};
exports.getLabels = getLabels;
const getGridLineColor = () => DEFAULT_GRIDLINE_COLOR;
exports.getGridLineColor = getGridLineColor;