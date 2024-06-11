"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionIsValid = void 0;

var _dimension = require("./dimension.js");

var _dimensionIsEmpty = require("./dimensionIsEmpty.js");

const dimensionIsValid = function (dimension) {
  let {
    requireItems
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!_dimension.DIMENSION.isValid(dimension)) {
    return false;
  }

  const requiredProps = _dimension.DIMENSION_PROPS.filter(prop => prop.required);

  if (!requiredProps.every(prop => prop.isValid(dimension[prop.name]))) {
    return false;
  }

  if (requireItems === true && (0, _dimensionIsEmpty.dimensionIsEmpty)(dimension)) {
    return false;
  }

  return true;
};

exports.dimensionIsValid = dimensionIsValid;