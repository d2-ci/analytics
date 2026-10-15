"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasPeriodDimension = void 0;
var _predefinedDimensions = require("../predefinedDimensions.js");
var _axisHasDimension = require("./axisHasDimension.js");
const axisHasPeriodDimension = axis => (0, _axisHasDimension.axisHasDimension)(axis, _predefinedDimensions.DIMENSION_ID_PERIOD);
exports.axisHasPeriodDimension = axisHasPeriodDimension;