"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioCard = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _RadioCardStyle = _interopRequireDefault(require("./styles/RadioCard.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RadioCard = _ref => {
  let {
    id,
    name,
    checked,
    onChange,
    icon,
    title,
    subtitle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + ((0, _classnames.default)('radio-card', {
      checked
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    onChange: onChange,
    className: `jsx-${_RadioCardStyle.default.__hash}`
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + "content"
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + "text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + "title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_RadioCardStyle.default.__hash}` + " " + "subtitle"
  }, subtitle)))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RadioCardStyle.default.__hash
  }, _RadioCardStyle.default));
};
exports.RadioCard = RadioCard;
RadioCard.propTypes = {
  checked: _propTypes.default.bool,
  icon: _propTypes.default.node,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  title: _propTypes.default.string,
  onChange: _propTypes.default.func
};