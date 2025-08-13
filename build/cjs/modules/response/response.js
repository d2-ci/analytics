"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.NA_VALUE = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _predefinedDimensions = require("../predefinedDimensions.js");
var _valueTypes = require("../valueTypes.js");
var _boolean = require("./boolean.js");
var _default = require("./default.js");
var _optionSet = require("./optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NA_VALUE = exports.NA_VALUE = '';
const transformResponse = (response, {
  hideNaData = false
} = {}) => {
  let transformedResponse = {
    ...response,
    metaData: {
      ...response.metaData,
      items: {
        ...response.metaData.items
      },
      dimensions: {
        ...response.metaData.dimensions
      }
    }
  };
  const metaHeaders = response.headers.map((header, index) => ({
    ...header,
    index
  })).filter(header => Boolean(header.meta) && ![_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT].includes(header.name));
  metaHeaders.forEach(header => {
    if (header.optionSet) {
      transformedResponse = (0, _optionSet.applyOptionSetHandler)(transformedResponse, header.index);
    } else if ((0, _valueTypes.isNumericValueType)(header.valueType) && !header.legendSet || [_valueTypes.VALUE_TYPE_EMAIL, _valueTypes.VALUE_TYPE_PHONE_NUMBER, _valueTypes.VALUE_TYPE_TEXT, _valueTypes.VALUE_TYPE_TIME, _valueTypes.VALUE_TYPE_URL, _valueTypes.VALUE_TYPE_USERNAME].includes(header.valueType)) {
      transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index);
    } else if ((0, _valueTypes.isBooleanValueType)(header.valueType)) {
      transformedResponse = (0, _boolean.applyBooleanHandler)(transformedResponse, header.index);
    } else if (header.valueType === _valueTypes.VALUE_TYPE_DATETIME) {
      transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index, {
        itemFormatter: name => name.replace(/:00\.0$/, '')
      });
    } else if (header.valueType === _valueTypes.VALUE_TYPE_DATE) {
      transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index, {
        itemFormatter: name => name.replace(/ 00:00:00\.0$/, '')
      });
    } else if (header.valueType === _valueTypes.VALUE_TYPE_PERCENTAGE) {
      transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index, {
        itemFormatter: name => name.endsWith('.0') ? name.slice(0, -2) : name
      });
    }
  });
  if (!hideNaData) {
    metaHeaders.forEach(header => {
      if (response.rows.map(row => row[header.index]).includes(NA_VALUE)) {
        transformedResponse.metaData.dimensions[header.name] = [...transformedResponse.metaData.dimensions[header.name], NA_VALUE];
      }
    });
    transformedResponse.metaData.items[NA_VALUE] = {
      name: _d2I18n.default.t('N/A')
    };
  }
  return transformedResponse;
};
exports.transformResponse = transformResponse;