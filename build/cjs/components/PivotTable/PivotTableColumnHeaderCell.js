"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableColumnHeaderCell = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableHeaderCell = require("./PivotTableHeaderCell.js");
var _PivotTableSortIcon = require("./PivotTableSortIcon.js");
var _PivotTableStyle = require("./styles/PivotTable.style.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableColumnHeaderCell = _ref => {
  var _engine$adaptiveClipp;
  let {
    clippingResult,
    index,
    level,
    onSortByColumn,
    sortBy
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const width = (_engine$adaptiveClipp = engine.adaptiveClippingController.columns.sizes[engine.columnMap[index]]) === null || _engine$adaptiveClipp === void 0 ? void 0 : _engine$adaptiveClipp.size;
  const height = engine.adaptiveClippingController.rows.headerSizes[level];
  return /*#__PURE__*/_react.default.createElement(_PivotTableHeaderCell.PivotTableHeaderCell, {
    axisClippingResult: clippingResult.columns,
    index: index,
    level: level,
    getHeader: idx => engine.getColumnHeader(idx),
    showHierarchy: engine.visualization.showHierarchy,
    render: header => {
      const isSortable = level === engine.columnDepth - 1 && header.span === 1 && engine.isSortable(index);
      const style = {
        cursor: isSortable ? 'pointer' : 'default',
        width,
        height,
        whiteSpace: level === engine.columnDepth - 1 ? 'pre-line' : 'nowrap'
      };
      if (engine.options.fixColumnHeaders) {
        style.top = level * (engine.fontSize + engine.cellPadding * 2 + 2);
        // left value for the column header cells should be sum of row headers' width when engine.options.fixRowHeaders is true
        style.left = engine.options.fixRowHeaders ? engine.rowHeaderPixelWidth : 0;
      }
      return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
        isHeader: true,
        classes: [header.label && header.label !== 'Total' && header.label !== 'Subtotal' // TODO: Actually look up the column type!
        ? 'column-header' : 'empty-header', {
          'fixed-header': engine.options.fixColumnHeaders
        }],
        colSpan: header.span,
        title: header.label,
        style: style,
        onClick: isSortable ? () => onSortByColumn(index) : undefined
      }, /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _PivotTableStyle.cell.__hash
      }, _PivotTableStyle.cell), /*#__PURE__*/_react.default.createElement("div", {
        className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + "column-header-inner"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "data-test": "visualization-column-header",
        className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + "column-header-label"
      }, header.label), isSortable ? /*#__PURE__*/_react.default.createElement(_PivotTableSortIcon.PivotTableSortIcon, {
        index: index,
        sortBy: sortBy
      }) : null));
    }
  });
};
exports.PivotTableColumnHeaderCell = PivotTableColumnHeaderCell;
PivotTableColumnHeaderCell.propTypes = {
  clippingResult: _propTypes.default.shape({
    columns: _propTypes.default.object.isRequired
  }).isRequired,
  index: _propTypes.default.number.isRequired,
  level: _propTypes.default.number.isRequired,
  onSortByColumn: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.shape({
    column: _propTypes.default.number.isRequired,
    order: _propTypes.default.number.isRequired
  })
};