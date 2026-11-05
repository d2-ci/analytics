"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _GetLinkDialog = require("../GetLinkDialog.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const testBaseUrl = 'http://host.tld/test/';
const mockUseConfig = jest.fn(() => ({
  apiVersion: 42,
  baseUrl: testBaseUrl
}));
jest.mock('@dhis2/app-runtime', () => ({
  useConfig: () => mockUseConfig()
}));
const tests = [{
  type: 'visualization',
  baseUrl: 'http://host.tld',
  id: 'dv-id-1',
  expected: 'http://host.tld/dhis-web-data-visualizer/#/dv-id-1'
}, {
  type: 'visualization',
  baseUrl: testBaseUrl,
  id: 'dv-id-2',
  expected: 'http://host.tld/test/dhis-web-data-visualizer/#/dv-id-2'
}, {
  type: 'eventVisualization',
  baseUrl: 'http://host.tld/other-path/',
  id: 'll-id-1',
  expected: 'http://host.tld/other-path/dhis-web-line-listing/#/ll-id-1'
}, {
  type: 'eventVisualization',
  apiVersion: 41,
  baseUrl: 'http://host.tld/other-path',
  id: 'll-id-2',
  expected: 'http://host.tld/other-path/api/apps/line-listing/#/ll-id-2'
}, {
  type: 'map',
  baseUrl: testBaseUrl,
  id: 'map-id-1',
  expected: 'http://host.tld/test/dhis-web-maps/#/map-id-1'
}, {
  type: 'map',
  baseUrl: '../',
  id: 'map-id-2',
  expected: 'http://localhost/dhis-web-maps/#/map-id-2'
}];
describe('FileMenu - GetLinkDialog component', () => {
  const onClose = jest.fn();
  const props = {
    type: tests[0].type,
    id: tests[0].id,
    onClose
  };
  test('renders a Modal component', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_GetLinkDialog.GetLinkDialog, props));
    const modalComponent = _react.screen.getByTestId('dhis2-uicore-modal');
    expect(modalComponent).toBeInTheDocument();
    expect(_react.screen.getByLabelText('Close modal dialog')).toBeInTheDocument();
  });
  test('calls the onClose callback when the Close button is clicked', async () => {
    const user = _userEvent.default.setup();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_GetLinkDialog.GetLinkDialog, props));
    const closeButton = _react.screen.getByRole('button', {
      name: 'Close'
    });
    await user.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test.each(tests)('renders a <a> tag containing the correct app path and id', ({
    apiVersion,
    baseUrl,
    type,
    id,
    expected
  }) => {
    mockUseConfig.mockReturnValueOnce({
      apiVersion: apiVersion || 42,
      baseUrl
    });
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_GetLinkDialog.GetLinkDialog, {
      onClose: onClose,
      type: type,
      id: id
    }));
    const anchorElement = _react.screen.getByRole('link');
    expect(anchorElement.href).toMatch(expected);
  });
});