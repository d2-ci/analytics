"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllAxes = void 0;

var _axis = require("./axis");

var layoutGetAllAxes = function layoutGetAllAxes(layout) {
  return [layout[_axis.AXIS_NAME_COLUMNS], layout[_axis.AXIS_NAME_ROWS], layout[_axis.AXIS_NAME_FILTERS]];
};

exports.layoutGetAllAxes = layoutGetAllAxes;