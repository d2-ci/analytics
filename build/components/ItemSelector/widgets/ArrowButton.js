"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ArrowButton = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ArrowForward = _interopRequireDefault(require("@material-ui/icons/ArrowForward"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _ArrowButton = _interopRequireDefault(require("./styles/ArrowButton.style"));

var _ref2 = /*#__PURE__*/_react.default.createElement(_ArrowForward.default, null);

var _ref3 = /*#__PURE__*/_react.default.createElement(_ArrowBack.default, null);

var ArrowButton = function ArrowButton(_ref) {
  var onClick = _ref.onClick,
      iconType = _ref.iconType;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: "jsx-".concat(_ArrowButton.default.__hash) + " " + "arrow-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "jsx-".concat(_ArrowButton.default.__hash) + " " + "arrow-icon"
  }, iconType === 'arrowForward' ? _ref2 : _ref3), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _ArrowButton.default.__hash
  }, _ArrowButton.default));
};

exports.ArrowButton = ArrowButton;
ArrowButton.propTypes = {
  iconType: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = ArrowButton;
exports.default = _default;