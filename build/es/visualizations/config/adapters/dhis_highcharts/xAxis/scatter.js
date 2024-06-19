import arrayClean from 'd2-utilizr/lib/arrayClean';
import objectClean from 'd2-utilizr/lib/objectClean';
import { FONT_STYLE_VERTICAL_AXIS_TITLE, mergeFontStyleWithDefault } from '../../../../../modules/fontStyle.js';
import { getAxis } from '../../../../util/axes.js';
import { getAxisStringFromId } from '../../../../util/axisId.js';
import { getGridLineColor, getLabels, getMinValue, getMaxValue, getRegressionLine } from '../axis.js';
import getAxisTitle from '../getAxisTitle.js';
import getSteps from '../getSteps.js';
const AXIS_TYPE = 'RANGE';
const AXIS_INDEX = 1;
export default function (layout, series, extraOptions) {
  var _extraOptions$outlier, _extraOptions$outlier2, _extraOptions$outlier3, _axis$title, _series$, _axis$title2, _axis$title3;

  const dataValues = series === null || series === void 0 ? void 0 : series.map(item => item.data).flat();
  const axis = getAxis(layout.axes, AXIS_TYPE, AXIS_INDEX);
  const extremeObj = (_extraOptions$outlier = extraOptions.outlierHelper) !== null && _extraOptions$outlier !== void 0 && _extraOptions$outlier.extremeLines ? extraOptions.outlierHelper.extremeLines[0] : null;
  return objectClean({
    min: getMinValue(axis.minValue, dataValues, (_extraOptions$outlier2 = extraOptions.outlierHelper) === null || _extraOptions$outlier2 === void 0 ? void 0 : _extraOptions$outlier2.xAxisMin),
    max: getMaxValue(axis.maxValue, dataValues, (_extraOptions$outlier3 = extraOptions.outlierHelper) === null || _extraOptions$outlier3 === void 0 ? void 0 : _extraOptions$outlier3.xAxisMax),
    tickAmount: getSteps(axis),
    title: getAxisTitle(((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.textMode) === 'AUTO' && (_series$ = series[1]) !== null && _series$ !== void 0 && _series$.name ? series[1].name : (_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.text, mergeFontStyleWithDefault((_axis$title3 = axis.title) === null || _axis$title3 === void 0 ? void 0 : _axis$title3.fontStyle, FONT_STYLE_VERTICAL_AXIS_TITLE), FONT_STYLE_VERTICAL_AXIS_TITLE, layout.type),
    plotLines: arrayClean([getRegressionLine(axis.targetLine, layout.type, true), getRegressionLine(axis.baseLine, layout.type, true), extremeObj ? getRegressionLine({
      value: extremeObj.value,
      color: '#a9adb3',
      width: 1,
      dashStyle: 'Dash',
      title: {
        text: extremeObj.name
      }
    }, null, true) : null]),
    gridLineColor: getGridLineColor(),
    labels: getLabels(axis),
    id: getAxisStringFromId(0)
  });
}