import arrayClean from 'd2-utilizr/lib/arrayClean';
import isNumber from 'd2-utilizr/lib/isNumber';
import objectClean from 'd2-utilizr/lib/objectClean';
import i18n from '../../../../../locales/index.js';
import { FONT_STYLE_OPTION_TEXT_COLOR, FONT_STYLE_OPTION_FONT_SIZE, FONT_STYLE_OPTION_BOLD, FONT_STYLE_OPTION_ITALIC, TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT, TEXT_ALIGN_CENTER, FONT_STYLE_REGRESSION_LINE_LABEL, FONT_STYLE_OPTION_TEXT_ALIGN, FONT_STYLE_AXIS_LABELS, mergeFontStyleWithDefault } from '../../../../../modules/fontStyle.js';
import { getColorByValueFromLegendSet, LEGEND_DISPLAY_STYLE_FILL } from '../../../../../modules/legends.js';
import { isVerticalType, VIS_TYPE_GAUGE } from '../../../../../modules/visTypes.js';
import { getAxis } from '../../../../util/axes.js';
import { getTextAlignOption } from '../getTextAlignOption.js';
const DEFAULT_MAX_VALUE = 100;
const DEFAULT_TARGET_LINE_LABEL = i18n.t('Target');
const DEFAULT_BASE_LINE_LABEL = i18n.t('Base');
const AXIS_TYPE = 'RANGE';
const AXIS_INDEX = 0;
const getLabelOffsetFromTextAlign = textAlign => {
  switch (textAlign) {
    case TEXT_ALIGN_LEFT:
      return -10;
    case TEXT_ALIGN_RIGHT:
      return 10;
    case TEXT_ALIGN_CENTER:
    default:
      return 0;
  }
};
function getPlotLine() {
  var _regressionLine$title, _regressionLine$title2;
  let regressionLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let defaultLabel = arguments.length > 1 ? arguments[1] : undefined;
  const value = regressionLine.value;
  if (!isNumber(value)) {
    return null;
  }
  const label = ((_regressionLine$title = regressionLine.title) === null || _regressionLine$title === void 0 ? void 0 : _regressionLine$title.text) || defaultLabel;
  const fontStyle = mergeFontStyleWithDefault((_regressionLine$title2 = regressionLine.title) === null || _regressionLine$title2 === void 0 ? void 0 : _regressionLine$title2.fontStyle, FONT_STYLE_REGRESSION_LINE_LABEL);
  const verticalAlign = getTextAlignOption(fontStyle[FONT_STYLE_OPTION_TEXT_ALIGN], FONT_STYLE_REGRESSION_LINE_LABEL, isVerticalType(VIS_TYPE_GAUGE));
  const y = getLabelOffsetFromTextAlign(fontStyle[FONT_STYLE_OPTION_TEXT_ALIGN]);
  return {
    value,
    zIndex: 5,
    width: 1,
    color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR] || '#000',
    ...(label && {
      label: {
        text: `${label}: ${value}`,
        verticalAlign,
        y,
        style: {
          color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR],
          fontSize: `${fontStyle[FONT_STYLE_OPTION_FONT_SIZE]}px`,
          fontWeight: fontStyle[FONT_STYLE_OPTION_BOLD] ? FONT_STYLE_OPTION_BOLD : 'normal',
          fontStyle: fontStyle[FONT_STYLE_OPTION_ITALIC] ? FONT_STYLE_OPTION_ITALIC : 'normal'
        }
      }
    })
  };
}
const getLabels = axis => {
  var _axis$label;
  const fontStyle = mergeFontStyleWithDefault((_axis$label = axis.label) === null || _axis$label === void 0 ? void 0 : _axis$label.fontStyle, FONT_STYLE_AXIS_LABELS);
  return {
    y: parseInt(fontStyle[FONT_STYLE_OPTION_FONT_SIZE], 10) + 7,
    style: {
      color: fontStyle[FONT_STYLE_OPTION_TEXT_COLOR],
      fontSize: `${fontStyle[FONT_STYLE_OPTION_FONT_SIZE]}px`,
      fontWeight: fontStyle[FONT_STYLE_OPTION_BOLD] ? FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[FONT_STYLE_OPTION_ITALIC] ? FONT_STYLE_OPTION_ITALIC : 'normal'
    }
  };
};
export default function (layout, series, legendSet) {
  var _layout$legend;
  const axis = getAxis(layout.axes, AXIS_TYPE, AXIS_INDEX);
  const plotLines = arrayClean([getPlotLine(axis.baseLine, DEFAULT_BASE_LINE_LABEL), getPlotLine(axis.targetLine, DEFAULT_TARGET_LINE_LABEL)]);
  const fillColor = ((_layout$legend = layout.legend) === null || _layout$legend === void 0 ? void 0 : _layout$legend.style) === LEGEND_DISPLAY_STYLE_FILL && legendSet ? getColorByValueFromLegendSet(legendSet, series[0].data) : undefined;
  return objectClean({
    min: isNumber(axis.minValue) ? axis.minValue : 0,
    max: isNumber(axis.maxValue) ? axis.maxValue : DEFAULT_MAX_VALUE,
    lineWidth: 0,
    minorTickInterval: null,
    tickLength: 0,
    tickAmount: 0,
    tickPositioner: function () {
      return [this.min, this.max];
    },
    minColor: fillColor,
    maxColor: fillColor,
    labels: getLabels(axis),
    title: {
      text: series[0].name
    },
    ...(plotLines.length && {
      plotLines
    })
  });
}