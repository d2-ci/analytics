"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = void 0;
var _valueTypes = require("../valueTypes.js");
var _boolean = require("./boolean.js");
var _numeric = require("./numeric.js");
var _optionSet = require("./optionSet.js");
const transformResponse = response => {
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
  return transformedResponse;
};
exports.transformResponse = transformResponse;