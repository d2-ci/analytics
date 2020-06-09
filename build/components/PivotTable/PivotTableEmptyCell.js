"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEmptyCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _PivotTable = require("./styles/PivotTable.style");

var _PivotTableCell = require("./PivotTableCell");

var PivotTableEmptyCell = _react.default.forwardRef(function (_ref, ref) {
  var props = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, (0, _extends2.default)({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.cell.__hash
  }, _PivotTable.cell));
});

exports.PivotTableEmptyCell = PivotTableEmptyCell;
PivotTableEmptyCell.displayName = 'PivotTableEmptyCell';