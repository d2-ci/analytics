"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIMENSION_PROP_REPETITION = exports.DIMENSION_PROP_PROGRAM_STAGE = exports.DIMENSION_PROP_LEGEND_SET = exports.DIMENSION_PROP_ITEMS = exports.DIMENSION_PROP_ID = exports.DIMENSION_PROP_FILTER = exports.DIMENSION_PROPS = exports.DIMENSION = void 0;

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _isString = _interopRequireDefault(require("lodash/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dimension
const DIMENSION = {
  isValid: dimension => (0, _isObject.default)(dimension)
}; // Props

exports.DIMENSION = DIMENSION;
const DIMENSION_PROP_ID = {
  name: 'dimension',
  defaultValue: '',
  required: true,
  isValid: prop => (0, _isString.default)(prop)
};
exports.DIMENSION_PROP_ID = DIMENSION_PROP_ID;
const DIMENSION_PROP_ITEMS = {
  name: 'items',
  defaultValue: [],
  required: false,
  isValid: prop => Array.isArray(prop)
};
exports.DIMENSION_PROP_ITEMS = DIMENSION_PROP_ITEMS;
const DIMENSION_PROP_FILTER = {
  name: 'filter',
  defaultValue: [],
  required: false,
  isValid: prop => (0, _isString.default)(prop)
};
exports.DIMENSION_PROP_FILTER = DIMENSION_PROP_FILTER;
const DIMENSION_PROP_LEGEND_SET = {
  name: 'legendSet',
  defaultValue: [],
  required: false,
  isValid: prop => (0, _isString.default)(prop)
};
exports.DIMENSION_PROP_LEGEND_SET = DIMENSION_PROP_LEGEND_SET;
const DIMENSION_PROP_PROGRAM_STAGE = {
  name: 'programStage',
  defaultValue: {},
  required: false,
  isValid: prop => (0, _isObject.default)(prop)
};
exports.DIMENSION_PROP_PROGRAM_STAGE = DIMENSION_PROP_PROGRAM_STAGE;
const DIMENSION_PROP_REPETITION = {
  name: 'repetition',
  defaultValue: [],
  required: false,
  isValid: prop => Array.isArray(prop)
};
exports.DIMENSION_PROP_REPETITION = DIMENSION_PROP_REPETITION;
const DIMENSION_PROPS = [DIMENSION_PROP_ID, DIMENSION_PROP_ITEMS, DIMENSION_PROP_FILTER, DIMENSION_PROP_LEGEND_SET, DIMENSION_PROP_PROGRAM_STAGE, DIMENSION_PROP_REPETITION];
exports.DIMENSION_PROPS = DIMENSION_PROPS;