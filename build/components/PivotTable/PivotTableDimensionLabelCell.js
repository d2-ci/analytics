"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableDimensionLabelCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _PivotTableCell = require("./PivotTableCell");

var PivotTableDimensionLabelCell = function PivotTableDimensionLabelCell(_ref) {
  var rowLevel = _ref.rowLevel,
      columnLevel = _ref.columnLevel;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var colCount = engine.rowDepth;
  var rowCount = engine.columnDepth;
  var colSpan = 1,
      rowSpan = 1,
      label;

  if (!engine.visualization.showDimensionLabels) {
    if (rowLevel > 0 || columnLevel > 0) {
      colSpan = rowSpan = 0;
    } else {
      colSpan = colCount;
      rowSpan = rowCount;
    }
  } else {
    label = engine.getDimensionLabel(rowLevel, columnLevel);

    if (!label) {
      if (rowLevel > 0 || columnLevel > 0) {
        colSpan = rowSpan = 0;
      } else {
        colSpan = colCount - 1;
        rowSpan = rowCount - 1;
      }
    }
  }

  if (!colSpan || !rowSpan) {
    return null;
  }

  var width = engine.rowHeaderWidths[rowLevel];
  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    classes: ['empty-header', 'column-header'],
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: label,
    style: {
      width: width,
      maxWidth: width,
      minWidth: width
    }
  }, label);
};

exports.PivotTableDimensionLabelCell = PivotTableDimensionLabelCell;
PivotTableDimensionLabelCell.propTypes = {
  columnLevel: _propTypes.default.number.isRequired,
  rowLevel: _propTypes.default.number.isRequired
};