"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllItems = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _layoutGetAllAxes = require("./layoutGetAllAxes");

var _axisGetAllItems = require("./axisGetAllItems");

var layoutGetAllItems = function layoutGetAllItems(layout) {
  return (0, _layoutGetAllAxes.layoutGetAllAxes)(layout).reduce(function (allItems, axis) {
    allItems.push.apply(allItems, (0, _toConsumableArray2.default)((0, _axisGetAllItems.axisGetAllItems)(axis)));
    return allItems;
  }, []);
};

exports.layoutGetAllItems = layoutGetAllItems;