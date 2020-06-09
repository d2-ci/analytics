"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasPeriodDimension = void 0;

var _fixedDimensions = require("../fixedDimensions");

var _axisHasDimension = require("./axisHasDimension");

var axisHasPeriodDimension = function axisHasPeriodDimension(axis) {
  return (0, _axisHasDimension.axisHasDimension)(axis, _fixedDimensions.DIMENSION_ID_PERIOD);
};

exports.axisHasPeriodDimension = axisHasPeriodDimension;