"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAxisName = exports.getAxisNameByLayoutType = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _axis = require("./layout/axis");

var _layoutTypes = require("./layoutTypes");

var getAxisNamesByLayoutType = function getAxisNamesByLayoutType(layoutType) {
  var _ref, _ref2;

  switch (layoutType) {
    case _layoutTypes.LAYOUT_TYPE_DEFAULT:
    case _layoutTypes.LAYOUT_TYPE_PIE:
    case _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR:
    default:
      return _ref = {}, (0, _defineProperty2.default)(_ref, _axis.AXIS_ID_COLUMNS, _d2I18n.default.t('Series')), (0, _defineProperty2.default)(_ref, _axis.AXIS_ID_ROWS, _d2I18n.default.t('Category')), (0, _defineProperty2.default)(_ref, _axis.AXIS_ID_FILTERS, _d2I18n.default.t('Filter')), _ref;

    case _layoutTypes.LAYOUT_TYPE_PIVOT_TABLE:
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, _axis.AXIS_ID_COLUMNS, _d2I18n.default.t('Columns')), (0, _defineProperty2.default)(_ref2, _axis.AXIS_ID_ROWS, _d2I18n.default.t('Rows')), (0, _defineProperty2.default)(_ref2, _axis.AXIS_ID_FILTERS, _d2I18n.default.t('Filter')), _ref2;
  }
};

var getAxisNameByLayoutType = function getAxisNameByLayoutType(axisId, layoutType) {
  var name = getAxisNamesByLayoutType(layoutType)[axisId];

  if (!name) {
    throw new Error("".concat(axisId, " is not a valid axis id"));
  }

  return name;
};

exports.getAxisNameByLayoutType = getAxisNameByLayoutType;

var getAxisName = function getAxisName(axisId) {
  return getAxisNameByLayoutType(axisId, _layoutTypes.LAYOUT_TYPE_DEFAULT);
};

exports.getAxisName = getAxisName;