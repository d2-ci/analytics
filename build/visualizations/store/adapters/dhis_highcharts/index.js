"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _arrayContains = _interopRequireDefault(require("d2-utilizr/lib/arrayContains"));

var _arrayUnique = _interopRequireDefault(require("d2-utilizr/lib/arrayUnique"));

var _yearOnYear = _interopRequireDefault(require("./yearOnYear"));

var _pie = _interopRequireDefault(require("./pie"));

var _gauge = _interopRequireDefault(require("./gauge"));

var _visTypes = require("../../../../modules/visTypes");

var VALUE_ID = 'value';

function arrayNullsOnly(array) {
  return (0, _arrayContains.default)(array, null) && (0, _arrayUnique.default)(array).length === 1;
}

function getHeaderIdIndexMap(headers) {
  var map = new Map();
  headers.forEach(function (header, index) {
    map.set(header.name, index);
  });
  return map;
}

function getPrefixedId(row, header) {
  return (header.isPrefix ? header.name + '_' : '') + row[header.index];
}

function getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex) {
  var map = new Map();
  var key;
  var value;
  rows.forEach(function (row) {
    key = [].concat((0, _toConsumableArray2.default)(seriesHeader ? [getPrefixedId(row, seriesHeader)] : []), (0, _toConsumableArray2.default)(categoryHeader ? [getPrefixedId(row, categoryHeader)] : [])).join('-');
    value = row[valueIndex];
    map.set(key, value);
  });
  return map;
}

function getDefault(acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(function (seriesId) {
    var serieData = [];
    var serieLabel = metaData.items[seriesId].name;
    categoryIds.forEach(function (categoryId) {
      var value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie
      // this is to keep the correct indexes for the values within the serie array

      serieData.push(value == undefined ? null : parseFloat(value));
    }); // if the whole serie has no data, do not return a list of null values
    // otherwise Highcharts thinks that data is available and does not show the "No data to display" message

    if (arrayNullsOnly(serieData)) {
      serieData.length = 0;
    }

    acc.push({
      id: seriesId,
      name: metaData.items[seriesId].name,
      data: serieData
    });
  });
  return acc;
}

function getSeriesFunction(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_PIE:
      return _pie.default;

    case _visTypes.VIS_TYPE_GAUGE:
      return _gauge.default;

    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      return _yearOnYear.default;

    default:
      return getDefault;
  }
}

function _default(_ref) {
  var type = _ref.type,
      data = _ref.data,
      seriesId = _ref.seriesId,
      categoryId = _ref.categoryId;
  var seriesFunction = getSeriesFunction(type);
  return data.reduce(function (acc, res) {
    var headers = res.headers;
    var metaData = res.metaData;
    var rows = res.rows;
    var headerIdIndexMap = getHeaderIdIndexMap(headers);
    var seriesIndex = headerIdIndexMap.get(seriesId);
    var categoryIndex = headerIdIndexMap.get(categoryId);
    var valueIndex = headerIdIndexMap.get(VALUE_ID);
    var seriesHeader = headers[seriesIndex];
    var categoryHeader = headers[categoryIndex];
    var idValueMap = getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex);
    var seriesIds = metaData.dimensions[seriesId];
    var categoryIds = metaData.dimensions[categoryId];
    seriesFunction(acc, seriesIds, categoryIds, idValueMap, metaData);
    return acc;
  }, []);
}