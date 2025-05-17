import _JSXStyle from "styled-jsx/style";
import { useDroppable } from '@dnd-kit/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/DropZone.style.js';
const DropZone = _ref => {
  let {
    firstElementId,
    overLastDropZone
  } = _ref;
  const {
    isOver,
    setNodeRef,
    active
  } = useDroppable({
    id: 'firstdropzone'
  });
  let draggingOver = false;
  if (overLastDropZone && !firstElementId) {
    draggingOver = true;
  } else {
    draggingOver = firstElementId === (active === null || active === void 0 ? void 0 : active.id) ? false : isOver;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: setNodeRef,
    className: `jsx-${styles.__hash}` + " " + (cx('first-dropzone', {
      'dragging-over': draggingOver,
      empty: !firstElementId
    }) || "")
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DropZone.propTypes = {
  firstElementId: PropTypes.string,
  overLastDropZone: PropTypes.bool
};
export default DropZone;