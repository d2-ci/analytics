import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { PivotTableCell } from './PivotTableCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { cell as cellStyle } from './styles/PivotTable.style.js';
export const PivotTableTitleRow = _ref => {
  let {
    title,
    scrollPosition,
    containerWidth,
    totalWidth
  } = _ref;
  const engine = usePivotTableEngine();
  const columnCount = engine.width + engine.rowDepth;
  const [position, setPosition] = useState(scrollPosition.x);
  useEffect(() => {
    setPosition(Math.max(0, Math.min(scrollPosition.x, totalWidth - containerWidth)));
  }, [containerWidth, scrollPosition.x, totalWidth]);
  return /*#__PURE__*/React.createElement("tr", {
    className: "jsx-".concat(cellStyle.__hash)
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: cellStyle.__hash
  }, cellStyle), /*#__PURE__*/React.createElement(PivotTableCell, {
    isHeader: true,
    classes: ['column-header', 'title'],
    colSpan: columnCount
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: position,
      maxWidth: containerWidth,
      textAlign: 'center'
    },
    "data-test": "visualization-title",
    className: "jsx-".concat(cellStyle.__hash)
  }, title)));
};
PivotTableTitleRow.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  scrollPosition: PropTypes.shape({
    x: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  totalWidth: PropTypes.number.isRequired
};