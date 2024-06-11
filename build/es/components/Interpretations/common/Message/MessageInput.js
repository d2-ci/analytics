import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { theme, colors } from '@dhis2/ui';
import React, { forwardRef } from 'react';
const MessageInput = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
  ref: ref
}, props, {
  className: _JSXStyle.dynamic([["2769305849", [colors.grey900, colors.grey500, theme.focus, colors.grey100, colors.grey500, theme.disabled]]]) + " " + (props && props.className != null && props.className || "input")
})), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2769305849",
  dynamic: [colors.grey900, colors.grey500, theme.focus, colors.grey100, colors.grey500, theme.disabled]
}, [".input.__jsx-style-dynamic-selector{width:100%;box-sizing:border-box;font-size:14px;line-height:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:".concat(colors.grey900, ";background-color:white;padding:12px 11px 10px;outline:0;border:1px solid ").concat(colors.grey500, ";border-radius:3px;box-shadow:inset 0 1px 2px 0 rgba(48,54,60,0.1);text-overflow:ellipsis;}"), "input.__jsx-style-dynamic-selector:focus{outline:none;box-shadow:0 0 0 3px ".concat(theme.focus, ";}"), "input.disabled.__jsx-style-dynamic-selector{background-color:".concat(colors.grey100, ";border-color:").concat(colors.grey500, ";color:").concat(theme.disabled, ";cursor:not-allowed;}")])));
MessageInput.displayName = 'MessageInput';
export { MessageInput };