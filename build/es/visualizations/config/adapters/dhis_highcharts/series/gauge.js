import { colors } from '@dhis2/ui';
import { getColorByValueFromLegendSet, LEGEND_DISPLAY_STYLE_TEXT } from '../../../../../modules/legends.js';
const DEFAULT_FONT_SIZE = '28px';
export default function (series, layout, legendSet) {
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
        color: ((_layout$legend = layout.legend) === null || _layout$legend === void 0 ? void 0 : _layout$legend.style) === LEGEND_DISPLAY_STYLE_TEXT && legendSet ? getColorByValueFromLegendSet(legendSet, series[0].data) : colors.grey900
      }
    }
  }];
}