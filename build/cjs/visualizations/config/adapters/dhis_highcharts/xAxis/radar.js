"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _visTypes = require("../../../../../modules/visTypes.js");
var _getTextAlignOption = require("../getTextAlignOption.js");
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (store, layout) => {
  var _config$title;
  const config = (0, _index.getDefault)(store, layout);
  if ((0, _isString.default)((_config$title = config.title) === null || _config$title === void 0 ? void 0 : _config$title.text) && config.title.align === (0, _getTextAlignOption.getTextAlignOption)(_fontStyle.TEXT_ALIGN_CENTER, _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE, (0, _visTypes.isVerticalType)(_visTypes.VIS_TYPE_RADAR))) {
    config.title.textAlign = 'right';
  }
  return config;
};
exports.default = _default;