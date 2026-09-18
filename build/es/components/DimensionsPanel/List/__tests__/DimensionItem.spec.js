function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { render } from '@testing-library/react';
import React from 'react';
import DimensionItem from '../DimensionItem.js';
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
  } = render(/*#__PURE__*/React.createElement(DimensionItem, props));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with recommended', () => {
  const {
    container
  } = render(/*#__PURE__*/React.createElement(DimensionItem, _extends({}, props, {
    isRecommended: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with selected', () => {
  const {
    container
  } = render(/*#__PURE__*/React.createElement(DimensionItem, _extends({}, props, {
    isSelected: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with locked', () => {
  const {
    container
  } = render(/*#__PURE__*/React.createElement(DimensionItem, _extends({}, props, {
    isLocked: true
  })));
  expect(container).toMatchSnapshot();
});
test('DimensionItem matches the snapshot with onOptionsClick', () => {
  const {
    container
  } = render(/*#__PURE__*/React.createElement(DimensionItem, _extends({}, props, {
    onOptionsClick: jest.fn()
  })));
  expect(container).toMatchSnapshot();
});