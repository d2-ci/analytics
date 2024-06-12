"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(axis) {
  const steps = axis.steps;
  return (0, _isNumeric.default)(steps) ? steps : undefined;
}