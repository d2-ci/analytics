"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _highcharts = _interopRequireDefault(require("highcharts"));

var _highchartsMore = _interopRequireDefault(require("highcharts/highcharts-more"));

var _solidGauge = _interopRequireDefault(require("highcharts/modules/solid-gauge"));

var _noDataToDisplay = _interopRequireDefault(require("highcharts/modules/no-data-to-display"));

var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));

// apply
(0, _highchartsMore.default)(_highcharts.default);
(0, _solidGauge.default)(_highcharts.default);
(0, _noDataToDisplay.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);

function _default(config, el) {
  if (config) {
    config.chart.renderTo = el || config.chart.renderTo;
    return new _highcharts.default.Chart(config);
  }
}