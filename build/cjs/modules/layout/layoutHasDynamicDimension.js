"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDynamicDimension = void 0;
var _predefinedDimensions = require("../predefinedDimensions.js");
var _dimensionGetId = require("./dimensionGetId.js");
var _layoutGetAllDimensions = require("./layoutGetAllDimensions.js");
const layoutHasDynamicDimension = layout => {
  const fixedIds = Object.keys((0, _predefinedDimensions.getPredefinedDimensions)());
  return Boolean((0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).find(dimension => !fixedIds.includes((0, _dimensionGetId.dimensionGetId)(dimension, layout.outputType))));
};
exports.layoutHasDynamicDimension = layoutHasDynamicDimension;