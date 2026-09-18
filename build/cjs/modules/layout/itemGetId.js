"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemGetId = void 0;
var _item = require("./item.js");
const itemGetId = item => _item.ITEM_PROP_ID.isValid(item[_item.ITEM_PROP_ID.name]) ? item[_item.ITEM_PROP_ID.name] : _item.ITEM_PROP_ID.defaultValue;
exports.itemGetId = itemGetId;