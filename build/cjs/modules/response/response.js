"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.itemFormatterByValueType = exports.PREFIX_SEPARATOR = exports.NA_VALUE_DISPLAY_NAME = exports.NA_VALUE = void 0;
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
const itemFormatterByValueType = exports.itemFormatterByValueType = {
  [_valueTypes.VALUE_TYPE_DATETIME]: name => name.replace(/:00\.0$/, ''),
  [_valueTypes.VALUE_TYPE_DATE]: name => name.replace(/ 00:00:00\.0$/, ''),
  [_valueTypes.VALUE_TYPE_PERCENTAGE]: name => name.endsWith('.0') ? name.slice(0, -2) : name
};
const transformResponse = (response, {
  hideNaData = false
} = {}) => {
  const metaHeaders = response.headers.map((header, index) => ({
    ...header,
    index
  })).filter(header => Boolean(header.meta) && ![_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT].includes(header.name));
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

  // Legendset does not need transformation
  // Age and Coordinate not supported
  // Option set and Boolean have separate handlers
  // All other types use default handler with specific item formatter
  metaHeaders.forEach(header => {
    if (!(header.legendSet || [_valueTypes.VALUE_TYPE_AGE, _valueTypes.VALUE_TYPE_COORDINATE].includes(header.value))) {
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

  // When "Hide Na Data" option is disabled, we still only show the "No value" item if there are N/A values
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