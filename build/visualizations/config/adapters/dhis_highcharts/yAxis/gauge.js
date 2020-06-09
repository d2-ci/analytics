"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _arraySort = _interopRequireDefault(require("d2-utilizr/lib/arraySort"));

var _isObject = _interopRequireDefault(require("d2-utilizr/lib/isObject"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var DEFAULT_MAX_VALUE = 100;

function getStopsByLegendSet(legendSet) {
  return (0, _isObject.default)(legendSet) ? (0, _arraySort.default)(legendSet.legends, 'ASC', 'endValue').map(function (legend) {
    return [parseFloat(legend.endValue) / DEFAULT_MAX_VALUE, legend.color];
  }) : undefined;
}

function _default(series, legendSet) {
  return (0, _objectClean.default)({
    min: 0,
    max: DEFAULT_MAX_VALUE,
    lineWidth: 0,
    minorTickInterval: null,
    tickLength: 0,
    tickAmount: 0,
    labels: {
      y: 18,
      style: {
        fontSize: '13px'
      }
    },
    title: {
      text: series[0].name
    },
    stops: getStopsByLegendSet(legendSet)
  });
}