"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableColumnHeaderCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableHeaderCell = require("./PivotTableHeaderCell");

var _PivotTable = require("./styles/PivotTable.style");

var _PivotTableCell = require("./PivotTableCell");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _PivotTableSortIcon = require("./PivotTableSortIcon");

var PivotTableColumnHeaderCell = function PivotTableColumnHeaderCell(_ref) {
  var _engine$columnWidths$;

  var clippingResult = _ref.clippingResult,
      index = _ref.index,
      level = _ref.level,
      onSortByColumn = _ref.onSortByColumn,
      sortBy = _ref.sortBy;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var width = (_engine$columnWidths$ = engine.columnWidths[index]) === null || _engine$columnWidths$ === void 0 ? void 0 : _engine$columnWidths$.width;

  var _ref2 = /*#__PURE__*/_react.default.createElement(_PivotTableSortIcon.PivotTableSortIcon, {
    index: index,
    sortBy: sortBy
  });

  return /*#__PURE__*/_react.default.createElement(_PivotTableHeaderCell.PivotTableHeaderCell, {
    axisClippingResult: clippingResult.columns,
    index: index,
    level: level,
    getHeader: function getHeader(idx) {
      return engine.getColumnHeader(idx);
    },
    showHierarchy: engine.visualization.showHierarchy,
    render: function render(header) {
      var isSortable = level === engine.columnDepth - 1 && header.span === 1 && engine.isSortable(index);
      return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
        isColumnHeader: true,
        classes: header.label && header.label !== 'Total' && header.label !== 'Subtotal' // TODO: Actually look up the column type!
        ? 'column-header' : 'empty-header',
        colSpan: header.span,
        title: header.label,
        style: {
          cursor: isSortable ? 'pointer' : 'default',
          width: width,
          maxWidth: width,
          minWidth: width
        },
        onClick: isSortable ? function () {
          return onSortByColumn(index);
        } : undefined
      }, /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _PivotTable.cell.__hash
      }, _PivotTable.cell), /*#__PURE__*/_react.default.createElement("div", {
        className: "jsx-".concat(_PivotTable.cell.__hash) + " " + "column-header-inner"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "jsx-".concat(_PivotTable.cell.__hash) + " " + "column-header-label"
      }, header.label), isSortable ? _ref2 : null));
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