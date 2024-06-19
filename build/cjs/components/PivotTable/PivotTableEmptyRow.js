"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEmptyRow = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableEmptyRow = _ref => {
  let {
    height,
    columns
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    isHeader: true,
    colSpan: engine.rowDepth,
    style: {
      height
    },
    classes: ['row-header', {
      'fixed-header': engine.options.fixRowHeaders
    }]
  }), columns.map(i => /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    key: i
  })));
};
exports.PivotTableEmptyRow = PivotTableEmptyRow;
PivotTableEmptyRow.propTypes = {
  columns: _propTypes.default.array.isRequired,
  height: _propTypes.default.number.isRequired
};