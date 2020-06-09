"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetItemIds = void 0;

var _dimensionGetItems = require("./dimensionGetItems");

var _itemGetId = require("./itemGetId");

var dimensionGetItemIds = function dimensionGetItemIds(dimension) {
  return (0, _dimensionGetItems.dimensionGetItems)(dimension).map(function (item) {
    return (0, _itemGetId.itemGetId)(item);
  });
};

exports.dimensionGetItemIds = dimensionGetItemIds;