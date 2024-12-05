"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableCell = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableStyle = require("./styles/PivotTable.style.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PivotTableCell = exports.PivotTableCell = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    classes,
    isHeader,
    children,
    dataTest,
    style = {},
    ...props
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  style.width = style.minWidth = style.maxWidth = style.width;
  style.height = style.minHeight = style.maxHeight = style.height || engine.fontSize + engine.cellPadding * 2 + 2;
  const className = (0, _classnames.default)(classes, `fontsize-${engine.visualization.fontSize}`, `displaydensity-${engine.visualization.displayDensity}`);
  return isHeader ? /*#__PURE__*/_react.default.createElement("th", _extends({
    style: style,
    "data-test": dataTest
  }, props, {
    className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell), children) : /*#__PURE__*/_react.default.createElement("td", _extends({
    ref: ref,
    style: style,
    "data-test": dataTest
  }, props, {
    className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell), children);
});
PivotTableCell.displayName = 'PivotTableCell';
PivotTableCell.defaultProps = {
  isHeader: false
};
PivotTableCell.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  dataTest: _propTypes.default.string,
  isHeader: _propTypes.default.bool,
  style: _propTypes.default.object
};