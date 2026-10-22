import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import PeriodDimension from '../PeriodDimension.js';
let mockServerMinorVersion = 42;
jest.mock('@dhis2/app-runtime', () => ({
  useConfig: () => ({
    systemInfo: {},
    serverVersion: {
      minor: mockServerMinorVersion
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
afterEach(() => {
  jest.clearAllMocks();
  mockServerMinorVersion = 42;
});
const props = {
  selectedPeriods: [],
  onSelect: jest.fn(),
  rightFooter: /*#__PURE__*/React.createElement(React.Fragment, null)
};
test('PeriodDimension renders the tabs for relative/fixed with relative pre-selected', () => {
  render(/*#__PURE__*/React.createElement(PeriodDimension, props));
  expect(screen.getByText('Relative periods')).toBeInTheDocument();
  expect(screen.getByTestId('period-dimension-relative-period-filter')).toBeInTheDocument();
  expect(screen.getByText('Fixed periods')).toBeInTheDocument();
});
test('PeriodDimension can toggle between relative and fixed period tab', async () => {
  const user = userEvent.setup();
  render(/*#__PURE__*/React.createElement(PeriodDimension, props));
  expect(screen.getByText('Relative periods')).toBeInTheDocument();
  const fixedPeriodButton = screen.getByText('Fixed periods');
  expect(fixedPeriodButton).toBeInTheDocument();
  await user.click(fixedPeriodButton);
  expect(screen.getByTestId('period-dimension-fixed-period-filter')).toBeInTheDocument();
});
test('PeriodDimension shows a loader while the enabled period types are loading', () => {
  mockServerMinorVersion = 44;
  const {
    container
  } = render(/*#__PURE__*/React.createElement(PeriodDimension, props));
  expect(container.querySelector('[data-test="period-dimension-loader"]')).toBeInTheDocument();
  expect(screen.queryByText('Relative periods')).not.toBeInTheDocument();
});