"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuDropdown/>', () => {
  /* Most of the props for this component are included
   * in the mouse interaction tests for the HoverMenuBar.
   * Only the `dataTest` prop needs to be verified here. */

  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuDropdown, {
      label: "test dropdown",
      dataTest: dataTest
    }, "children"));
    expect(wrapper.find('button').prop('data-test')).toBe(dataTest);
  });
  it('accepts a `className` prop', () => {
    const className = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.HoverMenuDropdown, {
      label: "test dropdown",
      className: className
    }, "children"));
    expect(wrapper.find('button')).toHaveClassName(className);
  });
});