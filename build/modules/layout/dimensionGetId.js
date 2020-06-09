"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetId = void 0;

var _dimension = require("./dimension");

var dimensionGetId = function dimensionGetId(dimension) {
  return dimension[_dimension.DIMENSION_PROP_ID.name];
};

exports.dimensionGetId = dimensionGetId;