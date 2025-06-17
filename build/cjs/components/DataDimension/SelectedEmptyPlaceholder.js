"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedEmptyPlaceholder = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _react = _interopRequireDefault(require("react"));
var _EmptyPlaceholderStyle = _interopRequireDefault(require("./styles/EmptyPlaceholder.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SelectedEmptyPlaceholder = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: `jsx-${_EmptyPlaceholderStyle.default.__hash}` + " " + "empty-list"
}, _d2I18n.default.t('No items selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _EmptyPlaceholderStyle.default.__hash
}, _EmptyPlaceholderStyle.default));
exports.SelectedEmptyPlaceholder = SelectedEmptyPlaceholder;