"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _gauge = _interopRequireDefault(require("./gauge"));

var _visTypes = require("../../../../../modules/visTypes");

function _default(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_GAUGE:
      return (0, _gauge.default)();

    default:
      return undefined;
  }
}