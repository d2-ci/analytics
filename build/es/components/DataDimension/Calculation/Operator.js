import _JSXStyle from "styled-jsx/style";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { EXPRESSION_TYPE_NUMBER, EXPRESSION_TYPE_OPERATOR } from '../../../modules/expressions.js';
import formulaItemStyles from './styles/FormulaItem.style.js';
import styles from './styles/Operator.style.js';
const Operator = _ref => {
  let {
    label,
    value,
    type,
    onDoubleClick
  } = _ref;
  const data = {
    label,
    value,
    type
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = useSortable({
    id: `operator-${label}`,
    data
  });
  const style = {
    transform: CSS.Translate.toString(transform)
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, attributes, listeners, {
    ref: setNodeRef,
    style: style,
    className: `jsx-${formulaItemStyles.__hash} jsx-${styles.__hash}` + " " + (listeners && listeners.className != null && listeners.className || attributes && attributes.className != null && attributes.className || "")
  }), /*#__PURE__*/React.createElement("div", {
    "data-test": "operator",
    onDoubleClick: () => onDoubleClick(data),
    className: `jsx-${formulaItemStyles.__hash} jsx-${styles.__hash}` + " " + (cx('content', {
      operator: type === EXPRESSION_TYPE_OPERATOR,
      number: type === EXPRESSION_TYPE_NUMBER
    }) || "")
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${formulaItemStyles.__hash} jsx-${styles.__hash}`
  }, label)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: formulaItemStyles.__hash
  }, formulaItemStyles), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Operator.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onDoubleClick: PropTypes.func.isRequired
};
export default Operator;