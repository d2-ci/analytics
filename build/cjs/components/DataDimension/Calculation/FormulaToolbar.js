"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _MathOperatorSelector = _interopRequireDefault(require("./MathOperatorSelector.js"));
var _FormulaToolbarStyle = _interopRequireDefault(require("./styles/FormulaToolbar.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormulaToolbar = ({
  onAddOperator,
  onRemove,
  onValidate,
  canRemove,
  isValidating,
  isLoading
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "formula-toolbar"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_FormulaToolbarStyle.default.__hash}` + " " + "buttons-row"
}, /*#__PURE__*/_react.default.createElement(_MathOperatorSelector.default, {
  onClick: onAddOperator
}), /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, canRemove && /*#__PURE__*/_react.default.createElement(_ui.Button, {
  small: true,
  secondary: true,
  icon: /*#__PURE__*/_react.default.createElement(_ui.IconDelete16, null),
  onClick: onRemove,
  dataTest: "remove-button"
}, _index.default.t('Remove item')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
  small: true,
  secondary: true,
  onClick: onValidate,
  dataTest: "validate-button",
  loading: isValidating,
  disabled: isLoading
}, _index.default.t('Check formula')))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _FormulaToolbarStyle.default.__hash
}, _FormulaToolbarStyle.default));
FormulaToolbar.propTypes = {
  onAddOperator: _propTypes.default.func.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  onValidate: _propTypes.default.func.isRequired,
  canRemove: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  isValidating: _propTypes.default.bool
};
var _default = exports.default = FormulaToolbar;