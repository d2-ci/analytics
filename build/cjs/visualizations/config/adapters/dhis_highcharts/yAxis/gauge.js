"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _arrayClean = _interopRequireDefault(require("d2-utilizr/lib/arrayClean"));

var _isNumber = _interopRequireDefault(require("d2-utilizr/lib/isNumber"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _index = _interopRequireDefault(require("../../../../../locales/index.js"));

var _fontStyle = require("../../../../../modules/fontStyle.js");

var _legends = require("../../../../../modules/legends.js");

var _visTypes = require("../../../../../modules/visTypes.js");

var _axes = require("../../../../util/axes.js");

var _getTextAlignOption = require("../getTextAlignOption.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_MAX_VALUE = 100;

const DEFAULT_TARGET_LINE_LABEL = _index.default.t('Target');

const DEFAULT_BASE_LINE_LABEL = _index.default.t('Base');

const AXIS_TYPE = 'RANGE';
const AXIS_INDEX = 0;

const getLabelOffsetFromTextAlign = textAlign => {
  switch (textAlign) {
    case _fontStyle.TEXT_ALIGN_LEFT:
      return -10;

    case _fontStyle.TEXT_ALIGN_RIGHT:
      return 10;

    case _fontStyle.TEXT_ALIGN_CENTER:
    default:
      return 0;
  }
};

function getPlotLine() {
  var _regressionLine$title, _regressionLine$title2;

  let regressionLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let defaultLabel = arguments.length > 1 ? arguments[1] : undefined;
  const value = regressionLine.value;

  if (!(0, _isNumber.default)(value)) {
    return null;
  }

  const label = ((_regressionLine$title = regressionLine.title) === null || _regressionLine$title === void 0 ? void 0 : _regressionLine$title.text) || defaultLabel;
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)((_regressionLine$title2 = regressionLine.title) === null || _regressionLine$title2 === void 0 ? void 0 : _regressionLine$title2.fontStyle, _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL);
  const verticalAlign = (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL, (0, _visTypes.isVerticalType)(_visTypes.VIS_TYPE_GAUGE));
  const y = getLabelOffsetFromTextAlign(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN]);
  return {
    value,
    zIndex: 5,
    width: 1,
    color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] || '#000',
    ...(label && {
      label: {
        text: "".concat(label, ": ").concat(value),
        verticalAlign,
        y,
        style: {
          color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
          fontSize: "".concat(fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE], "px"),
          fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
          fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
        }
      }
    })
  };
}

const getLabels = axis => {
  var _axis$label;

  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)((_axis$label = axis.label) === null || _axis$label === void 0 ? void 0 : _axis$label.fontStyle, _fontStyle.FONT_STYLE_AXIS_LABELS);
  return {
    y: parseInt(fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE], 10) + 7,
    style: {
      color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: "".concat(fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE], "px"),
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
    }
  };
};

function _default(layout, series, legendSet) {
  var _layout$legend;

  const axis = (0, _axes.getAxis)(layout.axes, AXIS_TYPE, AXIS_INDEX);
  const plotLines = (0, _arrayClean.default)([getPlotLine(axis.baseLine, DEFAULT_BASE_LINE_LABEL), getPlotLine(axis.targetLine, DEFAULT_TARGET_LINE_LABEL)]);
  const fillColor = ((_layout$legend = layout.legend) === null || _layout$legend === void 0 ? void 0 : _layout$legend.style) === _legends.LEGEND_DISPLAY_STYLE_FILL && legendSet ? (0, _legends.getColorByValueFromLegendSet)(legendSet, series[0].data) : undefined;
  return (0, _objectClean.default)({
    min: (0, _isNumber.default)(axis.minValue) ? axis.minValue : 0,
    max: (0, _isNumber.default)(axis.maxValue) ? axis.maxValue : DEFAULT_MAX_VALUE,
    lineWidth: 0,
    minorTickInterval: null,
    tickLength: 0,
    tickAmount: 0,
    tickPositioner: function () {
      return [this.min, this.max];
    },
    minColor: fillColor,
    maxColor: fillColor,
    labels: getLabels(axis),
    title: {
      text: series[0].name
    },
    ...(plotLines.length && {
      plotLines
    })
  });
}