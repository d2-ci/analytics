"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AXIS_NAMES = exports.AXIS_NAME_FILTERS = exports.AXIS_NAME_ROWS = exports.AXIS_NAME_COLUMNS = exports.AXIS = void 0;
// Axis
var AXIS = {
  defaultValue: [],
  isValid: function isValid(axis) {
    return Array.isArray(axis);
  } // Axis names

};
exports.AXIS = AXIS;
var AXIS_NAME_COLUMNS = 'columns';
exports.AXIS_NAME_COLUMNS = AXIS_NAME_COLUMNS;
var AXIS_NAME_ROWS = 'rows';
exports.AXIS_NAME_ROWS = AXIS_NAME_ROWS;
var AXIS_NAME_FILTERS = 'filters';
exports.AXIS_NAME_FILTERS = AXIS_NAME_FILTERS;
var AXIS_NAMES = [AXIS_NAME_COLUMNS, AXIS_NAME_ROWS, AXIS_NAME_FILTERS];
exports.AXIS_NAMES = AXIS_NAMES;