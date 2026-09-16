"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _OrgUnitDimension = _interopRequireDefault(require("../OrgUnitDimension.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('@dhis2-ui/organisation-unit-tree', () => {
  const lib = jest.requireActual('@dhis2-ui/organisation-unit-tree');
  return {
    ...lib,
    OrganisationUnitTree: () => /*#__PURE__*/_react2.default.createElement("div", null, "Org unit tree component mock")
  };
});
describe('OrgUnitDimension', () => {
  const onSelect = jest.fn();
  const props = {
    roots: [],
    selected: [],
    onSelect: onSelect,
    hideGroupSelect: false,
    hideLevelSelect: false,
    hideUserOrgUnits: false,
    warning: ''
  };
  const renderOrgUnitDimension = props => (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_appRuntime.CustomDataProvider, {
    data: {
      organisationUnitLevels: {
        organisationUnitLevels: []
      },
      organisationUnitGroups: {
        organisationUnitGroups: []
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, props)));
  beforeEach(() => onSelect.mockClear());
  test('OrgUnitDimension is rendered correctly', async () => {
    renderOrgUnitDimension(props);

    // wait for the component to be loaded, here done by testing that the OrganisationUnitTree component is loaded
    // avoid the act warning due to the snapshot being taken before async code is run
    await _react.screen.findByText('Org unit tree component mock');

    // the top user org unit checkboxes are rendered
    expect(_react.screen.getByLabelText('User organisation unit')).toBeInTheDocument();
    expect(_react.screen.getByLabelText('User sub-units')).toBeInTheDocument();
    expect(_react.screen.getByLabelText('User sub-x2-units')).toBeInTheDocument();

    // the OrganisationUnitTree component is rendered
    expect(_react.screen.getByText('Org unit tree component mock')).toBeInTheDocument();

    // the level selector is rendered
    expect(_react.screen.getByText('Select a level')).toBeInTheDocument();

    // the group selector is rendered
    expect(_react.screen.getByText('Select a group')).toBeInTheDocument();

    // the Deselect all button is rendered
    expect(_react.screen.getByRole('button', {
      name: 'Deselect all'
    })).toBeInTheDocument();
  });
  test('OrgUnitDimension calls onSelect when an organisation unit is selected', async () => {
    const user = _userEvent.default.setup();
    renderOrgUnitDimension(props);
    await user.click(_react.screen.getByText('User organisation unit'));
    expect(onSelect).toHaveBeenCalledWith({
      dimensionId: 'ou',
      items: [{
        id: 'USER_ORGUNIT',
        displayName: 'User organisation unit'
      }]
    });
  });
  test('OrgUnitDimension calls onSelect with an empty array when selection is cleared', async () => {
    const user = _userEvent.default.setup();
    renderOrgUnitDimension({
      ...props,
      // make some selection to enable the deselect all button
      selected: [{
        id: 'USER_ORGUNIT_CHILDREN',
        name: 'User sub-units'
      }]
    });
    await user.click(_react.screen.getByRole('button', {
      name: 'Deselect all'
    }));
    expect(onSelect).toHaveBeenLastCalledWith({
      dimensionId: 'ou',
      items: []
    });
  });
});