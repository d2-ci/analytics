"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.removeNaDimensionItems = void 0;
var _valueTypes = require("../valueTypes.js");
var _boolean = require("./boolean.js");
var _numeric = require("./numeric.js");
var _optionSet = require("./optionSet.js");
const removeNaDimensionItems = obj => Object.keys(obj).reduce((acc, key) => {
  const value = obj[key];
  acc[key] = Array.isArray(value) ? value.filter(str => str !== '') : value;
  return acc;
}, {});
exports.removeNaDimensionItems = removeNaDimensionItems;
const transformResponse = (response, {
  hideNaData
} = {}) => {
  let transformedResponse = {
    ...response
  };
  response.headers.forEach((header, index) => {
    if (header.meta) {
      if (header.optionSet) {
        transformedResponse = (0, _optionSet.applyOptionSetHandler)(transformedResponse, index);
      } else if ((0, _valueTypes.isNumericValueType)(header.valueType) && !header.legendSet) {
        transformedResponse = (0, _numeric.applyNumericHandler)(transformedResponse, index);
      } else if ((0, _valueTypes.isBooleanValueType)(header.valueType)) {
        transformedResponse = (0, _boolean.applyBooleanHandler)(transformedResponse, index);
      }
    }
  });
  if (hideNaData) {
    transformedResponse.metaData.dimensions = removeNaDimensionItems(transformedResponse.metaData.dimensions);
  }
  return transformedResponse;
};
exports.transformResponse = transformResponse;