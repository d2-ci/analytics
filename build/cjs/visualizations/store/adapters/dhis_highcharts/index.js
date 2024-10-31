"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _arrayContains = _interopRequireDefault(require("d2-utilizr/lib/arrayContains"));
var _arrayUnique = _interopRequireDefault(require("d2-utilizr/lib/arrayUnique"));
var _visTypes = require("../../../../modules/visTypes.js");
var _gauge = _interopRequireDefault(require("./gauge.js"));
var _pie = _interopRequireDefault(require("./pie.js"));
var _singleValue = _interopRequireDefault(require("./singleValue.js"));
var _twoCategory = _interopRequireDefault(require("./twoCategory.js"));
var _yearOnYear = _interopRequireDefault(require("./yearOnYear.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VALUE_ID = 'value';
function arrayNullsOnly(array) {
  return (0, _arrayContains.default)(array, null) && (0, _arrayUnique.default)(array).length === 1;
}
function getHeaderIdIndexMap(headers) {
  const map = new Map();
  headers.forEach((header, index) => {
    map.set(header.name, index);
  });
  return map;
}
function getPrefixedId(row, header) {
  return (header.isPrefix ? header.name + '_' : '') + row[header.index];
}
function getIdValueMap(rows, seriesHeader, categoryHeaders, valueIndex) {
  const map = new Map();
  let key;
  let value;
  rows.forEach(row => {
    key = [...(seriesHeader ? [getPrefixedId(row, seriesHeader)] : []), ...(categoryHeaders ? categoryHeaders.map(categoryHeader => getPrefixedId(row, categoryHeader)) : [])].join('-');
    value = row[valueIndex];
    map.set(key, value);
  });
  return map;
}

// 1 series, 1 category
function getDefault(acc, series, categories, idValueMap, metaData) {
  series[0].forEach(serieItemId => {
    const serieData = [];
    categories[0].forEach(categoryItemId => {
      const value = idValueMap.get(`${serieItemId}-${categoryItemId}`);

      // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie
      // this is to keep the correct indexes for the values within the serie array
      serieData.push(value === undefined ? null : parseFloat(value));
    });

    // if the whole serie has no data, do not return a list of null values
    // otherwise Highcharts thinks that data is available and does not show the "No data to display" message
    if (arrayNullsOnly(serieData)) {
      serieData.length = 0;
    }
    acc.push({
      id: serieItemId,
      name: metaData.items[serieItemId].name,
      data: serieData
    });
  });
  return acc;
}
function getSeriesFunction(type, categoryIds) {
  if ((0, _visTypes.isTwoCategoryChartType)(type) && categoryIds.length === 2) {
    return _twoCategory.default;
  }
  switch (type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return _singleValue.default;
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
  let {
    type,
    data,
    seriesId,
    categoryIds,
    extraOptions
  } = _ref;
  categoryIds = categoryIds || [];
  const seriesFunction = getSeriesFunction(type, categoryIds);
  return data.reduce((acc, res) => {
    const headers = res.headers;
    const metaData = res.metaData;
    const rows = res.rows;
    const headerIdIndexMap = getHeaderIdIndexMap(headers);
    const seriesHeader = headers[headerIdIndexMap.get(seriesId)];
    const categoryHeaders = categoryIds.map(categoryId => headers[headerIdIndexMap.get(categoryId)]);
    const idValueMap = getIdValueMap(rows, seriesHeader, categoryHeaders, headerIdIndexMap.get(VALUE_ID));
    const series = [metaData.dimensions[seriesId]];
    const categories = categoryIds.map(id => metaData.dimensions[id]);
    seriesFunction(acc, series, categories, idValueMap, metaData, extraOptions);
    return acc;
  }, []);
}