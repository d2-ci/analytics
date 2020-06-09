"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isInteger = _interopRequireDefault(require("d2-utilizr/lib/isInteger"));

var _numberDecimals = _interopRequireDefault(require("d2-utilizr/lib/numberDecimals"));

function _default(series) {
  var decimals = 0;
  var cumulativeValues = [];
  series.forEach(function (seriesObj) {
    cumulativeValues = seriesObj.data.reduce(function (accumulator, value, index) {
      decimals = Math.max(decimals, (0, _numberDecimals.default)(value));

      if (index > 0) {
        value += accumulator[index - 1];
      }

      accumulator.push(value);
      return accumulator;
    }, []); // round values to the largest number of decimals found in the serie
    // this is to avoid the floating-point problems in JavaScript
    // the condition in the return statement is because sometimes value can be null

    seriesObj.data = cumulativeValues.map(function (value) {
      return value ? parseFloat(value.toFixed(decimals)) : value;
    });
    decimals = 0;
  });
  return series;
}