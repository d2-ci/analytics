import times from 'lodash/times';
import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableClippedAxis } from './PivotTableClippedAxis.js';
import { PivotTableEmptyCell } from './PivotTableEmptyCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { PivotTableRowHeaderCell } from './PivotTableRowHeaderCell.js';
import { PivotTableValueCell } from './PivotTableValueCell.js';
export const PivotTableRow = _ref => {
  let {
    clippingResult,
    rowIndex,
    onToggleContextualMenu
  } = _ref;
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React.createElement("tr", null, times(engine.rowDepth, x => x).map(rowLevel => /*#__PURE__*/React.createElement(PivotTableRowHeaderCell, {
    key: rowLevel,
    clippingResult: clippingResult,
    rowIndex: rowIndex,
    rowLevel: rowLevel
  })), /*#__PURE__*/React.createElement(PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: _ref2 => {
      let {
        size
      } = _ref2;
      return /*#__PURE__*/React.createElement(PivotTableEmptyCell, {
        classes: "value",
        style: {
          width: size
        }
      });
    },
    ItemComponent: _ref3 => {
      let {
        index: columnIndex
      } = _ref3;
      return /*#__PURE__*/React.createElement(PivotTableValueCell, {
        row: rowIndex,
        column: columnIndex,
        onToggleContextualMenu: onToggleContextualMenu
      });
    }
  }));
};
PivotTableRow.propTypes = {
  clippingResult: PropTypes.shape({
    columns: PropTypes.object.isRequired,
    rows: PropTypes.object.isRequired
  }).isRequired,
  rowIndex: PropTypes.number.isRequired,
  onToggleContextualMenu: PropTypes.func
};