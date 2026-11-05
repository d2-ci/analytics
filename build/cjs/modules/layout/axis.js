"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_AXIS_IDS = exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = exports.AXIS_ID_ROWS = exports.AXIS_ID_FILTERS = exports.AXIS_ID_COLUMNS = exports.AXIS = exports.ALL_AXIS_IDS = void 0;
// Axis

const AXIS = exports.AXIS = {
  defaultValue: [],
  isValid: axis => Array.isArray(axis)
};

// Axis ids

const AXIS_ID_COLUMNS = exports.AXIS_ID_COLUMNS = 'columns';
const AXIS_ID_ROWS = exports.AXIS_ID_ROWS = 'rows';
const AXIS_ID_FILTERS = exports.AXIS_ID_FILTERS = 'filters';
const AXIS_ID_YEAR_OVER_YEAR_SERIES = exports.AXIS_ID_YEAR_OVER_YEAR_SERIES = 'yearOverYearSeries';
const AXIS_ID_YEAR_OVER_YEAR_CATEGORY = exports.AXIS_ID_YEAR_OVER_YEAR_CATEGORY = 'yearOverYearCategory';
//export const AXIS_ID_POINTS_CATEGORY = 'pointsCategory'

const DEFAULT_AXIS_IDS = exports.DEFAULT_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS];
const ALL_AXIS_IDS = exports.ALL_AXIS_IDS = [AXIS_ID_COLUMNS, AXIS_ID_ROWS, AXIS_ID_FILTERS, AXIS_ID_YEAR_OVER_YEAR_SERIES, AXIS_ID_YEAR_OVER_YEAR_CATEGORY];