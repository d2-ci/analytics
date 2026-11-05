"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionIsEmpty = void 0;
var _dimension = require("./dimension.js");
const dimensionIsEmpty = dimension => !(_dimension.DIMENSION.isValid(dimension) && _dimension.DIMENSION_PROP_ITEMS.isValid(dimension[_dimension.DIMENSION_PROP_ITEMS.name]) && dimension[_dimension.DIMENSION_PROP_ITEMS.name].length);
exports.dimensionIsEmpty = dimensionIsEmpty;