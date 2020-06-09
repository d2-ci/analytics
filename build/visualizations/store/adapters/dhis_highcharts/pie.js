"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(function (seriesId) {
    var value = idValueMap.get(seriesId);

    if (value) {
      acc.push({
        name: metaData.items[seriesId].name,
        y: parseFloat(value)
      });
    }
  });
}