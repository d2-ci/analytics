"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayoutTypeByVisType = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _visTypes = require("./visTypes");

var _layoutTypes = require("./layoutTypes");

var _visTypeToLayoutType;

var visTypeToLayoutType = (_visTypeToLayoutType = {}, (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_COLUMN, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_STACKED_COLUMN, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_BAR, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_STACKED_BAR, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_LINE, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_AREA, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_PIE, _layoutTypes.LAYOUT_TYPE_PIE), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_RADAR, _layoutTypes.LAYOUT_TYPE_DEFAULT), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_GAUGE, _layoutTypes.LAYOUT_TYPE_PIE), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE, _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN, _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_SINGLE_VALUE, _layoutTypes.LAYOUT_TYPE_PIE), (0, _defineProperty2.default)(_visTypeToLayoutType, _visTypes.VIS_TYPE_PIVOT_TABLE, _layoutTypes.LAYOUT_TYPE_PIVOT_TABLE), _visTypeToLayoutType);

var getLayoutTypeByVisType = function getLayoutTypeByVisType(visType) {
  return visTypeToLayoutType[visType];
};

exports.getLayoutTypeByVisType = getLayoutTypeByVisType;