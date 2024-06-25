"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ui = require("@dhis2/ui");

var _axis = require("../../../../../modules/axis.js");

var _axisHasRelativeItems = require("../../../../../modules/layout/axisHasRelativeItems.js");

var _legends = require("../../../../../modules/legends.js");

var _visTypes = require("../../../../../modules/visTypes.js");

var _axisId = require("../../../../util/axisId.js");

var _colorSets = require("../../../../util/colors/colorSets.js");

var _gradientColorGenerator = require("../../../../util/colors/gradientColorGenerator.js");

var _customAxes = require("../customAxes.js");

var _getCumulativeData = _interopRequireDefault(require("../getCumulativeData.js"));

var _type = _interopRequireDefault(require("../type.js"));

var _gauge = _interopRequireDefault(require("./gauge.js"));

var _pie = _interopRequireDefault(require("./pie.js"));

var _scatter = _interopRequireDefault(require("./scatter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_ANIMATION_DURATION = 200;
const HIGHCHARTS_TYPE_COLUMN = 'column';
const HIGHCHARTS_TYPE_BAR = 'bar';
const HIGHCHARTS_TYPE_PERCENT = 'percent';
const HIGHCHARTS_TYPE_NORMAL = 'normal';
const INCREASED_Z_INDEX = 1;
const epiCurveTypes = [HIGHCHARTS_TYPE_COLUMN, HIGHCHARTS_TYPE_BAR];

function getAnimation(option, fallback) {
  return typeof option === 'number' ? option : fallback;
}

function getColor(colors, index) {
  return colors[index] || getColor(colors, index - colors.length);
}

function getPatternIndex(index) {
  return index < 10 ? index : getPatternIndex(index - 10);
}

function getIndexColorPatternMap(series, layout, extraOptions) {
  var _colorSets$layout$col;

  const colors = ((_colorSets$layout$col = _colorSets.colorSets[layout.colorSet]) === null || _colorSets$layout$col === void 0 ? void 0 : _colorSets$layout$col.colors) || extraOptions.colors;
  return series.reduce((map, s, index) => {
    map[index] = layout.colorSet === _colorSets.COLOR_SET_PATTERNS ? {
      patternIndex: getPatternIndex(index)
    } : getColor(colors, index);
    return map;
  }, {});
}

function getIdColorMap(series, layout, extraOptions) {
  var _layout$series;

  const filteredSeries = (_layout$series = layout.series) === null || _layout$series === void 0 ? void 0 : _layout$series.filter(layoutSeriesItem => series.some(seriesItem => seriesItem.id === layoutSeriesItem.dimensionItem));

  if ((0, _visTypes.isDualAxisType)(layout.type) && (0, _axis.hasCustomAxes)(filteredSeries) && !(0, _axisHasRelativeItems.axisHasRelativeItems)(layout.columns)) {
    const axisIdsMap = (0, _customAxes.getAxisIdsMap)(layout.series, series);
    const theme = extraOptions.multiAxisTheme;
    const colorsByAxis = Object.keys(axisIdsMap).reduce((map, axis) => {
      const numberOfIds = axisIdsMap[axis].length;
      map[axis] = numberOfIds > 1 ? (0, _gradientColorGenerator.generateColors)(theme[axis].startColor, theme[axis].endColor, numberOfIds) : [theme[axis].mainColor];
      return map;
    }, {});
    return Object.keys(colorsByAxis).reduce((map, axis) => {
      const colors = colorsByAxis[axis];
      const ids = axisIdsMap[axis];
      ids.forEach((id, index) => {
        map[id] = colors[index];
      });
      return map;
    }, {});
  } else {
    const indexColorPatternMap = getIndexColorPatternMap(series, layout, extraOptions);
    return series.reduce((map, s, index) => {
      map[s.id] = indexColorPatternMap[index];
      return map;
    }, {});
  }
}

function getDefault(_ref) {
  let {
    series,
    metaData,
    layout,
    isStacked,
    extraOptions,
    legendSets,
    displayStrategy
  } = _ref;
  const fullIdAxisMap = (0, _customAxes.getFullIdAxisMap)(layout.series, series);
  const idColorMap = getIdColorMap(series, layout, extraOptions);
  const indexColorPatternMap = getIndexColorPatternMap(series, layout, extraOptions);
  series.forEach((seriesObj, index) => {
    var _seriesObj$custom, _layout$series2, _metaData$seriesObj$i;

    // show values
    if (!seriesObj.dataLabels && (layout.showValues || layout.showData)) {
      seriesObj.dataLabels = {
        enabled: true,
        color: _ui.colors.grey900
      };
    } // stacked


    if (isStacked && !(seriesObj !== null && seriesObj !== void 0 && (_seriesObj$custom = seriesObj.custom) !== null && _seriesObj$custom !== void 0 && _seriesObj$custom.isTwoCategoryFakeSerie)) {
      // DHIS2-1060: stacked charts can optionally be shown as 100% stacked charts
      if (layout.percentStackedValues === true) {
        seriesObj.stacking = HIGHCHARTS_TYPE_PERCENT;
        seriesObj.connectNulls = false;
      } else {
        seriesObj.stacking = HIGHCHARTS_TYPE_NORMAL;
      }
    }

    const matchedObject = (_layout$series2 = layout.series) === null || _layout$series2 === void 0 ? void 0 : _layout$series2.find(item => item.dimensionItem === seriesObj.id);

    if (matchedObject && !(0, _axisHasRelativeItems.axisHasRelativeItems)(layout.columns)) {
      // Checks if the item has custom options
      if (matchedObject.type) {
        seriesObj.type = (0, _type.default)(matchedObject.type).type;

        if (matchedObject.type === _visTypes.VIS_TYPE_LINE) {
          seriesObj.zIndex = INCREASED_Z_INDEX; // Custom options, item type Line
        }
      } else if (layout.type === _visTypes.VIS_TYPE_LINE) {
        seriesObj.zIndex = INCREASED_Z_INDEX; // Custom options, no item type, visType Line
      }
    } else if (layout.type === _visTypes.VIS_TYPE_LINE) {
      seriesObj.zIndex = INCREASED_Z_INDEX; // No custom options, visType Line
    } // DHIS2-2101
    // show bar/column chart as EPI curve (basically remove spacing between bars/columns)


    if (layout.noSpaceBetweenColumns && epiCurveTypes.includes((0, _type.default)(layout.type).type)) {
      seriesObj.pointPadding = 0;
      seriesObj.groupPadding = 0;
    } // color


    if ((0, _visTypes.isYearOverYear)(layout.type)) {
      // YearOverYear: Fetch colors directly from color sets
      seriesObj.color = indexColorPatternMap[index];
    } else {
      // Default: Either generate colors or fetch from color sets
      seriesObj.color = idColorMap[seriesObj.id];
    } // axis number


    seriesObj.yAxis = (0, _visTypes.isDualAxisType)(layout.type) && !(0, _axisHasRelativeItems.axisHasRelativeItems)(layout.columns) ? (0, _axisId.getAxisStringFromId)(fullIdAxisMap[seriesObj.id]) : (0, _axisId.getAxisStringFromId)(0); // custom names for "year over year" series

    if (extraOptions.yearlySeries) {
      seriesObj.name = extraOptions.yearlySeries[index];
    }

    seriesObj.legendSet = (0, _legends.getLegendSetByDisplayStrategy)({
      displayStrategy,
      legendSets,
      legendSetId: (_metaData$seriesObj$i = metaData[seriesObj.id]) === null || _metaData$seriesObj$i === void 0 ? void 0 : _metaData$seriesObj$i.legendSet
    });
    seriesObj.marker = {
      enabled: false
    };
  }); // DHIS2-701: use cumulative values

  if (layout.cumulativeValues === true) {
    series = (0, _getCumulativeData.default)(series, layout);
  }

  return series;
}

function _default(_ref2) {
  let {
    series,
    metaData,
    layout,
    isStacked,
    extraOptions,
    legendSets,
    displayStrategy
  } = _ref2;

  switch (layout.type) {
    case _visTypes.VIS_TYPE_PIE:
      series = (0, _pie.default)(series, Object.values(getIdColorMap(series, layout, extraOptions)));
      break;

    case _visTypes.VIS_TYPE_GAUGE:
      series = (0, _gauge.default)(series, layout, extraOptions.legendSets[0]);
      break;

    case _visTypes.VIS_TYPE_SCATTER:
      series = (0, _scatter.default)(extraOptions);
      break;

    default:
      series = getDefault({
        series,
        metaData,
        layout,
        isStacked,
        extraOptions,
        legendSets,
        displayStrategy
      });
  }

  series.forEach(seriesObj => {
    // animation
    seriesObj.animation = {
      duration: getAnimation(extraOptions.animation, DEFAULT_ANIMATION_DURATION)
    };
  });
  return series;
}