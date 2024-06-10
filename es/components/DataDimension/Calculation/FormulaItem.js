import _JSXStyle from "styled-jsx/style";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Tooltip } from '@dhis2/ui';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { DIMENSION_TYPE_DATA_ELEMENT } from '../../../modules/dataTypes.js';
import { getIcon } from '../../../modules/dimensionListItem.js';
import { EXPRESSION_TYPE_NUMBER, EXPRESSION_TYPE_DATA } from '../../../modules/expressions.js';
import DragHandleIcon from './DragHandleIcon.js';
import styles from './styles/FormulaItem.style.js';
const BEFORE = 'BEFORE';
const AFTER = 'AFTER';
const maxMsBetweenClicks = 300;
const TAG_INPUT = 'INPUT';
const FormulaItem = _ref => {
  let {
    id,
    label,
    value = '',
    type,
    isLast,
    isHighlighted,
    overLastDropZone,
    onChange,
    onClick,
    onDoubleClick,
    hasFocus
  } = _ref;
  const {
    attributes,
    listeners,
    index,
    isDragging,
    over,
    active,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id,
    data: {
      label,
      type,
      value
    }
  });
  const inputRef = useRef(null);
  const [clickTimeoutId, setClickTimeoutId] = useState(null);
  useEffect(() => {
    if (hasFocus && inputRef.current) {
      // setTimeout seems to be needed in order for the cursor
      // to remain in the input. Without it, the cursor disappears
      // even though the input still has the focus.
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  }, [inputRef, hasFocus]);
  const activeIndex = (active === null || active === void 0 ? void 0 : active.data.current.sortable.index) || -1;
  const style = transform ? {
    transform: active ? undefined : CSS.Translate.toString({
      x: transform.x,
      y: transform.y,
      scaleX: 1,
      scaleY: 1
    }),
    transition
  } : undefined;
  let insertPosition;
  if ((over === null || over === void 0 ? void 0 : over.id) === id) {
    // This item is being hovered over by the item being dragged
    if (activeIndex === -1) {
      //The item being dragged came from the expression options
      // so we will insert after
      insertPosition = AFTER;
    } else {
      // The item being dragged is being moved in the formula
      // so if the item is before the item being dragged, use the
      // BEFORE position. Otherwise use the AFTER position
      insertPosition = index > activeIndex ? AFTER : BEFORE;
    }
  } else if (isLast && overLastDropZone) {
    insertPosition = AFTER;
  }
  const handleClick = e => {
    const tagname = e.target.tagName;
    clearTimeout(clickTimeoutId);
    const to = setTimeout(function () {
      if (tagname !== TAG_INPUT) {
        onClick(id);
      } else {
        inputRef.current && inputRef.current.focus();
      }
    }, maxMsBetweenClicks);
    setClickTimeoutId(to);
  };
  const handleDoubleClick = e => {
    clearTimeout(clickTimeoutId);
    setClickTimeoutId(null);
    if (e.target.tagName !== TAG_INPUT) {
      onDoubleClick(id);
    } else {
      inputRef.current && inputRef.current.focus();
    }
  };
  const handleChange = e => onChange({
    itemId: id,
    value: e.target.value
  });
  const getContent = () => {
    if (type === EXPRESSION_TYPE_NUMBER) {
      return /*#__PURE__*/React.createElement("div", {
        className: `jsx-${styles.__hash}` + " " + (cx('content', 'number', {
          highlighted: isHighlighted
        }) || "")
      }, DragHandleIcon, /*#__PURE__*/React.createElement("span", {
        className: `jsx-${styles.__hash}` + " " + "number-positioner"
      }, /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        className: `jsx-${styles.__hash}` + " " + "number-width"
      }, value), /*#__PURE__*/React.createElement("input", {
        id: id,
        name: label,
        onChange: handleChange,
        value: value,
        type: "number",
        ref: inputRef,
        className: `jsx-${styles.__hash}` + " " + "input"
      })), /*#__PURE__*/React.createElement(_JSXStyle, {
        id: styles.__hash
      }, styles));
    }
    if (type === EXPRESSION_TYPE_DATA) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        content: label,
        placement: "bottom"
      }, /*#__PURE__*/React.createElement("div", {
        className: `jsx-${styles.__hash}` + " " + (cx('content', 'data', {
          highlighted: isHighlighted
        }) || "")
      }, /*#__PURE__*/React.createElement("span", {
        className: `jsx-${styles.__hash}` + " " + "icon"
      }, getIcon(DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/React.createElement("span", {
        className: `jsx-${styles.__hash}` + " " + "label"
      }, label), /*#__PURE__*/React.createElement(_JSXStyle, {
        id: styles.__hash
      }, styles)));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx('content', 'operator', {
        highlighted: isHighlighted
      }) || "")
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "label"
    }, label), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: setNodeRef,
    style: style,
    className: `jsx-${styles.__hash}` + " " + (cx({
      'last-item': isLast
    }) || "")
  }, /*#__PURE__*/React.createElement("div", _extends({}, attributes, listeners, {
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    "data-test": `formula-item-${id}`,
    className: `jsx-${styles.__hash}` + " " + (cx('formula-item', {
      inactive: !isDragging,
      insertBefore: insertPosition === BEFORE,
      insertAfter: insertPosition === AFTER
    }) || "")
  }), getContent())), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
FormulaItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  hasFocus: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  isLast: PropTypes.bool,
  overLastDropZone: PropTypes.bool,
  value: PropTypes.string
};
export default FormulaItem;