"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PivotTable = require("./styles/PivotTable.style");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var PivotTableCell = _react.default.forwardRef(function (_ref, ref) {
  var classes = _ref.classes,
      isColumnHeader = _ref.isColumnHeader,
      children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["classes", "isColumnHeader", "children", "style"]);
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  style.height = style.minHeight = style.maxHeight = style.height || engine.fontSize + engine.cellPadding * 2 + 2;
  var className = (0, _classnames.default)(classes, "fontsize-".concat(engine.visualization.fontSize), "displaydensity-".concat(engine.visualization.displayDensity));
  return isColumnHeader ? /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    style: style
  }, props, {
    className: "jsx-".concat(_PivotTable.cell.__hash) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.cell.__hash
  }, _PivotTable.cell), children) : /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    ref: ref,
    style: style
  }, props, {
    className: "jsx-".concat(_PivotTable.cell.__hash) + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.cell.__hash
  }, _PivotTable.cell), children);
});

exports.PivotTableCell = PivotTableCell;
PivotTableCell.displayName = 'PivotTableCell';
PivotTableCell.defaultProps = {
  isColumnHeader: false
};
PivotTableCell.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  isColumnHeader: _propTypes.default.bool,
  style: _propTypes.default.object
};