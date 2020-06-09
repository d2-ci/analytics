"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isArray = _interopRequireDefault(require("d2-utilizr/lib/isArray"));

var _isObject = _interopRequireDefault(require("d2-utilizr/lib/isObject"));

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var MODULE = 'Data validator: ';

function getMessage(text) {
  return MODULE + text;
}

function validateHeader(header, error) {
  if (!(0, _isObject.default)(header)) {
    error(getMessage('Header is not an object'));
  }

  if (header.meta) {
    if (!(0, _isString.default)(header.name)) {
      error(getMessage('Header name is not a string'));
    }
  }
}

function validateRowValue(rowValue, error) {
  if (!(0, _isString.default)(rowValue)) {
    error(getMessage('Row value is not a string'));
  }
}

function validateRow(row, headersLength, error) {
  if (!(0, _isArray.default)(row)) {
    error(getMessage('Data row is not an array'));
  }

  if (row.length !== headersLength) {
    error(getMessage('Data row length is invalid'));
  }

  row.forEach(function (rowValue) {
    return validateRowValue(rowValue, error);
  });
}

function _default(_ref) {
  var data = _ref.data,
      error = _ref.error,
      warning = _ref.warning;

  if (!(0, _isObject.default)(data)) {
    error(getMessage('Data is not an object'));
  } // headers


  if (!(0, _isArray.default)(data.headers)) {
    error(getMessage('Response headers is not an array'));
  }

  if (!data.headers.length > 1) {
    error(getMessage('At least two response headers required'));
  }

  data.headers.forEach(function (header) {
    return validateHeader(header, error);
  }); // meta data

  if (!(0, _isObject.default)(data.metaData)) {
    error(getMessage('Metadata is not an object'));
  }

  if (!(0, _isObject.default)(data.metaData.items)) {
    error(getMessage('Metadata items is not an object'));
  }

  if (!(0, _isObject.default)(data.metaData.dimensions)) {
    error(getMessage('Metadata dimensions is not an object'));
  } // data


  if (!(0, _isArray.default)(data.rows)) {
    warning(getMessage('Data rows is not an array'));
  }

  if (!data.rows.length) {
    warning(getMessage('No data rows provided'));
  }

  data.rows.forEach(function (row) {
    return validateRow(row, data.headers.length, error);
  });
  return data;
}