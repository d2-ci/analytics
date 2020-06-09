"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var DEFAULT_FONT_SIZE = '34px';
var DASHBOARD_FONT_SIZE = '24px';

function _default(series, dashboard) {
  var fontSize = dashboard ? DASHBOARD_FONT_SIZE : DEFAULT_FONT_SIZE;
  return [{
    name: series[0].name,
    data: series[0].data,
    enableMouseTracking: false,
    dataLabels: {
      y: 0,
      borderWidth: 0,
      verticalAlign: 'bottom',
      style: {
        fontSize: fontSize
      }
    }
  }];
}