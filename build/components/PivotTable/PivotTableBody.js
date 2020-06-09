"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableClippedAxis = require("./PivotTableClippedAxis");

var _PivotTableEmptyRow = require("./PivotTableEmptyRow");

var _PivotTableRow = require("./PivotTableRow");

var PivotTableBody = function PivotTableBody(_ref) {
  var clippingResult = _ref.clippingResult,
      onToggleContextualMenu = _ref.onToggleContextualMenu;
  return /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
    axisClippingResult: clippingResult.rows,
    EmptyComponent: function EmptyComponent(_ref2) {
      var size = _ref2.size;
      return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyRow.PivotTableEmptyRow, {
        height: size,
        columns: clippingResult.columns.indices
      });
    },
    ItemComponent: function ItemComponent(_ref3) {
      var index = _ref3.index;
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