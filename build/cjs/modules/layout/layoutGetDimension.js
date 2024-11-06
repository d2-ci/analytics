"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimension = void 0;
var _dimensionIs = require("./dimensionIs.js");
var _layoutGetAllDimensions = require("./layoutGetAllDimensions.js");
const layoutGetDimension = (layout, dimensionId) => (0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).find(dimension => (0, _dimensionIs.dimensionIs)(dimension, dimensionId));
exports.layoutGetDimension = layoutGetDimension;