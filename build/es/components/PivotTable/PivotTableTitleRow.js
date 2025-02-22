import _JSXStyle from "styled-jsx/style";
import { Tooltip } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import { PivotTableCell } from './PivotTableCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { cell as cellStyle } from './styles/PivotTable.style.js';
export const PivotTableTitleRow = _ref => {
  var _scrollPosition$x;
  let {
    title,
    scrollPosition,
    containerWidth
  } = _ref;
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isTitleTruncated, setIsTitleTruncated] = useState(false);
  const engine = usePivotTableEngine();
  const columnCount = engine.width + engine.rowDepth;
  const maxWidth = containerWidth - (engine.cellPadding * 2 + 2);
  const marginLeft = Math.max(0, (_scrollPosition$x = scrollPosition === null || scrollPosition === void 0 ? void 0 : scrollPosition.x) !== null && _scrollPosition$x !== void 0 ? _scrollPosition$x : 0);
  useEffect(() => {
    if (containerRef.current) {
      /* Only set `scrollWidth` once, because during a CSS transition
       * the reported value can sometimes be equal to `clientWidth`
       * even though the text doesn't fit. Due to `white-space: nowrap`
       * and `overflow: hidden` the `scrollWidth` should remain constant,
       * so we can assume this initial value is correct. */
      if (!scrollWidth) {
        setScrollWidth(containerRef.current.scrollWidth);
      }
      const currentScrollWidth = scrollWidth !== null && scrollWidth !== void 0 ? scrollWidth : containerRef.current.scrollWidth;
      const newIsTitleTruncated = currentScrollWidth > containerRef.current.clientWidth;
      if (newIsTitleTruncated !== isTitleTruncated) {
        setIsTitleTruncated(newIsTitleTruncated);
      }
    }
  }, [containerWidth, scrollWidth, isTitleTruncated]);
  return /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${cellStyle.__hash}`
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: cellStyle.__hash
  }, cellStyle), /*#__PURE__*/React.createElement(PivotTableCell, {
    isHeader: true,
    classes: ['column-header', 'title-cell'],
    colSpan: columnCount
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft,
      maxWidth
    },
    ref: containerRef,
    "data-test": "visualization-title",
    className: `jsx-${cellStyle.__hash}` + " " + "title-cell-content"
  }, isTitleTruncated ? /*#__PURE__*/React.createElement(Tooltip, {
    content: title
  }, _ref2 => {
    let {
      ref: tooltipRef,
      onMouseOver,
      onMouseOut
    } = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      ref: tooltipRef,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      style: {
        maxWidth
      },
      className: `jsx-${cellStyle.__hash}` + " " + "title-cell-content"
    }, title);
  }) : title)));
};
PivotTableTitleRow.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  scrollPosition: PropTypes.shape({
    x: PropTypes.number.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
};