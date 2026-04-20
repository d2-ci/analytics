"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageStatsBar = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MessageStatsBar = ({
  children
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: _style.default.dynamic([["161874495", [_ui.spacers.dp4]]]) + " " + "container"
}, children, /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "161874495",
  dynamic: [_ui.spacers.dp4]
}, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:${_ui.spacers.dp4};}`]));
exports.MessageStatsBar = MessageStatsBar;
MessageStatsBar.propTypes = {
  children: _propTypes.default.node.isRequired
};