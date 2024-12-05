"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableHead = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableColumnHeaders = require("./PivotTableColumnHeaders.js");
var _PivotTableTitleRows = require("./PivotTableTitleRows.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableHead = _ref => {
  let {
    clippingResult,
    width,
    sortBy,
    onSortByColumn
  } = _ref;
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