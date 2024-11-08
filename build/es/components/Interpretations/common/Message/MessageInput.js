import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { theme, colors } from '@dhis2/ui';
import React, { forwardRef } from 'react';
const MessageInput = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
  ref: ref
}, props, {
  className: _JSXStyle.dynamic([["2769305849", [colors.grey900, colors.grey500, theme.focus, colors.grey100, colors.grey500, theme.disabled]]]) + " " + (props && props.className != null && props.className || "input")
})), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2769305849",
  dynamic: [colors.grey900, colors.grey500, theme.focus, colors.grey100, colors.grey500, theme.disabled]
}, [`.input.__jsx-style-dynamic-selector{width:100%;box-sizing:border-box;font-size:14px;line-height:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:${colors.grey900};background-color:white;padding:12px 11px 10px;outline:0;border:1px solid ${colors.grey500};border-radius:3px;box-shadow:inset 0 1px 2px 0 rgba(48,54,60,0.1);text-overflow:ellipsis;}`, `input.__jsx-style-dynamic-selector:focus{outline:none;box-shadow:0 0 0 3px ${theme.focus};}`, `input.disabled.__jsx-style-dynamic-selector{background-color:${colors.grey100};border-color:${colors.grey500};color:${theme.disabled};cursor:not-allowed;}`])));
MessageInput.displayName = 'MessageInput';
export { MessageInput };