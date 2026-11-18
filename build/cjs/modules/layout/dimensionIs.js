"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionIs = void 0;
var _dimension = require("./dimension.js");
const dimensionIs = (dimension, dimensionId) => dimension[_dimension.DIMENSION_PROP_ID.name] === dimensionId;
exports.dimensionIs = dimensionIs;