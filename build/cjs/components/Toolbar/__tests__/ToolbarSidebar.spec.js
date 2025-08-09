"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<ToolbarSidebar/>', () => {
  test('renders children', () => {
    const childNode = 'text node';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.ToolbarSidebar, null, childNode));
    expect(_react.screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.ToolbarSidebar, {
      dataTest: dataTest
    }));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `isHidden` prop', () => {
    const {
      container
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.ToolbarSidebar, {
      isHidden: true
    }));
    const divEl = container.querySelector('div');
    expect(divEl).toHaveClass('isHidden');
  });
});