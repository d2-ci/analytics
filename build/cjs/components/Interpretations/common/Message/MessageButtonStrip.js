"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageButtonStrip = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageButtonStrip = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["1819118406", [_ui.spacers.dp8, _ui.spacers.dp8]]]) + " " + "container"
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1819118406",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp8]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${_ui.spacers.dp8};margin-top:${_ui.spacers.dp8};}`]));
};
exports.MessageButtonStrip = MessageButtonStrip;
MessageButtonStrip.propTypes = {
  children: _propTypes.default.node.isRequired
};