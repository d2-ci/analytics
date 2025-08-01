"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionIdRows = exports.getOptionCodeIdMap = exports.applyOptionSetHandler = void 0;
const getOptionCodeIdMap = (optionIds, metaDataItems) => optionIds.reduce((map, optionId) => {
  map[metaDataItems[optionId].code] = optionId;
  return map;
}, {});
exports.getOptionCodeIdMap = getOptionCodeIdMap;
const getOptionIdRows = (rows, optionCodeIdMap, headerIndex) => {
  let row;
  let value;
  return rows.map(r => {
    value = r[headerIndex];
    row = [...r];
    row[headerIndex] = optionCodeIdMap[value];
    return row;
  });
};
exports.getOptionIdRows = getOptionIdRows;
const applyOptionSetHandler = (response, headerIndex) => {
  const header = response.headers[headerIndex];
  const optionIds = response.metaData.dimensions[header.name];
  const optionCodeIdMap = getOptionCodeIdMap(optionIds, response.metaData.items);
  return {
    ...response,
    rows: getOptionIdRows(response.rows, optionCodeIdMap, headerIndex)
  };
};
exports.applyOptionSetHandler = applyOptionSetHandler;