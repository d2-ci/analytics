import { render, screen } from '@testing-library/react';
import React from 'react';
import { HoverMenuDropdown } from '../index.js';
describe('<HoverMenuDropdown/>', () => {
  /* Most of the props for this component are included
   * in the mouse interaction tests for the HoverMenuBar.
   * Only the `dataTest` prop needs to be verified here. */

  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    render(/*#__PURE__*/React.createElement(HoverMenuDropdown, {
      label: "test dropdown",
      dataTest: dataTest
    }, "children"));
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `className` prop', () => {
    const className = 'test';
    render(/*#__PURE__*/React.createElement(HoverMenuDropdown, {
      label: "test dropdown",
      className: className
    }, "children"));
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});