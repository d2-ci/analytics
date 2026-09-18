"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _DimensionItem = _interopRequireDefault(require("../DimensionItem.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const props = {
  id: 'pe',
  name: 'Period',
  isDeactivated: false,
  isSelected: false,
  isRecommended: false,
  isLocked: false
};
test('DimensionItem matches the snapshot', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, props));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with recommended', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, _extends({}, props, {
    isRecommended: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with selected', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, _extends({}, props, {
    isSelected: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with locked', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, _extends({}, props, {
    isLocked: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with onOptionsClick', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, _extends({}, props, {
    onOptionsClick: jest.fn()
  })));
  expect(container).toMatchSnapshot();
});