"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./dhis/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const noValidation = data => data;
var _default = exports.default = {
  dhis: _index.default,
  noValidation
};