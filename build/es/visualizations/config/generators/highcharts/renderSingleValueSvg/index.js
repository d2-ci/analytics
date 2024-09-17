import { colors } from '@dhis2/ui';
import { getColorByValueFromLegendSet, LEGEND_DISPLAY_STYLE_FILL } from '../../../../../modules/legends.js';
import { shouldUseContrastColor } from '../../../adapters/dhis_highcharts/customSVGOptions/singleValue/config/shouldUseContrastColor.js';
import { generateDVItem } from './generateDVItem.js';
export default function (config, parentEl, _ref, chart) {
  let {
    dashboard,
    legendSets,
    fontStyle,
    noData,
    legendOptions,
    icon
  } = _ref;
  const renderer = chart.renderer;
  const legendSet = legendOptions && legendSets[0];
  const legendColor = legendSet && getColorByValueFromLegendSet(legendSet, config.value);
  let valueColor, titleColor, backgroundColor;
  if (legendColor) {
    if (legendOptions.style === LEGEND_DISPLAY_STYLE_FILL) {
      backgroundColor = legendColor;
      valueColor = titleColor = shouldUseContrastColor(legendColor) && colors.white;
    } else {
      valueColor = legendColor;
    }
  }
  parentEl.style.overflow = 'hidden';
  parentEl.style.display = 'flex';
  parentEl.style.justifyContent = 'center';

  // We need the inner width so borders etc are excluded
  const width = parentEl.clientWidth;
  const height = parentEl.clientHeight;
  const svgContainer = renderer.box;
  svgContainer.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svgContainer.setAttribute('data-test', 'visualization-container');
  chart.setSize(dashboard ? '100%' : width, dashboard ? '100%' : height);

  // if (dashboard) {
  //     parentEl.style.borderRadius = '3px'

  //     return generateDashboardItem(config, {
  //         svgContainer,
  //         width,
  //         height,
  //         valueColor,
  //         backgroundColor,
  //         noData,
  //         icon,
  //         ...(legendOptions.style === LEGEND_DISPLAY_STYLE_FILL &&
  //         legendColor &&
  //         shouldUseContrastColor(legendColor)
  //             ? { titleColor: colors.white }
  //             : {}),
  //     })
  // } else {
  parentEl.style.height = `100%`;
  return generateDVItem(config, {
    renderer,
    width,
    height,
    valueColor,
    backgroundColor,
    titleColor,
    noData,
    icon,
    fontStyle
  });
  // }
}