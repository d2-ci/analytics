"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getExporting;
var _visTypes = require("../../../../modules/visTypes.js");
var _index = _interopRequireDefault(require("./events/loadCustomSVG/singleValue/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getExporting(visType) {
  const exporting = {
    // disable exporting context menu
    enabled: false
  };
  switch (visType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...exporting,
        chartOptions: {
          chart: {
            events: {
              load: _index.default
            }
          }
        }
      };
    default:
      return exporting;
  }
}