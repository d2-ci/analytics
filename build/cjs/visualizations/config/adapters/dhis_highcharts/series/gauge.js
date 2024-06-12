"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ui = require("@dhis2/ui");

var _legends = require("../../../../../modules/legends.js");

const DEFAULT_FONT_SIZE = '28px';

function _default(series, layout, legendSet) {
  var _layout$legend;

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
        color: ((_layout$legend = layout.legend) === null || _layout$legend === void 0 ? void 0 : _layout$legend.style) === _legends.LEGEND_DISPLAY_STYLE_TEXT && legendSet ? (0, _legends.getColorByValueFromLegendSet)(legendSet, series[0].data) : _ui.colors.grey900
      }
    }
  }];
}