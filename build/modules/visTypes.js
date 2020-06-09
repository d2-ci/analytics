"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSingleValue = exports.isDualAxisType = exports.isYearOverYear = exports.isStacked = exports.defaultVisType = exports.getDisplayNameByVisType = exports.visTypeIcons = exports.visTypeDisplayNames = exports.VIS_TYPE_PIVOT_TABLE = exports.VIS_TYPE_SINGLE_VALUE = exports.VIS_TYPE_YEAR_OVER_YEAR_COLUMN = exports.VIS_TYPE_YEAR_OVER_YEAR_LINE = exports.VIS_TYPE_BUBBLE = exports.VIS_TYPE_GAUGE = exports.VIS_TYPE_RADAR = exports.VIS_TYPE_PIE = exports.VIS_TYPE_AREA = exports.VIS_TYPE_LINE = exports.VIS_TYPE_STACKED_BAR = exports.VIS_TYPE_BAR = exports.VIS_TYPE_STACKED_COLUMN = exports.VIS_TYPE_COLUMN = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _BarIcon = _interopRequireDefault(require("../assets/BarIcon"));

var _StackedBarIcon = _interopRequireDefault(require("../assets/StackedBarIcon"));

var _ColumnIcon = _interopRequireDefault(require("../assets/ColumnIcon"));

var _StackedColumnIcon = _interopRequireDefault(require("../assets/StackedColumnIcon"));

var _LineIcon = _interopRequireDefault(require("../assets/LineIcon"));

var _AreaIcon = _interopRequireDefault(require("../assets/AreaIcon"));

var _PieIcon = _interopRequireDefault(require("../assets/PieIcon"));

var _RadarIcon = _interopRequireDefault(require("../assets/RadarIcon"));

var _GaugeIcon = _interopRequireDefault(require("../assets/GaugeIcon"));

var _YearOverYearLineIcon = _interopRequireDefault(require("../assets/YearOverYearLineIcon"));

var _YearOverYearColumnIcon = _interopRequireDefault(require("../assets/YearOverYearColumnIcon"));

var _SingleValueIcon = _interopRequireDefault(require("../assets/SingleValueIcon"));

var _PivotTableIcon = _interopRequireDefault(require("../assets/PivotTableIcon"));

var _visTypeDisplayNames, _visTypeIcons;

