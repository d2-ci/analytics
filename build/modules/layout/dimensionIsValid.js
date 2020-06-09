"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionIsValid = void 0;

var _dimension = require("./dimension");

var _dimensionIsEmpty = require("./dimensionIsEmpty");

var dimensionIsValid = function dimensionIsValid(dimension) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requireItems = _ref.requireItems;

  if (!_dimension.DIMENSION.isValid(dimension)) {
    return false;
  }

  var requiredProps = _dimension.DIMENSION_PROPS.filter(function (prop) {
    return prop.required;
  });

  if (!requiredProps.every(function (prop) {
    return prop.isValid(dimension[prop.name]);
  })) {
    return false;
  }

  if (requireItems === true && (0, _dimensionIsEmpty.dimensionIsEmpty)(dimension)) {
    return false;
  }

  return true;
};

exports.dimensionIsValid = dimensionIsValid;