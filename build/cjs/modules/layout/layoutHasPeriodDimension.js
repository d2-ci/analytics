"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasPeriodDimension = void 0;

var _axisHasPeriodDimension = require("./axisHasPeriodDimension.js");

var _layoutGetAllAxes = require("./layoutGetAllAxes.js");

const layoutHasPeriodDimension = layout => Boolean((0, _layoutGetAllAxes.layoutGetAllAxes)(layout).find(axis => (0, _axisHasPeriodDimension.axisHasPeriodDimension)(axis)));

exports.layoutHasPeriodDimension = layoutHasPeriodDimension;