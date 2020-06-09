"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var DEFAULT_AXIS_TITLE = {
  align: 'low',
  margin: 15,
  style: {
    color: '#222',
    textShadow: '0 0 #999',
    fontSize: '13px'
  }
};

function _default(title) {
  return (0, _isString.default)(title) ? Object.assign({}, DEFAULT_AXIS_TITLE, {
    text: title
  }) : {
    text: null
  };
}