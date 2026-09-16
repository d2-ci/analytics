"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSingleValue;
function getSingleValue(acc, seriesIds, categoryIds, idValueMap) {
  const seriesId = seriesIds[0][0];
  acc.push(idValueMap.get(seriesId));
}