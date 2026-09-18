import { render, screen } from '@testing-library/react';
import React from 'react';
import { ToolbarSidebar } from '../index.js';
describe('<ToolbarSidebar/>', () => {
  test('renders children', () => {
    const childNode = 'text node';
    render(/*#__PURE__*/React.createElement(ToolbarSidebar, null, childNode));
    expect(screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    render(/*#__PURE__*/React.createElement(ToolbarSidebar, {
      dataTest: dataTest
    }));
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `isHidden` prop', () => {
    const {
      container
    } = render(/*#__PURE__*/React.createElement(ToolbarSidebar, {
      isHidden: true
    }));
    const divEl = container.querySelector('div');
    expect(divEl).toHaveClass('isHidden');
  });
});