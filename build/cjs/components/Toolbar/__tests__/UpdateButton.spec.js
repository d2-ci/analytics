"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<UpdateButton/>', () => {
  const noop = () => {};
  it('accepts an `onClick` prop', () => {
    const onClick = jest.fn();
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.UpdateButton, {
      onClick: onClick
    }));
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.UpdateButton, {
      onClick: noop,
      dataTest: dataTest
    }));
    expect(wrapper.prop('data-test')).toBe(dataTest);
  });
  it('accepts a `disabled` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.UpdateButton, {
      disabled: true,
      onClick: noop
    }));
    expect(wrapper.find('button').prop('disabled')).toEqual(true);
  });
  it('accepts an `loading` prop', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_index.UpdateButton, {
      onClick: noop,
      loading: true
    }));
    expect(wrapper.find('CircularLoader')).toHaveLength(1);
  });
});