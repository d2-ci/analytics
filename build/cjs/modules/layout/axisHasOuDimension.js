"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasOuDimension = void 0;
var _predefinedDimensions = require("../predefinedDimensions.js");
var _axisHasDimension = require("./axisHasDimension.js");
const axisHasOuDimension = axis => (0, _axisHasDimension.axisHasDimension)(axis, _predefinedDimensions.DIMENSION_ID_ORGUNIT);
exports.axisHasOuDimension = axisHasOuDimension;