"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllAxes = void 0;

var _axis = require("./axis.js");

const layoutGetAllAxes = layout => [layout[_axis.AXIS_ID_COLUMNS], layout[_axis.AXIS_ID_ROWS], layout[_axis.AXIS_ID_FILTERS]];

exports.layoutGetAllAxes = layoutGetAllAxes;