"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableClippedAxis = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableClippedAxis = _ref => {
  let {
    axisClippingResult,
    EmptyComponent,
    ItemComponent
  } = _ref;
  return [axisClippingResult.pre ? /*#__PURE__*/_react.default.createElement(EmptyComponent, {
    key: "pre",
    size: axisClippingResult.pre
  }) : null, axisClippingResult.indices.map(index => /*#__PURE__*/_react.default.createElement(ItemComponent, {
    key: index,
    index: index
  })), axisClippingResult.post ? /*#__PURE__*/_react.default.createElement(EmptyComponent, {
    key: "post",
    size: axisClippingResult.post
  }) : null];
};
exports.PivotTableClippedAxis = PivotTableClippedAxis;
PivotTableClippedAxis.propTypes = {
  axisClippingResult: _propTypes.default.object.isRequired,
  EmptyComponent: _propTypes.default.func,
  ItemComponent: _propTypes.default.func
};