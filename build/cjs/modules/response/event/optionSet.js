"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionIdRows = exports.getOptionCodeIdMap = exports.applyOptionSetHandler = void 0;
var _response = require("./response.js");
const getOptionCodeIdMap = (optionIds, items) => optionIds.reduce((map, optionId) => {
  map[items[optionId].code] = optionId;
  return map;
}, {});
exports.getOptionCodeIdMap = getOptionCodeIdMap;
const getOptionIdRows = (rows, optionCodeIdMap, headerIndex) => {
  let value;
  let row;
  return rows.map(r => {
    value = r[headerIndex];
    if (value !== _response.NA_VALUE) {
      row = [...r];
      row[headerIndex] = optionCodeIdMap[value];
      return row;
    }
    return r;
  });
};
exports.getOptionIdRows = getOptionIdRows;
const applyOptionSetHandler = (response, headerIndex) => {
  const header = response.headers[headerIndex];
  response.metaData.dimensions[header.name] = response.metaData.dimensions[header.name].map(id => id === _response.D2__NOVALUE ? _response.NA_VALUE : id);
  const optionCodeIdMap = getOptionCodeIdMap(response.metaData.dimensions[header.name], response.metaData.items);
  return {
    ...response,
    rows: getOptionIdRows(response.rows, optionCodeIdMap, headerIndex)
  };
};
exports.applyOptionSetHandler = applyOptionSetHandler;