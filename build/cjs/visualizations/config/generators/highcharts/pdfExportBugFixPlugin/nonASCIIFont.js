"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
/* This is a workaround for https://github.com/highcharts/highcharts/issues/22008
 * We add some transparent text in a non-ASCII script to the chart to prevent
 * the chart from being exported in a serif font */

function _default(H) {
  H.addEvent(H.Chart, 'load', function () {
    this.renderer.text('모', 20, 20).attr({
      opacity: 0
    }).add();
  });
}