"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLang;
var _visTypes = require("../../../../modules/visTypes.js");
function getLang(visType, extraOptions) {
  return {
    /* The SingleValue visualization consists of some custom SVG elements
     * rendered on an empty chart. Since the chart is empty, there is never
     * any data and Highcharts will show the noData text. To avoid this we
     * clear the text here. */
    noData: visType === _visTypes.VIS_TYPE_SINGLE_VALUE ? undefined : extraOptions.noData.text,
    resetZoom: extraOptions.resetZoom.text
  };
}