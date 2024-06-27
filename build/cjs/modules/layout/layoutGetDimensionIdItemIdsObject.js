"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimensionIdItemIdsObject = void 0;

var _dimensionGetId = require("./dimensionGetId.js");

var _dimensionGetItemIds = require("./dimensionGetItemIds.js");

var _layoutGetAllDimensions = require("./layoutGetAllDimensions.js");

const layoutGetDimensionIdItemIdsObject = layout => (0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).reduce((obj, dimension) => {
  obj[(0, _dimensionGetId.dimensionGetId)(dimension)] = (0, _dimensionGetItemIds.dimensionGetItemIds)(dimension);
  return obj;
}, {});

exports.layoutGetDimensionIdItemIdsObject = layoutGetDimensionIdItemIdsObject;