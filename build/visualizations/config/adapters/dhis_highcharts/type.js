"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _visTypes = require("../../../../modules/visTypes");

function _default(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_BAR:
    case _visTypes.VIS_TYPE_STACKED_BAR:
      return {
        type: 'bar'
      };

    case _visTypes.VIS_TYPE_LINE:
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      return {
        type: 'line'
      };

    case _visTypes.VIS_TYPE_AREA:
      return {
        type: 'area'
      };

    case _visTypes.VIS_TYPE_PIE:
      return {
        type: 'pie'
      };

    case _visTypes.VIS_TYPE_RADAR:
      return {
        type: 'line',
        polar: true
      };

    case _visTypes.VIS_TYPE_GAUGE:
      return {
        type: 'solidgauge'
      };

    case _visTypes.VIS_TYPE_COLUMN:
    case _visTypes.VIS_TYPE_STACKED_COLUMN:
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
    default:
      return {
        type: 'column'
      };
  }
}