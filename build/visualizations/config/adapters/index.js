"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dhis_highcharts = _interopRequireDefault(require("./dhis_highcharts"));

var _dhis_dhis = _interopRequireDefault(require("./dhis_dhis"));

var _default = {
  dhis_highcharts: _dhis_highcharts.default,
  dhis_dhis: _dhis_dhis.default
};
exports.default = _default;