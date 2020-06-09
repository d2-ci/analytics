"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableClippedAxis = require("./PivotTableClippedAxis");

var _PivotTableRowHeaderCell = require("./PivotTableRowHeaderCell");

var _PivotTableValueCell = require("./PivotTableValueCell");

var _PivotTableEmptyCell = require("./PivotTableEmptyCell");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _times = _interopRequireDefault(require("lodash/times"));

var _ref2 = /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
  classes: "value"
});

var PivotTableRow = function PivotTableRow(_ref) {
  var clippingResult = _ref.clippingResult,
      rowIndex = _ref.rowIndex,
      onToggleContextualMenu = _ref.onToggleContextualMenu;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement("tr", null, (0, _times.default)(engine.rowDepth, function (x) {
    return x;
  }).map(function (rowLevel) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableRowHeaderCell.PivotTableRowHeaderCell, {
      key: rowLevel,
      clippingResult: clippingResult,
      rowIndex: rowIndex,
      rowLevel: rowLevel
    });
  }), /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: function EmptyComponent() {
      return _ref2;
    },
    ItemComponent: function ItemComponent(_ref3) {
      var columnIndex = _ref3.index;
      return /*#__PURE__*/_react.default.createElement(_PivotTableValueCell.PivotTableValueCell, {
        row: rowIndex,
        column: columnIndex,
        onToggleContextualMenu: onToggleContextualMenu
      });
    }
  }));
};

exports.PivotTableRow = PivotTableRow;
PivotTableRow.propTypes = {
  clippingResult: _propTypes.default.shape({
    columns: _propTypes.default.object.isRequired,
    rows: _propTypes.default.object.isRequired
  }).isRequired,
  rowIndex: _propTypes.default.number.isRequired,
  onToggleContextualMenu: _propTypes.default.func
};