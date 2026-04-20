"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageIconButton = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MessageIconButton = ({
  tooltipContent,
  disabled,
  onClick,
  selected,
  confirming,
  label,
  iconComponent: Icon,
  dataTest,
  viewOnly
}) => /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
  closeDelay: 200,
  content: tooltipContent
}, ({
  ref,
  onMouseOver,
  onMouseOut
}) => /*#__PURE__*/_react.default.createElement("span", {
  ref: ref,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  className: _style.default.dynamic([["1341860244", [_ui.colors.grey700, _ui.colors.teal600, _ui.colors.teal050, _ui.colors.grey900, _ui.colors.grey200, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.colors.red700, _ui.colors.red100, _ui.colors.red700, _ui.colors.red800, _ui.colors.red200, _ui.colors.red800, _ui.theme.disabled, _ui.theme.disabled, _ui.theme.focus]]]) + " " + "wrapper"
}, /*#__PURE__*/_react.default.createElement("button", {
  onClick: event => {
    event.stopPropagation();
    onClick();
  },
  disabled: disabled,
  "data-test": dataTest,
  className: _style.default.dynamic([["1341860244", [_ui.colors.grey700, _ui.colors.teal600, _ui.colors.teal050, _ui.colors.grey900, _ui.colors.grey200, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.colors.red700, _ui.colors.red100, _ui.colors.red700, _ui.colors.red800, _ui.colors.red200, _ui.colors.red800, _ui.theme.disabled, _ui.theme.disabled, _ui.theme.focus]]]) + " " + ((0, _classnames.default)('button', {
    selected,
    viewOnly,
    confirming
  }) || "")
}, /*#__PURE__*/_react.default.createElement(Icon, null), label !== undefined && label !== null && /*#__PURE__*/_react.default.createElement("span", {
  className: _style.default.dynamic([["1341860244", [_ui.colors.grey700, _ui.colors.teal600, _ui.colors.teal050, _ui.colors.grey900, _ui.colors.grey200, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.colors.red700, _ui.colors.red100, _ui.colors.red700, _ui.colors.red800, _ui.colors.red200, _ui.colors.red800, _ui.theme.disabled, _ui.theme.disabled, _ui.theme.focus]]]) + " " + "label"
}, label)), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "1341860244",
  dynamic: [_ui.colors.grey700, _ui.colors.teal600, _ui.colors.teal050, _ui.colors.grey900, _ui.colors.grey200, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.colors.red700, _ui.colors.red100, _ui.colors.red700, _ui.colors.red800, _ui.colors.red200, _ui.colors.red800, _ui.theme.disabled, _ui.theme.disabled, _ui.theme.focus]
}, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", `.button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:3px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;line-height:1;color:${_ui.colors.grey700};border:1px solid transparent;border-radius:5px;padding:3px 5px;}`, ".viewOnly.__jsx-style-dynamic-selector{cursor:default;}", `.button.selected.__jsx-style-dynamic-selector{color:${_ui.colors.teal600};font-weight:400;background-color:${_ui.colors.teal050};}`, `.button.__jsx-style-dynamic-selector:hover{color:${_ui.colors.grey900};background-color:${_ui.colors.grey200};}`, `.button.selected.__jsx-style-dynamic-selector:hover{color:${_ui.colors.teal800};}`, `.button.selected.__jsx-style-dynamic-selector svg{color:${_ui.colors.teal500};}`, `.button.selected.__jsx-style-dynamic-selector:hover svg{color:${_ui.colors.teal700};}`, `.button.confirming.__jsx-style-dynamic-selector{color:${_ui.colors.red700};background-color:${_ui.colors.red100};}`, `.button.confirming.__jsx-style-dynamic-selector svg{color:${_ui.colors.red700};}`, `.button.confirming.__jsx-style-dynamic-selector:hover{color:${_ui.colors.red800};background-color:${_ui.colors.red200};}`, `.button.confirming.__jsx-style-dynamic-selector:hover svg{color:${_ui.colors.red800};}`, `.button.__jsx-style-dynamic-selector:disabled{color:${_ui.theme.disabled};cursor:not-allowed;}`, `.button.__jsx-style-dynamic-selector:disabled svg{color:${_ui.theme.disabled};}`, `.button.__jsx-style-dynamic-selector:focus-visible{outline:2px solid ${_ui.theme.focus};outline-offset:-2px;}`])));
exports.MessageIconButton = MessageIconButton;
MessageIconButton.propTypes = {
  iconComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired,
  tooltipContent: _propTypes.default.string.isRequired,
  confirming: _propTypes.default.bool,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  selected: _propTypes.default.bool,
  viewOnly: _propTypes.default.bool,
  onClick: _propTypes.default.func
};