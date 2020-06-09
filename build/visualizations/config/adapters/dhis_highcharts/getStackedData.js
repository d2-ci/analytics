"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(series, isZeroAsNull) {
  return series[0].data.map(function (value, index) {
    return series.reduce(function (total, obj) {
      return total + obj.data[index];
    }, 0);
  }).map(function (value) {
    return isZeroAsNull && value === 0 ? null : value;
  });
}