"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemIsValid = void 0;

var _item = require("./item");

var itemIsValid = function itemIsValid(item) {
  if (!_item.ITEM.isValid(item)) {
    return false;
  }

  var requiredProps = _item.ITEM_PROPS.filter(function (prop) {
    return prop.required;
  });

  return requiredProps.every(function (prop) {
    return prop.isValid(item[prop.name]);
  });
};

exports.itemIsValid = itemIsValid;