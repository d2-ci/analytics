"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHash = exports.getExpressionHashFromVisualization = void 0;
var _sha = _interopRequireDefault(require("crypto-js/sha1"));
var _dataTypes = require("./dataTypes.js");
var _layoutGetAllItems2 = require("./layout/layoutGetAllItems.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isValidValue = value => typeof value === 'string' && value.length;
const getHash = value => isValidValue(value) ? (0, _sha.default)(value).toString() : undefined;
exports.getHash = getHash;
const getExpressionHashFromVisualization = visualization => {
  var _layoutGetAllItems;
  return getHash((_layoutGetAllItems = (0, _layoutGetAllItems2.layoutGetAllItems)(visualization)) === null || _layoutGetAllItems === void 0 ? void 0 : _layoutGetAllItems.filter(item => item.dimensionItemType === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && isValidValue(item.expression)).sort((i1, i2) => i1.id < i2.id ? -1 : i1.id > i2.id ? 1 : 0).map(edi => edi.expression).join(''));
};
exports.getExpressionHashFromVisualization = getExpressionHashFromVisualization;