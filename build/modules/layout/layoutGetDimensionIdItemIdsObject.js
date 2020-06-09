"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimensionIdItemIdsObject = void 0;

var _layoutGetAllDimensions = require("./layoutGetAllDimensions");

var _dimensionGetItemIds = require("./dimensionGetItemIds");

var _dimensionGetId = require("./dimensionGetId");

var layoutGetDimensionIdItemIdsObject = function layoutGetDimensionIdItemIdsObject(layout) {
  return (0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).reduce(function (obj, dimension) {
    obj[(0, _dimensionGetId.dimensionGetId)(dimension)] = (0, _dimensionGetItemIds.dimensionGetItemIds)(dimension);
    return obj;
  }, {});
};

exports.layoutGetDimensionIdItemIdsObject = layoutGetDimensionIdItemIdsObject;