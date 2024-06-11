import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableCell } from './PivotTableCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
export const PivotTableEmptyRow = _ref => {
  let {
    height,
    columns
  } = _ref;
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(PivotTableCell, {
    isHeader: true,
    colSpan: engine.rowDepth,
    style: {
      height
    },
    classes: ['row-header', {
      'fixed-header': engine.options.fixRowHeaders
    }]
  }), columns.map(i => /*#__PURE__*/React.createElement(PivotTableCell, {
    key: i
  })));
};
PivotTableEmptyRow.propTypes = {
  columns: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired
};