var VIS_TYPE_COLUMN = 'COLUMN';
exports.VIS_TYPE_COLUMN = VIS_TYPE_COLUMN;
var VIS_TYPE_STACKED_COLUMN = 'STACKED_COLUMN';
exports.VIS_TYPE_STACKED_COLUMN = VIS_TYPE_STACKED_COLUMN;
var VIS_TYPE_BAR = 'BAR';
exports.VIS_TYPE_BAR = VIS_TYPE_BAR;
var VIS_TYPE_STACKED_BAR = 'STACKED_BAR';
exports.VIS_TYPE_STACKED_BAR = VIS_TYPE_STACKED_BAR;
var VIS_TYPE_LINE = 'LINE';
exports.VIS_TYPE_LINE = VIS_TYPE_LINE;
var VIS_TYPE_AREA = 'AREA';
exports.VIS_TYPE_AREA = VIS_TYPE_AREA;
var VIS_TYPE_PIE = 'PIE';
exports.VIS_TYPE_PIE = VIS_TYPE_PIE;
var VIS_TYPE_RADAR = 'RADAR';
exports.VIS_TYPE_RADAR = VIS_TYPE_RADAR;
var VIS_TYPE_GAUGE = 'GAUGE';
exports.VIS_TYPE_GAUGE = VIS_TYPE_GAUGE;
var VIS_TYPE_BUBBLE = 'BUBBLE';
exports.VIS_TYPE_BUBBLE = VIS_TYPE_BUBBLE;
var VIS_TYPE_YEAR_OVER_YEAR_LINE = 'YEAR_OVER_YEAR_LINE';
exports.VIS_TYPE_YEAR_OVER_YEAR_LINE = VIS_TYPE_YEAR_OVER_YEAR_LINE;
var VIS_TYPE_YEAR_OVER_YEAR_COLUMN = 'YEAR_OVER_YEAR_COLUMN';
exports.VIS_TYPE_YEAR_OVER_YEAR_COLUMN = VIS_TYPE_YEAR_OVER_YEAR_COLUMN;
var VIS_TYPE_SINGLE_VALUE = 'SINGLE_VALUE';
exports.VIS_TYPE_SINGLE_VALUE = VIS_TYPE_SINGLE_VALUE;
var VIS_TYPE_PIVOT_TABLE = 'PIVOT_TABLE';
exports.VIS_TYPE_PIVOT_TABLE = VIS_TYPE_PIVOT_TABLE;
var visTypeDisplayNames = (_visTypeDisplayNames = {}, (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_COLUMN, _d2I18n.default.t('Column')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_STACKED_COLUMN, _d2I18n.default.t('Stacked column')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_BAR, _d2I18n.default.t('Bar')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_STACKED_BAR, _d2I18n.default.t('Stacked bar')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_LINE, _d2I18n.default.t('Line')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_AREA, _d2I18n.default.t('Area')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_PIE, _d2I18n.default.t('Pie')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_RADAR, _d2I18n.default.t('Radar')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_GAUGE, _d2I18n.default.t('Gauge')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_YEAR_OVER_YEAR_LINE, _d2I18n.default.t('Year over year (line)')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_YEAR_OVER_YEAR_COLUMN, _d2I18n.default.t('Year over year (column)')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_SINGLE_VALUE, _d2I18n.default.t('Single value')), (0, _defineProperty2.default)(_visTypeDisplayNames, VIS_TYPE_PIVOT_TABLE, _d2I18n.default.t('Pivot table')), _visTypeDisplayNames);
exports.visTypeDisplayNames = visTypeDisplayNames;
var visTypeIcons = (_visTypeIcons = {}, (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_BAR, _BarIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_STACKED_BAR, _StackedBarIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_COLUMN, _ColumnIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_STACKED_COLUMN, _StackedColumnIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_LINE, _LineIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_AREA, _AreaIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_PIE, _PieIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_RADAR, _RadarIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_GAUGE, _GaugeIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_YEAR_OVER_YEAR_LINE, _YearOverYearLineIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_YEAR_OVER_YEAR_COLUMN, _YearOverYearColumnIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_SINGLE_VALUE, _SingleValueIcon.default), (0, _defineProperty2.default)(_visTypeIcons, VIS_TYPE_PIVOT_TABLE, _PivotTableIcon.default), _visTypeIcons);
exports.visTypeIcons = visTypeIcons;

var getDisplayNameByVisType = function getDisplayNameByVisType(visType) {
  var displayName = visTypeDisplayNames[visType];

  if (!displayName) {
    throw new Error("".concat(visType, " is not a valid visualization type"));
  }

  return displayName;
};

exports.getDisplayNameByVisType = getDisplayNameByVisType;
var stackedTypes = [VIS_TYPE_STACKED_COLUMN, VIS_TYPE_STACKED_BAR, VIS_TYPE_AREA];
var yearOverYearTypes = [VIS_TYPE_YEAR_OVER_YEAR_LINE, VIS_TYPE_YEAR_OVER_YEAR_COLUMN];
var dualAxisTypes = [VIS_TYPE_COLUMN, VIS_TYPE_BAR, VIS_TYPE_LINE, VIS_TYPE_AREA];
var defaultVisType = VIS_TYPE_COLUMN;
exports.defaultVisType = defaultVisType;

var isStacked = function isStacked(type) {
  return stackedTypes.includes(type);
};

exports.isStacked = isStacked;

var isYearOverYear = function isYearOverYear(type) {
  return yearOverYearTypes.includes(type);
};

exports.isYearOverYear = isYearOverYear;

var isDualAxisType = function isDualAxisType(type) {
  return dualAxisTypes.includes(type);
};

exports.isDualAxisType = isDualAxisType;

var isSingleValue = function isSingleValue(type) {
  return type === VIS_TYPE_SINGLE_VALUE;
};

exports.isSingleValue = isSingleValue;