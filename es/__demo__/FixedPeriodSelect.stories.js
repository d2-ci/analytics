import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import FixedPeriodSelect from '../components/PeriodDimension/FixedPeriodSelect.js';
storiesOf('FixedPeriodSelect', module).add('No value', () => {
  const [value, setValue] = useState();
  return /*#__PURE__*/React.createElement(FixedPeriodSelect, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
});
storiesOf('FixedPeriodSelect', module).add('With value', () => {
  const [value, setValue] = useState('20140304');
  return /*#__PURE__*/React.createElement(FixedPeriodSelect, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
});
storiesOf('FixedPeriodSelect', module).add('Allowed period types', () => {
  const [value, setValue] = useState('20140304');
  return /*#__PURE__*/React.createElement(FixedPeriodSelect, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value,
    allowedPeriodTypes: ['MONTHLY', 'DAILY', 'YEARLY']
  });
});