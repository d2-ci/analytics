"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableBody = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableClippedAxis = require("./PivotTableClippedAxis.js");
var _PivotTableEmptyRow = require("./PivotTableEmptyRow.js");
var _PivotTableRow = require("./PivotTableRow.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableBody = _ref => {
  let {
    clippingResult,
    onToggleContextualMenu
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
    axisClippingResult: clippingResult.rows,
    EmptyComponent: _ref2 => {
      let {
        size
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyRow.PivotTableEmptyRow, {
        height: size,
        columns: clippingResult.columns.indices
      });
    },
    ItemComponent: _ref3 => {
      let {
        index
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement(_PivotTableRow.PivotTableRow, {
        key: index,
        clippingResult: clippingResult,
        rowIndex: index,
        onToggleContextualMenu: onToggleContextualMenu
      });
    }
  }));
};
exports.PivotTableBody = PivotTableBody;
PivotTableBody.propTypes = {
  clippingResult: _propTypes.default.object.isRequired,
  onToggleContextualMenu: _propTypes.default.func
};