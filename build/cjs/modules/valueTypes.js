"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueTypeDisplayNames = exports.isNumericValueType = exports.isCumulativeValueType = exports.isBooleanValueType = exports.VALUE_TYPE_USERNAME = exports.VALUE_TYPE_URL = exports.VALUE_TYPE_UNIT_INTERVAL = exports.VALUE_TYPE_TRUE_ONLY = exports.VALUE_TYPE_TRACKER_ASSOCIATE = exports.VALUE_TYPE_TIME = exports.VALUE_TYPE_TEXT = exports.VALUE_TYPE_REFERENCE = exports.VALUE_TYPE_PHONE_NUMBER = exports.VALUE_TYPE_PERCENTAGE = exports.VALUE_TYPE_ORGANISATION_UNIT = exports.VALUE_TYPE_NUMBER = exports.VALUE_TYPE_MULTI_TEXT = exports.VALUE_TYPE_LONG_TEXT = exports.VALUE_TYPE_LETTER = exports.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = exports.VALUE_TYPE_INTEGER_POSITIVE = exports.VALUE_TYPE_INTEGER_NEGATIVE = exports.VALUE_TYPE_INTEGER = exports.VALUE_TYPE_IMAGE = exports.VALUE_TYPE_GEOJSON = exports.VALUE_TYPE_FILE_RESOURCE = exports.VALUE_TYPE_EMAIL = exports.VALUE_TYPE_DATETIME = exports.VALUE_TYPE_DATE = exports.VALUE_TYPE_COORDINATE = exports.VALUE_TYPE_BOOLEAN = exports.VALUE_TYPE_AGE = void 0;
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* These types match the types in the backend
  https://github.com/dhis2/dhis2-core/blob/master/dhis-2/dhis-api/src/main/java/org/hisp/dhis/common/ValueType.java
*/

