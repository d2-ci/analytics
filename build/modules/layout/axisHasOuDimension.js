"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasOuDimension = void 0;

var _fixedDimensions = require("../fixedDimensions");

var _axisHasDimension = require("./axisHasDimension");

var axisHasOuDimension = function axisHasOuDimension(axis) {
  return (0, _axisHasDimension.axisHasDimension)(axis, _fixedDimensions.DIMENSION_ID_ORGUNIT);
};

exports.axisHasOuDimension = axisHasOuDimension;