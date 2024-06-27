"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./dhis/index.js"));

var _index2 = _interopRequireDefault(require("./highcharts/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  highcharts: _index2.default,
  dhis: _index.default
};
exports.default = _default;