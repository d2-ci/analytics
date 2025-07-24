"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
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
test('PeriodDimension matches the snapshot', () => {
  const props = {
    selectedPeriods: [],
    onSelect: jest.fn(),
    rightFooter: /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null)
  };
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, props));
  expect(container).toMatchSnapshot();
});