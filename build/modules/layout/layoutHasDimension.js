"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutHasDimension = void 0;

var _layoutGetDimension = require("./layoutGetDimension");

var layoutHasDimension = function layoutHasDimension(layout, dimensionId) {
  return Boolean((0, _layoutGetDimension.layoutGetDimension)(layout, dimensionId));
};

exports.layoutHasDimension = layoutHasDimension;