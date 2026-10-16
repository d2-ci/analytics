"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAllItemIds = void 0;
var _itemGetId = require("./itemGetId.js");
var _layoutGetAllItems = require("./layoutGetAllItems.js");
const layoutGetAllItemIds = layout => (0, _layoutGetAllItems.layoutGetAllItems)(layout).map(item => (0, _itemGetId.itemGetId)(item));
exports.layoutGetAllItemIds = layoutGetAllItemIds;