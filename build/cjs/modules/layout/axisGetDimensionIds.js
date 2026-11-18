"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetDimensionIds = void 0;
var _axis = require("./axis.js");
var _dimensionGetId = require("./dimensionGetId.js");
const axisGetDimensionIds = (axis, outputType) => _axis.AXIS.isValid(axis) ? axis.map(dimension => (0, _dimensionGetId.dimensionGetId)(dimension, outputType)) : _axis.AXIS.defaultValue;
exports.axisGetDimensionIds = axisGetDimensionIds;