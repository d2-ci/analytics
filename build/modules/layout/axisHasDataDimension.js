"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasDataDimension = void 0;

var _fixedDimensions = require("../fixedDimensions");

var _axisHasDimension = require("./axisHasDimension");

var axisHasDataDimension = function axisHasDataDimension(axis) {
  return (0, _axisHasDimension.axisHasDimension)(axis, _fixedDimensions.DIMENSION_ID_DATA);
};

exports.axisHasDataDimension = axisHasDataDimension;