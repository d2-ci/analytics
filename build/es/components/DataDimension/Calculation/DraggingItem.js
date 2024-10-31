import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { DIMENSION_TYPE_DATA_ELEMENT } from '../../../modules/dataTypes.js';
import { getIcon } from '../../../modules/dimensionListItem.js';
import { EXPRESSION_TYPE_DATA, EXPRESSION_TYPE_NUMBER, EXPRESSION_TYPE_OPERATOR } from '../../../modules/expressions.js';
import styles from './styles/DraggingItem.style.js';
import formulaItemStyles from './styles/FormulaItem.style.js';
const DraggingItem = _ref => {
  let {
    label,
    type,
    value
  } = _ref;
  const displayLabel = type === EXPRESSION_TYPE_NUMBER ? value || label : label;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash} jsx-${formulaItemStyles.__hash}` + " " + (cx('dragging', 'content', {
      operator: type === EXPRESSION_TYPE_OPERATOR,
      number: type === EXPRESSION_TYPE_NUMBER,
      data: type === EXPRESSION_TYPE_DATA
    }) || "")
  }, type === EXPRESSION_TYPE_DATA && /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash} jsx-${formulaItemStyles.__hash}` + " " + "icon"
  }, getIcon(DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash} jsx-${formulaItemStyles.__hash}` + " " + "label"
  }, displayLabel)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: formulaItemStyles.__hash
  }, formulaItemStyles));
};
DraggingItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};
export default DraggingItem;