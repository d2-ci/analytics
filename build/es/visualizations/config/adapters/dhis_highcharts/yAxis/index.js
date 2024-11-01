import arrayClean from 'd2-utilizr/lib/arrayClean';
import objectClean from 'd2-utilizr/lib/objectClean';
import i18n from '../../../../../locales/index.js';
import { FONT_STYLE_VERTICAL_AXIS_TITLE, mergeFontStyleWithDefault, TEXT_ALIGN_RIGHT } from '../../../../../modules/fontStyle.js';
import { isDualAxisType, isStacked, VIS_TYPE_GAUGE, VIS_TYPE_SCATTER, VIS_TYPE_SINGLE_VALUE } from '../../../../../modules/visTypes.js';
import { getAxis } from '../../../../util/axes.js';
import { getAxisStringFromId } from '../../../../util/axisId.js';
import { getGridLineColor, getLabels, getMaxValue, getMinValue, getRegressionLine } from '../axis.js';
import { getAxisIdsMap } from '../customAxes.js';
import getAxisTitle from '../getAxisTitle.js';
import getSteps from '../getSteps.js';
import getGauge from './gauge.js';
const AXIS_TYPE_RANGE = 'RANGE';
function getDefault(layout, series, extraOptions) {
  var _extraOptions$outlier;
  const axes = [];
  const dataValues = series === null || series === void 0 ? void 0 : series.map(item => item.data).flat();
  const layoutAxes = [];
  let useMultiAxisMode = false;
  if (isDualAxisType(layout.type)) {
    const axisIdsMap = getAxisIdsMap(layout.series, series);
    const axisIds = [...new Set(Object.keys(axisIdsMap))].sort((a, b) => a - b);
    axisIds.forEach(id => layoutAxes.push(getAxis(layout.axes, AXIS_TYPE_RANGE, Number(id))));
    useMultiAxisMode = axisIds.length > 1 || axisIds.some(id => id > 0);
  } else {
    layoutAxes.push(getAxis(layout.axes, AXIS_TYPE_RANGE, 0));
  }
  let extremeObj;
  if (layout.type === VIS_TYPE_SCATTER && (_extraOptions$outlier = extraOptions.outlierHelper) !== null && _extraOptions$outlier !== void 0 && _extraOptions$outlier.extremeLines) {
    extremeObj = extraOptions.outlierHelper.extremeLines[1];
  }
  layoutAxes.forEach(axis => {
    var _axis$title2, _axis$title3, _extraOptions$outlier2, _extraOptions$outlier3, _axis$title4;
    const targetLine = {
      ...axis.targetLine
    };
    const baseLine = {
      ...axis.baseLine
    };
    if (useMultiAxisMode) {
      const regressionLines = [targetLine, baseLine];
      regressionLines.forEach(rl => {
        var _rl$title;
        if ((_rl$title = rl.title) !== null && _rl$title !== void 0 && _rl$title.text) {
          var _axis$title;
          rl.title = {
            ...rl.title,
            text: `${rl.title.text} - ${((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text) || i18n.t('Axis {{axisId}}', {
              axisId: axis.index + 1
            })}`
          };
        }
      });
    }
    let titleText = (_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.text;
    if (((_axis$title3 = axis.title) === null || _axis$title3 === void 0 ? void 0 : _axis$title3.textMode) === 'AUTO') {
      if (layout.type === VIS_TYPE_SCATTER || series.length === 1) {
        var _series$;
        if ((_series$ = series[0]) !== null && _series$ !== void 0 && _series$.name) {
          titleText = series[0].name;
        }
      } else if (useMultiAxisMode) {
        titleText = i18n.t('Axis {{axisId}}', {
          axisId: axis.index + 1
        });
      } else if (series.length > 1) {
        titleText = i18n.t('{{count}} items', {
          count: series.length,
          defaultValue: '{{count}} item',
          defaultValue_plural: '{{count}} items'
        });
      }
    }
    axes.push(objectClean({
      min: getMinValue(axis.minValue, dataValues, (_extraOptions$outlier2 = extraOptions.outlierHelper) === null || _extraOptions$outlier2 === void 0 ? void 0 : _extraOptions$outlier2.yAxisMin),
      max: getMaxValue(axis.maxValue, dataValues, (_extraOptions$outlier3 = extraOptions.outlierHelper) === null || _extraOptions$outlier3 === void 0 ? void 0 : _extraOptions$outlier3.yAxisMax),
      tickAmount: getSteps(axis),
      title: getAxisTitle(titleText, mergeFontStyleWithDefault((_axis$title4 = axis.title) === null || _axis$title4 === void 0 ? void 0 : _axis$title4.fontStyle, FONT_STYLE_VERTICAL_AXIS_TITLE), FONT_STYLE_VERTICAL_AXIS_TITLE, layout.type),
      plotLines: arrayClean([getRegressionLine(targetLine, layout.type), getRegressionLine(baseLine, layout.type), extremeObj && getRegressionLine({
        value: extremeObj.value,
        color: '#a9adb3',
        width: 1,
        dashStyle: 'Dash',
        title: {
          text: extremeObj.name,
          fontStyle: {
            textAlign: TEXT_ALIGN_RIGHT
          }
        }
      })]),
      gridLineColor: getGridLineColor(),
      labels: getLabels(axis),
      id: getAxisStringFromId(axis.index),
      // DHIS2-649: put first serie at the bottom of the stack
      // in this way the legend sequence matches the serie sequence
      reversedStacks: isStacked(layout.type) ? false : true,
      opposite: !!(axis.index % 2)
    }));
  });
  return axes;
}
export default function (layout, series, extraOptions) {
  switch (layout.type) {
    case VIS_TYPE_SINGLE_VALUE:
      return null;
    case VIS_TYPE_GAUGE:
      return getGauge(layout, series, extraOptions.legendSets[0]);
    default:
      return getDefault(layout, series, extraOptions);
  }
}