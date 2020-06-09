"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTable = require("./styles/PivotTable.style");

var PivotTableContainer = _react.default.forwardRef(function (_ref, ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: width,
      height: height
    },
    ref: ref,
    className: "jsx-".concat(_PivotTable.table.__hash) + " " + "pivot-table-container"
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.table.__hash
  }, _PivotTable.table), width === 0 || height === 0 ? null : /*#__PURE__*/_react.default.createElement("table", {
    className: "jsx-".concat(_PivotTable.table.__hash)
  }, children));
});

exports.PivotTableContainer = PivotTableContainer;
PivotTableContainer.displayName = 'PivotTableContainer';
PivotTableContainer.propTypes = {
  children: _propTypes.default.node.isRequired,
  height: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired
};