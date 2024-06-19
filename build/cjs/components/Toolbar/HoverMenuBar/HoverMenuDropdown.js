"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverMenuDropdown = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _popper = require("@dhis2-ui/popper");
var _portal = require("@dhis2-ui/portal");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _MenuButtonStyles = _interopRequireDefault(require("../MenuButton.styles.js"));
var _HoverMenuBar = require("./HoverMenuBar.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HoverMenuDropdown = _ref => {
  let {
    children,
    className,
    label,
    dataTest,
    disabled
  } = _ref;
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
  }, _MenuButtonStyles.default)), isOpen && /*#__PURE__*/_react.default.createElement(_portal.Portal, null, /*#__PURE__*/_react.default.createElement(_popper.Popper, {
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