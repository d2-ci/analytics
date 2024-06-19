"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<InterpretationsAndDetailsToggler/>', () => {
  const noop = () => {};
  it('accepts an `onClick` prop', () => {
    const onClick = jest.fn();
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: onClick
    }));
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: noop,
      dataTest: dataTest
    }));
    expect(wrapper.prop('data-test')).toBe(dataTest);
  });
  it('accepts a `disabled` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
      disabled: true,
      onClick: noop
    }));
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });
  it('accepts an `isShowing` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: noop
    }));
    const wrapperWithIsShowing = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.InterpretationsAndDetailsToggler, {
      isShowing: true,
      onClick: noop
    }));
    expect(wrapper.find('SvgChevronRight24')).toHaveLength(0);
    expect(wrapper.find('SvgChevronLeft24')).toHaveLength(1);
    expect(wrapperWithIsShowing.find('SvgChevronRight24')).toHaveLength(1);
    expect(wrapperWithIsShowing.find('SvgChevronLeft24')).toHaveLength(0);
  });
});