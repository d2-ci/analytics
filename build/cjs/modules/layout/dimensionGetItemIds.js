"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetItemIds = void 0;
var _dimensionGetItems = require("./dimensionGetItems.js");
var _itemGetId = require("./itemGetId.js");
const dimensionGetItemIds = dimension => (0, _dimensionGetItems.dimensionGetItems)(dimension).map(item => (0, _itemGetId.itemGetId)(item));
exports.dimensionGetItemIds = dimensionGetItemIds;