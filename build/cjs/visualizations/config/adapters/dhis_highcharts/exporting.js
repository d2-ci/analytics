"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getExporting;
var _visTypes = require("../../../../modules/visTypes.js");
var _getSingleValueBackgroundColor = require("./customSVGOptions/singleValue/getSingleValueBackgroundColor.js");
var _index = _interopRequireDefault(require("./events/loadCustomSVG/singleValue/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DEFAULT_EXPORT_BACKGROUND_COLOR = '#ffffff';
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
      backgroundColor: DEFAULT_EXPORT_BACKGROUND_COLOR
    }
  }
};
function getExporting(layout, legendSets, series) {
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...BASE_EXPORTING_CONFIG,
        chartOptions: {
          ...BASE_EXPORTING_CONFIG.chartOptions,
          chart: {
            ...BASE_EXPORTING_CONFIG.chartOptions.chart,
            backgroundColor: (0, _getSingleValueBackgroundColor.getSingleValueBackgroundColor)(layout.legend, legendSets, series[0], DEFAULT_EXPORT_BACKGROUND_COLOR),
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