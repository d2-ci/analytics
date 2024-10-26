"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAYOUT = void 0;
var _isObject = _interopRequireDefault(require("lodash/isObject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LAYOUT = {
  isValid: layout => (0, _isObject.default)(layout)
};
exports.LAYOUT = LAYOUT;