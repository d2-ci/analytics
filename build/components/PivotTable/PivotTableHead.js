"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableHead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableColumnHeaders = require("./PivotTableColumnHeaders");

var _PivotTableTitleRows = require("./PivotTableTitleRows");

var PivotTableHead = function PivotTableHead(_ref) {
  var clippingResult = _ref.clippingResult,
      width = _ref.width,
      sortBy = _ref.sortBy,
      onSortByColumn = _ref.onSortByColumn;
  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_PivotTableTitleRows.PivotTableTitleRows, {
    clippingResult: clippingResult,
    width: width
  }), /*#__PURE__*/_react.default.createElement(_PivotTableColumnHeaders.PivotTableColumnHeaders, {
    clippingResult: clippingResult,
    sortBy: sortBy,
    onSortByColumn: onSortByColumn
  }));
};

exports.PivotTableHead = PivotTableHead;
PivotTableHead.propTypes = {
  clippingResult: _propTypes.default.object.isRequired,
  width: _propTypes.default.number.isRequired,
  onSortByColumn: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.object
};