"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDataDimension = void 0;

var _layoutGetAllAxes = require("./layoutGetAllAxes");

var _axisHasDataDimension = require("./axisHasDataDimension");

var layoutHasDataDimension = function layoutHasDataDimension(layout) {
  return Boolean((0, _layoutGetAllAxes.layoutGetAllAxes)(layout).find(function (axis) {
    return (0, _axisHasDataDimension.axisHasDataDimension)(axis);
  }));
};

exports.layoutHasDataDimension = layoutHasDataDimension;