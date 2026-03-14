import { render, screen } from '@testing-library/react';
import React from 'react';
import { Parser } from '../Parser.js';
jest.mock('../MdParser.js', () => ({
  MdParser: jest.fn().mockImplementation(() => {
    return {
      render: () => 'converted text'
    };
  })
}));
describe('RichText: Parser component', () => {
  test('should have rendered a result with the style prop', () => {
    const style = {
      color: 'blue',
      whiteSpace: 'pre-line'
    };
    const {
      container
    } = render(/*#__PURE__*/React.createElement(Parser, {
      style: style
    }, 'test prop'));
    const divEl = container.querySelector('div');
    expect(divEl.style.color).toBe(style.color);
    expect(divEl.style.whiteSpace).toBe(style.whiteSpace);
  });
  test('should have rendered content', () => {
    render(/*#__PURE__*/React.createElement(Parser, null, 'plain text'));
    expect(screen.getByText('converted text')).toBeInTheDocument();
  });
  test('should return null if no children is passed', () => {
    const {
      container
    } = render(/*#__PURE__*/React.createElement(Parser, null));
    const divEl = container.querySelector('div');
    expect(divEl).toBe(null);
  });
});