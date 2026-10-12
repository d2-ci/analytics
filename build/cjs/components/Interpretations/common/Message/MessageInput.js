"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MessageInput = exports.MessageInput = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", _extends({
  ref: ref
}, props, {
  className: _style.default.dynamic([["2769305849", [_ui.colors.grey900, _ui.colors.grey500, _ui.theme.focus, _ui.colors.grey100, _ui.colors.grey500, _ui.theme.disabled]]]) + " " + (props && props.className != null && props.className || "input")
})), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2769305849",
  dynamic: [_ui.colors.grey900, _ui.colors.grey500, _ui.theme.focus, _ui.colors.grey100, _ui.colors.grey500, _ui.theme.disabled]
}, [`.input.__jsx-style-dynamic-selector{width:100%;box-sizing:border-box;font-size:14px;line-height:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:${_ui.colors.grey900};background-color:white;padding:12px 11px 10px;outline:0;border:1px solid ${_ui.colors.grey500};border-radius:3px;box-shadow:inset 0 1px 2px 0 rgba(48,54,60,0.1);text-overflow:ellipsis;}`, `input.__jsx-style-dynamic-selector:focus{outline:none;box-shadow:0 0 0 3px ${_ui.theme.focus};}`, `input.disabled.__jsx-style-dynamic-selector{background-color:${_ui.colors.grey100};border-color:${_ui.colors.grey500};color:${_ui.theme.disabled};cursor:not-allowed;}`])));
MessageInput.displayName = 'MessageInput';