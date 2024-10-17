"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _visTypes = require("../../../../../modules/visTypes.js");
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
var _getTextAlignOption = require("../getTextAlignOption.js");
var _scatter = _interopRequireDefault(require("./scatter.js"));
var _singleValue = require("./singleValue.js");
var _yearOverYear = _interopRequireDefault(require("./yearOverYear.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DASHBOARD_TITLE_STYLE = {
  margin: 15,
  y: 12,
  style: {
    fontSize: '13px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};
function getDefault(layout, metaData, dashboard) {
  // filters
  if (layout.filters && !dashboard) {
    return (0, _getFilterText.default)(layout.filters, metaData);
  }
  return null;
}
function _default(layout, metaData, extraOptions, series) {
  if (layout.hideTitle) {
    return {
      text: undefined
    };
  }
  const {
    dashboard,
    legendSets
  } = extraOptions;
  const legendOptions = layout.legend;
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(layout.fontStyle && layout.fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_TITLE], _fontStyle.FONT_STYLE_VISUALIZATION_TITLE);
  const title = Object.assign({
    text: undefined
  }, dashboard ? DASHBOARD_TITLE_STYLE : {
    margin: 30,
    align: (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_VISUALIZATION_TITLE, (0, _visTypes.isVerticalType)(layout.type)),
    style: {
      color: undefined,
      fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  });
  const customTitleText = layout.title && layout.displayTitle || layout.title;
  if ((0, _isString.default)(customTitleText) && customTitleText.length) {
    title.text = customTitleText;
  } else {
    switch (layout.type) {
      case _visTypes.VIS_TYPE_SINGLE_VALUE:
        title.text = (0, _singleValue.getSingleValueTitleText)(layout, metaData, dashboard);
        break;
      case _visTypes.VIS_TYPE_GAUGE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        title.text = (0, _yearOverYear.default)(layout, metaData, dashboard);
        break;
      case _visTypes.VIS_TYPE_SCATTER:
        title.text = (0, _scatter.default)(layout, metaData, dashboard);
        break;
      default:
        title.text = getDefault(layout, metaData, dashboard);
        break;
    }
  }
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      title.style.color = (0, _singleValue.getSingleValueTitleColor)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR], series[0], legendOptions, legendSets);
      if (dashboard) {
        // TODO: is this always what we want?
        title.style.fontWeight = 'normal';
      }
      break;
    default:
      title.style.color = fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR];
      break;
  }
  return title;
}