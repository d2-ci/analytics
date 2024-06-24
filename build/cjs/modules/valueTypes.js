"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumericValueType = exports.VALUE_TYPE_USERNAME = exports.VALUE_TYPE_URL = exports.VALUE_TYPE_UNIT_INTERVAL = exports.VALUE_TYPE_TRUE_ONLY = exports.VALUE_TYPE_TIME = exports.VALUE_TYPE_TEXT = exports.VALUE_TYPE_PHONE_NUMBER = exports.VALUE_TYPE_PERCENTAGE = exports.VALUE_TYPE_ORGANISATION_UNIT = exports.VALUE_TYPE_NUMBER = exports.VALUE_TYPE_LONG_TEXT = exports.VALUE_TYPE_LETTER = exports.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = exports.VALUE_TYPE_INTEGER_POSITIVE = exports.VALUE_TYPE_INTEGER_NEGATIVE = exports.VALUE_TYPE_INTEGER = exports.VALUE_TYPE_EMAIL = exports.VALUE_TYPE_DATETIME = exports.VALUE_TYPE_DATE = exports.VALUE_TYPE_BOOLEAN = exports.VALUE_TYPE_AGE = void 0;
/* These types match the types in the backend
  https://github.com/dhis2/dhis2-core/blob/master/dhis-2/dhis-api/src/main/java/org/hisp/dhis/common/ValueType.java
*/

const VALUE_TYPE_NUMBER = 'NUMBER';
exports.VALUE_TYPE_NUMBER = VALUE_TYPE_NUMBER;
const VALUE_TYPE_UNIT_INTERVAL = 'UNIT_INTERVAL';
exports.VALUE_TYPE_UNIT_INTERVAL = VALUE_TYPE_UNIT_INTERVAL;
const VALUE_TYPE_PERCENTAGE = 'PERCENTAGE';
exports.VALUE_TYPE_PERCENTAGE = VALUE_TYPE_PERCENTAGE;
const VALUE_TYPE_INTEGER = 'INTEGER';
exports.VALUE_TYPE_INTEGER = VALUE_TYPE_INTEGER;
const VALUE_TYPE_INTEGER_POSITIVE = 'INTEGER_POSITIVE';
exports.VALUE_TYPE_INTEGER_POSITIVE = VALUE_TYPE_INTEGER_POSITIVE;
const VALUE_TYPE_INTEGER_NEGATIVE = 'INTEGER_NEGATIVE';
exports.VALUE_TYPE_INTEGER_NEGATIVE = VALUE_TYPE_INTEGER_NEGATIVE;
const VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = 'INTEGER_ZERO_OR_POSITIVE';
exports.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE = VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE;
const VALUE_TYPE_TEXT = 'TEXT';
exports.VALUE_TYPE_TEXT = VALUE_TYPE_TEXT;
const VALUE_TYPE_LONG_TEXT = 'LONG_TEXT';
exports.VALUE_TYPE_LONG_TEXT = VALUE_TYPE_LONG_TEXT;
const VALUE_TYPE_LETTER = 'LETTER';
exports.VALUE_TYPE_LETTER = VALUE_TYPE_LETTER;
const VALUE_TYPE_PHONE_NUMBER = 'PHONE_NUMBER';
exports.VALUE_TYPE_PHONE_NUMBER = VALUE_TYPE_PHONE_NUMBER;
const VALUE_TYPE_EMAIL = 'EMAIL';
exports.VALUE_TYPE_EMAIL = VALUE_TYPE_EMAIL;
const VALUE_TYPE_USERNAME = 'USERNAME';
exports.VALUE_TYPE_USERNAME = VALUE_TYPE_USERNAME;
const VALUE_TYPE_URL = 'URL';
exports.VALUE_TYPE_URL = VALUE_TYPE_URL;
const VALUE_TYPE_BOOLEAN = 'BOOLEAN';
exports.VALUE_TYPE_BOOLEAN = VALUE_TYPE_BOOLEAN;
const VALUE_TYPE_TRUE_ONLY = 'TRUE_ONLY';
exports.VALUE_TYPE_TRUE_ONLY = VALUE_TYPE_TRUE_ONLY;
const VALUE_TYPE_DATE = 'DATE';
exports.VALUE_TYPE_DATE = VALUE_TYPE_DATE;
const VALUE_TYPE_TIME = 'TIME';
exports.VALUE_TYPE_TIME = VALUE_TYPE_TIME;
const VALUE_TYPE_DATETIME = 'DATETIME';
exports.VALUE_TYPE_DATETIME = VALUE_TYPE_DATETIME;
const VALUE_TYPE_ORGANISATION_UNIT = 'ORGANISATION_UNIT';
exports.VALUE_TYPE_ORGANISATION_UNIT = VALUE_TYPE_ORGANISATION_UNIT;
const VALUE_TYPE_AGE = 'AGE';
exports.VALUE_TYPE_AGE = VALUE_TYPE_AGE;
const NUMERIC_VALUE_TYPES = [VALUE_TYPE_NUMBER, VALUE_TYPE_UNIT_INTERVAL, VALUE_TYPE_PERCENTAGE, VALUE_TYPE_INTEGER, VALUE_TYPE_INTEGER_POSITIVE, VALUE_TYPE_INTEGER_NEGATIVE, VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE];
const isNumericValueType = type => NUMERIC_VALUE_TYPES.includes(type);
exports.isNumericValueType = isNumericValueType;