"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _DimensionItem = _interopRequireDefault(require("../DimensionItem.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  props.isRecommended = true;
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, props));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with selected', () => {
  props.isSelected = true;
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, props));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with locked', () => {
  props.isLocked = true;
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, props));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with onOptionsClick', () => {
  props.onOptionsClick = jest.fn();
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionItem.default, props));
  expect(container).toMatchSnapshot();
});