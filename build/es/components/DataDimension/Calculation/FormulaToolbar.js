import _JSXStyle from "styled-jsx/style";
import { Button, ButtonStrip, IconDelete16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import MathOperatorSelector from './MathOperatorSelector.js';
import styles from './styles/FormulaToolbar.style.js';
const FormulaToolbar = ({
  onAddOperator,
  onRemove,
  onValidate,
  canRemove,
  isValidating,
  isLoading
}) => /*#__PURE__*/React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "formula-toolbar"
}, /*#__PURE__*/React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "buttons-row"
}, /*#__PURE__*/React.createElement(MathOperatorSelector, {
  onClick: onAddOperator
}), /*#__PURE__*/React.createElement(ButtonStrip, null, canRemove && /*#__PURE__*/React.createElement(Button, {
  small: true,
  secondary: true,
  icon: /*#__PURE__*/React.createElement(IconDelete16, null),
  onClick: onRemove,
  dataTest: "remove-button"
}, i18n.t('Remove item')), /*#__PURE__*/React.createElement(Button, {
  small: true,
  secondary: true,
  onClick: onValidate,
  dataTest: "validate-button",
  loading: isValidating,
  disabled: isLoading
}, i18n.t('Check formula')))), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
FormulaToolbar.propTypes = {
  onAddOperator: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  canRemove: PropTypes.bool,
  isLoading: PropTypes.bool,
  isValidating: PropTypes.bool
};
export default FormulaToolbar;