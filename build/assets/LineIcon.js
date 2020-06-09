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
}, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("mask", {
  id: "mask-2",
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
}), /*#__PURE__*/_react.default.createElement("polyline", {
  stroke: "#7B8998",
  strokeWidth: "1.5",
  mask: "url(#mask-2)",
  points: "0 5 5 9 9 7 15 12"
}))));

exports.default = _default;