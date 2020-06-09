"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highcharts = _interopRequireDefault(require("./highcharts"));

var _dhis = _interopRequireDefault(require("./dhis"));

var _default = {
  highcharts: _highcharts.default,
  dhis: _dhis.default
};
exports.default = _default;