"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_AXIS_IDS = exports.DEFAULT_AXIS_IDS = exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = exports.AXIS_ID_FILTERS = exports.AXIS_ID_ROWS = exports.AXIS_ID_COLUMNS = exports.AXIS = void 0;
// Axis
var AXIS = {
  defaultValue: [],
  isValid: function isValid(axis) {
    return Array.isArray(axis);
  }
}; // Axis ids

exports.AXIS = AXIS;
var AXIS_ID_COLUMNS = 'columns';
exports.AXIS_ID_COLUMNS = AXIS_ID_COLUMNS;
var AXIS_ID_ROWS = 'rows';
exports.AXIS_ID_ROWS = AXIS_ID_ROWS;
var AXIS_ID_FILTERS = 'filters';
exports.AXIS_ID_FILTERS = AXIS_ID_FILTERS;
var AXIS_ID_YEAR_OVER_YEAR_SERIES = 'yearOverYearSeries';
exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = AXIS_ID_YEAR_OVER_YEAR_SERIES;
var AXIS_ID_YEAR_OVER_YEAR_CATEGORY = 'yearOverYearCategory';
exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = AXIS_ID_YEAR_OVER_YEAR_CATEGORY;
var DEFAULT_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS];
exports.DEFAULT_AXIS_IDS = DEFAULT_AXIS_IDS;
var ALL_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS, AXIS_ID_YEAR_OVER_YEAR_SERIES, AXIS_ID_YEAR_OVER_YEAR_CATEGORY];
exports.ALL_AXIS_IDS = ALL_AXIS_IDS;