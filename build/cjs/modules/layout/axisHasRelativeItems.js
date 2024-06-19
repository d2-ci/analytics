"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisHasRelativeItems = void 0;

var _dimensionHasRelativeItems = require("./dimensionHasRelativeItems.js");

const axisHasRelativeItems = axis => axis.some(dimension => (0, _dimensionHasRelativeItems.dimensionHasRelativeItems)(dimension));

exports.axisHasRelativeItems = axisHasRelativeItems;