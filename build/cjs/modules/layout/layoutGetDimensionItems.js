"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimensionItems = void 0;

var _dimensionGetItems = require("./dimensionGetItems.js");

var _layoutGetDimension = require("./layoutGetDimension.js");

const layoutGetDimensionItems = (layout, dimensionId) => (0, _dimensionGetItems.dimensionGetItems)((0, _layoutGetDimension.layoutGetDimension)(layout, dimensionId));

exports.layoutGetDimensionItems = layoutGetDimensionItems;