"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicDimensions = exports.getFixedDimensions = exports.getPredefinedDimensions = exports.getDimensionById = exports.getPredefinedDimensionProp = exports.filterOutPredefinedDimensions = exports.DIMENSION_PROP_NO_ITEMS = exports.DIMENSION_ID_ASSIGNED_CATEGORIES = exports.DIMENSION_ID_ORGUNIT = exports.DIMENSION_ID_PERIOD = exports.DIMENSION_ID_DATA = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _DataIcon = _interopRequireDefault(require("../assets/DataIcon"));

var _PeriodIcon = _interopRequireDefault(require("../assets/PeriodIcon"));

var _OrgUnitIcon = _interopRequireDefault(require("../assets/OrgUnitIcon"));

var _AssignedCategoriesIcon = _interopRequireDefault(require("../assets/AssignedCategoriesIcon"));

var _FIXED_DIMENSIONS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DIMENSION_ID_DATA = 'dx';
exports.DIMENSION_ID_DATA = DIMENSION_ID_DATA;
var DIMENSION_ID_PERIOD = 'pe';
exports.DIMENSION_ID_PERIOD = DIMENSION_ID_PERIOD;
var DIMENSION_ID_ORGUNIT = 'ou';
exports.DIMENSION_ID_ORGUNIT = DIMENSION_ID_ORGUNIT;
var DIMENSION_ID_ASSIGNED_CATEGORIES = 'co';
exports.DIMENSION_ID_ASSIGNED_CATEGORIES = DIMENSION_ID_ASSIGNED_CATEGORIES;
var DIMENSION_PROP_NO_ITEMS = 'noItems';
exports.DIMENSION_PROP_NO_ITEMS = DIMENSION_PROP_NO_ITEMS;
var FIXED_DIMENSIONS = (_FIXED_DIMENSIONS = {}, (0, _defineProperty2.default)(_FIXED_DIMENSIONS, DIMENSION_ID_DATA, {
  id: DIMENSION_ID_DATA,
  name: function name() {
    return _d2I18n.default.t('Data');
  },
  iconName: 'DataIcon',
  icon: _DataIcon.default
}), (0, _defineProperty2.default)(_FIXED_DIMENSIONS, DIMENSION_ID_PERIOD, {
  id: DIMENSION_ID_PERIOD,
  name: function name() {
    return _d2I18n.default.t('Period');
  },
  iconName: 'PeriodIcon',
  icon: _PeriodIcon.default
}), (0, _defineProperty2.default)(_FIXED_DIMENSIONS, DIMENSION_ID_ORGUNIT, {
  id: DIMENSION_ID_ORGUNIT,
  name: function name() {
    return _d2I18n.default.t('Organisation Unit');
  },
  iconName: 'OrgUnitIcon',
  icon: _OrgUnitIcon.default
}), _FIXED_DIMENSIONS);
var DYNAMIC_DIMENSIONS = (0, _defineProperty2.default)({}, DIMENSION_ID_ASSIGNED_CATEGORIES, (0, _defineProperty2.default)({
  id: DIMENSION_ID_ASSIGNED_CATEGORIES,
  name: function name() {
    return _d2I18n.default.t('Assigned Categories');
  },
  iconName: 'AssignedCategoriesIcon',
  icon: _AssignedCategoriesIcon.default
}, DIMENSION_PROP_NO_ITEMS, true));

var PREDEFINED_DIMENSIONS = _objectSpread(_objectSpread({}, FIXED_DIMENSIONS), DYNAMIC_DIMENSIONS);

var filterOutPredefinedDimensions = function filterOutPredefinedDimensions(dimensionIds) {
  return dimensionIds.filter(function (dimensionId) {
    return !Object.keys(PREDEFINED_DIMENSIONS).includes(dimensionId);
  });
};

exports.filterOutPredefinedDimensions = filterOutPredefinedDimensions;

var getPredefinedDimensionProp = function getPredefinedDimensionProp(dimensionId, propName) {
  return (PREDEFINED_DIMENSIONS[dimensionId] || {})[propName];
};

exports.getPredefinedDimensionProp = getPredefinedDimensionProp;

var getDimensionById = function getDimensionById(dimensionId) {
  return PREDEFINED_DIMENSIONS[dimensionId];
};

exports.getDimensionById = getDimensionById;

var getPredefinedDimensions = function getPredefinedDimensions() {
  return PREDEFINED_DIMENSIONS;
};

exports.getPredefinedDimensions = getPredefinedDimensions;

var getFixedDimensions = function getFixedDimensions() {
  return FIXED_DIMENSIONS;
};

exports.getFixedDimensions = getFixedDimensions;

var getDynamicDimensions = function getDynamicDimensions() {
  return DYNAMIC_DIMENSIONS;
};

exports.getDynamicDimensions = getDynamicDimensions;