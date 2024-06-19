"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.getLabels = exports.getDefault = void 0;
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _visTypes = require("../../../../../modules/visTypes.js");
var _axes = require("../../../../util/axes.js");
var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle.js"));
var _getCategories = _interopRequireDefault(require("../getCategories.js"));
var _getFormatter = _interopRequireDefault(require("../getFormatter.js"));
var _radar = _interopRequireDefault(require("./radar.js"));
var _scatter = _interopRequireDefault(require("./scatter.js"));
var _twoCategory = _interopRequireDefault(require("./twoCategory.js"));
var _yearOnYear = _interopRequireDefault(require("./yearOnYear.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AXIS_TYPE = 'DOMAIN';
const AXIS_INDEX = 0;
function noAxis() {
  return null;
}
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
const getDefault = (store, layout) => {
  var _axis$title, _axis$title2;
  const axis = (0, _axes.getAxis)(layout.axes, AXIS_TYPE, AXIS_INDEX);
  return (0, _objectClean.default)({
    categories: (0, _getCategories.default)(store.data[0].metaData, layout.rows[0].dimension),
    title: (0, _getAxisTitle.default)((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text, (0, _fontStyle.mergeFontStyleWithDefault)((_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.fontStyle, _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE), _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE, layout.type),
    labels: getLabels(axis)
  });
};
exports.getDefault = getDefault;
function _default(store, layout, extraOptions, series) {
  let xAxis;
  if ((0, _visTypes.isTwoCategoryChartType)(layout.type) && layout.rows.length > 1) {
    xAxis = (0, _twoCategory.default)(store, layout, extraOptions);
  } else {
    switch (layout.type) {
      case _visTypes.VIS_TYPE_PIE:
      case _visTypes.VIS_TYPE_GAUGE:
        xAxis = noAxis();
        break;
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        xAxis = [(0, _yearOnYear.default)(store, layout, extraOptions)];
        break;
      case _visTypes.VIS_TYPE_RADAR:
        xAxis = [(0, _radar.default)(store, layout)];
        break;
      case _visTypes.VIS_TYPE_SCATTER:
        xAxis = [(0, _scatter.default)(layout, series, extraOptions)];
        break;
      default:
        xAxis = [getDefault(store, layout)];
    }
  }
  return xAxis;
}