"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./dhis/index.js"));
var _index2 = require("./highcharts/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  highcharts: _index2.highcharts,
  dhis: _index.default,
  singleValue: _index2.singleValue
};
exports.default = _default;