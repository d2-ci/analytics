"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemIsValid = void 0;
var _item = require("./item.js");
const itemIsValid = item => {
  if (!_item.ITEM.isValid(item)) {
    return false;
  }
  const requiredProps = _item.ITEM_PROPS.filter(prop => prop.required);
  return requiredProps.every(prop => prop.isValid(item[prop.name]));
};
exports.itemIsValid = itemIsValid;