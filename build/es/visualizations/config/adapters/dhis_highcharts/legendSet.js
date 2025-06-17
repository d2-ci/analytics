import isNumeric from 'd2-utilizr/lib/isNumeric';
import i18n from '../../../../locales/index.js';
import { getLegendByValueFromLegendSet } from '../../../../modules/legends.js';
const OUT_OF_BOUNDS_COLOR = '#CCCCCC';
const getLegend = (value, legendSet) => value && legendSet ? getLegendByValueFromLegendSet(legendSet, value) : {};
export const applyLegendSet = (seriesObj = {}, legendSet) => !seriesObj.type ? {
  ...seriesObj,
  data: seriesObj.data.map(value => {
    var _getLegend, _getLegend2, _getLegend3, _getLegend4;
    return isNumeric(value) // Single category pass data as [value1, value2]
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
export const getLegendSetTooltip = () => ({
  pointFormatter: function () {
    return `<span style="color:${this.color}">●</span> ${this.series.name}: <b>${this.y}</b><br>` + (this.legend ? `${this.legendSet}: <b>${this.legend}</b>` : `${i18n.t('No legend for this series')}`);
  }
});