"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _utils = require("../../../../modules/utils.js");
function _default(axis) {
  const steps = axis.steps;
  return (0, _utils.isNumeric)(steps) ? steps : undefined;
}