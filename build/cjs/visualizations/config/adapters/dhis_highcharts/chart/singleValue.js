"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSingleValueChart;
var _getSingleValueBackgroundColor = require("../customSVGOptions/singleValue/getSingleValueBackgroundColor.js");
var _default = _interopRequireDefault(require("./default.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getSingleValueChart(layout, el, extraOptions, series) {
  const chart = {
    ...(0, _default.default)(layout, el, extraOptions),
    backgroundColor: (0, _getSingleValueBackgroundColor.getSingleValueBackgroundColor)(layout.legend, extraOptions.legendSets, series[0])
  };
  if (extraOptions.dashboard) {
    chart.spacingTop = 7;
  }
  return chart;
}