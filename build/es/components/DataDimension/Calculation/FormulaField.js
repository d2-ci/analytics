import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { Center, CircularLoader } from '@dhis2/ui';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import PropTypes from 'prop-types';
import React from 'react';
import FormulaIcon from '../../../assets/FormulaIcon.js';
import DropZone from './DropZone.js';
import FormulaItem from './FormulaItem.js';
import styles from './styles/FormulaField.style.js';
export const LAST_DROPZONE_ID = 'lastdropzone';
export const FORMULA_BOX_ID = 'formulabox';
const Placeholder = () => /*#__PURE__*/React.createElement("div", {
  "data-test": "placeholder",
  className: `jsx-${styles.__hash}` + " " + "placeholder"
}, /*#__PURE__*/React.createElement(FormulaIcon, null), /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "help-text"
}, i18n.t('Drag items here, or double click in the list, to start building a calculation formula')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
const FormulaField = _ref => {
  let {
    items = [],
    selectedItemId,
    focusItemId,
    onChange,
    onClick,
    onDoubleClick,
    loading
  } = _ref;
  const {
    over,
    setNodeRef: setLastDropzoneRef
  } = useDroppable({
    id: LAST_DROPZONE_ID
  });
  const itemIds = items.map(item => item.id);
  const overLastDropZone = (over === null || over === void 0 ? void 0 : over.id) === LAST_DROPZONE_ID;
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "border"
  }), /*#__PURE__*/React.createElement("div", {
    ref: setLastDropzoneRef,
    "data-test": "formula-field",
    className: `jsx-${styles.__hash}` + " " + "formula-field"
  }, loading && /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  })), !loading && itemIds && /*#__PURE__*/React.createElement(SortableContext, {
    id: FORMULA_BOX_ID,
    items: itemIds
  }, /*#__PURE__*/React.createElement(DropZone, {
    firstElementId: itemIds[0],
    overLastDropZone: overLastDropZone
  }), !items.length && /*#__PURE__*/React.createElement(Placeholder, null), Boolean(items.length) && items.map((_ref2, index) => {
    let {
      id,
      label,
      type,
      value
    } = _ref2;
    return /*#__PURE__*/React.createElement(FormulaItem, {
      key: id,
      id: id,
      label: label,
      type: type,
      value: value,
      hasFocus: focusItemId === id,
      isHighlighted: selectedItemId === id,
      isLast: index === items.length - 1,
      onChange: onChange,
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      overLastDropZone: overLastDropZone
    });
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
FormulaField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  focusItemId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  })),
  loading: PropTypes.bool,
  selectedItemId: PropTypes.string
};
export default FormulaField;