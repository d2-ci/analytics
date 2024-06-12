"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _arrayClean = _interopRequireDefault(require("d2-utilizr/lib/arrayClean"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _fontStyle = require("../../../../../modules/fontStyle.js");

var _axes = require("../../../../util/axes.js");

var _axisId = require("../../../../util/axisId.js");

var _axis = require("../axis.js");

var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle.js"));

var _getSteps = _interopRequireDefault(require("../getSteps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AXIS_TYPE = 'RANGE';
const AXIS_INDEX = 1;

function _default(layout, series, extraOptions) {
  var _extraOptions$outlier, _extraOptions$outlier2, _extraOptions$outlier3, _axis$title, _series$, _axis$title2, _axis$title3;

  const dataValues = series === null || series === void 0 ? void 0 : series.map(item => item.data).flat();
  const axis = (0, _axes.getAxis)(layout.axes, AXIS_TYPE, AXIS_INDEX);
  const extremeObj = (_extraOptions$outlier = extraOptions.outlierHelper) !== null && _extraOptions$outlier !== void 0 && _extraOptions$outlier.extremeLines ? extraOptions.outlierHelper.extremeLines[0] : null;
  return (0, _objectClean.default)({
    min: (0, _axis.getMinValue)(axis.minValue, dataValues, (_extraOptions$outlier2 = extraOptions.outlierHelper) === null || _extraOptions$outlier2 === void 0 ? void 0 : _extraOptions$outlier2.xAxisMin),
    max: (0, _axis.getMaxValue)(axis.maxValue, dataValues, (_extraOptions$outlier3 = extraOptions.outlierHelper) === null || _extraOptions$outlier3 === void 0 ? void 0 : _extraOptions$outlier3.xAxisMax),
    tickAmount: (0, _getSteps.default)(axis),
    title: (0, _getAxisTitle.default)(((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.textMode) === 'AUTO' && (_series$ = series[1]) !== null && _series$ !== void 0 && _series$.name ? series[1].name : (_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.text, (0, _fontStyle.mergeFontStyleWithDefault)((_axis$title3 = axis.title) === null || _axis$title3 === void 0 ? void 0 : _axis$title3.fontStyle, _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE), _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE, layout.type),
    plotLines: (0, _arrayClean.default)([(0, _axis.getRegressionLine)(axis.targetLine, layout.type, true), (0, _axis.getRegressionLine)(axis.baseLine, layout.type, true), extremeObj ? (0, _axis.getRegressionLine)({
      value: extremeObj.value,
      color: '#a9adb3',
      width: 1,
      dashStyle: 'Dash',
      title: {
        text: extremeObj.name
      }
    }, null, true) : null]),
    gridLineColor: (0, _axis.getGridLineColor)(),
    labels: (0, _axis.getLabels)(axis),
    id: (0, _axisId.getAxisStringFromId)(0)
  });
}