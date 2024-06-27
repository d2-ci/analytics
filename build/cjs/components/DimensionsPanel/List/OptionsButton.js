"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OptionsButton = _ref => {
  let {
    style,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    style: style,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_ui.IconMore16, null));
};

OptionsButton.propTypes = {
  style: _propTypes.default.object,
  onClick: _propTypes.default.func
};
var _default = OptionsButton;
exports.default = _default;