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

var _yearOverYear = _interopRequireDefault(require("../title/yearOverYear.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DASHBOARD_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '12px',
    color: '#555',
    textShadow: '0 0 #999'
  }
};

function getDefault(layout, dashboard, filterTitle) {
  return {
    text: dashboard || (0, _isString.default)(layout.title) ? filterTitle : undefined
  };
}

function _default(series, layout, metaData, dashboard) {
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(layout.fontStyle && layout.fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE], _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE);
  let subtitle = {
    text: undefined
  };

  if (layout.hideSubtitle) {
    return null;
  } // DHIS2-578: allow for optional custom subtitle


  if ((0, _isString.default)(layout.subtitle)) {
    subtitle.text = layout.subtitle;
  } else {
    const filterTitle = (0, _getFilterText.default)(layout.filters, metaData);

    switch (layout.type) {
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        subtitle.text = (0, _yearOverYear.default)(layout, metaData, Boolean(!dashboard));
        break;

      case _visTypes.VIS_TYPE_SCATTER:
        subtitle.text = filterTitle;
        break;

      default:
        subtitle = getDefault(layout, dashboard, filterTitle);
    }
  }

  return subtitle ? Object.assign({}, dashboard ? DASHBOARD_SUBTITLE : {
    align: (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE, (0, _visTypes.isVerticalType)(layout.type)),
    style: {
      // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
      color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: "".concat(fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE], "px"),
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, subtitle) : subtitle;
}