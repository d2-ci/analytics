"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValuesUniqueSortedAsc = exports.getUnique = exports.getRows = exports.getPrefixedValue = exports.getItems = exports.getDimensions = exports.applyDefaultHandler = void 0;
var _valueTypes = require("../../valueTypes.js");
var _response = require("./response.js");
const getUnique = array => [...new Set(array)];
exports.getUnique = getUnique;
const getValuesUniqueSortedAsc = (values, valueType = _valueTypes.VALUE_TYPE_TEXT) => (0, _valueTypes.isNumericValueType)(valueType) || (0, _valueTypes.isBooleanValueType)(valueType) ? getUnique(values).map(x => [Number(x), x]).sort((a, b) => a[0] - b[0]).map(arr => arr[1]) : getUnique(values).slice().sort((a, b) => a.localeCompare(b));
exports.getValuesUniqueSortedAsc = getValuesUniqueSortedAsc;
const getPrefixedValue = (value, prefix) => `${prefix}${_response.PREFIX_SEPARATOR}${value}`;
exports.getPrefixedValue = getPrefixedValue;
const resolveName = (value, itemFormatter, items) => {
  var _items$value$name, _items$value;
  if (itemFormatter) {
    return itemFormatter(value);
  }
  /* Assume the value could be an ID, which means the name should
   * be looked up in `metaData.items`. If that lookup fails the
   * value is used directly. */
  return (_items$value$name = items === null || items === void 0 || (_items$value = items[value]) === null || _items$value === void 0 ? void 0 : _items$value.name) !== null && _items$value$name !== void 0 ? _items$value$name : value;
};
const getItems = (values, dimensionId, {
  itemFormatter,
  items
} = {}) => values.reduce((acc, value) => {
  acc[getPrefixedValue(value, dimensionId)] = {
    name: resolveName(value, itemFormatter, items)
  };
  return acc;
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
    if (value !== _response.NO_VALUE) {
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
  const uniqueSortedValuesAsc = getValuesUniqueSortedAsc(response.rows.map(row => row[headerIndex]).filter(value => value !== _response.NO_VALUE), header.valueType);
  return {
    ...response,
    metaData: {
      ...response.metaData,
      items: {
        ...response.metaData.items,
        ...getItems(uniqueSortedValuesAsc, header.name, {
          itemFormatter,
          items: response.metaData.items
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