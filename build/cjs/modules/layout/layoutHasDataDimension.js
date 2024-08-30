"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDataDimension = void 0;

var _axisHasDataDimension = require("./axisHasDataDimension.js");

var _layoutGetAllAxes = require("./layoutGetAllAxes.js");

const layoutHasDataDimension = layout => Boolean((0, _layoutGetAllAxes.layoutGetAllAxes)(layout).find(axis => (0, _axisHasDataDimension.axisHasDataDimension)(axis)));

exports.layoutHasDataDimension = layoutHasDataDimension;