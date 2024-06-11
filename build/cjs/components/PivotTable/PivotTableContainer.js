"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

var _PivotTableStyle = require("./styles/PivotTable.style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableContainer = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    width,
    height,
    children
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width,
      height
    },
    ref: ref,
    "data-test": "visualization-container",
    className: "jsx-".concat(_PivotTableStyle.table.__hash) + " " + "pivot-table-container"
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.table.__hash
  }, _PivotTableStyle.table), width === 0 || height === 0 ? null : /*#__PURE__*/_react.default.createElement("table", {
    className: "jsx-".concat(_PivotTableStyle.table.__hash) + " " + ((0, _classnames.default)({
      'fixed-headers': engine.options.fixColumnHeaders && engine.options.fixRowHeaders,
      'fixed-column-headers': engine.options.fixColumnHeaders && !engine.options.fixRowHeaders,
      'fixed-row-headers': engine.options.fixRowHeaders && !engine.options.fixColumnHeaders
    }) || "")
  }, children));
});

exports.PivotTableContainer = PivotTableContainer;
PivotTableContainer.displayName = 'PivotTableContainer';
PivotTableContainer.propTypes = {
  children: _propTypes.default.node.isRequired,
  height: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired
};