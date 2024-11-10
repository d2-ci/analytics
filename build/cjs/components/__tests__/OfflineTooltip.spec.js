"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
var _OfflineTooltip = require("../OfflineTooltip.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import i18n from '@dhis2/d2-i18n'

jest.mock('@dhis2/app-runtime', () => ({
  useDhis2ConnectionStatus: jest.fn()
}));
const mockUseDhis2ConnectionStatus = isDisconnected => {
  _appRuntime.useDhis2ConnectionStatus.mockReturnValue({
    isDisconnected
  });
};
describe('OfflineTooltip', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('renders children without tooltip when online and not disabled', () => {
    mockUseDhis2ConnectionStatus(false);
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_OfflineTooltip.OfflineTooltip, {
      disabledWhenOffline: true,
      disabled: false
    }, /*#__PURE__*/_react2.default.createElement("span", null, "Test Child")));
    expect(_react.screen.getByText('Test Child')).toBeInTheDocument();
    expect(_react.screen.queryByText('Not available offline')).not.toBeInTheDocument();
  });
  test.only('shows tooltip when offline and disabledWhenOffline is true', () => {
    mockUseDhis2ConnectionStatus(true);
    const {
      container
    } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_OfflineTooltip.OfflineTooltip, {
      disabledWhenOffline: true,
      disabled: false
    }, /*#__PURE__*/_react2.default.createElement("span", null, "Test Child")));
    expect(container).toMatchSnapshot();

    // const childElement = screen.getByText('Test Child')
    // fireEvent.mouseOver(childElement)

    // expect(screen.getByText('Not available offline')).toBeInTheDocument()
  });
  test('shows custom tooltip content', () => {
    mockUseDhis2ConnectionStatus(true);
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_OfflineTooltip.OfflineTooltip, {
      disabledWhenOffline: true,
      disabled: false,
      content: "Custom Tooltip Content"
    }, /*#__PURE__*/_react2.default.createElement("span", null, "Test Child")));
    const childElement = _react.screen.getByText('Test Child');
    _react.fireEvent.mouseOver(childElement);
    expect(_react.screen.getByText('Custom Tooltip Content')).toBeInTheDocument();
  });
  test('shows tooltip when disabled is true', () => {
    mockUseDhis2ConnectionStatus(false);
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_OfflineTooltip.OfflineTooltip, {
      disabledWhenOffline: false,
      disabled: true
    }, /*#__PURE__*/_react2.default.createElement("span", null, "Test Child")));
    const childElement = _react.screen.getByText('Test Child');
    _react.fireEvent.mouseOver(childElement);
    expect(_react.screen.getByText('Not available offline')).toBeInTheDocument();
  });
  test('does not show tooltip when disabledWhenOffline and disabled are false', () => {
    mockUseDhis2ConnectionStatus(true);
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_OfflineTooltip.OfflineTooltip, {
      disabledWhenOffline: false,
      disabled: false
    }, /*#__PURE__*/_react2.default.createElement("span", null, "Test Child")));
    const childElement = _react.screen.getByText('Test Child');
    _react.fireEvent.mouseOver(childElement);
    expect(_react.screen.queryByText('Not available offline')).not.toBeInTheDocument();
  });
});