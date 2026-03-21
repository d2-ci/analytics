"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _highcharts = _interopRequireDefault(require("highcharts"));
require("highcharts/highcharts-more");
require("highcharts/modules/boost");
require("highcharts/modules/exporting");
require("highcharts/modules/no-data-to-display");
require("highcharts/modules/offline-exporting");
require("highcharts/modules/pattern-fill");
require("highcharts/modules/solid-gauge");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* Whitelist some additional SVG attributes and tags here. Without this,
 * the PDF export for the SingleValue visualization and charts in boost-mode
 * breaks. For more info about the boost mode issue, see:
 * https://github.com/highcharts/highcharts/issues/8333 */
_highcharts.default.AST.allowedTags.push('fedropshadow', 'image');
_highcharts.default.AST.allowedAttributes.push('transform-origin', 'preserveAspectRatio', 'fill-rule', 'clip-rule');

/* This is a workaround for https://github.com/highcharts/highcharts/issues/22008
 * We add some transparent text in a non-ASCII script to the chart to prevent
 * the chart from being exported in a serif font */
_highcharts.default.addEvent(_highcharts.default.Chart, 'load', function () {
  this.renderer.text('모', 20, 20).attr({
    opacity: 0
  }).add();
});

/* Workaround for https://github.com/highcharts/highcharts/issues/23049
 * (there happen to be 10 colors and 10 patterns)*/
const {
  colors
} = _highcharts.default.getOptions();
_highcharts.default.patterns.forEach((pattern, i) => {
  pattern.color = colors[i];
});
function drawLegendSymbolWrap() {
  const pick = _highcharts.default.pick;
  _highcharts.default.wrap(_highcharts.default.seriesTypes.column.prototype, 'drawLegendSymbol', function (proceed, legend, item) {
    var _this$options$legendS;
    const legendItem = item.legendItem;
    if ((_this$options$legendS = this.options.legendSet) !== null && _this$options$legendS !== void 0 && (_this$options$legendS = _this$options$legendS.legends) !== null && _this$options$legendS !== void 0 && _this$options$legendS.length) {
      const ys = legend.baseline - legend.symbolHeight + 1,
        // y start
        x = legend.symbolWidth / 2 > 8 ? legend.symbolWidth / 2 : 8,
        // x start
        ye = legend.symbolHeight + ys; // y end
      const legends = this.options.legendSet.legends.sort((a, b) => a.startValue - b.startValue);
      this.chart.renderer.path(['M', x, ys, 'A', 1, 1, 0, 0, 0, x, ye, 'V', ys]).attr({
        fill: legends[legends.length >= 5 ? 1 : 0].color
      }).add(legendItem.group);
      this.chart.renderer.path(['M', x, ye, 'A', 1, 1, 0, 0, 0, x, ys, 'V', ye]).attr({
        fill: legends[legends.length >= 5 ? legends.length - 2 : legends.length - 1].color
      }).add(legendItem.group);
    } else {
      var options = legend.options,
        symbolHeight = legend.symbolHeight,
        square = options.squareSymbol,
        symbolWidth = square ? symbolHeight : legend.symbolWidth;
      legendItem.symbol = this.chart.renderer.rect(square ? (legend.symbolWidth - symbolHeight) / 2 : 0, legend.baseline - symbolHeight + 1, symbolWidth, symbolHeight, pick(legend.options.symbolRadius, symbolHeight / 2)).addClass('highcharts-point').attr({
        zIndex: 3
      }).add(legendItem.group);
    }
  });
}
function _default(config, el) {
  if (config) {
    config.chart.renderTo = el || config.chart.renderTo;

    // silence warning about accessibility
    config.accessibility = {
      enabled: false
    };
    if (config.lang) {
      _highcharts.default.setOptions({
        lang: config.lang
      });
    }
    drawLegendSymbolWrap();
    return new _highcharts.default.Chart(config);
  }
}