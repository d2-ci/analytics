"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsStacked = getIsStacked;
exports.isYearOverYear = isYearOverYear;
exports.isDualAxis = isDualAxis;
exports.default = _default;
exports.CHART_TYPE_YEAR_OVER_YEAR_COLUMN = exports.CHART_TYPE_YEAR_OVER_YEAR_LINE = exports.CHART_TYPE_GAUGE = exports.CHART_TYPE_RADAR = exports.CHART_TYPE_PIE = exports.CHART_TYPE_AREA = exports.CHART_TYPE_LINE = exports.CHART_TYPE_STACKED_BAR_LEGACY = exports.CHART_TYPE_STACKED_BAR = exports.CHART_TYPE_BAR = exports.CHART_TYPE_STACKED_COLUMN_LEGACY = exports.CHART_TYPE_STACKED_COLUMN = exports.CHART_TYPE_COLUMN = void 0;

var _arrayContains = _interopRequireDefault(require("d2-utilizr/lib/arrayContains"));

var CHART_TYPE_COLUMN = 'COLUMN';
exports.CHART_TYPE_COLUMN = CHART_TYPE_COLUMN;
var CHART_TYPE_STACKED_COLUMN = 'STACKED_COLUMN';
exports.CHART_TYPE_STACKED_COLUMN = CHART_TYPE_STACKED_COLUMN;
var CHART_TYPE_STACKED_COLUMN_LEGACY = 'STACKEDCOLUMN';
exports.CHART_TYPE_STACKED_COLUMN_LEGACY = CHART_TYPE_STACKED_COLUMN_LEGACY;
var CHART_TYPE_BAR = 'BAR';
exports.CHART_TYPE_BAR = CHART_TYPE_BAR;
var CHART_TYPE_STACKED_BAR = 'STACKED_BAR';
exports.CHART_TYPE_STACKED_BAR = CHART_TYPE_STACKED_BAR;
var CHART_TYPE_STACKED_BAR_LEGACY = 'STACKEDBAR';
exports.CHART_TYPE_STACKED_BAR_LEGACY = CHART_TYPE_STACKED_BAR_LEGACY;
var CHART_TYPE_LINE = 'LINE';
exports.CHART_TYPE_LINE = CHART_TYPE_LINE;
var CHART_TYPE_AREA = 'AREA';
exports.CHART_TYPE_AREA = CHART_TYPE_AREA;
var CHART_TYPE_PIE = 'PIE';
exports.CHART_TYPE_PIE = CHART_TYPE_PIE;
var CHART_TYPE_RADAR = 'RADAR';
exports.CHART_TYPE_RADAR = CHART_TYPE_RADAR;
var CHART_TYPE_GAUGE = 'GAUGE';
exports.CHART_TYPE_GAUGE = CHART_TYPE_GAUGE;
var CHART_TYPE_YEAR_OVER_YEAR_LINE = 'YEAR_OVER_YEAR_LINE';
exports.CHART_TYPE_YEAR_OVER_YEAR_LINE = CHART_TYPE_YEAR_OVER_YEAR_LINE;
var CHART_TYPE_YEAR_OVER_YEAR_COLUMN = 'YEAR_OVER_YEAR_COLUMN';
exports.CHART_TYPE_YEAR_OVER_YEAR_COLUMN = CHART_TYPE_YEAR_OVER_YEAR_COLUMN;
var stackedTypes = [CHART_TYPE_STACKED_COLUMN, CHART_TYPE_STACKED_COLUMN_LEGACY, CHART_TYPE_STACKED_BAR, CHART_TYPE_STACKED_BAR_LEGACY, CHART_TYPE_AREA];
var yearOverYearTypes = [CHART_TYPE_YEAR_OVER_YEAR_LINE, CHART_TYPE_YEAR_OVER_YEAR_COLUMN];
var dualAxisTypes = [CHART_TYPE_COLUMN, CHART_TYPE_BAR, CHART_TYPE_LINE];

function getIsStacked(type) {
  return (0, _arrayContains.default)(stackedTypes, type);
}

function isYearOverYear(type) {
  return (0, _arrayContains.default)(yearOverYearTypes, type);
}

function isDualAxis(type) {
  return (0, _arrayContains.default)(dualAxisTypes, type);
}

function _default(type) {
  switch (type) {
    case CHART_TYPE_BAR:
    case CHART_TYPE_STACKED_BAR:
    case CHART_TYPE_STACKED_BAR_LEGACY:
      return {
        type: 'bar'
      };

    case CHART_TYPE_LINE:
    case CHART_TYPE_YEAR_OVER_YEAR_LINE:
      return {
        type: 'line'
      };

    case CHART_TYPE_AREA:
      return {
        type: 'area'
      };

    case CHART_TYPE_PIE:
      return {
        type: 'pie'
      };

    case CHART_TYPE_RADAR:
      return {
        type: 'line',
        polar: true
      };

    case CHART_TYPE_GAUGE:
      return {
        type: 'solidgauge'
      };

    case CHART_TYPE_COLUMN:
    case CHART_TYPE_STACKED_COLUMN:
    case CHART_TYPE_STACKED_COLUMN_LEGACY:
    case CHART_TYPE_YEAR_OVER_YEAR_COLUMN:
    default:
      return {
        type: 'column'
      };
  }
}