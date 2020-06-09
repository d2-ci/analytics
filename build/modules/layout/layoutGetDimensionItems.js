"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimensionItems = void 0;

var _layoutGetDimension = require("./layoutGetDimension");

var _dimensionGetItems = require("./dimensionGetItems");

var layoutGetDimensionItems = function layoutGetDimensionItems(layout, dimensionId) {
  return (0, _dimensionGetItems.dimensionGetItems)((0, _layoutGetDimension.layoutGetDimension)(layout, dimensionId));
};

exports.layoutGetDimensionItems = layoutGetDimensionItems;