"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireWildcard(require("react"));
var _Filter = _interopRequireDefault(require("../components/Filter/Filter.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function FilterWithState() {
  const [text, setText] = (0, _react2.useState)(null);
  const onTextChange = value => setText(value);
  const onClearFilter = () => setText(null);
  return /*#__PURE__*/_react2.default.createElement(_Filter.default, {
    placeholder: "Filter dimensions",
    text: text,
    onChange: onTextChange,
    onClear: onClearFilter,
    disableUnderline: true,
    type: "search"
  });
}
(0, _react.storiesOf)('Filter', module).add('default', () => {
  return /*#__PURE__*/_react2.default.createElement(FilterWithState, null);
});