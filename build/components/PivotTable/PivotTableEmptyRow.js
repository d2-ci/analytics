"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEmptyRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _PivotTableCell = require("./PivotTableCell");

var PivotTableEmptyRow = function PivotTableEmptyRow(_ref) {
  var height = _ref.height,
      columns = _ref.columns;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    colSpan: engine.rowDepth,
    style: {
      height: height
    },
    classes: "row-header"
  }), columns.map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
      key: i
    });
  }));
};

exports.PivotTableEmptyRow = PivotTableEmptyRow;
PivotTableEmptyRow.propTypes = {
  columns: _propTypes.default.array.isRequired,
  height: _propTypes.default.number.isRequired
};