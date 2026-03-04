"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAYOUT = void 0;
var _isObject = _interopRequireDefault(require("lodash/isObject"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LAYOUT = exports.LAYOUT = {
  isValid: layout => (0, _isObject.default)(layout)
};