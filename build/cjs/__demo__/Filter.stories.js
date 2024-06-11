"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireWildcard(require("react"));
var _Filter = _interopRequireDefault(require("../components/Filter/Filter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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