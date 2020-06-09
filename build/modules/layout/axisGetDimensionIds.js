"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetDimensionIds = void 0;

var _axis = require("./axis");

var _dimensionGetId = require("./dimensionGetId");

var axisGetDimensionIds = function axisGetDimensionIds(axis) {
  return _axis.AXIS.isValid(axis) ? axis.map(function (dimension) {
    return (0, _dimensionGetId.dimensionGetId)(dimension);
  }) : _axis.AXIS.defaultValue;
};

exports.axisGetDimensionIds = axisGetDimensionIds;