import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import React from 'react';
import { DIMENSION_TYPE_DATA_ELEMENT } from '../../../modules/dataTypes.js';
import { getIcon } from '../../../modules/dimensionListItem.js';
import { EXPRESSION_TYPE_DATA } from '../../../modules/expressions.js';
import styles from './styles/DataElementOption.style.js';
const DataElementOption = _ref => {
  let {
    label,
    value,
    onDoubleClick
  } = _ref;
  const data = {
    label,
    value,
    type: EXPRESSION_TYPE_DATA
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = useSortable({
    id: value,
    data
  });
  const style = {
    transform: CSS.Translate.toString(transform)
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/React.createElement("div", _extends({}, attributes, listeners, {
    ref: setNodeRef,
    style: style,
    className: `jsx-${styles.__hash}` + " " + (listeners && listeners.className != null && listeners.className || attributes && attributes.className != null && attributes.className || "draggable-item")
  }), /*#__PURE__*/React.createElement("div", {
    onDoubleClick: () => onDoubleClick(data),
    "data-test": "data-element-option",
    className: `jsx-${styles.__hash}` + " " + "chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "icon"
  }, getIcon(DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataElementOption.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onDoubleClick: PropTypes.func
};
export default DataElementOption;