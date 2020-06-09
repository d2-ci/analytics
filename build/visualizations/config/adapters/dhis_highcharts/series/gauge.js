"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _legends = require("../../../../../modules/legends");

var DEFAULT_FONT_SIZE = '28px';

function _default(series, layout, legendSet) {
  return [{
    name: series[0].name,
    data: series[0].data,
    enableMouseTracking: false,
    dataLabels: {
      y: 0,
      borderWidth: 0,
      verticalAlign: 'bottom',
      style: {
        fontSize: DEFAULT_FONT_SIZE,
        color: layout.legendDisplayStyle === _legends.LEGEND_DISPLAY_STYLE_TEXT && legendSet ? (0, _legends.getColorByValueFromLegendSet)(legendSet, series[0].data) : undefined
      }
    }
  }];
}