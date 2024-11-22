"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(axis) {
  const decimals = axis.decimals;
  return (0, _isNumeric.default)(decimals) ? {
    formatter: function () {
      return this.value.toFixed(decimals);
    }
  } : {};
}