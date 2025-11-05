"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuList/>', () => {
  const dataTest = 'test';
  const childNode = 'children';
  test('renders children', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, childNode));
    expect(_react.screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accept a `className` prop', () => {
    const className = 'className';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dataTest: dataTest,
      className: className
    }, childNode));
    expect(_react.screen.getByTestId(dataTest)).toHaveClass(className);
  });
  test('accepts a `dataTest` prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dataTest: dataTest
    }, childNode));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accept a `dense` prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dense: true
    }, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      label: "item 1"
    }), /*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      label: "item 2"
    })));
    expect(_react.screen.getByText('item 1').closest('li')).toHaveClass('dense');
    expect(_react.screen.getByText('item 2').closest('li')).toHaveClass('dense');
  });
  test('accept a `maxHeight` prop', () => {
    const maxHeight = '100000px';
    const {
      container
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dataTest: dataTest,
      maxHeight: maxHeight
    }, childNode));
    expect(container).toMatchSnapshot();
  });
  test('accept a `maxWidth` prop', () => {
    const maxWidth = '100000px';
    const {
      container
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dataTest: dataTest,
      maxWidth: maxWidth
    }, childNode));
    expect(container).toMatchSnapshot();
  });
});