import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableClippedAxis } from './PivotTableClippedAxis.js';
import { PivotTableEmptyRow } from './PivotTableEmptyRow.js';
import { PivotTableRow } from './PivotTableRow.js';
export const PivotTableBody = ({
  clippingResult,
  onToggleContextualMenu
}) => /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(PivotTableClippedAxis, {
  axisClippingResult: clippingResult.rows,
  EmptyComponent: ({
    size
  }) => /*#__PURE__*/React.createElement(PivotTableEmptyRow, {
    height: size,
    columns: clippingResult.columns.indices
  }),
  ItemComponent: ({
    index
  }) => /*#__PURE__*/React.createElement(PivotTableRow, {
    key: index,
    clippingResult: clippingResult,
    rowIndex: index,
    onToggleContextualMenu: onToggleContextualMenu
  })
}));
PivotTableBody.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  onToggleContextualMenu: PropTypes.func
};