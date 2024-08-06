"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHoverMenuListContext = exports.HoverMenuList = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _HoverMenuBar = require("./HoverMenuBar.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const throwErrorIfNotInitialized = () => {
  throw new Error('`HoverMenuListContext` has not been initialised');
};
const HoverMenuListContext = /*#__PURE__*/(0, _react.createContext)({
  onSubmenuAnchorMouseEnter: throwErrorIfNotInitialized,
  onMenuItemMouseEnter: throwErrorIfNotInitialized,
  openedSubMenuEl: null,
  dense: false
});
const useHoverMenuListContext = () => (0, _react.useContext)(HoverMenuListContext);
exports.useHoverMenuListContext = useHoverMenuListContext;
const HoverMenuList = _ref => {
  let {
    children,
    className,
    dataTest,
    dense,
    maxHeight,
    maxWidth
  } = _ref;
  const {
    setLastHoveredSubMenuEl
  } = (0, _HoverMenuBar.useHoverMenubarContext)();
  const [openedSubMenuEl, setOpenedSubMenuEl] = (0, _react.useState)(null);
  const onSubmenuAnchorMouseEnter = (0, _react.useCallback)(event => {
    if (openedSubMenuEl !== event.currentTarget) {
      setOpenedSubMenuEl(event.currentTarget);
      setLastHoveredSubMenuEl(event.currentTarget);
    }
  }, [openedSubMenuEl, setLastHoveredSubMenuEl]);
  const onMenuItemMouseEnter = (0, _react.useCallback)(() => {
    setOpenedSubMenuEl(null);
    setLastHoveredSubMenuEl(null);
  }, [setLastHoveredSubMenuEl]);
  return /*#__PURE__*/_react.default.createElement(HoverMenuListContext.Provider, {
    value: {
      onSubmenuAnchorMouseEnter,
      onMenuItemMouseEnter,
      openedSubMenuEl,
      dense
    }
  }, /*#__PURE__*/_react.default.createElement("ul", {
    "data-test": dataTest,
    className: _style.default.dynamic([["3026610659", [_ui.colors.white, _ui.colors.grey200, _ui.elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, _ui.spacers.dp4]]]) + " " + (className || "")
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3026610659",
    dynamic: [_ui.colors.white, _ui.colors.grey200, _ui.elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, _ui.spacers.dp4]
  }, [`ul.__jsx-style-dynamic-selector{position:relative;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:${_ui.colors.white};border:1px solid ${_ui.colors.grey200};border-radius:3px;box-shadow:${_ui.elevations.e300};display:inline-block;min-width:${dense ? '128' : '180'}px;max-width:${maxWidth};max-height:${maxHeight};padding:${_ui.spacers.dp4} 0;overflow:auto;list-style:none;}`])));
};
exports.HoverMenuList = HoverMenuList;
HoverMenuList.defaultProps = {
  dataTest: 'dhis2-analytics-hovermenulist',
  maxWidth: '380px',
  maxHeight: 'auto',
  dense: true
};
HoverMenuList.propTypes = {
  /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  /** Gives all HoverMenuListItem children a dense style */
  dense: _propTypes.default.bool,
  maxHeight: _propTypes.default.string,
  maxWidth: _propTypes.default.string
};