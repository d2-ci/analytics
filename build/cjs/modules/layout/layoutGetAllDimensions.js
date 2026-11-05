"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllDimensions = void 0;
var _layoutGetAllAxes = require("./layoutGetAllAxes.js");
const layoutGetAllDimensions = layout => (0, _layoutGetAllAxes.layoutGetAllAxes)(layout).reduce((allDimensions, axis) => {
  allDimensions.push(...axis);
  return allDimensions;
}, []);
exports.layoutGetAllDimensions = layoutGetAllDimensions;