"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetDimension = void 0;
var _axis = require("./axis.js");
var _dimensionIs = require("./dimensionIs.js");
const axisGetDimension = (axis, dimensionId) => _axis.AXIS.isValid(axis) && axis.find(dimension => (0, _dimensionIs.dimensionIs)(dimension, dimensionId));
exports.axisGetDimension = axisGetDimension;