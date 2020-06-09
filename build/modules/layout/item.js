"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEM_PROPS = exports.ITEM_PROP_ID = exports.ITEM = void 0;

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _isString = _interopRequireDefault(require("lodash/isString"));

// Item
var ITEM = {
  isValid: function isValid(item) {
    return (0, _isObject.default)(item);
  }
}; // Props

exports.ITEM = ITEM;
var ITEM_PROP_ID = {
  name: 'id',
  defaultValue: '',
  required: true,
  isValid: function isValid(prop) {
    return (0, _isString.default)(prop);
  }
};
exports.ITEM_PROP_ID = ITEM_PROP_ID;
var ITEM_PROPS = [ITEM_PROP_ID];
exports.ITEM_PROPS = ITEM_PROPS;