"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverMenuDropdown = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _MenuButtonStyles = _interopRequireDefault(require("../MenuButton.styles.js"));
var _HoverMenuBar = require("./HoverMenuBar.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HoverMenuDropdown = ({
  children,
  className,
  label,
  dataTest,
  disabled
}) => {
  const buttonRef = (0, _react.useRef)();
  const {
    onDropDownButtonClick,
    onDropDownButtonMouseOver,
    openedDropdownEl
  } = (0, _HoverMenuBar.useHoverMenubarContext)();
  const isOpen = openedDropdownEl === buttonRef.current;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    ref: buttonRef,
    onClick: onDropDownButtonClick,
    disabled: disabled,
    onMouseOver: disabled ? undefined : onDropDownButtonMouseOver,
    "data-test": dataTest,
    className: `jsx-${_MenuButtonStyles.default.__hash}` + " " + ((0, _classnames.default)(className, {
      isOpen
    }) || "")
  }, label, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _MenuButtonStyles.default.__hash
  }, _MenuButtonStyles.default)), isOpen && /*#__PURE__*/_react.default.createElement(_ui.Portal, null, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    placement: "bottom-start",
    reference: buttonRef
  }, children)));
};
exports.HoverMenuDropdown = HoverMenuDropdown;
HoverMenuDropdown.defaultProps = {
  dataTest: 'dhis2-analytics-hovermenudropdown'
};
HoverMenuDropdown.propTypes = {
  children: _propTypes.default.node.isRequired,
  label: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool
};