"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLegendSetTooltip = exports.applyLegendSet = void 0;
var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));
var _index = _interopRequireDefault(require("../../../../locales/index.js"));
var _legends = require("../../../../modules/legends.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OUT_OF_BOUNDS_COLOR = '#CCCCCC';
const getLegend = (value, legendSet) => value && legendSet ? (0, _legends.getLegendByValueFromLegendSet)(legendSet, value) : {};
const applyLegendSet = function () {
  let seriesObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let legendSet = arguments.length > 1 ? arguments[1] : undefined;
  return !seriesObj.type ? {
    ...seriesObj,
    data: seriesObj.data.map(value => {
      var _getLegend, _getLegend2, _getLegend3, _getLegend4;
      return (0, _isNumeric.default)(value) // Single category pass data as [value1, value2]
      ? {
        y: value,
        color: ((_getLegend = getLegend(value, legendSet)) === null || _getLegend === void 0 ? void 0 : _getLegend.color) || OUT_OF_BOUNDS_COLOR,
        legend: ((_getLegend2 = getLegend(value, legendSet)) === null || _getLegend2 === void 0 ? void 0 : _getLegend2.name) || '-',
        legendSet: legendSet.name
      } : Array.isArray(value) // Dual category pass data as [[position1, value1], [position2, value2]]
      ? {
        x: value[0],
        y: value[1],
        color: ((_getLegend3 = getLegend(value[1], legendSet)) === null || _getLegend3 === void 0 ? void 0 : _getLegend3.color) || OUT_OF_BOUNDS_COLOR,
        legend: ((_getLegend4 = getLegend(value[1], legendSet)) === null || _getLegend4 === void 0 ? void 0 : _getLegend4.name) || '-',
        legendSet: legendSet.name
      } : value;
    })
  } : {
    ...seriesObj
  };
};
exports.applyLegendSet = applyLegendSet;
const getLegendSetTooltip = () => ({
  pointFormatter: function () {
    return `<span style="color:${this.color}">●</span> ${this.series.name}: <b>${this.y}</b><br>` + (this.legend ? `${this.legendSet}: <b>${this.legend}</b>` : `${_index.default.t('No legend for this series')}`);
  }
});
exports.getLegendSetTooltip = getLegendSetTooltip;