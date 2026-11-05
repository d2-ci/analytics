import times from 'lodash/times';
import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableClippedAxis } from './PivotTableClippedAxis.js';
import { PivotTableColumnHeaderCell } from './PivotTableColumnHeaderCell.js';
import { PivotTableDimensionLabelCell } from './PivotTableDimensionLabelCell.js';
import { PivotTableEmptyCell } from './PivotTableEmptyCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
export const PivotTableColumnHeaders = ({
  clippingResult,
  onSortByColumn,
  sortBy
}) => {
  const engine = usePivotTableEngine();
  const columns = times(engine.columnDepth, x => x);
  const rows = times(engine.rowDepth, x => x);
  return columns.map(columnLevel => /*#__PURE__*/React.createElement("tr", {
    key: columnLevel
  }, rows.map(rowLevel => /*#__PURE__*/React.createElement(PivotTableDimensionLabelCell, {
    key: rowLevel,
    rowLevel: rowLevel,
    columnLevel: columnLevel
  })), /*#__PURE__*/React.createElement(PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: ({
      size
    }) => /*#__PURE__*/React.createElement(PivotTableEmptyCell, {
      classes: "column-header",
      style: {
        minWidth: size
      }
    }),
    ItemComponent: ({
      index
    }) => /*#__PURE__*/React.createElement(PivotTableColumnHeaderCell, {
      clippingResult: clippingResult,
      index: index,
      level: columnLevel,
      onSortByColumn: onSortByColumn,
      sortBy: sortBy
    })
  })));
};
PivotTableColumnHeaders.propTypes = {
  clippingResult: PropTypes.shape({
    columns: PropTypes.object.isRequired
  }).isRequired,
  onSortByColumn: PropTypes.func.isRequired,
  sortBy: PropTypes.shape({
    column: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired
  })
};