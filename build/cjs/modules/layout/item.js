"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEM_PROP_ID = exports.ITEM_PROPS = exports.ITEM = void 0;
var _isObject = _interopRequireDefault(require("lodash/isObject"));
var _isString = _interopRequireDefault(require("lodash/isString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Item

const ITEM = {
  isValid: item => (0, _isObject.default)(item)
};

// Props
exports.ITEM = ITEM;
const ITEM_PROP_ID = {
  name: 'id',
  defaultValue: '',
  required: true,
  isValid: prop => (0, _isString.default)(prop)
};
exports.ITEM_PROP_ID = ITEM_PROP_ID;
const ITEM_PROPS = [ITEM_PROP_ID];
exports.ITEM_PROPS = ITEM_PROPS;