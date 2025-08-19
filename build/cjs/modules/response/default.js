"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValuesUniqueSortedAsc = exports.getUnique = exports.getRows = exports.getPrefixedValue = exports.getItems = exports.getDimensions = exports.applyDefaultHandler = void 0;
var _valueTypes = require("../valueTypes.js");
var _response = require("./response.js");
const getUnique = array => [...new Set(array)];
exports.getUnique = getUnique;
const getValuesUniqueSortedAsc = (values, valueType = _valueTypes.VALUE_TYPE_TEXT) => (0, _valueTypes.isNumericValueType)(valueType) || (0, _valueTypes.isBooleanValueType)(valueType) ? getUnique(values).map(x => [Number(x), x]).sort((a, b) => a[0] - b[0]).map(arr => arr[1]) : getUnique(values).slice().sort((a, b) => a.localeCompare(b));
exports.getValuesUniqueSortedAsc = getValuesUniqueSortedAsc;
const getPrefixedValue = (value, prefix) => `${prefix}${_response.PREFIX_SEPARATOR}${value}`;
exports.getPrefixedValue = getPrefixedValue;
const getItems = (values, dimensionId, {
  itemFormatter
} = {}) => values.reduce((items, value) => {
  items[getPrefixedValue(value, dimensionId)] = {
    name: itemFormatter ? itemFormatter(value) : value
  };
  return items;
}, {});
exports.getItems = getItems;
const getDimensions = (values, dimensionId) => ({
  [dimensionId]: values.map(value => getPrefixedValue(value, dimensionId))
});
exports.getDimensions = getDimensions;
const getRows = (rows, headerIndex, dimensionId) => {
  let row;
  let value;
  return rows.map(r => {
    value = r[headerIndex];
    if (value !== _response.NA_VALUE) {
      row = [...r];
      row[headerIndex] = getPrefixedValue(row[headerIndex], dimensionId);
      return row;
    }
    return r;
  });
};
exports.getRows = getRows;
const applyDefaultHandler = (response, headerIndex, {
  itemFormatter
} = {}) => {
  const header = response.headers[headerIndex];
  const uniqueSortedValuesAsc = getValuesUniqueSortedAsc(response.rows.map(row => row[headerIndex]).filter(value => value !== _response.NA_VALUE), header.valueType);
  return {
    ...response,
    metaData: {
      ...response.metaData,
      items: {
        ...response.metaData.items,
        ...getItems(uniqueSortedValuesAsc, header.name, {
          itemFormatter
        })
      },
      dimensions: {
        ...response.metaData.dimensions,
        ...getDimensions(uniqueSortedValuesAsc, header.name)
      }
    },
    rows: [...getRows(response.rows, headerIndex, header.name)]
  };
};
exports.applyDefaultHandler = applyDefaultHandler;