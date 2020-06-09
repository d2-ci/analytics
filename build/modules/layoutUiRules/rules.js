"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testResourceAllRuleProps = exports.testResourceRules = exports.testResourceRequiredProps = exports.getLockedDimsByVisType = exports.getDisallowedDimsByVisType = exports.getMaxNumberOfItemsPerAxisByVisType = exports.getMinNumberOfDimsPerAxisByVisType = exports.getMaxNumberOfDimsPerAxisByVisType = exports.getAvailableAxesByVisType = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axis = require("../layout/axis");

var _predefinedDimensions = require("../predefinedDimensions");

var _visTypes = require("../visTypes");

var _RULE_PROP_MAX_DIMS_P, _RULE_PROP_MIN_DIMS_P, _defaultRules, _pieRules, _singleValueRules, _yearOverYearRules, _visTypeToRules;

var RULE_PROP_AVAILABLE_AXES = 'availableAxes',
    RULE_PROP_MAX_DIMS_PER_AXIS = 'maxNumberOfDimsPerAxis',
    RULE_PROP_MIN_DIMS_PER_AXIS = 'minNumberOfDimsPerAxis',
    RULE_PROP_MAX_ITEMS_PER_AXIS = 'maxNumberOfItemsPerAxis',
    RULE_PROP_DISALLOWED_DIMS = 'disallowedDims',
    RULE_PROP_LOCKED_DIMS = 'lockedDims';
var defaultRules = (_defaultRules = {}, (0, _defineProperty2.default)(_defaultRules, RULE_PROP_AVAILABLE_AXES, [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_ROWS, _axis.AXIS_ID_FILTERS]), (0, _defineProperty2.default)(_defaultRules, RULE_PROP_MAX_DIMS_PER_AXIS, (_RULE_PROP_MAX_DIMS_P = {}, (0, _defineProperty2.default)(_RULE_PROP_MAX_DIMS_P, _axis.AXIS_ID_COLUMNS, 1), (0, _defineProperty2.default)(_RULE_PROP_MAX_DIMS_P, _axis.AXIS_ID_ROWS, 1), _RULE_PROP_MAX_DIMS_P)), (0, _defineProperty2.default)(_defaultRules, RULE_PROP_MIN_DIMS_PER_AXIS, (_RULE_PROP_MIN_DIMS_P = {}, (0, _defineProperty2.default)(_RULE_PROP_MIN_DIMS_P, _axis.AXIS_ID_COLUMNS, 1), (0, _defineProperty2.default)(_RULE_PROP_MIN_DIMS_P, _axis.AXIS_ID_ROWS, 1), _RULE_PROP_MIN_DIMS_P)), _defaultRules);
var pieRules = (_pieRules = {}, (0, _defineProperty2.default)(_pieRules, RULE_PROP_AVAILABLE_AXES, [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_FILTERS]), (0, _defineProperty2.default)(_pieRules, RULE_PROP_MAX_DIMS_PER_AXIS, (0, _defineProperty2.default)({}, _axis.AXIS_ID_COLUMNS, 1)), (0, _defineProperty2.default)(_pieRules, RULE_PROP_MIN_DIMS_PER_AXIS, (0, _defineProperty2.default)({}, _axis.AXIS_ID_COLUMNS, 1)), _pieRules);
var singleValueRules = (_singleValueRules = {}, (0, _defineProperty2.default)(_singleValueRules, RULE_PROP_AVAILABLE_AXES, [_axis.AXIS_ID_FILTERS]), (0, _defineProperty2.default)(_singleValueRules, RULE_PROP_MAX_DIMS_PER_AXIS, (0, _defineProperty2.default)({}, _axis.AXIS_ID_COLUMNS, 1)), (0, _defineProperty2.default)(_singleValueRules, RULE_PROP_MIN_DIMS_PER_AXIS, (0, _defineProperty2.default)({}, _axis.AXIS_ID_COLUMNS, 1)), (0, _defineProperty2.default)(_singleValueRules, RULE_PROP_MAX_ITEMS_PER_AXIS, (0, _defineProperty2.default)({}, _axis.AXIS_ID_COLUMNS, 1)), (0, _defineProperty2.default)(_singleValueRules, RULE_PROP_LOCKED_DIMS, (0, _defineProperty2.default)({}, _predefinedDimensions.DIMENSION_ID_DATA, _axis.AXIS_ID_COLUMNS)), _singleValueRules);
var yearOverYearRules = (_yearOverYearRules = {}, (0, _defineProperty2.default)(_yearOverYearRules, RULE_PROP_AVAILABLE_AXES, [_axis.AXIS_ID_FILTERS]), (0, _defineProperty2.default)(_yearOverYearRules, RULE_PROP_DISALLOWED_DIMS, [_predefinedDimensions.DIMENSION_ID_PERIOD]), _yearOverYearRules);
var pivotTableRules = (0, _defineProperty2.default)({}, RULE_PROP_AVAILABLE_AXES, [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_ROWS, _axis.AXIS_ID_FILTERS]);
var visTypeToRules = (_visTypeToRules = {}, (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_COLUMN, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_STACKED_COLUMN, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_BAR, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_STACKED_BAR, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_LINE, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_AREA, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_RADAR, defaultRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_GAUGE, singleValueRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_PIE, pieRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_SINGLE_VALUE, singleValueRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE, yearOverYearRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN, yearOverYearRules), (0, _defineProperty2.default)(_visTypeToRules, _visTypes.VIS_TYPE_PIVOT_TABLE, pivotTableRules), _visTypeToRules);

