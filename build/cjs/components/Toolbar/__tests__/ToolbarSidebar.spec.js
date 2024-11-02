"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<ToolbarSidebar/>', () => {
  it('renders children', () => {
    const childNode = 'text node';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.ToolbarSidebar, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.ToolbarSidebar, {
      dataTest: dataTest
    }));
    expect(wrapper.prop('data-test')).toBe(dataTest);
  });
  it('accepts a `isHidden` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.ToolbarSidebar, {
      isHidden: true
    }));
    expect(wrapper.find('div').hasClass('isHidden')).toEqual(true);
  });
});