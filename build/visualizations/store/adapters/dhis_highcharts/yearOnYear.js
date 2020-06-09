"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(acc, seriesIds, categoryIds, idValueMap, metaData) {
  var serieData = [];
  var serieLabel;
  seriesIds.forEach(function (seriesId) {
    serieLabel = metaData.items[seriesId].name;
    categoryIds.forEach(function (categoryId) {
      var value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie for highcharts

      serieData.push(value == undefined ? null : parseFloat(value));
    });
  });
  acc.push({
    name: serieLabel,
    data: serieData
  });
  return acc;
}