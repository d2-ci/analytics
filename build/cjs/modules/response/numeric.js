"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortStringsAsNumbersAsc = exports.getUnique = exports.getPrefixedValue = exports.getNumericRows = exports.getNumericItems = exports.getNumericDimension = exports.applyNumericHandler = void 0;
const getUnique = array => [...new Set(array)];
exports.getUnique = getUnique;
const sortStringsAsNumbersAsc = arr => {
  return arr.slice().sort((a, b) => Number(a) - Number(b));
};
exports.sortStringsAsNumbersAsc = sortStringsAsNumbersAsc;
const getPrefixedValue = (value, prefix) => `${prefix}:${value}`;
exports.getPrefixedValue = getPrefixedValue;
const getNumericItems = (values, dimensionId) => values.reduce((items, value) => {
  items[getPrefixedValue(value, dimensionId)] = {
    name: value
  };
  return items;
}, {});
exports.getNumericItems = getNumericItems;
const getNumericDimension = (values, dimensionId) => ({
  [dimensionId]: values.map(value => getPrefixedValue(value, dimensionId))
});
exports.getNumericDimension = getNumericDimension;
const getNumericRows = (rows, headerIndex, dimensionId) => {
  let row;
  let value;
  return rows.map(r => {
    value = r[headerIndex];
    if (value !== '') {
      row = [...r];
      row[headerIndex] = getPrefixedValue(value, dimensionId);
      return row;
    }
    return r;
  });
};
exports.getNumericRows = getNumericRows;
const applyNumericHandler = (response, headerIndex) => {
  const uniqueSortedValues = sortStringsAsNumbersAsc(getUnique(response.rows.map(r => r[headerIndex])));
  const dimensionId = response.headers[headerIndex].name;
  return {
    ...response,
    metaData: {
      items: {
        ...response.metaData.items,
        ...getNumericItems(uniqueSortedValues, dimensionId)
      },
      dimensions: {
        ...response.metaData.dimensions,
        ...getNumericDimension(uniqueSortedValues, dimensionId)
      }
    },
    rows: [...getNumericRows(response.rows, headerIndex, dimensionId)]
  };
};
exports.applyNumericHandler = applyNumericHandler;