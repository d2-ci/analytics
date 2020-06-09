"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllItemIds = void 0;

var _layoutGetAllItems = require("./layoutGetAllItems");

var _itemGetId = require("./itemGetId");

var layoutGetAllItemIds = function layoutGetAllItemIds(layout) {
  return (0, _layoutGetAllItems.layoutGetAllItems)(layout).map(function (item) {
    return (0, _itemGetId.itemGetId)(item);
  });
};

exports.layoutGetAllItemIds = layoutGetAllItemIds;