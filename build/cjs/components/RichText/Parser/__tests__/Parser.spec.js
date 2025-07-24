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
  const defaultProps = {
    style: {
      color: 'blue',
      whiteSpace: 'pre-line'
    }
  };
  const renderComponent = (props, text) => {
    return (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Parser.Parser, props, text));
  };
  test('should have rendered a result with the style prop', () => {
    const {
      container
    } = renderComponent(defaultProps, 'test prop');
    const divEl = container.querySelector('div');
    expect(divEl.style.color).toBe(defaultProps.style.color);
    expect(divEl.style.whiteSpace).toBe(defaultProps.style.whiteSpace);
  });
  test('should have rendered content', () => {
    renderComponent({}, 'plain text');
    expect(_react.screen.getByText('converted text')).toBeInTheDocument();
  });
  test('should return null if no children is passed', () => {
    const {
      container
    } = renderComponent({}, undefined);
    const divEl = container.querySelector('div');
    expect(divEl).toBe(null);
  });
});