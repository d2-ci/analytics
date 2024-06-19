import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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