import { CustomDataProvider } from '@dhis2/app-runtime';
import React from 'react';
import { InterpretationsProvider } from '../components/Interpretations/InterpretationsProvider/InterpretationsProvider.js';
import { InterpretationsUnit } from '../components/Interpretations/InterpretationsUnit/index.js';
export default {
  title: 'IntepretationsUnit'
};
export const Default = () => {
  return /*#__PURE__*/React.createElement(CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/React.createElement(InterpretationsProvider, {
    currentUser: {
      name: 'Tom Wakiki'
    }
  }, /*#__PURE__*/React.createElement(InterpretationsUnit, {
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: true
  })));
};
export const WithNoTimeDimensionsWarning = () => {
  return /*#__PURE__*/React.createElement(CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/React.createElement(InterpretationsProvider, {
    currentUser: {
      name: 'Tom Wakiki'
    }
  }, /*#__PURE__*/React.createElement(InterpretationsUnit, {
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: false
  })));
};
WithNoTimeDimensionsWarning.story = {
  name: 'With no time dimensions warning'
};