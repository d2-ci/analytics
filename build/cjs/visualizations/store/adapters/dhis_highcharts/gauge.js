"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(acc, series, categories, idValueMap) {
  const serieItemId = series[0][0];
  acc.push({
    data: [parseFloat(idValueMap.get(serieItemId))]
  });
}