var getRulesByVisType = function getRulesByVisType(visType) {
  var rules = visTypeToRules[visType];

  if (!rules) {
    throw new Error("".concat(visType, " is not a known visualization type"));
  }

  return rules;
}; // Selectors


var getAvailableAxesByVisType = function getAvailableAxesByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_AVAILABLE_AXES] || [];
};

exports.getAvailableAxesByVisType = getAvailableAxesByVisType;

var getMaxNumberOfDimsPerAxisByVisType = function getMaxNumberOfDimsPerAxisByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_MAX_DIMS_PER_AXIS] || {};
};

exports.getMaxNumberOfDimsPerAxisByVisType = getMaxNumberOfDimsPerAxisByVisType;

var getMinNumberOfDimsPerAxisByVisType = function getMinNumberOfDimsPerAxisByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_MIN_DIMS_PER_AXIS] || {};
};

exports.getMinNumberOfDimsPerAxisByVisType = getMinNumberOfDimsPerAxisByVisType;

var getMaxNumberOfItemsPerAxisByVisType = function getMaxNumberOfItemsPerAxisByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_MAX_ITEMS_PER_AXIS] || {};
};

exports.getMaxNumberOfItemsPerAxisByVisType = getMaxNumberOfItemsPerAxisByVisType;

var getDisallowedDimsByVisType = function getDisallowedDimsByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_DISALLOWED_DIMS] || [];
};

exports.getDisallowedDimsByVisType = getDisallowedDimsByVisType;

var getLockedDimsByVisType = function getLockedDimsByVisType(visType) {
  return getRulesByVisType(visType)[RULE_PROP_LOCKED_DIMS] || {};
}; // Test exports


exports.getLockedDimsByVisType = getLockedDimsByVisType;
var testResourceRequiredProps = [RULE_PROP_AVAILABLE_AXES];
exports.testResourceRequiredProps = testResourceRequiredProps;
var testResourceRules = (0, _toConsumableArray2.default)(new Set(Object.values(visTypeToRules)));
exports.testResourceRules = testResourceRules;
var testResourceAllRuleProps = {
  AVAILABLE_AXES: RULE_PROP_AVAILABLE_AXES,
  MAX_DIMS_PER_AXIS: RULE_PROP_MAX_DIMS_PER_AXIS,
  MIN_DIMS_PER_AXIS: RULE_PROP_MIN_DIMS_PER_AXIS,
  MAX_ITEMS_PER_AXIS: RULE_PROP_MAX_ITEMS_PER_AXIS,
  DISALLOWED_DIMS: RULE_PROP_DISALLOWED_DIMS,
  LOCKED_DIMS: RULE_PROP_LOCKED_DIMS
};
exports.testResourceAllRuleProps = testResourceAllRuleProps;