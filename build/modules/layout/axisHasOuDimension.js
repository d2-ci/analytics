"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasOuDimension = void 0;

var _predefinedDimensions = require("../predefinedDimensions");

var _axisHasDimension = require("./axisHasDimension");

var axisHasOuDimension = function axisHasOuDimension(axis) {
  return (0, _axisHasDimension.axisHasDimension)(axis, _predefinedDimensions.DIMENSION_ID_ORGUNIT);
};

exports.axisHasOuDimension = axisHasOuDimension;