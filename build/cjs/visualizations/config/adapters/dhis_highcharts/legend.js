"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _fontStyle = require("../../../../modules/fontStyle.js");
var _visTypes = require("../../../../modules/visTypes.js");
var _getTextAlignOption = require("./getTextAlignOption.js");
const DASHBOARD_ITEM_STYLE = {
  fontSize: '11px',
  fontWeight: 500
};
const DASHBOARD_LEGEND = {
  symbolPadding: 3,
  itemDistance: 10
};
function getItemStyle(fontStyle, dashboard) {
  return {
    itemStyle: Object.assign({}, {
      fontSize: '13px',
      fontWeight: 'normal'
    }, dashboard ? DASHBOARD_ITEM_STYLE : {
      color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
    })
  };
}
function getLegend(fontStyle, dashboard, visType) {
  return Object.assign({}, dashboard ? DASHBOARD_LEGEND : {
    align: (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_LEGEND, (0, _visTypes.isVerticalType)(visType))
  });
}
function _default(_ref) {
  let {
    isHidden,
    fontStyle,
    visType,
    dashboard
  } = _ref;
  const mergedFontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(fontStyle, _fontStyle.FONT_STYLE_LEGEND);
  return isHidden || visType === _visTypes.VIS_TYPE_SCATTER ? {
    enabled: false
  } : Object.assign({}, getLegend(mergedFontStyle, dashboard, visType), getItemStyle(mergedFontStyle, dashboard));
}