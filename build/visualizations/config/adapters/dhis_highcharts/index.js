"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var _chart = _interopRequireDefault(require("./chart"));

var _xAxis = _interopRequireDefault(require("./xAxis"));

var _yAxis = _interopRequireDefault(require("./yAxis"));

var _series = _interopRequireDefault(require("./series"));

var _title = _interopRequireDefault(require("./title"));

var _subtitle = _interopRequireDefault(require("./subtitle"));

var _legend = _interopRequireDefault(require("./legend"));

var _pane = _interopRequireDefault(require("./pane"));

var _noData = _interopRequireDefault(require("./noData"));

var _type = require("./type");

var _getSortedConfig = _interopRequireDefault(require("./getSortedConfig"));

var _getTrimmedConfig = _interopRequireDefault(require("./getTrimmedConfig"));

var _addTrendLines = _interopRequireWildcard(require("./addTrendLines"));

var _themes = require("../../../util/colors/themes");

var getTransformedLayout = function getTransformedLayout(layout) {
  return (0, _objectSpread2.default)({}, layout, {
    type: String(layout.type).toUpperCase(),
    rangeAxisLabel: layout.rangeAxisLabel || layout.rangeAxisTitle,
    domainAxisLabel: layout.domainAxisLabel || layout.domainAxisTitle,
    targetLineLabel: layout.targetLineLabel || layout.targetLineTitle,
    baseLineLabel: layout.baseLineLabel || layout.baseLineTitle,
    // DHIS2-6774: make sure seriesItems is initialized as Array when switching
    // visualization type in dashboards app
    seriesItems: layout.seriesItems || []
  });
};

var getTransformedExtraOptions = function getTransformedExtraOptions(extraOptions) {
  return (0, _objectSpread2.default)({}, extraOptions, {
    multiAxisTheme: extraOptions.multiAxisTheme || _themes.defaultMultiAxisTheme1
  });
};

function _default(_ref) {
  var store = _ref.store,
      layout = _ref.layout,
      el = _ref.el,
      extraConfig = _ref.extraConfig,
      extraOptions = _ref.extraOptions;

  var _layout = getTransformedLayout(layout);

  var _extraOptions = getTransformedExtraOptions(extraOptions);

  var series = store.generateData({
    type: _layout.type,
    seriesId: _layout.columns && _layout.columns.length ? _layout.columns[0].dimension : null,
    categoryId: _layout.rows && _layout.rows.length ? _layout.rows[0].dimension : null
  });
  var isStacked = (0, _type.getIsStacked)(_layout.type);
  var config = {
    // type etc
    chart: (0, _chart.default)(_layout, el, _extraOptions.dashboard),
    // title
    title: (0, _title.default)(_layout, store.data[0].metaData, _extraOptions.dashboard),
    // subtitle
    subtitle: (0, _subtitle.default)(series, _layout, store.data[0].metaData, _extraOptions.dashboard),
    // x-axis
    xAxis: (0, _xAxis.default)(store, _layout, _extraOptions),
    // y-axis
    yAxis: (0, _yAxis.default)(_layout, series, _extraOptions),
    // series
    series: (0, _series.default)(series.slice(), store, _layout, isStacked, _extraOptions),
    // legend
    legend: (0, _legend.default)(_layout, _extraOptions.dashboard),
    // pane
    pane: (0, _pane.default)(_layout.type),
    // no data
    lang: {
      noData: _extraOptions.noData.text
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
    } // hide empty categories

  };

  if (_layout.hideEmptyRowItems !== 'NONE') {
    config = (0, _getTrimmedConfig.default)(config, _layout.hideEmptyRowItems);
  } // sorting


  if (_layout.sortOrder) {
    config = (0, _getSortedConfig.default)(config, _layout, isStacked);
  } // DHIS2-1243 add trend lines after sorting
  // trend line on pie and gauge does not make sense


  if ((0, _isString.default)(_layout.regressionType) && _layout.regressionType !== 'NONE' && !(0, _addTrendLines.isRegressionIneligible)(_layout.type)) {
    config.series = (0, _addTrendLines.default)(_layout.regressionType, config.series, isStacked);
  } // force apply extra config


  Object.assign(config, extraConfig);
  return (0, _objectClean.default)(config);
}