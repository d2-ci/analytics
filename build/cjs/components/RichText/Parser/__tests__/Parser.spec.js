"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _Parser = require("../Parser.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Parser.Parser, {
      style: style
    }, 'test prop'));
    const divEl = container.querySelector('div');
    expect(divEl.style.color).toBe(style.color);
    expect(divEl.style.whiteSpace).toBe(style.whiteSpace);
  });
  test('should have rendered content', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Parser.Parser, null, 'plain text'));
    expect(_react.screen.getByText('converted text')).toBeInTheDocument();
  });
  test('should return null if no children is passed', () => {
    const {
      container
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Parser.Parser, null));
    const divEl = container.querySelector('div');
    expect(divEl).toBe(null);
  });
});