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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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