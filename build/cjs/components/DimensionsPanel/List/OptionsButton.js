"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const OptionsButton = _ref => {
  let {
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: "jsx-2728765288"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconMore16, null)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2728765288"
  }, ["button.jsx-2728765288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:20px;width:20px;padding:0;border:none;background:none;outline:none;cursor:pointer;border-top-right-radius:2px;border-bottom-left-radius:2px;}", "button.jsx-2728765288:hover{background-color:rgba(0,0,0,0.09);}"]));
};
OptionsButton.propTypes = {
  onClick: _propTypes.default.func
};
var _default = OptionsButton;
exports.default = _default;