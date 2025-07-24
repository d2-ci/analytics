"use strict";

require("@testing-library/jest-dom");
var _react = require("@testing-library/react");
var _enzyme = require("enzyme");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuList/>', () => {
  const dataTest = 'test';
  const childNode = 'children';
  it('renders children', () => {
    const wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accept a `className` prop', () => {
    const className = 'className';
    const wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      className: className
    }, childNode));
    expect(wrapper.find('ul')).toHaveClassName(className);
  });
  it('accepts a `dataTest` prop', () => {
    const wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      dataTest: dataTest
    }, childNode));
    expect(wrapper.find('ul').prop('data-test')).toBe(dataTest);
  });
  it('accept a `dense` prop', () => {
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
  it('accept a `maxHeight` prop', () => {
    const maxHeight = '100000px';
    const wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      maxHeight: maxHeight
    }, childNode));
    expect(wrapper.find('style').text()).toContain(`max-height: ${maxHeight}`);
  });
  it('accept a `maxWidth` prop', () => {
    const maxWidth = '100000px';
    const wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuList, {
      maxWidth: maxWidth
    }, childNode));
    expect(wrapper.find('style').text()).toContain(`max-width: ${maxWidth}`);
  });
});