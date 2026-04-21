"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = require("../../../RichText/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Message = ({
  children,
  text,
  created,
  username
}) => {
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  return /*#__PURE__*/_react.default.createElement("li", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "avatar"
  }, /*#__PURE__*/_react.default.createElement(_ui.UserAvatar, {
    name: username,
    small: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "username"
  }, username), /*#__PURE__*/_react.default.createElement("time", {
    dateTime: created,
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]])
  }, (0, _moment.default)(fromServerDate(created)).format('MMM D, YYYY [·] HH:mm'))), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "content"
  }, /*#__PURE__*/_react.default.createElement(_index.RichTextParser, null, text)), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["953262660", [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "footer"
  }, children)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "953262660",
    dynamic: [_ui.spacers.dp8, _ui.colors.grey900, _ui.spacers.dp8, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp4, _ui.spacers.dp4]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:${_ui.spacers.dp8};padding:0;}`, ".avatar.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-top:6px;}", ".main.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}", `.header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2px;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;font-size:14px;font-weight:500;line-height:18px;color:${_ui.colors.grey900};margin-block-end:${_ui.spacers.dp8};}`, `.header.__jsx-style-dynamic-selector time.__jsx-style-dynamic-selector{font-size:13px;line-height:16px;font-weight:400;color:${_ui.colors.grey600};}`, `.content.__jsx-style-dynamic-selector{font-size:14px;line-height:21px;color:${_ui.colors.grey900};word-break:break-word;}`, ".content.__jsx-style-dynamic-selector p{white-space:pre-line;}", ".content.__jsx-style-dynamic-selector p:first-child{margin:0;}", `.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:${_ui.spacers.dp4};margin-block-start:${_ui.spacers.dp4};}`]));
};
exports.Message = Message;
Message.propTypes = {
  children: _propTypes.default.node.isRequired,
  created: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  username: _propTypes.default.string.isRequired
};