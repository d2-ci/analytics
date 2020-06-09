"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAYOUT = void 0;

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var LAYOUT = {
  isValid: function isValid(layout) {
    return (0, _isObject.default)(layout);
  }
};
exports.LAYOUT = LAYOUT;