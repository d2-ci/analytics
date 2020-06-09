"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _arrayClean = _interopRequireDefault(require("d2-utilizr/lib/arrayClean"));

var _isNumber = _interopRequireDefault(require("d2-utilizr/lib/isNumber"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _legends = require("../../../../../modules/legends");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_MAX_VALUE = 100;
var DEFAULT_PLOT_LINE_STYLE = {
  zIndex: 5,
  width: 1,
  color: '#000'
};

var DEFAULT_TARGET_LINE_LABEL = _d2I18n.default.t('Target');

var DEFAULT_BASE_LINE_LABEL = _d2I18n.default.t('Base');

function getPlotLine(value, label) {
  return _objectSpread(_objectSpread({
    value: value
  }, DEFAULT_PLOT_LINE_STYLE), label && {
    label: {
      text: "".concat(label, ": ").concat(value)
    }
  });
}

function _default(layout, series, legendSet) {
  var plotLines = (0, _arrayClean.default)([(0, _isNumber.default)(layout.baseLineValue) ? getPlotLine(layout.baseLineValue, layout.baseLineLabel || DEFAULT_BASE_LINE_LABEL) : null, (0, _isNumber.default)(layout.targetLineValue) ? getPlotLine(layout.targetLineValue, layout.targetLineLabel || DEFAULT_TARGET_LINE_LABEL) : null]);
  var fillColor = layout.legendDisplayStyle === _legends.LEGEND_DISPLAY_STYLE_FILL && legendSet ? (0, _legends.getColorByValueFromLegendSet)(legendSet, series[0].data) : undefined;
  return (0, _objectClean.default)(_objectSpread({
    min: (0, _isNumber.default)(layout.rangeAxisMinValue) ? layout.rangeAxisMinValue : 0,
    max: (0, _isNumber.default)(layout.rangeAxisMaxValue) ? layout.rangeAxisMaxValue : DEFAULT_MAX_VALUE,
    lineWidth: 0,
    minorTickInterval: null,
    tickLength: 0,
    tickAmount: 0,
    tickPositioner: function tickPositioner() {
      return [this.min, this.max];
    },
    minColor: fillColor,
    maxColor: fillColor,
    labels: {
      y: 18,
      style: {
        fontSize: '13px'
      }
    },
    title: {
      text: series[0].name
    }
  }, plotLines.length && {
    plotLines: plotLines
  }));
}