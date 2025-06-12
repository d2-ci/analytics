import { LEGEND_DISPLAY_STYLE_FILL } from '../../../../../../modules/legends.js';
import { getSingleValueLegendColor } from './getSingleValueLegendColor.js';
export function getSingleValueBackgroundColor(legendOptions, legendSets, value) {
  let defaultColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'transparent';
  const legendColor = getSingleValueLegendColor(legendOptions, legendSets, value);
  return legendColor && legendOptions.style === LEGEND_DISPLAY_STYLE_FILL ? legendColor : defaultColor;
}