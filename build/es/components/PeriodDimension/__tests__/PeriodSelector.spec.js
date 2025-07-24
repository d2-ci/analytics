import { render } from '@testing-library/react';
import React from 'react';
import PeriodTransfer from '../PeriodTransfer.js';
test('PeriodSelector matched the snapshot', () => {
  const props = {
    initialSelectedPeriods: [],
    onSelect: jest.fn(),
    rightFooter: /*#__PURE__*/React.createElement(React.Fragment, null),
    dataTest: 'period-dimension'
  };
  const {
    container
  } = render(/*#__PURE__*/React.createElement(PeriodTransfer, props));
  expect(container).toMatchSnapshot();
});