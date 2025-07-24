import { render } from '@testing-library/react';
import React from 'react';
import PeriodDimension from '../PeriodDimension.js';
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
    rightFooter: /*#__PURE__*/React.createElement(React.Fragment, null)
  };
  const {
    container
  } = render(/*#__PURE__*/React.createElement(PeriodDimension, props));
  expect(container).toMatchSnapshot();
});