"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _expressions = require("../../../modules/expressions.js");
var _MathOperatorSelector = _interopRequireDefault(require("./MathOperatorSelector.js"));
var _FormulaToolbarStyle = _interopRequireDefault(require("./styles/FormulaToolbar.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormulaToolbar = ({
  onAddOperator,
  onRemove,
  onValidate,
  canRemove,
  isValidating,
  isLoading,
  validationStatus,
  validationMessage
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "formula-toolbar"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "buttons-row"
}, /*#__PURE__*/_react.default.createElement(_MathOperatorSelector.default, {
  onClick: onAddOperator
}), /*#__PURE__*/_react.default.createElement("span", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "divider"
}), /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
  small: true,
  secondary: true,
  onClick: onRemove,
  dataTest: "remove-button",
  disabled: !canRemove
}, _index.default.t('Remove item')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
  small: true,
  secondary: true,
  onClick: onValidate,
  dataTest: "validate-button",
  loading: isValidating,
  disabled: isLoading
}, _index.default.t('Check formula')))), /*#__PURE__*/_react.default.createElement("div", {
  "aria-live": "polite",
  "data-test": "validation-message",
  className: `jsx-${_FormulaToolbarStyle.default.__hash}`
}, validationMessage && /*#__PURE__*/_react.default.createElement("span", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + ((0, _classnames.default)('status', {
    valid: validationStatus === _expressions.VALID_EXPRESSION
  }) || "")
}, validationStatus === _expressions.VALID_EXPRESSION ? /*#__PURE__*/_react.default.createElement(_ui.IconCheckmarkCircle16, {
  color: _ui.colors.green700
}) : /*#__PURE__*/_react.default.createElement(_ui.IconErrorFilled16, {
  color: _ui.colors.red700
}), /*#__PURE__*/_react.default.createElement("span", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "status-text"
}, validationMessage))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _FormulaToolbarStyle.default.__hash
}, _FormulaToolbarStyle.default));
FormulaToolbar.propTypes = {
  onAddOperator: _propTypes.default.func.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  onValidate: _propTypes.default.func.isRequired,
  canRemove: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  isValidating: _propTypes.default.bool,
  validationMessage: _propTypes.default.string,
  validationStatus: _propTypes.default.string
};
var _default = exports.default = FormulaToolbar;