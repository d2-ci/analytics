"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableRowHeaderCell = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _PivotTableCell = require("./PivotTableCell.js");

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

var _PivotTableHeaderCell = require("./PivotTableHeaderCell.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableRowHeaderCell = _ref => {
  var _engine$adaptiveClipp;

  let {
    clippingResult,
    rowIndex,
    rowLevel
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const width = engine.adaptiveClippingController.columns.headerSizes[rowLevel];
  const height = (_engine$adaptiveClipp = engine.adaptiveClippingController.rows.sizes[engine.rowMap[rowIndex]]) === null || _engine$adaptiveClipp === void 0 ? void 0 : _engine$adaptiveClipp.size;
  return /*#__PURE__*/_react.default.createElement(_PivotTableHeaderCell.PivotTableHeaderCell, {
    axisClippingResult: clippingResult.rows,
    index: rowIndex,
    level: rowLevel,
    getHeader: idx => engine.getRowHeader(idx),
    showHierarchy: engine.visualization.showHierarchy,
    render: header => /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
      isHeader: true,
      classes: [header.label && header.label !== 'Total' && header.label !== 'Subtotal' ? 'row-header' : 'empty-header', header.includesHierarchy && 'row-header-hierarchy', {
        'fixed-header': engine.options.fixRowHeaders
      }],
      rowSpan: header.span,
      title: header.label,
      style: {
        width,
        height,
        left: rowLevel > 0 ? // calculate the width of all row header cells on the left of current cell
        engine.adaptiveClippingController.columns.headerSizes.slice(0, rowLevel).reduce((width, acc) => acc += width, 0) : 0
      },
      dataTest: "visualization-row-header"
    }, header.label)
  });
};

exports.PivotTableRowHeaderCell = PivotTableRowHeaderCell;
PivotTableRowHeaderCell.propTypes = {
  clippingResult: _propTypes.default.shape({
    rows: _propTypes.default.object.isRequired
  }).isRequired,
  rowIndex: _propTypes.default.number.isRequired,
  rowLevel: _propTypes.default.number.isRequired
};