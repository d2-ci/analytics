"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testResourceRules = exports.testResourceRequiredProps = exports.testResourceAllRuleProps = exports.getMinNumberOfDimsPerAxisByVisType = exports.getMaxNumberOfItemsPerDimByVisType = exports.getMaxNumberOfItemsPerAxisByVisType = exports.getMaxNumberOfDimsPerAxisByVisType = exports.getLockedDimsByVisType = exports.getDisallowedDimsByVisType = exports.getAvailableAxesByVisType = void 0;
var _axis = require("../layout/axis.js");
var _predefinedDimensions = require("../predefinedDimensions.js");
var _visTypes = require("../visTypes.js");
const RULE_PROP_AVAILABLE_AXES = 'availableAxes',
  RULE_PROP_MAX_DIMS_PER_AXIS = 'maxNumberOfDimsPerAxis',
  RULE_PROP_MIN_DIMS_PER_AXIS = 'minNumberOfDimsPerAxis',
  RULE_PROP_MAX_ITEMS_PER_AXIS = 'maxNumberOfItemsPerAxis',
  RULE_PROP_MAX_ITEMS_PER_DIM = 'maxNumberOfItemsPerDim',
  RULE_PROP_DISALLOWED_DIMS = 'disallowedDims',
  RULE_PROP_LOCKED_DIMS = 'lockedDims';
const defaultRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_ROWS, _axis.AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 2
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 1
  }
};
const pieRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  }
};
const radarRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_ROWS, _axis.AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 1
  }
};
const singleValueRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_MAX_ITEMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  },
  [RULE_PROP_LOCKED_DIMS]: {
    [_predefinedDimensions.DIMENSION_ID_DATA]: _axis.AXIS_ID_COLUMNS
  }
};
const yearOverYearRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_FILTERS],
  [RULE_PROP_DISALLOWED_DIMS]: [_predefinedDimensions.DIMENSION_ID_PERIOD]
};
const pivotTableRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_ROWS, _axis.AXIS_ID_FILTERS]
};
const scatterRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_FILTERS],
  [RULE_PROP_MAX_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 1
  },
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1,
    [_axis.AXIS_ID_ROWS]: 1
  },
  [RULE_PROP_MAX_ITEMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 1
  },
  // TODO: Add a rule that forces DIMENSION_ID_DATA to have >= 2 items?
  [RULE_PROP_LOCKED_DIMS]: {
    [_predefinedDimensions.DIMENSION_ID_DATA]: _axis.AXIS_ID_COLUMNS,
    [_predefinedDimensions.DIMENSION_ID_ORGUNIT]: _axis.AXIS_ID_ROWS
  }
};
const lineListRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS, _axis.AXIS_ID_FILTERS]
};
const outlierTableRules = {
  [RULE_PROP_AVAILABLE_AXES]: [_axis.AXIS_ID_COLUMNS],
  [RULE_PROP_MIN_DIMS_PER_AXIS]: {
    [_axis.AXIS_ID_COLUMNS]: 3
  },
  [RULE_PROP_MAX_ITEMS_PER_DIM]: {
    [_predefinedDimensions.DIMENSION_ID_PERIOD]: 1
  },
  [RULE_PROP_LOCKED_DIMS]: {
    [_predefinedDimensions.DIMENSION_ID_DATA]: _axis.AXIS_ID_COLUMNS,
    [_predefinedDimensions.DIMENSION_ID_PERIOD]: _axis.AXIS_ID_COLUMNS,
    [_predefinedDimensions.DIMENSION_ID_ORGUNIT]: _axis.AXIS_ID_COLUMNS
  },
  [RULE_PROP_DISALLOWED_DIMS]: [_predefinedDimensions.DIMENSION_ID_ASSIGNED_CATEGORIES]
};
const visTypeToRules = {
  [_visTypes.VIS_TYPE_COLUMN]: defaultRules,
  [_visTypes.VIS_TYPE_STACKED_COLUMN]: defaultRules,
  [_visTypes.VIS_TYPE_BAR]: defaultRules,
  [_visTypes.VIS_TYPE_STACKED_BAR]: defaultRules,
  [_visTypes.VIS_TYPE_LINE]: defaultRules,
  [_visTypes.VIS_TYPE_AREA]: defaultRules,
  [_visTypes.VIS_TYPE_STACKED_AREA]: defaultRules,
  [_visTypes.VIS_TYPE_RADAR]: radarRules,
  [_visTypes.VIS_TYPE_GAUGE]: singleValueRules,
  [_visTypes.VIS_TYPE_PIE]: pieRules,
  [_visTypes.VIS_TYPE_SINGLE_VALUE]: singleValueRules,
  [_visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE]: yearOverYearRules,
  [_visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: yearOverYearRules,
  [_visTypes.VIS_TYPE_PIVOT_TABLE]: pivotTableRules,
  [_visTypes.VIS_TYPE_SCATTER]: scatterRules,
  [_visTypes.VIS_TYPE_LINE_LIST]: lineListRules,
  [_visTypes.VIS_TYPE_OUTLIER_TABLE]: outlierTableRules
};
const getRulesByVisType = visType => {
  const rules = visTypeToRules[visType];
  if (!rules) {
    throw new Error(`${visType} is not a known visualization type`);
  }
  return rules;
};

// Selectors

const getAvailableAxesByVisType = visType => getRulesByVisType(visType)[RULE_PROP_AVAILABLE_AXES] || [];
exports.getAvailableAxesByVisType = getAvailableAxesByVisType;
const getMaxNumberOfDimsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MAX_DIMS_PER_AXIS] || {};
exports.getMaxNumberOfDimsPerAxisByVisType = getMaxNumberOfDimsPerAxisByVisType;
const getMinNumberOfDimsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MIN_DIMS_PER_AXIS] || {};
exports.getMinNumberOfDimsPerAxisByVisType = getMinNumberOfDimsPerAxisByVisType;
const getMaxNumberOfItemsPerDimByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MAX_ITEMS_PER_DIM] || {};
exports.getMaxNumberOfItemsPerDimByVisType = getMaxNumberOfItemsPerDimByVisType;
const getMaxNumberOfItemsPerAxisByVisType = visType => getRulesByVisType(visType)[RULE_PROP_MAX_ITEMS_PER_AXIS] || {};
exports.getMaxNumberOfItemsPerAxisByVisType = getMaxNumberOfItemsPerAxisByVisType;
const getDisallowedDimsByVisType = visType => getRulesByVisType(visType)[RULE_PROP_DISALLOWED_DIMS] || [];
exports.getDisallowedDimsByVisType = getDisallowedDimsByVisType;
const getLockedDimsByVisType = visType => getRulesByVisType(visType)[RULE_PROP_LOCKED_DIMS] || {};

// Test exports
exports.getLockedDimsByVisType = getLockedDimsByVisType;
const testResourceRequiredProps = exports.testResourceRequiredProps = [RULE_PROP_AVAILABLE_AXES];
const testResourceRules = exports.testResourceRules = [...new Set(Object.values(visTypeToRules))];
const testResourceAllRuleProps = exports.testResourceAllRuleProps = {
  AVAILABLE_AXES: RULE_PROP_AVAILABLE_AXES,
  MAX_DIMS_PER_AXIS: RULE_PROP_MAX_DIMS_PER_AXIS,
  MIN_DIMS_PER_AXIS: RULE_PROP_MIN_DIMS_PER_AXIS,
  MAX_ITEMS_PER_AXIS: RULE_PROP_MAX_ITEMS_PER_AXIS,
  MAX_ITEMS_PER_DIM: RULE_PROP_MAX_ITEMS_PER_DIM,
  DISALLOWED_DIMS: RULE_PROP_DISALLOWED_DIMS,
  LOCKED_DIMS: RULE_PROP_LOCKED_DIMS
};