"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPredefinedDimensions = exports.getPredefinedDimensionProp = exports.getFixedDimensions = exports.getDynamicDimensions = exports.getDimensionById = exports.filterOutPredefinedDimensions = exports.DIMENSION_PROP_NO_ITEMS = exports.DIMENSION_ID_PERIOD = exports.DIMENSION_ID_ORGUNIT = exports.DIMENSION_ID_DATA = exports.DIMENSION_ID_ASSIGNED_CATEGORIES = void 0;
var _ui = require("@dhis2/ui");
var _AssignedCategoriesIcon = _interopRequireDefault(require("../assets/AssignedCategoriesIcon.js"));
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DIMENSION_ID_DATA = 'dx';
exports.DIMENSION_ID_DATA = DIMENSION_ID_DATA;
const DIMENSION_ID_PERIOD = 'pe';
exports.DIMENSION_ID_PERIOD = DIMENSION_ID_PERIOD;
const DIMENSION_ID_ORGUNIT = 'ou';
exports.DIMENSION_ID_ORGUNIT = DIMENSION_ID_ORGUNIT;
const DIMENSION_ID_ASSIGNED_CATEGORIES = 'co';
exports.DIMENSION_ID_ASSIGNED_CATEGORIES = DIMENSION_ID_ASSIGNED_CATEGORIES;
const DIMENSION_PROP_NO_ITEMS = 'noItems';
exports.DIMENSION_PROP_NO_ITEMS = DIMENSION_PROP_NO_ITEMS;
const getFixedDimensions = () => ({
  [DIMENSION_ID_DATA]: {
    id: DIMENSION_ID_DATA,
    name: _index.default.t('Data'),
    iconName: 'DataIcon',
    icon: _ui.IconDimensionData16
  },
  [DIMENSION_ID_PERIOD]: {
    id: DIMENSION_ID_PERIOD,
    name: _index.default.t('Period'),
    iconName: 'PeriodIcon',
    icon: _ui.IconClock16
  },
  [DIMENSION_ID_ORGUNIT]: {
    id: DIMENSION_ID_ORGUNIT,
    name: _index.default.t('Organisation unit'),
    iconName: 'OrgUnitIcon',
    icon: _ui.IconDimensionOrgUnit16
  }
});
exports.getFixedDimensions = getFixedDimensions;
const getDynamicDimensions = () => ({
  [DIMENSION_ID_ASSIGNED_CATEGORIES]: {
    id: DIMENSION_ID_ASSIGNED_CATEGORIES,
    name: _index.default.t('Assigned Categories'),
    iconName: 'AssignedCategoriesIcon',
    icon: _AssignedCategoriesIcon.default,
    [DIMENSION_PROP_NO_ITEMS]: true
  }
});
exports.getDynamicDimensions = getDynamicDimensions;
const getPredefinedDimensions = () => ({
  ...getFixedDimensions(),
  ...getDynamicDimensions()
});
exports.getPredefinedDimensions = getPredefinedDimensions;
const filterOutPredefinedDimensions = dimensionIds => dimensionIds.filter(dimensionId => !Object.keys(getPredefinedDimensions()).includes(dimensionId));
exports.filterOutPredefinedDimensions = filterOutPredefinedDimensions;
const getPredefinedDimensionProp = (dimensionId, propName) => (getPredefinedDimensions()[dimensionId] || {})[propName];
exports.getPredefinedDimensionProp = getPredefinedDimensionProp;
const getDimensionById = dimensionId => getPredefinedDimensions()[dimensionId];
exports.getDimensionById = getDimensionById;