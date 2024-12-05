"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEmptyCell = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableStyle = require("./styles/PivotTable.style.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PivotTableEmptyCell = exports.PivotTableEmptyCell = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, _extends({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell));
});
PivotTableEmptyCell.displayName = 'PivotTableEmptyCell';