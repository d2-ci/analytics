"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _highcharts = _interopRequireDefault(require("highcharts"));
var _highchartsMore = _interopRequireDefault(require("highcharts/highcharts-more"));
var _boost = _interopRequireDefault(require("highcharts/modules/boost"));
var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));
var _noDataToDisplay = _interopRequireDefault(require("highcharts/modules/no-data-to-display"));
var _offlineExporting = _interopRequireDefault(require("highcharts/modules/offline-exporting"));
var _patternFill = _interopRequireDefault(require("highcharts/modules/pattern-fill"));
var _solidGauge = _interopRequireDefault(require("highcharts/modules/solid-gauge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// apply
(0, _highchartsMore.default)(_highcharts.default);
(0, _solidGauge.default)(_highcharts.default);
(0, _noDataToDisplay.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);
(0, _offlineExporting.default)(_highcharts.default);
(0, _patternFill.default)(_highcharts.default);
(0, _boost.default)(_highcharts.default);

/* Whitelist some additional SVG attributes here. Without this,
 * the PDF export for the SingleValue visualization breaks. */
_highcharts.default.AST.allowedAttributes.push('fill-rule', 'clip-rule');
function drawLegendSymbolWrap() {
  const pick = _highcharts.default.pick;
  _highcharts.default.wrap(_highcharts.default.seriesTypes.column.prototype, 'drawLegendSymbol', function (proceed, legend, item) {
    var _this$options$legendS, _this$options$legendS2;
    const legendItem = item.legendItem;
    if ((_this$options$legendS = this.options.legendSet) !== null && _this$options$legendS !== void 0 && (_this$options$legendS2 = _this$options$legendS.legends) !== null && _this$options$legendS2 !== void 0 && _this$options$legendS2.length) {
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