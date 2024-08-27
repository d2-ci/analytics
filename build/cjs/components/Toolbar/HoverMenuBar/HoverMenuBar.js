"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHoverMenubarContext = exports.HoverMenuBar = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
const HoverMenuBar = _ref => {
  let {
    children,
    dataTest
  } = _ref;
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
      document.addEventListener('click', onDocumentClick, {
        once: true
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