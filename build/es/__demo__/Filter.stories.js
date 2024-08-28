import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Filter from '../components/Filter/Filter.js';
function FilterWithState() {
  const [text, setText] = useState(null);
  const onTextChange = value => setText(value);
  const onClearFilter = () => setText(null);
  return /*#__PURE__*/React.createElement(Filter, {
    placeholder: "Filter dimensions",
    text: text,
    onChange: onTextChange,
    onClear: onClearFilter,
    disableUnderline: true,
    type: "search"
  });
}
storiesOf('Filter', module).add('default', () => {
  return /*#__PURE__*/React.createElement(FilterWithState, null);
});