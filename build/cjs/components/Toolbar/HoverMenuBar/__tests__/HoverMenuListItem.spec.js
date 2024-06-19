"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuListItem/>', () => {
  /* Some of the props for this component are included
   * in the mouse interaction tests for the HoverMenuBar.
   * Only the `className`, `dataTest`, `destructive` and
   * `icon` prop need to be verified here. */

  it('accepts a `className` prop', () => {
    const className = 'className';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
      className: className
    }));
    expect(wrapper.find('li')).toHaveClassName(className);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
      dataTest: dataTest
    }));
    expect(wrapper.find('li').prop('data-test')).toBe(dataTest);
  });
  it('accepts a `destructive` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
      destructive: true
    }));
    expect(wrapper.find('li')).toHaveClassName('destructive');
  });
  it('accepts an `icon` prop', () => {
    const iconText = 'I am an icon';
    const icon = /*#__PURE__*/_react.default.createElement("span", {
      id: "testicon"
    }, iconText);
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuListItem, {
      icon: icon
    }));
    expect(wrapper.find('span.icon')).toExist();
    expect(wrapper.find('span#testicon')).toExist();
    expect(wrapper.find('span#testicon').text()).toBe(iconText);
  });
});