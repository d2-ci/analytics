"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@storybook/react");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../components/Interpretations/InterpretationsUnit/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _react.storiesOf)('IntepretationsUnit', module).add('Default', () => {
  return /*#__PURE__*/_react2.default.createElement(_appRuntime.CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.InterpretationsUnit, {
    currentUser: {
      name: 'Tom Wakiki'
    },
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: true
  }));
});
(0, _react.storiesOf)('IntepretationsUnit', module).add('With no time dimensions warning', () => {
  return /*#__PURE__*/_react2.default.createElement(_appRuntime.CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.InterpretationsUnit, {
    currentUser: {
      name: 'Tom Wakiki'
    },
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: false
  }));
});