"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionHasRelativeItems = void 0;
var _index = require("../relativeItems/index.js");
var _dimensionGetId = require("./dimensionGetId.js");
var _dimensionGetItemIds = require("./dimensionGetItemIds.js");
const dimensionHasRelativeItems = dimension => (0, _index.hasRelativeItems)((0, _dimensionGetId.dimensionGetId)(dimension), (0, _dimensionGetItemIds.dimensionGetItemIds)(dimension));
exports.dimensionHasRelativeItems = dimensionHasRelativeItems;