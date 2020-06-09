"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasDataDimension = void 0;

var _predefinedDimensions = require("../predefinedDimensions");

var _axisHasDimension = require("./axisHasDimension");

var axisHasDataDimension = function axisHasDataDimension(axis) {
  return (0, _axisHasDimension.axisHasDimension)(axis, _predefinedDimensions.DIMENSION_ID_DATA);
};

exports.axisHasDataDimension = axisHasDataDimension;