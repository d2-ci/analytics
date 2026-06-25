"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformResponse = exports.getItemFormatterByValueType = exports.getItemFormatterByHeaderName = exports.getItemFormatter = exports.UNSUPPORTED_VALUE_TYPES = exports.PREFIX_SEPARATOR = exports.NO_VALUE_ITEM = exports.NO_VALUE = exports.D2__NOVALUE = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _predefinedDimensions = require("../../predefinedDimensions.js");
var _valueTypes = require("../../valueTypes.js");
var _default = require("./default.js");
var _optionSet = require("./optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Responses coming from these endpoints need transformation
// before we can pass it to the pivot table engine:
// - analytics/events/aggregate
// - analytics/enrollments/aggregate

const PREFIX_SEPARATOR = exports.PREFIX_SEPARATOR = '_';
const D2__NOVALUE = exports.D2__NOVALUE = 'D2__NOVALUE';
const NO_VALUE = exports.NO_VALUE = '';
const NO_VALUE_ITEM = exports.NO_VALUE_ITEM = {
  name: _d2I18n.default.t('No value'),
  style: {
    color: '#6C7787',
    fontFamily: 'monospace',
    letterSpacing: '-0.4px'
  }
};
const UNSUPPORTED_VALUE_TYPES = exports.UNSUPPORTED_VALUE_TYPES = [_valueTypes.VALUE_TYPE_GEOJSON, _valueTypes.VALUE_TYPE_FILE_RESOURCE, _valueTypes.VALUE_TYPE_IMAGE, _valueTypes.VALUE_TYPE_MULTI_TEXT, _valueTypes.VALUE_TYPE_REFERENCE];
const STATUSES = {
  ACTIVE: _d2I18n.default.t('Active'),
  COMPLETED: _d2I18n.default.t('Completed'),
  SCHEDULE: _d2I18n.default.t('Scheduled'),
  CANCELLED: _d2I18n.default.t('Cancelled')
};
const formatStatus = value => STATUSES[value] || value;
const getItemFormatter = ({
  name,
  valueType
}) => getItemFormatterByHeaderName(name) || getItemFormatterByValueType(valueType);
exports.getItemFormatter = getItemFormatter;
const getItemFormatterByHeaderName = name => name.endsWith('eventstatus') || name.endsWith('programstatus') ? formatStatus : undefined;
exports.getItemFormatterByHeaderName = getItemFormatterByHeaderName;
const getItemFormatterByValueType = valueType => {
  switch (valueType) {
    case _valueTypes.VALUE_TYPE_AGE:
    case _valueTypes.VALUE_TYPE_DATE:
      return name => name.replace(/ 00:00:00\.0$/, '');
    case _valueTypes.VALUE_TYPE_BOOLEAN:
    case _valueTypes.VALUE_TYPE_TRUE_ONLY:
      return name => name === '1' ? _d2I18n.default.t('Yes') : _d2I18n.default.t('No');
    case _valueTypes.VALUE_TYPE_DATETIME:
      return name => name.replace(/:00\.0$/, '');
    case _valueTypes.VALUE_TYPE_PERCENTAGE:
      return name => name.endsWith('.0') ? name.slice(0, -2) : name;
    default:
      return undefined;
  }
};
exports.getItemFormatterByValueType = getItemFormatterByValueType;
const EXCLUDED_HEADER_NAMES = new Set([_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT, 'lastupdated', 'created', 'completed']);
const EXCLUDED_HEADER_SUFFIXES = ['.eventdate', '.enrollmentdate', '.scheduleddate', '.incidentdate', '.ou'];
const isIncludedHeader = header => Boolean(header.meta) && !EXCLUDED_HEADER_NAMES.has(header.name) && !EXCLUDED_HEADER_SUFFIXES.some(suffix => header.name.endsWith(suffix));
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
  const metaHeaders = response.headers.map((header, index) => ({
    ...header,
    index
  })).filter(isIncludedHeader);

  // Legendsets use uids and do not need transformation
  // Skip unsupported value types
  // Option set and Boolean have separate handlers
  // All other types use default handler with specific item formatter
  metaHeaders.forEach(header => {
    if (!(header.legendSet || UNSUPPORTED_VALUE_TYPES.includes(header.valueType))) {
      if (header.optionSet) {
        transformedResponse = (0, _optionSet.applyOptionSetHandler)(transformedResponse, header.index);
      } else {
        transformedResponse = (0, _default.applyDefaultHandler)(transformedResponse, header.index, {
          itemFormatter: getItemFormatter(header)
        });
      }
    }
  });

  // Add "No value" dimension item if "Hide NA data" option is disabled
  // Only add if there is at least one empty value
  // Only add if "no value" is not already a dimension
  if (!hideNaData) {
    metaHeaders.forEach(header => {
      if (transformedResponse.rows.map(row => row[header.index]).includes(NO_VALUE) && !transformedResponse.metaData.dimensions[header.name].includes(NO_VALUE)) {
        transformedResponse.metaData.dimensions[header.name] = [...transformedResponse.metaData.dimensions[header.name], NO_VALUE];
        transformedResponse.metaData.items[NO_VALUE] = NO_VALUE_ITEM;
      }
    });
  }
  return transformedResponse;
};
exports.transformResponse = transformResponse;