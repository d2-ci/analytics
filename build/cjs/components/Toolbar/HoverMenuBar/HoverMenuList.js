"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHoverMenuListContext = exports.HoverMenuList = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _uiConstants = require("@dhis2/ui-constants");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _HoverMenuBar = require("./HoverMenuBar.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    className: _style.default.dynamic([["3026610659", [_uiConstants.colors.white, _uiConstants.colors.grey200, _uiConstants.elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, _uiConstants.spacers.dp4]]]) + " " + (className || "")
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3026610659",
    dynamic: [_uiConstants.colors.white, _uiConstants.colors.grey200, _uiConstants.elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, _uiConstants.spacers.dp4]
  }, [`ul.__jsx-style-dynamic-selector{position:relative;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:${_uiConstants.colors.white};border:1px solid ${_uiConstants.colors.grey200};border-radius:3px;box-shadow:${_uiConstants.elevations.e300};display:inline-block;min-width:${dense ? '128' : '180'}px;max-width:${maxWidth};max-height:${maxHeight};padding:${_uiConstants.spacers.dp4} 0;overflow:auto;list-style:none;}`])));
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