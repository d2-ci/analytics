"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisGetAllItems = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _dimensionGetItems = require("./dimensionGetItems");

var axisGetAllItems = function axisGetAllItems(axis) {
  return axis.reduce(function (allItems, dimension) {
    allItems.push.apply(allItems, (0, _toConsumableArray2.default)((0, _dimensionGetItems.dimensionGetItems)(dimension)));
    return allItems;
  }, []);
};

exports.axisGetAllItems = axisGetAllItems;