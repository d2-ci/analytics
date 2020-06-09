"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetItems = void 0;

var _dimension = require("./dimension");

var _dimensionIsValid = require("./dimensionIsValid");

var dimensionGetItems = function dimensionGetItems(dimension) {
  return (0, _dimensionIsValid.dimensionIsValid)(dimension, {
    requireItems: true
  }) ? dimension[_dimension.DIMENSION_PROP_ITEMS.name] : _dimension.DIMENSION_PROP_ITEMS.defaultValue;
};

exports.dimensionGetItems = dimensionGetItems;