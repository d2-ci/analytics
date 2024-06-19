"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(layout, metaData) {
  return layout.filters ? (0, _getFilterText.default)(layout.filters, metaData) : '';
}