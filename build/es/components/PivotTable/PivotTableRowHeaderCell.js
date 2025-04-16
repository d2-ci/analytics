import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableCell } from './PivotTableCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { PivotTableHeaderCell } from './PivotTableHeaderCell.js';
export const PivotTableRowHeaderCell = _ref => {
  var _engine$adaptiveClipp;
  let {
    clippingResult,
    rowIndex,
    rowLevel
  } = _ref;
  const engine = usePivotTableEngine();
  const width = engine.adaptiveClippingController.columns.headerSizes[rowLevel];
  const height = (_engine$adaptiveClipp = engine.adaptiveClippingController.rows.sizes[engine.rowMap[rowIndex]]) === null || _engine$adaptiveClipp === void 0 ? void 0 : _engine$adaptiveClipp.size;
  return /*#__PURE__*/React.createElement(PivotTableHeaderCell, {
    axisClippingResult: clippingResult.rows,
    index: rowIndex,
    level: rowLevel,
    getHeader: idx => engine.getRowHeader(idx),
    showHierarchy: engine.visualization.showHierarchy,
    render: header => /*#__PURE__*/React.createElement(PivotTableCell, {
      isHeader: true,
      classes: [header.label && header.label !== 'Total' && header.label !== 'Subtotal' ? 'row-header' : 'empty-header', header.includesHierarchy && 'row-header-hierarchy', {
        'fixed-header': engine.options.fixRowHeaders
      }],
      rowSpan: header.span,
      title: header.label,
      style: {
        width,
        height,
        left: rowLevel > 0 ?
        // calculate the width of all row header cells on the left of current cell
        engine.adaptiveClippingController.columns.headerSizes.slice(0, rowLevel).reduce((width, acc) => acc += width, 0) : 0
      },
      dataTest: "visualization-row-header"
    }, header.label)
  });
};
PivotTableRowHeaderCell.propTypes = {
  clippingResult: PropTypes.shape({
    rows: PropTypes.object.isRequired
  }).isRequired,
  rowIndex: PropTypes.number.isRequired,
  rowLevel: PropTypes.number.isRequired
};