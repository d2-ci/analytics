"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetId = void 0;

var _dimension = require("./dimension.js");

const dimensionGetId = dimension => {
  var _dimension$DIMENSION_;

  return (_dimension$DIMENSION_ = dimension[_dimension.DIMENSION_PROP_PROGRAM_STAGE.name]) !== null && _dimension$DIMENSION_ !== void 0 && _dimension$DIMENSION_.id ? "".concat(dimension[_dimension.DIMENSION_PROP_PROGRAM_STAGE.name].id, ".").concat(dimension[_dimension.DIMENSION_PROP_ID.name]) : dimension[_dimension.DIMENSION_PROP_ID.name];
};

exports.dimensionGetId = dimensionGetId;