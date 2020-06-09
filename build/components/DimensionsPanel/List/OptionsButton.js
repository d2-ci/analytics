"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OptionsButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MoreHorizontalIcon = _interopRequireDefault(require("../../../assets/MoreHorizontalIcon"));

var _ref2 = /*#__PURE__*/_react.default.createElement(_MoreHorizontalIcon.default, null);

var OptionsButton = function OptionsButton(_ref) {
  var style = _ref.style,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    style: style,
    onClick: onClick
  }, _ref2);
};

exports.OptionsButton = OptionsButton;
OptionsButton.propTypes = {
  style: _propTypes.default.object,
  onClick: _propTypes.default.func
};
var _default = OptionsButton;
exports.default = _default;