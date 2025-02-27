"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _pie = _interopRequireDefault(require("./pie.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(series, colors) {
  const donutSeries = (0, _pie.default)(series, colors);
  console.log("donutSeries", donutSeries);
  donutSeries[0].innerSize = '75%';
  return donutSeries;
}