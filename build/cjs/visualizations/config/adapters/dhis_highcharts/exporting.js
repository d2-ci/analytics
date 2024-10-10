"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getExporting;
var _visTypes = require("../../../../modules/visTypes.js");
var _renderSingleValueSVG = require("./customSVGOptions/singleValue/renderer/renderSingleValueSVG.js");
function getExporting(layoutType) {
  const exporting = {
    // disable exporting context menu
    enabled: false
  };
  switch (layoutType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...exporting,
        chartOptions: {
          chart: {
            events: {
              load: _renderSingleValueSVG.renderSingleValueSVG
            }
          }
        }
      };
    default:
      return exporting;
  }
}