"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

function _default(layout, metaData) {
  return layout.filters ? (0, _getFilterText.default)(layout.filters, metaData) : '';
}