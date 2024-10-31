import { CustomDataProvider } from '@dhis2/app-runtime';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InterpretationsUnit } from '../components/Interpretations/InterpretationsUnit/index.js';
storiesOf('IntepretationsUnit', module).add('Default', () => {
  return /*#__PURE__*/React.createElement(CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/React.createElement(InterpretationsUnit, {
    currentUser: {
      name: 'Tom Wakiki'
    },
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: true
  }));
});
storiesOf('IntepretationsUnit', module).add('With no time dimensions warning', () => {
  return /*#__PURE__*/React.createElement(CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/React.createElement(InterpretationsUnit, {
    currentUser: {
      name: 'Tom Wakiki'
    },
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: false
  }));
});