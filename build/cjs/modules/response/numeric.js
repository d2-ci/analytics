"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortStringsAsNumbersAsc = exports.getUnique = exports.getPrefixedValue = exports.getNumericRows = exports.getNumericItems = exports.getNumericDimension = exports.applyNumericHandler = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getUnique = array => [...new Set(array)];
exports.getUnique = getUnique;
const sortStringsAsNumbersAsc = arr => {
  return arr.slice().sort((a, b) => {
    if (a === '' && b === '') {
      return 0;
    }
    if (a === '') {
      return 1;
    }
    if (b === '') {
      return -1;
    }
    return Number(a) - Number(b);
  });
};
exports.sortStringsAsNumbersAsc = sortStringsAsNumbersAsc;
const getPrefixedValue = (value, prefix) => value !== '' ? `${prefix}:${value}` : value;
exports.getPrefixedValue = getPrefixedValue;
const getNumericItems = (values, dimensionId) => values.reduce((items, value) => {
  items[getPrefixedValue(value, dimensionId)] = {
    name: value || _d2I18n.default.t('N/A')
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
  return rows.map(r => {
    row = [...r];
    row[headerIndex] = getPrefixedValue(row[headerIndex], dimensionId);
    return row;
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