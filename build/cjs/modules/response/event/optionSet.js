"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionIdRows = exports.getOptionCodeIdMap = exports.applyOptionSetHandler = void 0;
var _response = require("./response.js");
const getOptionCodeIdMap = (optionIds, items) => optionIds.reduce((map, optionId) => {
  var _items$optionId;
  if ((_items$optionId = items[optionId]) !== null && _items$optionId !== void 0 && _items$optionId.code) {
    map[items[optionId].code] = optionId;
  }
  return map;
}, {});
exports.getOptionCodeIdMap = getOptionCodeIdMap;
const getOptionIdRows = (rows, optionCodeIdMap, headerIndex) => {
  let value;
  let row;
  return rows.map(r => {
    value = r[headerIndex];
    if (value !== _response.NO_VALUE) {
      row = [...r];
      row[headerIndex] = optionCodeIdMap[value];
      return row;
    }
    return r;
  });
};

// Replace codes with id in rows
// If D2__NOVALUE, replace with NO_VALUE and add item
exports.getOptionIdRows = getOptionIdRows;
const applyOptionSetHandler = (response, headerIndex) => {
  const header = response.headers[headerIndex];
  const optionCodeIdMap = getOptionCodeIdMap(response.metaData.dimensions[header.name], response.metaData.items);
  const res = {
    ...response,
    rows: getOptionIdRows(response.rows, optionCodeIdMap, headerIndex)
  };
  if (res.metaData.dimensions[header.name].includes(_response.D2__NOVALUE)) {
    res.metaData.dimensions[header.name] = res.metaData.dimensions[header.name].map(d => d === _response.D2__NOVALUE ? _response.NO_VALUE : d);
    res.metaData.items = {
      ...res.metaData.items,
      [_response.NO_VALUE]: _response.NO_VALUE_ITEM
    };
  }
  return res;
};
exports.applyOptionSetHandler = applyOptionSetHandler;