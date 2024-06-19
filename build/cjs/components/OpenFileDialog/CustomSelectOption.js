"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomSelectOption = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _CustomSelectOptionStyle = _interopRequireDefault(require("./styles/CustomSelectOption.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomSelectOptionItem = _ref => {
  let {
    value,
    label,
    icon,
    insertDivider,
    onClick,
    active,
    disabled
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: e => onClick({}, e),
    "data-value": value,
    "data-label": label,
    className: `jsx-${_CustomSelectOptionStyle.default.__hash}` + " " + ((0, _classnames.default)({
      active,
      disabled
    }) || "")
  }, icon, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_CustomSelectOptionStyle.default.__hash}` + " " + ((0, _classnames.default)({
      label: icon
    }) || "")
  }, label), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _CustomSelectOptionStyle.default.__hash
  }, _CustomSelectOptionStyle.default)), insertDivider && /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, {
    dense: true
  }));
};
const CustomSelectOption = props => props.disabled ? /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
  content: _d2I18n.default.t('Not supported by this app yet')
}, /*#__PURE__*/_react.default.createElement(CustomSelectOptionItem, props)) : /*#__PURE__*/_react.default.createElement(CustomSelectOptionItem, props);
exports.CustomSelectOption = CustomSelectOption;
CustomSelectOption.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.element,
  onClick: _propTypes.default.func
};
CustomSelectOptionItem.propTypes = CustomSelectOption.propTypes;
var _default = exports.default = CustomSelectOption;