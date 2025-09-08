"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithNoTimeDimensionsWarning = exports.Default = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = _interopRequireDefault(require("react"));
var _InterpretationsProvider = require("../components/Interpretations/InterpretationsProvider/InterpretationsProvider.js");
var _index = require("../components/Interpretations/InterpretationsUnit/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'IntepretationsUnit'
};
const Default = () => {
  return /*#__PURE__*/_react.default.createElement(_appRuntime.CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_InterpretationsProvider.InterpretationsProvider, {
    currentUser: {
      name: 'Tom Wakiki'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.InterpretationsUnit, {
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: true
  })));
};
exports.Default = Default;
const WithNoTimeDimensionsWarning = () => {
  return /*#__PURE__*/_react.default.createElement(_appRuntime.CustomDataProvider, {
    data: {
      interpretations: {
        interpretations: []
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_InterpretationsProvider.InterpretationsProvider, {
    currentUser: {
      name: 'Tom Wakiki'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.InterpretationsUnit, {
    currentUser: {
      name: 'Tom Wakiki'
    },
    id: "abcd",
    onReplyIconClick: Function.prototype,
    type: "eventVisualization",
    visualizationHasTimeDimension: false
  })));
};
exports.WithNoTimeDimensionsWarning = WithNoTimeDimensionsWarning;
WithNoTimeDimensionsWarning.story = {
  name: 'With no time dimensions warning'
};