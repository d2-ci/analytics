"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverMenuListItem = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _popper = require("@dhis2-ui/popper");
var _portal = require("@dhis2-ui/portal");
var _uiIcons = require("@dhis2/ui-icons");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _HoverMenuList = require("./HoverMenuList.js");
var _HoverMenuListItemStyles = _interopRequireDefault(require("./HoverMenuListItem.styles.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HoverMenuListItem = _ref => {
  let {
    onClick,
    children,
    icon,
    className,
    destructive,
    disabled,
    dataTest,
    label
  } = _ref;
  const ref = (0, _react.useRef)();
  const {
    onSubmenuAnchorMouseEnter,
    onMenuItemMouseEnter,
    openedSubMenuEl,
    dense
  } = (0, _HoverMenuList.useHoverMenuListContext)();
  const isSubMenuOpen = openedSubMenuEl === ref.current;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    ref: ref,
    "data-test": dataTest,
    onClick: !disabled && !children && onClick ? onClick : undefined,
    onMouseEnter: disabled ? undefined : children ? onSubmenuAnchorMouseEnter : onMenuItemMouseEnter,
    className: `jsx-${_HoverMenuListItemStyles.default.__hash}` + " " + ((0, _classnames.default)(className, {
      destructive,
      disabled,
      dense,
      active: isSubMenuOpen,
      'with-chevron': children
    }) || "")
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_HoverMenuListItemStyles.default.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_HoverMenuListItemStyles.default.__hash}` + " " + "label"
  }, label), !!children && /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_HoverMenuListItemStyles.default.__hash}` + " " + "chevron"
  }, /*#__PURE__*/_react.default.createElement(_uiIcons.IconChevronRight24, null)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _HoverMenuListItemStyles.default.__hash
  }, _HoverMenuListItemStyles.default)), children && isSubMenuOpen && /*#__PURE__*/_react.default.createElement(_portal.Portal, null, /*#__PURE__*/_react.default.createElement(_popper.Popper, {
    placement: "right-start",
    reference: ref
  }, /*#__PURE__*/_react.default.createElement(_HoverMenuList.HoverMenuList, {
    dense: dense
  }, children))));
};
exports.HoverMenuListItem = HoverMenuListItem;
HoverMenuListItem.defaultProps = {
  dataTest: 'dhis2-uicore-hovermenulistitem'
};
HoverMenuListItem.propTypes = {
  // Nested menu items become submenus
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  destructive: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  /** An icon for the left side of the menu item */
  icon: _propTypes.default.node,
  /** Text in the menu item */
  label: _propTypes.default.node,
  /** Click handler */
  onClick: _propTypes.default.func
};