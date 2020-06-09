"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getCumulativeData = _interopRequireDefault(require("./../getCumulativeData"));

var _pie = _interopRequireDefault(require("./pie"));

var _gauge = _interopRequireDefault(require("./gauge"));

var _type = _interopRequireDefault(require("../type"));

var _optionalAxes = require("../optionalAxes");

var _gradientColorGenerator = require("../../../../util/colors/gradientColorGenerator");

var _visTypes = require("../../../../../modules/visTypes");

var DEFAULT_ANIMATION_DURATION = 200;
var HIGHCHARTS_TYPE_COLUMN = 'column';
var HIGHCHARTS_TYPE_BAR = 'bar';
var HIGHCHARTS_TYPE_PERCENT = 'percent';
var HIGHCHARTS_TYPE_NORMAL = 'normal';
var epiCurveTypes = [HIGHCHARTS_TYPE_COLUMN, HIGHCHARTS_TYPE_BAR];

function getAnimation(option, fallback) {
  return typeof option === 'number' ? option : fallback;
}

function getColor(colors, index) {
  return colors[index] || getColor(colors, index - colors.length);
}

function getIdColorMap(series, layout, extraOptions) {
  if ((0, _optionalAxes.hasOptionalAxis)(layout.optionalAxes)) {
    var axisIdsMap = (0, _optionalAxes.getAxisIdsMap)(layout.optionalAxes, series);
    var theme = extraOptions.multiAxisTheme;
    var colorsByAxis = Object.keys(axisIdsMap).reduce(function (map, axis) {
      var numberOfIds = axisIdsMap[axis].length;
      map[axis] = (0, _gradientColorGenerator.generateColors)(theme[axis].startColor, theme[axis].endColor, numberOfIds, true);
      return map;
    }, {});
    return Object.keys(colorsByAxis).reduce(function (map, axis) {
      var colors = colorsByAxis[axis];
      var ids = axisIdsMap[axis];
      ids.forEach(function (id, index) {
        map[id] = colors[index];
      });
      return map;
    }, {});
  } else {
    var colors = extraOptions.colors;
    return series.reduce(function (map, s, index) {
      map[s.id] = getColor(colors, index);
      return map;
    }, {});
  }
}

function getDefault(series, layout, isStacked, extraOptions) {
  var fullIdAxisMap = (0, _optionalAxes.getFullIdAxisMap)(layout.optionalAxes, series);
  var idColorMap = getIdColorMap(series, layout, extraOptions);
  series.forEach(function (seriesObj, index) {
    // show values
    if (layout.showValues || layout.showData) {
      seriesObj.dataLabels = {
        enabled: true
      };
    } // stacked


    if (isStacked) {
      // DHIS2-1060: stacked charts can optionally be shown as 100% stacked charts
      seriesObj.stacking = layout.percentStackedValues === true ? HIGHCHARTS_TYPE_PERCENT : HIGHCHARTS_TYPE_NORMAL;
    } // DHIS2-2101
    // show bar/column chart as EPI curve (basically remove spacing between bars/columns)


    if (layout.noSpaceBetweenColumns) {
      var seriesType = (0, _type.default)(layout.type).type;

      if (epiCurveTypes.includes(seriesType)) {
        seriesObj.pointPadding = 0;
        seriesObj.groupPadding = 0;
      }
    } // color


    seriesObj.color = (0, _visTypes.isYearOverYear)(layout.type) ? extraOptions.colors[index] : idColorMap[seriesObj.id]; // axis number

    seriesObj.yAxis = (0, _visTypes.isDualAxisType)(layout.type) ? fullIdAxisMap[seriesObj.id] : 0; // custom names for "year over year" series

    if (extraOptions.yearlySeries) {
      seriesObj.name = extraOptions.yearlySeries[index];
    }
  }); // DHIS2-701: use cumulative values

  if (layout.cumulativeValues === true) {
    series = (0, _getCumulativeData.default)(series);
  }

  return series;
}

function _default(series, store, layout, isStacked, extraOptions) {
  switch (layout.type) {
    case _visTypes.VIS_TYPE_PIE:
      series = (0, _pie.default)(series, store, layout, isStacked, extraOptions.colors);
      break;

    case _visTypes.VIS_TYPE_GAUGE:
      series = (0, _gauge.default)(series, layout, extraOptions.legendSets[0]);
      break;

    default:
      series = getDefault(series, layout, isStacked, extraOptions);
  }

  series.forEach(function (seriesObj) {
    // animation
    seriesObj.animation = {
      duration: getAnimation(extraOptions.animation, DEFAULT_ANIMATION_DURATION)
    };
  });
  return series;
}