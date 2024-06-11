"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationsAndDetailsToggler = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _MenuButtonStyles = _interopRequireDefault(require("./MenuButton.styles.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InterpretationsAndDetailsToggler = _ref => {
  let {
    onClick,
    dataTest,
    disabled,
    isShowing
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "data-test": dataTest,
    className: "jsx-1238484262 " + `jsx-${_MenuButtonStyles.default.__hash}`
  }, isShowing ? /*#__PURE__*/_react.default.createElement(_ui.IconChevronRight24, null) : /*#__PURE__*/_react.default.createElement(_ui.IconChevronLeft24, null), _d2I18n.default.t('Interpretations and details'), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _MenuButtonStyles.default.__hash
  }, _MenuButtonStyles.default), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1238484262"
  }, ["button.jsx-1238484262{gap:8px;}"]));
};
exports.InterpretationsAndDetailsToggler = InterpretationsAndDetailsToggler;
InterpretationsAndDetailsToggler.defaultProps = {
  dataTest: 'dhis2-analytics-interpretationsanddetailstoggler'
};
InterpretationsAndDetailsToggler.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  isShowing: _propTypes.default.bool
};