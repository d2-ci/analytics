"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEM_PROP_ID = exports.ITEM_PROPS = exports.ITEM = void 0;
var _isObject = _interopRequireDefault(require("lodash/isObject"));
var _isString = _interopRequireDefault(require("lodash/isString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Item

const ITEM = exports.ITEM = {
  isValid: item => (0, _isObject.default)(item)
};

// Props

const ITEM_PROP_ID = exports.ITEM_PROP_ID = {
  name: 'id',
  defaultValue: '',
  required: true,
  isValid: prop => (0, _isString.default)(prop)
};
const ITEM_PROPS = exports.ITEM_PROPS = [ITEM_PROP_ID];