import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { applyLegendSet } from '../../modules/pivotTable/applyLegendSet.js';
import { CELL_TYPE_VALUE } from '../../modules/pivotTable/pivotTableConstants.js';
import { isNumericValueType, isBooleanValueType } from '../../modules/valueTypes.js';
import { PivotTableCell } from './PivotTableCell.js';
import { PivotTableEmptyCell } from './PivotTableEmptyCell.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
export const PivotTableValueCell = _ref => {
  var _cellContent$titleVal, _cellContent$rendered;
  let {
    row,
    column,
    onToggleContextualMenu
  } = _ref;
  const engine = usePivotTableEngine();
  const cellRef = useRef(undefined);
  const cellContent = engine.get({
    row,
    column
  });
  const isClickable = onToggleContextualMenu && cellContent.cellType === CELL_TYPE_VALUE && cellContent.ouId;
  const classes = [cellContent.cellType, cellContent.valueType, isClickable && 'clickable'];
  const onClick = () => {
    onToggleContextualMenu(cellRef.current, {
      ouId: cellContent.ouId
    });
  };
  if (!cellContent || cellContent.empty) {
    return /*#__PURE__*/React.createElement(PivotTableEmptyCell, {
      onClick: isClickable ? onClick : undefined,
      ref: cellRef,
      classes: [cellContent.cellType, isClickable && 'clickable']
    });
  }
  const legendStyle = cellContent.cellType === CELL_TYPE_VALUE && (isNumericValueType(cellContent.valueType) || isBooleanValueType(cellContent.valueType)) ? applyLegendSet(cellContent.rawValue, cellContent.dxDimension, engine) : undefined;
  const width = engine.adaptiveClippingController.columns.sizes[engine.columnMap[column]].size;
  const height = engine.adaptiveClippingController.rows.sizes[engine.rowMap[row]].size;
  const style = {
    ...legendStyle,
    width,
    height,
    whiteSpace: 'pre-line'
  };
  return /*#__PURE__*/React.createElement(PivotTableCell, {
    key: column,
    classes: classes,
    title: (_cellContent$titleVal = cellContent.titleValue) !== null && _cellContent$titleVal !== void 0 ? _cellContent$titleVal : i18n.t('Value: {{value}}', {
      value: cellContent.renderedValue,
      nsSeparator: '^^'
    }),
    style: style,
    onClick: isClickable ? onClick : undefined,
    ref: cellRef,
    dataTest: 'visualization-value-cell'
  }, (_cellContent$rendered = cellContent.renderedValue) !== null && _cellContent$rendered !== void 0 ? _cellContent$rendered : null);
};
PivotTableValueCell.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  onToggleContextualMenu: PropTypes.func
};