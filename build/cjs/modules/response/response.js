"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.itemFormatterByValueType = exports.UNSUPPORTED_VALUE_TYPES = exports.PREFIX_SEPARATOR = exports.NA_VALUE_DISPLAY_NAME = exports.NA_VALUE = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _predefinedDimensions = require("../predefinedDimensions.js");
var _valueTypes = require("../valueTypes.js");
var _boolean = require("./boolean.js");
var _default = require("./default.js");
var _optionSet = require("./optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NA_VALUE = exports.NA_VALUE = '';
const NA_VALUE_DISPLAY_NAME = exports.NA_VALUE_DISPLAY_NAME = _d2I18n.default.t('No value');
const PREFIX_SEPARATOR = exports.PREFIX_SEPARATOR = '_';
const UNSUPPORTED_VALUE_TYPES = exports.UNSUPPORTED_VALUE_TYPES = [_valueTypes.VALUE_TYPE_COORDINATE, _valueTypes.VALUE_TYPE_GEOJSON, _valueTypes.VALUE_TYPE_FILE_RESOURCE, _valueTypes.VALUE_TYPE_IMAGE, _valueTypes.VALUE_TYPE_MULTI_TEXT, _valueTypes.VALUE_TYPE_REFERENCE];
const itemFormatterByValueType = exports.itemFormatterByValueType = {
  [_valueTypes.VALUE_TYPE_AGE]: name => name.replace(/ 00:00:00\.0$/, ''),
  [_valueTypes.VALUE_TYPE_DATETIME]: name => name.replace(/:00\.0$/, ''),
  [_valueTypes.VALUE_TYPE_DATE]: name => name.replace(/ 00:00:00\.0$/, ''),
  [_valueTypes.VALUE_TYPE_PERCENTAGE]: name => name.endsWith('.0') ? name.slice(0, -2) : name
};
const transformResponse = (response, {
  hideNaData = false
} = {}) => {
  // Do not modify the original response
  // Rows is mapped by the handlers
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

  // Add index to all headers
  // Include only headers that are "meta" and skip "pe" and "ou"
  const metaHeaders = response.headers.map((header, index) => Object.assign({}, header, {
    index
  })).filter(header => Boolean(header.meta) && ![_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT].includes(header.name));

  // Legendsets use uids and do not need transformation
  // Skip unsupported value types
  // Option set and Boolean have separate handlers
  // All other types use default handler with specific item formatter
  metaHeaders.forEach(header => {
    if (!(header.legendSet || UNSUPPORTED_VALUE_TYPES.includes(header.valueType))) {
      if (header.optionSet) {
        transformedResponse = (0, _optionSet.applyOptionSetHandler)(transformedResponse, header.index);
      } else if ((0, _valueTypes.isBooleanValueType)(header.valueType)) {
        transformedResponse = (0, _boolean.applyBooleanHandler)(transformedResponse, header.index);
      } else {
        transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index, {
          itemFormatter: itemFormatterByValueType[header.valueType]
        });
      }
    }
  });

  // Add "No value" dimension item if "Hide NA data" option is disabled
  // Only add if there is at least one empty value
  if (!hideNaData) {
    metaHeaders.forEach(header => {
      if (response.rows.map(row => row[header.index]).includes(NA_VALUE)) {
        transformedResponse.metaData.dimensions[header.name] = [...transformedResponse.metaData.dimensions[header.name], NA_VALUE];
      }
    });
  }
  return transformedResponse;
};
exports.transformResponse = transformResponse;