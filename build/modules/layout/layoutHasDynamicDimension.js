"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDynamicDimension = void 0;

var _layoutGetAllDimensions = require("./layoutGetAllDimensions");

var _dimensionGetId = require("./dimensionGetId");

var _predefinedDimensions = require("../predefinedDimensions");

var layoutHasDynamicDimension = function layoutHasDynamicDimension(layout) {
  var fixedIds = Object.keys((0, _predefinedDimensions.getPredefinedDimensions)());
  return Boolean((0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).find(function (dimension) {
    return !fixedIds.includes((0, _dimensionGetId.dimensionGetId)(dimension));
  }));
};

exports.layoutHasDynamicDimension = layoutHasDynamicDimension;