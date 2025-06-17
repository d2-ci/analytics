"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHoverMenubarContext = exports.HoverMenuBar = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const throwErrorIfNotInitialized = () => {
  throw new Error('`HoverMenubarContext` has not been initialised');
};
const HoverMenubarContext = /*#__PURE__*/(0, _react.createContext)({
  closeMenu: throwErrorIfNotInitialized,
  onDropDownButtonClick: throwErrorIfNotInitialized,
  onDropDownButtonMouseOver: throwErrorIfNotInitialized,
  setLastHoveredSubMenuEl: throwErrorIfNotInitialized,
  openedDropdownEl: null
});
const useHoverMenubarContext = () => (0, _react.useContext)(HoverMenubarContext);
exports.useHoverMenubarContext = useHoverMenubarContext;
const HoverMenuBar = ({
  children,
  dataTest
}) => {
  const [openedDropdownEl, setOpenedDropdownEl] = (0, _react.useState)(null);
  const [lastHoveredSubMenuEl, setLastHoveredSubMenuEl] = (0, _react.useState)(null);
  const [isInHoverMode, setIsInHoverMode] = (0, _react.useState)(false);
  const closeMenu = (0, _react.useCallback)(() => {
    setIsInHoverMode(false);
    setOpenedDropdownEl(null);
  }, []);
  const onDocumentClick = (0, _react.useCallback)(event => {
    const isClickOnOpenedSubMenuAnchor = lastHoveredSubMenuEl && (lastHoveredSubMenuEl === event.target || lastHoveredSubMenuEl.contains(event.target));
    if (!isClickOnOpenedSubMenuAnchor) {
      closeMenu();
    }
  }, [closeMenu, lastHoveredSubMenuEl]);
  const onDropDownButtonClick = (0, _react.useCallback)(event => {
    if (!isInHoverMode) {
      setIsInHoverMode(true);
      setOpenedDropdownEl(event.currentTarget);
    } else {
      closeMenu();
    }
  }, [closeMenu, isInHoverMode]);
  const onDropDownButtonMouseOver = (0, _react.useCallback)(event => {
    if (isInHoverMode) {
      setOpenedDropdownEl(event.currentTarget);
    }
  }, [isInHoverMode]);
  const closeMenuWithEsc = (0, _react.useCallback)(event => {
    if (event.keyCode === 27) {
      /* Blurring the active element is needed here to prevent
       * the menu button which was clicked to open the hovermenu
       * from getting the blue outline style. This looks a bit off
       * in all cases, but especially when the menu item which was
       * clicked to open the hover menu isn't the currently opened
       * dropdown menu. This doesn't have to be the case since
       * dropdown menues open on hover once the first one has been
       * clicked. */
      document.activeElement.blur();
      closeMenu();
    }
  }, [closeMenu]);
  (0, _react.useEffect)(() => {
    if (isInHoverMode) {
      // Delay this one cycle to avoid synchronously triggering on the
      // click that opened a menu (React 18)
      // https://react.dev/blog/2022/03/08/react-18-upgrade-guide#other-breaking-changes
      setTimeout(() => {
        document.addEventListener('click', onDocumentClick, {
          once: true
        });
      });
    }
    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [onDocumentClick, isInHoverMode]);
  return /*#__PURE__*/_react.default.createElement(HoverMenubarContext.Provider, {
    value: {
      onDropDownButtonClick,
      onDropDownButtonMouseOver,
      openedDropdownEl,
      setLastHoveredSubMenuEl
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    onKeyDown: closeMenuWithEsc,
    "data-test": dataTest,
    className: "jsx-3020154784"
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3020154784"
  }, [".jsx-3020154784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"])));
};
exports.HoverMenuBar = HoverMenuBar;
HoverMenuBar.defaultProps = {
  dataTest: 'dhis2-analytics-hovermenubar'
};
HoverMenuBar.propTypes = {
  children: _propTypes.default.node.isRequired,
  dataTest: _propTypes.default.string
};