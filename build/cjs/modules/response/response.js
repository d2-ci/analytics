"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.NA_VALUE = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _valueTypes = require("../valueTypes.js");
var _boolean = require("./boolean.js");
var _numeric = require("./numeric.js");
var _optionSet = require("./optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NA_VALUE = exports.NA_VALUE = '';
const transformResponse = (response, {
  hideNaData
} = {}) => {
  let transformedResponse = {
    ...response
  };
  const metaHeaders = response.headers.map((header, index) => ({
    ...header,
    index
  })).filter(header => Boolean(header.meta));
  metaHeaders.forEach(header => {
    if (header.optionSet) {
      transformedResponse = (0, _optionSet.applyOptionSetHandler)(transformedResponse, header.index);
    } else if ((0, _valueTypes.isNumericValueType)(header.valueType) && !header.legendSet) {
      transformedResponse = (0, _numeric.applyNumericHandler)(transformedResponse, header.index);
    } else if ((0, _valueTypes.isBooleanValueType)(header.valueType)) {
      transformedResponse = (0, _boolean.applyBooleanHandler)(transformedResponse, header.index);
    }
  });
  if (!hideNaData) {
    metaHeaders.forEach(header => {
      if (response.rows.map(row => row[header.index]).includes(NA_VALUE)) {
        transformedResponse.metaData.dimensions[header.name].dimensions.push(NA_VALUE);
      }
    });
    transformedResponse.metaData.items[NA_VALUE] = {
      name: _d2I18n.default.t('N/A')
    };
  }
  return transformedResponse;
};
exports.transformResponse = transformResponse;