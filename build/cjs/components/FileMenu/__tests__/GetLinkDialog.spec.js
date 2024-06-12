"use strict";

var _ui = require("@dhis2/ui");

var _enzyme = require("enzyme");

var _react = _interopRequireDefault(require("react"));

var _GetLinkDialog = require("../GetLinkDialog.js");

var _utils = require("../utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testBaseUrl = 'http://test.tld/test';
jest.mock('@dhis2/app-runtime', () => ({
  useConfig: () => ({
    baseUrl: testBaseUrl
  })
}));
describe('The FileMenu - GetLinkDialog component', () => {
  let shallowGetLinkDialog;
  let props;
  const onClose = jest.fn();

  const getGetLinkDialogComponent = props => {
    if (!shallowGetLinkDialog) {
      shallowGetLinkDialog = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_GetLinkDialog.GetLinkDialog, props));
    }

    return shallowGetLinkDialog;
  };

  beforeEach(() => {
    shallowGetLinkDialog = undefined;
    props = {
      type: 'visualization',
      id: 'get-link-test-id',
      onClose
    };
  });
  it('renders a Modal component', () => {
    expect(getGetLinkDialogComponent(props).find(_ui.Modal)).toHaveLength(1);
  });
  it('renders a <a> tag containing the type and id props', () => {
    const href = getGetLinkDialogComponent(props).find('a').prop('href');
    expect(href).toMatch(new URL((0, _utils.appPathFor)(props.type, props.id), testBaseUrl).href);
  });
  it('calls the onClose callback when the Close button is clicked', () => {
    getGetLinkDialogComponent(props).find(_ui.Button).at(1).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});