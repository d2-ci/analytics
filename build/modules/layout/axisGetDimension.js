"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetDimension = void 0;

var _dimensionIs = require("./dimensionIs");

var _axis = require("./axis");

var axisGetDimension = function axisGetDimension(axis, dimensionId) {
  return _axis.AXIS.isValid(axis) && axis.find(function (dimension) {
    return (0, _dimensionIs.dimensionIs)(dimension, dimensionId);
  });
};

exports.axisGetDimension = axisGetDimension;