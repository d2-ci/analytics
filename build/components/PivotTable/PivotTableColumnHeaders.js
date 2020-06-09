"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableColumnHeaders = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableClippedAxis = require("./PivotTableClippedAxis");

var _PivotTableColumnHeaderCell = require("./PivotTableColumnHeaderCell");

var _PivotTableDimensionLabelCell = require("./PivotTableDimensionLabelCell");

var _PivotTableEmptyCell = require("./PivotTableEmptyCell");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _times = _interopRequireDefault(require("lodash/times"));

var PivotTableColumnHeaders = function PivotTableColumnHeaders(_ref) {
  var clippingResult = _ref.clippingResult,
      onSortByColumn = _ref.onSortByColumn,
      sortBy = _ref.sortBy;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var columns = (0, _times.default)(engine.columnDepth, function (x) {
    return x;
  });
  var rows = (0, _times.default)(engine.rowDepth, function (x) {
    return x;
  });
  return columns.map(function (columnLevel) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: columnLevel
    }, rows.map(function (rowLevel) {
      return /*#__PURE__*/_react.default.createElement(_PivotTableDimensionLabelCell.PivotTableDimensionLabelCell, {
        key: rowLevel,
        rowLevel: rowLevel,
        columnLevel: columnLevel
      });
    }), /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
      axisClippingResult: clippingResult.columns,
      EmptyComponent: function EmptyComponent(_ref2) {
        var size = _ref2.size;
        return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
          classes: "column-header",
          style: {
            minWidth: size
          }
        });
      },
      ItemComponent: function ItemComponent(_ref3) {
        var index = _ref3.index;
        return /*#__PURE__*/_react.default.createElement(_PivotTableColumnHeaderCell.PivotTableColumnHeaderCell, {
          clippingResult: clippingResult,
          index: index,
          level: columnLevel,
          onSortByColumn: onSortByColumn,
          sortBy: sortBy
        });
      }
    }));
  });
};

exports.PivotTableColumnHeaders = PivotTableColumnHeaders;
PivotTableColumnHeaders.propTypes = {
  clippingResult: _propTypes.default.shape({
    columns: _propTypes.default.object.isRequired
  }).isRequired,
  onSortByColumn: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.shape({
    column: _propTypes.default.number.isRequired,
    order: _propTypes.default.number.isRequired
  })
};