"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _arrayClean = _interopRequireDefault(require("d2-utilizr/lib/arrayClean"));
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _index = _interopRequireDefault(require("../../../../../locales/index.js"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _visTypes = require("../../../../../modules/visTypes.js");
var _axes = require("../../../../util/axes.js");
var _axisId = require("../../../../util/axisId.js");
var _axis = require("../axis.js");
var _customAxes = require("../customAxes.js");
var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle.js"));
var _getSteps = _interopRequireDefault(require("../getSteps.js"));
var _gauge = _interopRequireDefault(require("./gauge.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AXIS_TYPE_RANGE = 'RANGE';
function getDefault(layout, series, extraOptions) {
  var _extraOptions$outlier;
  const axes = [];
  const dataValues = series === null || series === void 0 ? void 0 : series.map(item => item.data).flat();
  const layoutAxes = [];
  let useMultiAxisMode = false;
  if ((0, _visTypes.isDualAxisType)(layout.type)) {
    const axisIdsMap = (0, _customAxes.getAxisIdsMap)(layout.series, series);
    const axisIds = [...new Set(Object.keys(axisIdsMap))].sort((a, b) => a - b);
    axisIds.forEach(id => layoutAxes.push((0, _axes.getAxis)(layout.axes, AXIS_TYPE_RANGE, Number(id))));
    useMultiAxisMode = axisIds.length > 1 || axisIds.some(id => id > 0);
  } else {
    layoutAxes.push((0, _axes.getAxis)(layout.axes, AXIS_TYPE_RANGE, 0));
  }
  let extremeObj;
  if (layout.type === _visTypes.VIS_TYPE_SCATTER && (_extraOptions$outlier = extraOptions.outlierHelper) !== null && _extraOptions$outlier !== void 0 && _extraOptions$outlier.extremeLines) {
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
            text: `${rl.title.text} - ${((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text) || _index.default.t('Axis {{axisId}}', {
              axisId: axis.index + 1
            })}`
          };
        }
      });
    }
    let titleText = (_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.text;
    if (((_axis$title3 = axis.title) === null || _axis$title3 === void 0 ? void 0 : _axis$title3.textMode) === 'AUTO') {
      if (layout.type === _visTypes.VIS_TYPE_SCATTER || series.length === 1) {
        var _series$;
        if ((_series$ = series[0]) !== null && _series$ !== void 0 && _series$.name) {
          titleText = series[0].name;
        }
      } else if (useMultiAxisMode) {
        titleText = _index.default.t('Axis {{axisId}}', {
          axisId: axis.index + 1
        });
      } else if (series.length > 1) {
        titleText = _index.default.t('{{count}} items', {
          count: series.length,
          defaultValue: '{{count}} item',
          defaultValue_plural: '{{count}} items'
        });
      }
    }
    axes.push((0, _objectClean.default)({
      min: (0, _axis.getMinValue)(axis.minValue, dataValues, (_extraOptions$outlier2 = extraOptions.outlierHelper) === null || _extraOptions$outlier2 === void 0 ? void 0 : _extraOptions$outlier2.yAxisMin),
      max: (0, _axis.getMaxValue)(axis.maxValue, dataValues, (_extraOptions$outlier3 = extraOptions.outlierHelper) === null || _extraOptions$outlier3 === void 0 ? void 0 : _extraOptions$outlier3.yAxisMax),
      tickAmount: (0, _getSteps.default)(axis),
      title: (0, _getAxisTitle.default)(titleText, (0, _fontStyle.mergeFontStyleWithDefault)((_axis$title4 = axis.title) === null || _axis$title4 === void 0 ? void 0 : _axis$title4.fontStyle, _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE), _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE, layout.type),
      plotLines: (0, _arrayClean.default)([(0, _axis.getRegressionLine)(targetLine, layout.type), (0, _axis.getRegressionLine)(baseLine, layout.type), extremeObj && (0, _axis.getRegressionLine)({
        value: extremeObj.value,
        color: '#a9adb3',
        width: 1,
        dashStyle: 'Dash',
        title: {
          text: extremeObj.name,
          fontStyle: {
            textAlign: _fontStyle.TEXT_ALIGN_RIGHT
          }
        }
      })]),
      gridLineColor: (0, _axis.getGridLineColor)(),
      labels: (0, _axis.getLabels)(axis),
      id: (0, _axisId.getAxisStringFromId)(axis.index),
      // DHIS2-649: put first serie at the bottom of the stack
      // in this way the legend sequence matches the serie sequence
      reversedStacks: (0, _visTypes.isStacked)(layout.type) ? false : true,
      opposite: !!(axis.index % 2)
    }));
  });
  return axes;
}
function _default(layout, series, extraOptions) {
  let yAxis;
  switch (layout.type) {
    case _visTypes.VIS_TYPE_GAUGE:
      yAxis = (0, _gauge.default)(layout, series, extraOptions.legendSets[0]);
      break;
    default:
      yAxis = getDefault(layout, series, extraOptions);
  }
  return yAxis;
}