const VALUE_TYPE_TEXT = exports.VALUE_TYPE_TEXT = 'TEXT';
const VALUE_TYPE_LONG_TEXT = exports.VALUE_TYPE_LONG_TEXT = 'LONG_TEXT';
const VALUE_TYPE_MULTI_TEXT = exports.VALUE_TYPE_MULTI_TEXT = 'MULTI_TEXT';
const VALUE_TYPE_LETTER = exports.VALUE_TYPE_LETTER = 'LETTER';
const VALUE_TYPE_PHONE_NUMBER = exports.VALUE_TYPE_PHONE_NUMBER = 'PHONE_NUMBER';
const VALUE_TYPE_EMAIL = exports.VALUE_TYPE_EMAIL = 'EMAIL';
const VALUE_TYPE_BOOLEAN = exports.VALUE_TYPE_BOOLEAN = 'BOOLEAN';
const VALUE_TYPE_TRUE_ONLY = exports.VALUE_TYPE_TRUE_ONLY = 'TRUE_ONLY';
const VALUE_TYPE_DATE = exports.VALUE_TYPE_DATE = 'DATE';
const VALUE_TYPE_DATETIME = exports.VALUE_TYPE_DATETIME = 'DATETIME';
const VALUE_TYPE_TIME = exports.VALUE_TYPE_TIME = 'TIME';
const VALUE_TYPE_NUMBER = exports.VALUE_TYPE_NUMBER = 'NUMBER';
const VALUE_TYPE_UNIT_INTERVAL = exports.VALUE_TYPE_UNIT_INTERVAL = 'UNIT_INTERVAL';
const VALUE_TYPE_PERCENTAGE = exports.VALUE_TYPE_PERCENTAGE = 'PERCENTAGE';
const VALUE_TYPE_INTEGER = exports.VALUE_TYPE_INTEGER = 'INTEGER';
const VALUE_TYPE_INTEGER_POSITIVE = exports.VALUE_TYPE_INTEGER_POSITIVE = 'INTEGER_POSITIVE';
const VALUE_TYPE_INTEGER_NEGATIVE = exports.VALUE_TYPE_INTEGER_NEGATIVE = 'INTEGER_NEGATIVE';
const VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = exports.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = 'INTEGER_ZERO_OR_POSITIVE';
const VALUE_TYPE_TRACKER_ASSOCIATE = exports.VALUE_TYPE_TRACKER_ASSOCIATE = 'TRACKER_ASSOCIATE';
const VALUE_TYPE_USERNAME = exports.VALUE_TYPE_USERNAME = 'USERNAME';
const VALUE_TYPE_COORDINATE = exports.VALUE_TYPE_COORDINATE = 'COORDINATE';
const VALUE_TYPE_ORGANISATION_UNIT = exports.VALUE_TYPE_ORGANISATION_UNIT = 'ORGANISATION_UNIT';
const VALUE_TYPE_REFERENCE = exports.VALUE_TYPE_REFERENCE = 'REFERENCE';
const VALUE_TYPE_AGE = exports.VALUE_TYPE_AGE = 'AGE';
const VALUE_TYPE_URL = exports.VALUE_TYPE_URL = 'URL';
const VALUE_TYPE_FILE_RESOURCE = exports.VALUE_TYPE_FILE_RESOURCE = 'FILE_RESOURCE';
const VALUE_TYPE_IMAGE = exports.VALUE_TYPE_IMAGE = 'IMAGE';
const VALUE_TYPE_GEOJSON = exports.VALUE_TYPE_GEOJSON = 'GEOJSON';
const valueTypeDisplayNames = exports.valueTypeDisplayNames = {
  [VALUE_TYPE_TEXT]: _index.default.t('Text'),
  [VALUE_TYPE_LONG_TEXT]: _index.default.t('Long text'),
  [VALUE_TYPE_MULTI_TEXT]: _index.default.t('Multi text'),
  [VALUE_TYPE_LETTER]: _index.default.t('Letter'),
  [VALUE_TYPE_PHONE_NUMBER]: _index.default.t('Phone number'),
  [VALUE_TYPE_EMAIL]: _index.default.t('Email'),
  [VALUE_TYPE_BOOLEAN]: _index.default.t('Yes/No'),
  [VALUE_TYPE_TRUE_ONLY]: _index.default.t('Yes Only'),
  [VALUE_TYPE_DATE]: _index.default.t('Date'),
  [VALUE_TYPE_DATETIME]: _index.default.t('Date & Time'),
  [VALUE_TYPE_TIME]: _index.default.t('Time'),
  [VALUE_TYPE_NUMBER]: _index.default.t('Number'),
  [VALUE_TYPE_UNIT_INTERVAL]: _index.default.t('Unit interval'),
  [VALUE_TYPE_PERCENTAGE]: _index.default.t('Percentage'),
  [VALUE_TYPE_INTEGER]: _index.default.t('Integer'),
  [VALUE_TYPE_INTEGER_POSITIVE]: _index.default.t('Positive Integer'),
  [VALUE_TYPE_INTEGER_NEGATIVE]: _index.default.t('Negative Integer'),
  [VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE]: _index.default.t('Positive or Zero Integer'),
  [VALUE_TYPE_TRACKER_ASSOCIATE]: _index.default.t('Tracker Associate'),
  [VALUE_TYPE_USERNAME]: _index.default.t('Username'),
  [VALUE_TYPE_COORDINATE]: _index.default.t('Coordinate'),
  [VALUE_TYPE_ORGANISATION_UNIT]: _index.default.t('Organisation unit'),
  [VALUE_TYPE_REFERENCE]: _index.default.t('Reference'),
  [VALUE_TYPE_AGE]: _index.default.t('Age'),
  [VALUE_TYPE_URL]: _index.default.t('URL'),
  [VALUE_TYPE_FILE_RESOURCE]: _index.default.t('File'),
  [VALUE_TYPE_IMAGE]: _index.default.t('Image'),
  [VALUE_TYPE_GEOJSON]: _index.default.t('GeoJSON')
};
const NUMERIC_VALUE_TYPES = [VALUE_TYPE_NUMBER, VALUE_TYPE_UNIT_INTERVAL, VALUE_TYPE_PERCENTAGE, VALUE_TYPE_INTEGER, VALUE_TYPE_INTEGER_POSITIVE, VALUE_TYPE_INTEGER_NEGATIVE, VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE];
const BOOLEAN_VALUE_TYPES = [VALUE_TYPE_BOOLEAN, VALUE_TYPE_TRUE_ONLY];
const CUMULATIVE_VALUE_TYPES = [VALUE_TYPE_NUMBER, VALUE_TYPE_INTEGER, VALUE_TYPE_INTEGER_POSITIVE, VALUE_TYPE_INTEGER_NEGATIVE, VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE, ...BOOLEAN_VALUE_TYPES];
const isCumulativeValueType = type => CUMULATIVE_VALUE_TYPES.includes(type);
exports.isCumulativeValueType = isCumulativeValueType;
const isNumericValueType = type => NUMERIC_VALUE_TYPES.includes(type);
exports.isNumericValueType = isNumericValueType;
const isBooleanValueType = type => BOOLEAN_VALUE_TYPES.includes(type);
exports.isBooleanValueType = isBooleanValueType;