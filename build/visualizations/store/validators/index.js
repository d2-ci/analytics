"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dhis = _interopRequireDefault(require("./dhis"));

var noValidation = function noValidation(data) {
  return data;
};

var _default = {
  dhis: _dhis.default,
  noValidation: noValidation
};
exports.default = _default;