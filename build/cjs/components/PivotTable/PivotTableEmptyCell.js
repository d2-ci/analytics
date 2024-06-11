"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEmptyCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _PivotTableCell = require("./PivotTableCell.js");

var _PivotTableStyle = require("./styles/PivotTable.style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PivotTableEmptyCell = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let { ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, _extends({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell));
});

exports.PivotTableEmptyCell = PivotTableEmptyCell;
PivotTableEmptyCell.displayName = 'PivotTableEmptyCell';