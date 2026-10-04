"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getChart;
var _visTypes = require("../../../../../modules/visTypes.js");
var _default = _interopRequireDefault(require("./default.js"));
var _singleValue = _interopRequireDefault(require("./singleValue.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getChart(layout, el, extraOptions, series) {
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return (0, _singleValue.default)(layout, el, extraOptions, series);
    default:
      return (0, _default.default)(layout, el, extraOptions);
  }
}