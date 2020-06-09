"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIMENSION_PROPS = exports.DIMENSION_PROP_ITEMS = exports.DIMENSION_PROP_ID = exports.DIMENSION = void 0;

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _isString = _interopRequireDefault(require("lodash/isString"));

// Dimension
var DIMENSION = {
  isValid: function isValid(dimension) {
    return (0, _isObject.default)(dimension);
  }
}; // Props

exports.DIMENSION = DIMENSION;
var DIMENSION_PROP_ID = {
  name: 'dimension',
  defaultValue: '',
  required: true,
  isValid: function isValid(prop) {
    return (0, _isString.default)(prop);
  }
};
exports.DIMENSION_PROP_ID = DIMENSION_PROP_ID;
var DIMENSION_PROP_ITEMS = {
  name: 'items',
  defaultValue: [],
  required: false,
  isValid: function isValid(prop) {
    return Array.isArray(prop);
  }
};
exports.DIMENSION_PROP_ITEMS = DIMENSION_PROP_ITEMS;
var DIMENSION_PROPS = [DIMENSION_PROP_ID, DIMENSION_PROP_ITEMS];
exports.DIMENSION_PROPS = DIMENSION_PROPS;