"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _Parser = require("../Parser.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('../MdParser.js', () => ({
  MdParser: jest.fn().mockImplementation(() => {
    return {
      render: () => 'converted text'
    };
  })
}));
describe('RichText: Parser component', () => {
  let richTextParser;
  const defaultProps = {
    style: {
      color: 'blue',
      whiteSpace: 'pre-line'
    }
  };
  const renderComponent = (props, text) => {
    return (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Parser.Parser, props, text));
  };
  it('should have rendered a result', () => {
    richTextParser = renderComponent({}, 'test');
    expect(richTextParser).toHaveLength(1);
  });
  it('should have rendered a result with the style prop', () => {
    richTextParser = renderComponent(defaultProps, 'test prop');
    expect(richTextParser.props().style).toEqual(defaultProps.style);
  });
  it('should have rendered content', () => {
    richTextParser = renderComponent({}, 'plain text');
    expect(richTextParser.html()).toEqual('<div>converted text</div>');
  });
  it('should return null if no children is passed', () => {
    richTextParser = renderComponent({}, undefined);
    expect(richTextParser.html()).toBe(null);
  });
});