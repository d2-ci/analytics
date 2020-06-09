"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIXED_DIMENSIONS = exports.DIMENSION_ID_ORGUNIT = exports.DIMENSION_ID_PERIOD = exports.DIMENSION_ID_DATA = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _DataIcon = _interopRequireDefault(require("../assets/DataIcon"));

var _PeriodIcon = _interopRequireDefault(require("../assets/PeriodIcon"));

var _OrgUnitIcon = _interopRequireDefault(require("../assets/OrgUnitIcon"));

var _FIXED_DIMENSIONS;

var DIMENSION_ID_DATA = 'dx';
exports.DIMENSION_ID_DATA = DIMENSION_ID_DATA;
var DIMENSION_ID_PERIOD = 'pe';
exports.DIMENSION_ID_PERIOD = DIMENSION_ID_PERIOD;
var DIMENSION_ID_ORGUNIT = 'ou';
exports.DIMENSION_ID_ORGUNIT = DIMENSION_ID_ORGUNIT;
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
exports.FIXED_DIMENSIONS = FIXED_DIMENSIONS;