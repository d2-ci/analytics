"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasPeriodDimension = void 0;

var _layoutGetAllAxes = require("./layoutGetAllAxes");

var _axisHasPeriodDimension = require("./axisHasPeriodDimension");

var layoutHasPeriodDimension = function layoutHasPeriodDimension(layout) {
  return Boolean((0, _layoutGetAllAxes.layoutGetAllAxes)(layout).find(function (axis) {
    return (0, _axisHasPeriodDimension.axisHasPeriodDimension)(axis);
  }));
};

exports.layoutHasPeriodDimension = layoutHasPeriodDimension;