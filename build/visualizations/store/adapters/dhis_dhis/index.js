"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _singleValue = _interopRequireDefault(require("./singleValue"));

var _visTypes = require("../../../../modules/visTypes");

var VALUE_ID = 'value';

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

      serieData.push(value == undefined ? null : parseFloat(value));
    });
    acc.push({
      id: seriesId,
      name: metaData.items[seriesId].name,
      data: serieData
    });
  });
  return acc;
}

function getValueFunction(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return _singleValue.default;

    default:
      return getDefault;
  }
}

function _default(_ref) {
  var type = _ref.type,
      data = _ref.data,
      seriesId = _ref.seriesId,
      categoryId = _ref.categoryId;
  var valueFunction = getValueFunction(type);
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
    valueFunction(acc, seriesIds, categoryIds, idValueMap, metaData);
    return acc;
  }, []);
}