"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableRowHeaderCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableHeaderCell = require("./PivotTableHeaderCell");

var _PivotTableCell = require("./PivotTableCell");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var PivotTableRowHeaderCell = function PivotTableRowHeaderCell(_ref) {
  var clippingResult = _ref.clippingResult,
      rowIndex = _ref.rowIndex,
      rowLevel = _ref.rowLevel;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var width = engine.rowHeaderWidths[rowLevel];
  return /*#__PURE__*/_react.default.createElement(_PivotTableHeaderCell.PivotTableHeaderCell, {
    axisClippingResult: clippingResult.rows,
    index: rowIndex,
    level: rowLevel,
    getHeader: function getHeader(idx) {
      return engine.getRowHeader(idx);
    },
    showHierarchy: engine.visualization.showHierarchy,
    render: function render(header) {
      return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
        classes: [header.label && header.label !== 'Total' && header.label !== 'Subtotal' ? 'row-header' : 'empty-header', header.includesHierarchy && 'row-header-hierarchy'],
        rowSpan: header.span,
        title: header.label,
        style: {
          width: width,
          maxWidth: width,
          minWidth: width
        }
      }, header.label);
    }
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