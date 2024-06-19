"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _visTypes = require("../../../../modules/visTypes.js");

function _default(type) {
  switch (type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        type: _visTypes.VIS_TYPE_SINGLE_VALUE
      };

    default:
      return {
        type: _visTypes.VIS_TYPE_SINGLE_VALUE
      };
  }
}