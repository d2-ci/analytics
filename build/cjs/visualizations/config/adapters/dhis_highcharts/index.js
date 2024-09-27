"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _legends = require("../../../../modules/legends.js");
var _index = require("../../../../modules/outliers/index.js");
var _visTypes = require("../../../../modules/visTypes.js");
var _themes = require("../../../util/colors/themes.js");
var _addTrendLines = _interopRequireWildcard(require("./addTrendLines.js"));
var _chart = _interopRequireDefault(require("./chart.js"));
var _getScatterData = _interopRequireDefault(require("./getScatterData.js"));
var _getSortedConfig = _interopRequireDefault(require("./getSortedConfig.js"));
var _getTrimmedConfig = _interopRequireDefault(require("./getTrimmedConfig.js"));
var _legend = _interopRequireDefault(require("./legend.js"));
var _legendSet = require("./legendSet.js");
var _noData = _interopRequireDefault(require("./noData.js"));
var _index2 = _interopRequireDefault(require("./pane/index.js"));
var _plotOptions = _interopRequireDefault(require("./plotOptions.js"));
var _index3 = _interopRequireDefault(require("./series/index.js"));
var _index4 = _interopRequireDefault(require("./subtitle/index.js"));
var _index5 = _interopRequireDefault(require("./title/index.js"));
var _index6 = _interopRequireDefault(require("./xAxis/index.js"));
var _index7 = _interopRequireDefault(require("./yAxis/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getTransformedLayout = layout => ({
  ...layout,
  type: String(layout.type).toUpperCase(),
  targetLineLabel: layout.targetLineLabel || layout.targetLineTitle,
  baseLineLabel: layout.baseLineLabel || layout.baseLineTitle
});
const getTransformedExtraOptions = extraOptions => ({
  ...extraOptions,
  multiAxisTheme: extraOptions.multiAxisTheme || _themes.defaultMultiAxisTheme1
});
function _default(_ref) {
  var _layout$legend, _layout$seriesKey, _layout$seriesKey2, _layout$seriesKey2$la, _config$xAxis;
  let {
    store,
    layout,
    el,
    extraConfig,
    extraOptions
  } = _ref;
  const _layout = getTransformedLayout(layout);
  const _extraOptions = getTransformedExtraOptions(extraOptions);
  const stacked = (0, _visTypes.isStacked)(_layout.type);
  const legendSets = extraOptions.legendSets;
  const series = store.generateData({
    type: _layout.type,
    seriesId: _layout.columns && _layout.columns.length ? _layout.columns[0].dimension : null,
    categoryIds: _layout.rows && _layout.rows.length ? _layout.rows.map(row => row.dimension) : null,
    extraOptions: _extraOptions
  });
  if (_layout.type === _visTypes.VIS_TYPE_SCATTER) {
    var _layout$outlierAnalys;
    _extraOptions.scatterData = (0, _getScatterData.default)(series, store);
    _extraOptions.scatterPoints = _extraOptions.scatterData.map(item => [item.x, item.y]);
    if ((_layout$outlierAnalys = _layout.outlierAnalysis) !== null && _layout$outlierAnalys !== void 0 && _layout$outlierAnalys.enabled) {
      _extraOptions.outlierHelper = (0, _index.getOutlierHelper)(_extraOptions.scatterPoints, _layout.outlierAnalysis);
    }
  }
  let config = {
    // type etc
    chart: (0, _chart.default)(_layout, el, _extraOptions.dashboard),
    // title
    title: (0, _index5.default)(_layout, store.data[0].metaData, _extraOptions.dashboard),
    // subtitle
    subtitle: (0, _index4.default)(series, _layout, store.data[0].metaData, _extraOptions.dashboard),
    // x-axis
    xAxis: (0, _index6.default)(store, _layout, _extraOptions, series),
    // y-axis
    yAxis: (0, _index7.default)(_layout, series, _extraOptions),
    // series
    series: (0, _index3.default)({
      series: series.slice(),
      metaData: store.data[0].metaData.items,
      layout: _layout,
      isStacked: stacked,
      extraOptions: _extraOptions,
      legendSets,
      displayStrategy: (_layout$legend = _layout.legend) === null || _layout$legend === void 0 ? void 0 : _layout$legend.strategy
    }),
    // legend
    legend: (0, _legend.default)({
      isHidden: (_layout$seriesKey = _layout.seriesKey) === null || _layout$seriesKey === void 0 ? void 0 : _layout$seriesKey.hidden,
      fontStyle: (_layout$seriesKey2 = _layout.seriesKey) === null || _layout$seriesKey2 === void 0 ? void 0 : (_layout$seriesKey2$la = _layout$seriesKey2.label) === null || _layout$seriesKey2$la === void 0 ? void 0 : _layout$seriesKey2$la.fontStyle,
      visType: _layout.type,
      dashboard: _extraOptions.dashboard
    }),
    // pane
    pane: (0, _index2.default)(_layout.type),
    // no data + zoom
    lang: {
      noData: _extraOptions.noData.text,
      resetZoom: _extraOptions.resetZoom.text
    },
    noData: (0, _noData.default)(),
    // credits
    credits: {
      enabled: false
    },
    // exporting
    exporting: {
      // disable exporting context menu
      enabled: false
    }
  };

  // get plot options for scatter
  if (_layout.type === _visTypes.VIS_TYPE_SCATTER) {
    const metaDataItems = store.data[0].metaData.items;
    const columnItems = _layout.columns[0].items;
    const xAxisName = metaDataItems[columnItems[1].id].name;
    const yAxisName = metaDataItems[columnItems[0].id].name;
    config.plotOptions = (0, _plotOptions.default)({
      visType: _layout.type,
      xAxisName,
      yAxisName,
      showLabels: _layout.showValues || _layout.showData,
      tooltipData: _extraOptions.scatterData
    });
  } else {
    config.plotOptions = (0, _plotOptions.default)({
      visType: _layout.type,
      ...(_extraOptions.onToggleContextualMenu ? {
        onClick: _extraOptions.onToggleContextualMenu
      } : {})
    });
  }
  console.log('jj config.plotOptions', config.plotOptions);

  // hide empty categories
  if (_layout.hideEmptyRowItems !== 'NONE') {
    config = (0, _getTrimmedConfig.default)(config, _layout);
  }

  // sorting
  if (_layout.sortOrder) {
    config = (0, _getSortedConfig.default)(config, _layout, stacked);
  }

  // DHIS2-1243 add trend lines after sorting
  // trend line on pie and gauge does not make sense
  if ((0, _isString.default)(_layout.regressionType) && _layout.regressionType !== 'NONE' && !(0, _addTrendLines.isRegressionIneligible)(_layout.type) && _layout.type !== _visTypes.VIS_TYPE_SCATTER) {
    config.series = (0, _addTrendLines.default)(_layout, config.series, stacked);
  }

  // DHIS2-147 add legendset to Column and Bar
  /*
   ** Note: This needs to go last, after all other data manipulation is done, as it changes
   ** the format of the data prop from an array of values to an array of objects with y and color props.
   */

  if (legendSets !== null && legendSets !== void 0 && legendSets.length && (0, _visTypes.isLegendSetType)(layout.type) && layout.type !== _visTypes.VIS_TYPE_GAUGE) {
    var _layout$legend2, _layout$legend3;
    if (((_layout$legend2 = _layout.legend) === null || _layout$legend2 === void 0 ? void 0 : _layout$legend2.strategy) === _legends.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM) {
      config.series = config.series.map(seriesObj => {
        if (seriesObj.type === _visTypes.VIS_TYPE_LINE) {
          return seriesObj;
        }
        const legendSet = legendSets.find(legendSet => {
          var _store$data$0$metaDat;
          return legendSet.id === ((_store$data$0$metaDat = store.data[0].metaData.items[seriesObj.id]) === null || _store$data$0$metaDat === void 0 ? void 0 : _store$data$0$metaDat.legendSet);
        });
        return legendSet ? (0, _legendSet.applyLegendSet)(seriesObj, legendSet) : seriesObj;
      });
    } else if (((_layout$legend3 = _layout.legend) === null || _layout$legend3 === void 0 ? void 0 : _layout$legend3.strategy) === _legends.LEGEND_DISPLAY_STRATEGY_FIXED) {
      config.series = config.series.map(seriesObj => seriesObj.type === _visTypes.VIS_TYPE_LINE ? seriesObj : (0, _legendSet.applyLegendSet)(seriesObj, legendSets[0]));
    }
    config.tooltip = (0, _legendSet.getLegendSetTooltip)();
  }

  // flatten category groups
  if ((_config$xAxis = config.xAxis) !== null && _config$xAxis !== void 0 && _config$xAxis.length) {
    config.xAxis = config.xAxis.map(xAxis => xAxis.categories ? {
      ...xAxis,
      categories: xAxis.categories.flat()
    } : xAxis);
  }

  // force apply extra config
  Object.assign(config, extraConfig);
  return (0, _objectClean.default)(config);
}