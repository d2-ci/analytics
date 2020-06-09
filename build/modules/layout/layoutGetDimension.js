"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetDimension = void 0;

var _layoutGetAllDimensions = require("./layoutGetAllDimensions");

var _dimensionIs = require("./dimensionIs");

var layoutGetDimension = function layoutGetDimension(layout, dimensionId) {
  return (0, _layoutGetAllDimensions.layoutGetAllDimensions)(layout).find(function (dimension) {
    return (0, _dimensionIs.dimensionIs)(dimension, dimensionId);
  });
};

exports.layoutGetDimension = layoutGetDimension;