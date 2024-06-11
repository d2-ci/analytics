"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _fontStyle = require("../../../../modules/fontStyle.js");
var _visTypes = require("../../../../modules/visTypes.js");
var _getTextAlignOption = require("./getTextAlignOption.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getTitleStyle = (fontStyle, titleType, visType) => fontStyle ? {
  align: (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], titleType, (0, _visTypes.isVerticalType)(visType)),
  margin: 15,
  style: {
    color: fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
    fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
    fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
    fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal'
  }
} : {};
function _default(title, fontStyle, titleType, visType) {
  return (0, _isString.default)(title) ? Object.assign({}, getTitleStyle(fontStyle, titleType, visType), {
    text: title
  }) : {
    text: null
  };
}