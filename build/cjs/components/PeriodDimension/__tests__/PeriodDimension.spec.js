"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _PeriodDimension = _interopRequireDefault(require("../PeriodDimension.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('@dhis2/app-runtime', () => ({
  useConfig: () => ({
    systemInfo: {},
    serverVersion: {
      minor: 42
    }
  }),
  useDataQuery: jest.fn().mockImplementation((_query, options) => {
    if (options !== null && options !== void 0 && options.lazy) {
      return {
        data: null,
        error: undefined,
        loading: false,
        refetch: jest.fn()
      };
    }
    return {
      data: {
        userSettings: {
          keyUiLocale: 'en'
        }
      }
    };
  })
}));
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));
afterEach(jest.clearAllMocks);
const props = {
  selectedPeriods: [],
  onSelect: jest.fn(),
  rightFooter: /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null)
};
test('PeriodDimension renders the tabs for relative/fixed with relative pre-selected', () => {
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, props));
  expect(_react.screen.getByText('Relative periods')).toBeInTheDocument();
  expect(_react.screen.getByTestId('period-dimension-relative-period-filter')).toBeInTheDocument();
  expect(_react.screen.getByText('Fixed periods')).toBeInTheDocument();
});
test('PeriodDimension can toggle between relative and fixed period tab', async () => {
  const user = _userEvent.default.setup();
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, props));
  expect(_react.screen.getByText('Relative periods')).toBeInTheDocument();
  const fixedPeriodButton = _react.screen.getByText('Fixed periods');
  expect(fixedPeriodButton).toBeInTheDocument();
  await user.click(fixedPeriodButton);
  expect(_react.screen.getByTestId('period-dimension-fixed-period-filter')).toBeInTheDocument();
});