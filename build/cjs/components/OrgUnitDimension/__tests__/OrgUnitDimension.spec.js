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
        organisationUnitLevels: [{
          name: 'Chiefdom',
          level: 3,
          id: 'tTUf91fCytl',
          displayName: 'Chiefdom'
        }, {
          name: 'District',
          level: 2,
          id: 'wjP19dkFeIk',
          displayName: 'District'
        }, {
          name: 'Facility',
          level: 4,
          id: 'm9lBJogzE95',
          displayName: 'Facility'
        }, {
          name: 'National',
          level: 1,
          id: 'H1KlN4QIauv',
          displayName: 'National'
        }]
      },
      organisationUnitGroups: {
        organisationUnitGroups: [{
          name: 'CHC',
          id: 'CXw2yu5fodb',
          displayName: 'CHC'
        }, {
          name: 'Chiefdom',
          id: 'gzcv65VyaGq',
          displayName: 'Chiefdom'
        }, {
          name: 'CHP',
          id: 'uYxK4wmcPqA',
          displayName: 'CHP'
        }, {
          name: 'Clinic',
          id: 'RXL3lPSK8oG',
          displayName: 'Clinic'
        }, {
          name: 'Country',
          id: 'RpbiCJpIYEj',
          displayName: 'Country'
        }, {
          name: 'District',
          id: 'w1Atoz18PCL',
          displayName: 'District'
        }, {
          name: 'Eastern Area',
          id: 'nlX2VoouN63',
          displayName: 'Eastern Area'
        }, {
          name: 'Hospital',
          id: 'tDZVQ1WtwpA',
          displayName: 'Hospital'
        }, {
          name: 'MCHP',
          id: 'EYbopBOJWsW',
          displayName: 'MCHP'
        }, {
          name: 'Mission',
          id: 'w0gFTTmsUcF',
          displayName: 'Mission'
        }, {
          name: 'NGO',
          id: 'PVLOW4bCshG',
          displayName: 'NGO'
        }, {
          name: 'Northern Area',
          id: 'J40PpdN4Wkk',
          displayName: 'Northern Area'
        }, {
          name: 'Private Clinic',
          id: 'MAs88nJc9nL',
          displayName: 'Private Clinic'
        }, {
          name: 'Public facilities',
          id: 'oRVt7g429ZO',
          displayName: 'Public facilities'
        }, {
          name: 'Rural',
          id: 'GGghZsfu7qV',
          displayName: 'Rural'
        }, {
          name: 'Southern Area',
          id: 'jqBqIXoXpfy',
          displayName: 'Southern Area'
        }, {
          name: 'Urban',
          id: 'f25dqv3Y7Z0',
          displayName: 'Urban'
        }, {
          name: 'Western Area',
          id: 'b0EsAxm8Nge',
          displayName: 'Western Area'
        }]
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, props)));
  beforeEach(() => onSelect.mockClear());
  test('OrgUnitDimension matches the snapshot', () => {
    const {
      container
    } = renderOrgUnitDimension(props);
    expect(container).toMatchSnapshot();
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