"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptySelection = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../../locales/index.js"));
var _OptionsSelectorStyle = _interopRequireDefault(require("./styles/OptionsSelector.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EmptySelection = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: `jsx-${_OptionsSelectorStyle.default.__hash}` + " " + "empty-list"
}, _index.default.t('No options selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _OptionsSelectorStyle.default.__hash
}, _OptionsSelectorStyle.default));
exports.EmptySelection = EmptySelection;