"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _utils = require("../../../../modules/utils.js");
function _default(axis) {
  const decimals = axis.decimals;
  return (0, _utils.isNumeric)(decimals) ? {
    formatter: function () {
      return this.value.toFixed(decimals);
    }
  } : {};
}