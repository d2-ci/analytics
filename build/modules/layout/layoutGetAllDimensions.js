"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllDimensions = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _layoutGetAllAxes = require("./layoutGetAllAxes");

var layoutGetAllDimensions = function layoutGetAllDimensions(layout) {
  return (0, _layoutGetAllAxes.layoutGetAllAxes)(layout).reduce(function (allDimensions, axis) {
    allDimensions.push.apply(allDimensions, (0, _toConsumableArray2.default)(axis));
    return allDimensions;
  }, []);
};

exports.layoutGetAllDimensions = layoutGetAllDimensions;