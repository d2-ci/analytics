"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _visTypes = require("../../../../../modules/visTypes.js");

var _gauge = _interopRequireDefault(require("./gauge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_GAUGE:
      return (0, _gauge.default)();

    default:
      return undefined;
  }
}