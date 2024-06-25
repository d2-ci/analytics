"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _ui = require("@dhis2/ui");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MessageInput = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", _extends({
  ref: ref
}, props, {
  className: _style.default.dynamic([["2769305849", [_ui.colors.grey900, _ui.colors.grey500, _ui.theme.focus, _ui.colors.grey100, _ui.colors.grey500, _ui.theme.disabled]]]) + " " + (props && props.className != null && props.className || "input")
})), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2769305849",
  dynamic: [_ui.colors.grey900, _ui.colors.grey500, _ui.theme.focus, _ui.colors.grey100, _ui.colors.grey500, _ui.theme.disabled]
}, [".input.__jsx-style-dynamic-selector{width:100%;box-sizing:border-box;font-size:14px;line-height:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:".concat(_ui.colors.grey900, ";background-color:white;padding:12px 11px 10px;outline:0;border:1px solid ").concat(_ui.colors.grey500, ";border-radius:3px;box-shadow:inset 0 1px 2px 0 rgba(48,54,60,0.1);text-overflow:ellipsis;}"), "input.__jsx-style-dynamic-selector:focus{outline:none;box-shadow:0 0 0 3px ".concat(_ui.theme.focus, ";}"), "input.disabled.__jsx-style-dynamic-selector{background-color:".concat(_ui.colors.grey100, ";border-color:").concat(_ui.colors.grey500, ";color:").concat(_ui.theme.disabled, ";cursor:not-allowed;}")])));
exports.MessageInput = MessageInput;
MessageInput.displayName = 'MessageInput';