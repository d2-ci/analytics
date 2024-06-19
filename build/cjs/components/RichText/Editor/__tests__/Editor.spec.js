"use strict";

require("@testing-library/jest-dom");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _Editor = require("../Editor.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mockConvertCtrlKey = jest.fn();
jest.mock('../markdownHandler.js', () => ({
  convertCtrlKey: () => mockConvertCtrlKey()
}));
jest.mock('../../../UserMention/UserMentionWrapper.js', () => ({
  UserMentionWrapper: jest.fn(props => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, props.children))
}));
describe('RichText: Editor component', () => {
  const componentProps = {
    value: '',
    onChange: jest.fn()
  };
  beforeEach(() => {
    mockConvertCtrlKey.mockClear();
  });
  const renderComponent = props => {
    return (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Editor.Editor, props));
  };
  it('renders a result', () => {
    renderComponent(componentProps);
    expect(_react.screen.getByTestId('@dhis2-analytics-richtexteditor')).toBeVisible();
  });
  it('calls convertCtrlKey on keydown', () => {
    renderComponent(componentProps);
    _react.fireEvent.keyDown(_react.screen.getByRole('textbox'), {
      key: 'A',
      code: 'keyA'
    });
    expect(mockConvertCtrlKey).toHaveBeenCalled();
  });
});