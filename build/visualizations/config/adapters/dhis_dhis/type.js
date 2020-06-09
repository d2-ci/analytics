"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.VISUALIZATION_TYPE_SINGLE_VALUE = void 0;
var VISUALIZATION_TYPE_SINGLE_VALUE = 'SINGLE_VALUE';
exports.VISUALIZATION_TYPE_SINGLE_VALUE = VISUALIZATION_TYPE_SINGLE_VALUE;

function _default(type) {
  switch (type) {
    case VISUALIZATION_TYPE_SINGLE_VALUE:
      return {
        type: VISUALIZATION_TYPE_SINGLE_VALUE
      };

    default:
      return {
        type: VISUALIZATION_TYPE_SINGLE_VALUE
      };
  }
}