"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

var _default = /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
  viewBox: "0 0 16 16"
}, /*#__PURE__*/_react.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("mask", {
  fill: "white"
}, /*#__PURE__*/_react.default.createElement("rect", {
  x: "0",
  y: "0",
  width: "16",
  height: "16"
})), /*#__PURE__*/_react.default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "15",
  width: "16",
  height: "1"
}), /*#__PURE__*/_react.default.createElement("rect", {
  fill: "#7B8998",
  mask: "url(#mask-2)",
  x: "0",
  y: "0",
  width: "1",
  height: "16"
}), /*#__PURE__*/_react.default.createElement("polygon", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  fill: "#7B8998",
  mask: "url(#mask-2)",
  points: "3 5 7 9 10 7 15 12 15 13 3 13"
})));

exports.default = _default;