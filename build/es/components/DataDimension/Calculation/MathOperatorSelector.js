import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import { getOperators } from '../../../modules/expressions.js';
import DraggableOperator from './Operator.js';
import styles from './styles/MathOperatorSelector.style.js';
const OPERATORS = getOperators();
const MathOperatorSelector = ({
  onClick
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "wrapper"
}, /*#__PURE__*/React.createElement("div", {
  "data-test": "operators-list",
  className: `jsx-${styles.__hash}` + " " + "operators"
}, OPERATORS.map(({
  label,
  value,
  type
}, index) => /*#__PURE__*/React.createElement(DraggableOperator, {
  key: `${label}-${index}`,
  label: label,
  value: value,
  type: type,
  index: index,
  onClick: onClick
})))), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
MathOperatorSelector.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default MathOperatorSelector;