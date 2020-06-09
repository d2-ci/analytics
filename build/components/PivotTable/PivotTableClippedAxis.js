"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableClippedAxis = void 0;

var _react = _interopRequireDefault(require("react"));

var PivotTableClippedAxis = function PivotTableClippedAxis(_ref) {
  var axisClippingResult = _ref.axisClippingResult,
      EmptyComponent = _ref.EmptyComponent,
      ItemComponent = _ref.ItemComponent;
  return [axisClippingResult.pre ? /*#__PURE__*/_react.default.createElement(EmptyComponent, {
    key: "pre",
    size: axisClippingResult.pre
  }) : null, axisClippingResult.indices.map(function (index) {
    return /*#__PURE__*/_react.default.createElement(ItemComponent, {
      key: index,
      index: index
    });
  }), axisClippingResult.post ? /*#__PURE__*/_react.default.createElement(EmptyComponent, {
    key: "post",
    size: axisClippingResult.post
  }) : null];
};

exports.PivotTableClippedAxis = PivotTableClippedAxis;