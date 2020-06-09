"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasDimension = void 0;

var _axisGetDimension = require("./axisGetDimension");

var axisHasDimension = function axisHasDimension(axis, dimensionId) {
  return Boolean((0, _axisGetDimension.axisGetDimension)(axis, dimensionId));
};

exports.axisHasDimension = axisHasDimension;