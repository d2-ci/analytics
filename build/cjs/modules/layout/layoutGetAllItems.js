"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllItems = void 0;
var _axisGetAllItems = require("./axisGetAllItems.js");
var _layoutGetAllAxes = require("./layoutGetAllAxes.js");
const layoutGetAllItems = layout => (0, _layoutGetAllAxes.layoutGetAllAxes)(layout).reduce((allItems, axis) => {
  allItems.push(...(0, _axisGetAllItems.axisGetAllItems)(axis));
  return allItems;
}, []);
exports.layoutGetAllItems = layoutGetAllItems;