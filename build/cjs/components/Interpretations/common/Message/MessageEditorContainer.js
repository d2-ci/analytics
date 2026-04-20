"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageEditorContainer = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MessageEditorContainer = ({
  children,
  currentUserName,
  dataTest
}) => /*#__PURE__*/_react.default.createElement("div", {
  "data-test": dataTest,
  className: _style.default.dynamic([["3866204711", [_ui.spacers.dp8]]]) + " " + "container"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: _style.default.dynamic([["3866204711", [_ui.spacers.dp8]]]) + " " + "avatar"
}, /*#__PURE__*/_react.default.createElement(_ui.UserAvatar, {
  name: currentUserName,
  small: true
})), /*#__PURE__*/_react.default.createElement("div", {
  className: _style.default.dynamic([["3866204711", [_ui.spacers.dp8]]]) + " " + "editor"
}, children), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "3866204711",
  dynamic: [_ui.spacers.dp8]
}, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${_ui.spacers.dp8};}`, ".avatar.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;margin-block-start:3px;}", ".editor.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;}"]));
exports.MessageEditorContainer = MessageEditorContainer;
MessageEditorContainer.propTypes = {
  currentUserName: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  dataTest: _propTypes.default.string
};