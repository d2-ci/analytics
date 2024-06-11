"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_AXIS_IDS = exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = exports.AXIS_ID_ROWS = exports.AXIS_ID_FILTERS = exports.AXIS_ID_COLUMNS = exports.AXIS = exports.ALL_AXIS_IDS = void 0;
// Axis

const AXIS = {
  defaultValue: [],
  isValid: axis => Array.isArray(axis)
};

// Axis ids
exports.AXIS = AXIS;
const AXIS_ID_COLUMNS = 'columns';
exports.AXIS_ID_COLUMNS = AXIS_ID_COLUMNS;
const AXIS_ID_ROWS = 'rows';
exports.AXIS_ID_ROWS = AXIS_ID_ROWS;
const AXIS_ID_FILTERS = 'filters';
exports.AXIS_ID_FILTERS = AXIS_ID_FILTERS;
const AXIS_ID_YEAR_OVER_YEAR_SERIES = 'yearOverYearSeries';
exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = AXIS_ID_YEAR_OVER_YEAR_SERIES;
const AXIS_ID_YEAR_OVER_YEAR_CATEGORY = 'yearOverYearCategory';
//export const AXIS_ID_POINTS_CATEGORY = 'pointsCategory'
exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = AXIS_ID_YEAR_OVER_YEAR_CATEGORY;
const DEFAULT_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS];
exports.DEFAULT_AXIS_IDS = DEFAULT_AXIS_IDS;
const ALL_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS, AXIS_ID_YEAR_OVER_YEAR_SERIES, AXIS_ID_YEAR_OVER_YEAR_CATEGORY];
exports.ALL_AXIS_IDS = ALL_AXIS_IDS;