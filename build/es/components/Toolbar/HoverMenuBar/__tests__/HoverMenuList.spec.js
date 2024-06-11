import { shallow, mount } from 'enzyme';
import React from 'react';
import { HoverMenuList, HoverMenuListItem } from '../index.js';
describe('<HoverMenuList/>', () => {
  const dataTest = 'test';
  const childNode = 'children';
  it('renders children', () => {
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuList, null, childNode));
    expect(wrapper.containsMatchingElement(childNode)).toBe(true);
  });
  it('accept a `className` prop', () => {
    const className = 'className';
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuList, {
      className: className
    }, childNode));
    expect(wrapper.find('ul')).toHaveClassName(className);
  });
  it('accepts a `dataTest` prop', () => {
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuList, {
      dataTest: dataTest
    }, childNode));
    expect(wrapper.find('ul').prop('data-test')).toBe(dataTest);
  });
  it('accept a `dense` prop', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(HoverMenuList, {
      dense: true
    }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
      label: "item 1"
    }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
      label: "item 2"
    })));
    expect(wrapper.find('li').first()).toHaveClassName('dense');
    expect(wrapper.find('li').last()).toHaveClassName('dense');
  });
  it('accept a `maxHeight` prop', () => {
    const maxHeight = '100000px';
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuList, {
      maxHeight: maxHeight
    }, childNode));
    expect(wrapper.find('style').text()).toContain(`max-height: ${maxHeight}`);
  });
  it('accept a `maxWidth` prop', () => {
    const maxWidth = '100000px';
    const wrapper = shallow( /*#__PURE__*/React.createElement(HoverMenuList, {
      maxWidth: maxWidth
    }, childNode));
    expect(wrapper.find('style').text()).toContain(`max-width: ${maxWidth}`);
  });
});