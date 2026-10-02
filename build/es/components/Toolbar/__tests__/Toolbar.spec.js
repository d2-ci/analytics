import { render, screen } from '@testing-library/react';
import React from 'react';
import { Toolbar } from '../index.js';
describe('<Toolbar/>', () => {
  test('renders children', () => {
    const childNode = 'text node';
    render(/*#__PURE__*/React.createElement(Toolbar, null, childNode));
    expect(screen.getByText(childNode)).toBeInTheDocument();
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    render(/*#__PURE__*/React.createElement(Toolbar, {
      dataTest: dataTest
    }));
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
});