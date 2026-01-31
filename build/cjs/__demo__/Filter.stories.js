"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Filter = _interopRequireDefault(require("../components/Filter/Filter.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function FilterWithState() {
  const [text, setText] = (0, _react.useState)(null);
  const onTextChange = value => setText(value);
  const onClearFilter = () => setText(null);
  return /*#__PURE__*/_react.default.createElement(_Filter.default, {
    placeholder: "Filter dimensions",
    text: text,
    onChange: onTextChange,
    onClear: onClearFilter,
    disableUnderline: true,
    type: "search"
  });
}
var _default = exports.default = {
  title: 'Filter'
};
const Default = () => {
  return /*#__PURE__*/_react.default.createElement(FilterWithState, null);
};
exports.Default = Default;
Default.story = {
  name: 'default'
};