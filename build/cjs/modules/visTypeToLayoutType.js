"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayoutTypeByVisType = void 0;

var _layoutTypes = require("./layoutTypes.js");

var _visTypes = require("./visTypes.js");

const visTypeToLayoutType = {
  [_visTypes.VIS_TYPE_COLUMN]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_STACKED_COLUMN]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_BAR]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_STACKED_BAR]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_LINE]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_AREA]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_STACKED_AREA]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_PIE]: _layoutTypes.LAYOUT_TYPE_PIE,
  [_visTypes.VIS_TYPE_RADAR]: _layoutTypes.LAYOUT_TYPE_DEFAULT,
  [_visTypes.VIS_TYPE_GAUGE]: _layoutTypes.LAYOUT_TYPE_PIE,
  [_visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE]: _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR,
  [_visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR,
  [_visTypes.VIS_TYPE_SINGLE_VALUE]: _layoutTypes.LAYOUT_TYPE_PIE,
  [_visTypes.VIS_TYPE_PIVOT_TABLE]: _layoutTypes.LAYOUT_TYPE_PIVOT_TABLE,
  [_visTypes.VIS_TYPE_SCATTER]: _layoutTypes.LAYOUT_TYPE_SCATTER,
  [_visTypes.VIS_TYPE_LINE_LIST]: _layoutTypes.LAYOUT_TYPE_LINE_LIST
};

const getLayoutTypeByVisType = visType => visTypeToLayoutType[visType];

exports.getLayoutTypeByVisType = getLayoutTypeByVisType;