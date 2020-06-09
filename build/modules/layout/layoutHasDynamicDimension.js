"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDynamicDimension = void 0;

var _layoutGetAllDimensions = require("./layoutGetAllDimensions");

var _dimensionGetId = require("./dimensionGetId");

var _fixedDimensions = require("../fixedDimensions");

var layoutHasDynamicDimension = function layoutHasDynamicDimension(layout) {
  var fixedIds = Object.keys(_fixedDimensions.FIXED_DIMENSIONS);
  return Boolean((0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).find(function (dimension) {
    return !fixedIds.includes((0, _dimensionGetId.dimensionGetId)(dimension));
  }));
};

exports.layoutHasDynamicDimension = layoutHasDynamicDimension;