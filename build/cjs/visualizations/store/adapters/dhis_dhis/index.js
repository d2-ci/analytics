"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _visTypes = require("../../../../modules/visTypes.js");

var _singleValue = _interopRequireDefault(require("./singleValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VALUE_ID = 'value';

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

function getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex) {
  const map = new Map();
  let key;
  let value;
  rows.forEach(row => {
    key = [...(seriesHeader ? [getPrefixedId(row, seriesHeader)] : []), ...(categoryHeader ? [getPrefixedId(row, categoryHeader)] : [])].join('-');
    value = row[valueIndex];
    map.set(key, value);
  });
  return map;
}

function getDefault(acc, seriesIds, categoryIds, idValueMap, metaData) {
  seriesIds.forEach(seriesId => {
    const serieData = [];
    categoryIds.forEach(categoryId => {
      const value = idValueMap.get("".concat(seriesId, "-").concat(categoryId)); // DHIS2-1261: 0 is a valid value
      // undefined value means the key was not found within the rows
      // in that case null is returned as value in the serie

      serieData.push(value === undefined ? null : parseFloat(value));
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
  let {
    type,
    data,
    seriesId,
    categoryId
  } = _ref;
  const valueFunction = getValueFunction(type);
  return data.reduce((acc, res) => {
    const headers = res.headers;
    const metaData = res.metaData;
    const rows = res.rows;
    const headerIdIndexMap = getHeaderIdIndexMap(headers);
    const seriesIndex = headerIdIndexMap.get(seriesId);
    const categoryIndex = headerIdIndexMap.get(categoryId);
    const valueIndex = headerIdIndexMap.get(VALUE_ID);
    const seriesHeader = headers[seriesIndex];
    const categoryHeader = headers[categoryIndex];
    const idValueMap = getIdValueMap(rows, seriesHeader, categoryHeader, valueIndex);
    const seriesIds = metaData.dimensions[seriesId];
    const categoryIds = metaData.dimensions[categoryId];
    valueFunction(acc, seriesIds, categoryIds, idValueMap, metaData);
    return acc;
  }, []);
}