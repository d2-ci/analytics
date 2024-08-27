import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { getOperators } from '../../../modules/expressions.js';
import DraggableOperator from './Operator.js';
import styles from './styles/MathOperatorSelector.style.js';
const MathOperatorSelector = _ref => {
  let {
    onDoubleClick
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/React.createElement("h4", {
    className: `jsx-${styles.__hash}` + " " + "sub-header"
  }, i18n.t('Math operators')), /*#__PURE__*/React.createElement("div", {
    "data-test": "operators-list",
    className: `jsx-${styles.__hash}` + " " + "operators"
  }, getOperators().map((_ref2, index) => {
    let {
      label,
      value,
      type
    } = _ref2;
    return /*#__PURE__*/React.createElement(DraggableOperator, {
      key: `${label}-${index}`,
      label: label,
      value: value,
      type: type,
      index: index,
      onDoubleClick: onDoubleClick
    });
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
MathOperatorSelector.propTypes = {
  onDoubleClick: PropTypes.func.isRequired
};
export default MathOperatorSelector;