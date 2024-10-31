"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageEditorContainer = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageEditorContainer = _ref => {
  let {
    children,
    currentUser,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": dataTest,
    className: _style.default.dynamic([["969803715", [_ui.spacers.dp8, _ui.spacers.dp12]]]) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["969803715", [_ui.spacers.dp8, _ui.spacers.dp12]]]) + " " + "avatar"
  }, /*#__PURE__*/_react.default.createElement(_ui.UserAvatar, {
    name: currentUser.name,
    medium: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["969803715", [_ui.spacers.dp8, _ui.spacers.dp12]]]) + " " + "editor"
  }, children), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "969803715",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp12]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${_ui.spacers.dp8};margin-top:${_ui.spacers.dp12};}`, ".avatar.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".editor.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;}"]));
};
exports.MessageEditorContainer = MessageEditorContainer;
MessageEditorContainer.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  children: _propTypes.default.node,
  dataTest: _propTypes.default.string
};