"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getExporting;
var _visTypes = require("../../../../modules/visTypes.js");
var _index = _interopRequireDefault(require("./events/loadCustomSVG/singleValue/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BASE_EXPORTING_CONFIG = {
  // disable exporting context menu
  enabled: false,
  // use offline exporting only
  fallbackToExportServer: false,
  allowHTML: true,
  showExportInProgress: true,
  applyStyleSheets: true,
  sourceHeight: 768,
  sourceWidth: 1024,
  scale: 1,
  chartOptions: {
    chart: {
      backgroundColor: '#ffffff'
    }
  }
};
function getExporting(visType) {
  switch (visType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...BASE_EXPORTING_CONFIG,
        chartOptions: {
          ...BASE_EXPORTING_CONFIG.chartOptions,
          chart: {
            ...BASE_EXPORTING_CONFIG.chartOptions.chart,
            events: {
              load: _index.default
            }
          }
        }
      };
    // This is a workaround for https://github.com/highcharts/highcharts/issues/8333
    case _visTypes.VIS_TYPE_SCATTER:
      return {
        ...BASE_EXPORTING_CONFIG,
        chartOptions: {
          ...BASE_EXPORTING_CONFIG.chartOptions,
          boost: {
            enabled: false
          }
        }
      };
    default:
      return BASE_EXPORTING_CONFIG;
  }
}