import _JSXStyle from "styled-jsx/style";
import { Button, ButtonStrip, IconCheckmarkCircle16, IconErrorFilled16, colors } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { VALID_EXPRESSION } from '../../../modules/expressions.js';
import MathOperatorSelector from './MathOperatorSelector.js';
import styles from './styles/FormulaToolbar.style.js';
const FormulaToolbar = ({
  onAddOperator,
  onRemove,
  onValidate,
  canRemove,
  isValidating,
  isLoading,
  validationStatus,
  validationMessage
}) => /*#__PURE__*/React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "formula-toolbar"
}, /*#__PURE__*/React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "buttons-row"
}, /*#__PURE__*/React.createElement(MathOperatorSelector, {
  onClick: onAddOperator
}), /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "divider"
}), /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
  small: true,
  secondary: true,
  onClick: onRemove,
  dataTest: "remove-button",
  disabled: !canRemove
}, i18n.t('Remove item')), /*#__PURE__*/React.createElement(Button, {
  small: true,
  secondary: true,
  onClick: onValidate,
  dataTest: "validate-button",
  loading: isValidating,
  disabled: isLoading
}, i18n.t('Check formula')))), /*#__PURE__*/React.createElement("div", {
  "aria-live": "polite",
  "data-test": "validation-message",
  className: `jsx-${styles.__hash}`
}, validationMessage && /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + (cx('status', {
    valid: validationStatus === VALID_EXPRESSION
  }) || "")
}, validationStatus === VALID_EXPRESSION ? /*#__PURE__*/React.createElement(IconCheckmarkCircle16, {
  color: colors.green700
}) : /*#__PURE__*/React.createElement(IconErrorFilled16, {
  color: colors.red700
}), /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "status-text"
}, validationMessage))), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
FormulaToolbar.propTypes = {
  onAddOperator: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  canRemove: PropTypes.bool,
  isLoading: PropTypes.bool,
  isValidating: PropTypes.bool,
  validationMessage: PropTypes.string,
  validationStatus: PropTypes.string
};
export default FormulaToolbar;