import { render, screen } from '@testing-library/react';
import React from 'react';
import { HoverMenuList, HoverMenuListItem } from '../index.js';
describe('<HoverMenuList/>', () => {
  const dataTest = 'test';
  const childNode = 'children';
  test('renders children', () => {
    render(/*#__PURE__*/React.createElement(HoverMenuList, null, childNode));
    expect(screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accept a `className` prop', () => {
    const className = 'className';
    render(/*#__PURE__*/React.createElement(HoverMenuList, {
      dataTest: dataTest,
      className: className
    }, childNode));
    expect(screen.getByTestId(dataTest)).toHaveClass(className);
  });
  test('accepts a `dataTest` prop', () => {
    render(/*#__PURE__*/React.createElement(HoverMenuList, {
      dataTest: dataTest
    }, childNode));
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accept a `dense` prop', () => {
    render(/*#__PURE__*/React.createElement(HoverMenuList, {
      dense: true
    }, /*#__PURE__*/React.createElement(HoverMenuListItem, {
      label: "item 1"
    }), /*#__PURE__*/React.createElement(HoverMenuListItem, {
      label: "item 2"
    })));
    expect(screen.getByText('item 1').closest('li')).toHaveClass('dense');
    expect(screen.getByText('item 2').closest('li')).toHaveClass('dense');
  });
  test('accept a `maxHeight` prop', () => {
    const maxHeight = '100000px';
    const {
      container
    } = render(/*#__PURE__*/React.createElement(HoverMenuList, {
      dataTest: dataTest,
      maxHeight: maxHeight
    }, childNode));
    expect(container).toMatchSnapshot();
  });
  test('accept a `maxWidth` prop', () => {
    const maxWidth = '100000px';
    const {
      container
    } = render(/*#__PURE__*/React.createElement(HoverMenuList, {
      dataTest: dataTest,
      maxWidth: maxWidth
    }, childNode));
    expect(container).toMatchSnapshot();
  });
});