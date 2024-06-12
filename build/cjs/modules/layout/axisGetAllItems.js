"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetAllItems = void 0;

var _dimensionGetItems = require("./dimensionGetItems.js");

const axisGetAllItems = axis => axis.reduce((allItems, dimension) => {
  allItems.push(...(0, _dimensionGetItems.dimensionGetItems)(dimension));
  return allItems;
}, []);

exports.axisGetAllItems = axisGetAllItems;