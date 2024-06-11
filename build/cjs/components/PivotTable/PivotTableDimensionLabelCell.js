"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableDimensionLabelCell = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _PivotTableCell = require("./PivotTableCell.js");

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableDimensionLabelCell = _ref => {
  let {
    rowLevel,
    columnLevel
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const colCount = engine.rowDepth;
  const rowCount = engine.columnDepth;
  let colSpan = 1,
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

  const width = engine.adaptiveClippingController.columns.headerSizes[rowLevel];
  const height = engine.adaptiveClippingController.rows.headerSizes[columnLevel];
  const style = {
    width,
    height
  };

  if (engine.options.fixColumnHeaders || engine.options.fixRowHeaders) {
    style.zIndex = engine.options.fixColumnHeaders && engine.options.fixRowHeaders ? 2 : 1;
    style.top = engine.options.fixColumnHeaders ? columnLevel * (engine.fontSize + engine.cellPadding * 2 + 2) : 0;
    style.left = engine.options.fixRowHeaders ? // calculate the width of all row header cells on the left of current cell
    engine.adaptiveClippingController.columns.headerSizes.slice(0, rowLevel).reduce((width, acc) => acc += width, 0) : 0;
  }

  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    isHeader: true,
    classes: ['empty-header', 'column-header', {
      'fixed-header': engine.options.fixColumnHeaders || engine.options.fixRowHeaders
    }],
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: label,
    style: style
  }, label);
};

exports.PivotTableDimensionLabelCell = PivotTableDimensionLabelCell;
PivotTableDimensionLabelCell.propTypes = {
  columnLevel: _propTypes.default.number.isRequired,
  rowLevel: _propTypes.default.number.isRequired
};