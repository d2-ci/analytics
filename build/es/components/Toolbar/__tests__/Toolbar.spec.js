import { shallow } from 'enzyme';
import React from 'react';
import { Toolbar } from '../index.js';
describe('<Toolbar/>', () => {
  it('renders children', () => {
    const childNode = 'text node';
    const wrapper = shallow( /*#__PURE__*/React.createElement(Toolbar, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    const wrapper = shallow( /*#__PURE__*/React.createElement(Toolbar, {
      dataTest: dataTest
    }));
    expect(wrapper.prop('data-test')).toBe(dataTest);
  });
});