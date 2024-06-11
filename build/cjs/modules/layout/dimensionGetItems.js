"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetItems = void 0;

var _dimension = require("./dimension.js");

var _dimensionIsValid = require("./dimensionIsValid.js");

const dimensionGetItems = dimension => (0, _dimensionIsValid.dimensionIsValid)(dimension, {
  requireItems: true
}) ? dimension[_dimension.DIMENSION_PROP_ITEMS.name] : _dimension.DIMENSION_PROP_ITEMS.defaultValue;

exports.dimensionGetItems = dimensionGetItems;