"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _nonASCIIFont = _interopRequireDefault(require("./nonASCIIFont.js"));
var _textShadow = _interopRequireDefault(require("./textShadow.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(H) {
  (0, _textShadow.default)(H);
  (0, _nonASCIIFont.default)(H);
}