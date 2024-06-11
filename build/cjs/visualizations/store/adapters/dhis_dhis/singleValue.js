"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(acc, seriesIds, categoryIds, idValueMap) {
  const seriesId = seriesIds[0];
  acc.push(idValueMap.get(seriesId));
}