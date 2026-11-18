"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableRow = void 0;
var _times = _interopRequireDefault(require("lodash/times"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableClippedAxis = require("./PivotTableClippedAxis.js");
var _PivotTableEmptyCell = require("./PivotTableEmptyCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableRowHeaderCell = require("./PivotTableRowHeaderCell.js");
var _PivotTableValueCell = require("./PivotTableValueCell.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableRow = ({
  clippingResult,
  rowIndex,
  onToggleContextualMenu
}) => {
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement("tr", null, (0, _times.default)(engine.rowDepth, x => x).map(rowLevel => /*#__PURE__*/_react.default.createElement(_PivotTableRowHeaderCell.PivotTableRowHeaderCell, {
    key: rowLevel,
    clippingResult: clippingResult,
    rowIndex: rowIndex,
    rowLevel: rowLevel
  })), /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: ({
      size
    }) => /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
      classes: "value",
      style: {
        width: size
      }
    }),
    ItemComponent: ({
      index: columnIndex
    }) => /*#__PURE__*/_react.default.createElement(_PivotTableValueCell.PivotTableValueCell, {
      row: rowIndex,
      column: columnIndex,
      onToggleContextualMenu: onToggleContextualMenu
    })
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