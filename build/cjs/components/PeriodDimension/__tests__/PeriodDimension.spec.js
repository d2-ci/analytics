"use strict";

var _enzyme = require("enzyme");
var _react = _interopRequireDefault(require("react"));
var _PeriodDimension = _interopRequireDefault(require("../PeriodDimension.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('@dhis2/app-runtime', () => ({
  useConfig: () => ({
    systemInfo: {}
  }),
  useDataQuery: () => ({
    data: {
      userSettings: {
        keyUiLocale: 'en'
      }
    }
  })
}));
afterEach(jest.clearAllMocks);
describe('The Period Dimension component', () => {
  let props;
  let shallowPeriodDimension;
  const getWrapper = () => {
    if (!shallowPeriodDimension) {
      shallowPeriodDimension = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, props));
    }
    return shallowPeriodDimension;
  };
  beforeEach(() => {
    props = {
      selectedPeriods: [],
      onSelect: jest.fn(),
      rightFooter: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
    };
    shallowPeriodDimension = undefined;
  });
  it('matches the snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});