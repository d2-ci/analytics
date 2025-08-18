"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortValuesAsc = exports.getUniqueSortedValues = exports.getUnique = exports.getRows = exports.getPrefixedValue = exports.getItems = exports.getDimensions = exports.applyDefaultHandler = void 0;
var _response = require("./response.js");
const getUnique = array => [...new Set(array)];
exports.getUnique = getUnique;
const sortValuesAsc = arr => {
  return arr.slice().sort((a, b) => {
    if (a === _response.NA_VALUE && b === _response.NA_VALUE) {
      return 0;
    }
    if (a === _response.NA_VALUE) {
      return 1;
    }
    if (b === _response.NA_VALUE) {
      return -1;
    }
    if (Number.isFinite(a) && Number.isFinite(b)) {
      return Number(a) - Number(b);
    } else {
      console.log('VALUES', typeof a, a, typeof b, b);
      return a.localeCompare(b);
    }
  });
};
exports.sortValuesAsc = sortValuesAsc;
const getUniqueSortedValues = (rows, headerIndex) => sortValuesAsc(getUnique(rows.map(row => row[headerIndex]).filter(value => value.length)));
exports.getUniqueSortedValues = getUniqueSortedValues;
const getPrefixedValue = (value, prefix) => `${prefix}${_response.PREFIX_SEPARATOR}${value}`;
exports.getPrefixedValue = getPrefixedValue;
const getItems = (values, dimensionId, itemFormatter) => values.reduce((items, value) => {
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
  const dimensionId = response.headers[headerIndex].name;
  const uniqueSortedValues = getUniqueSortedValues(response.rows, headerIndex);
  if (dimensionId === 'A03MvHHogjR.bx6fsa0t90x') {
    console.log(response, headerIndex, uniqueSortedValues);
  }
  return {
    ...response,
    metaData: {
      ...response.metaData,
      items: {
        ...response.metaData.items,
        ...getItems(uniqueSortedValues, dimensionId, itemFormatter)
      },
      dimensions: {
        ...response.metaData.dimensions,
        ...getDimensions(uniqueSortedValues, dimensionId)
      }
    },
    rows: [...getRows(response.rows, headerIndex, dimensionId)]
  };
};
exports.applyDefaultHandler = applyDefaultHandler;