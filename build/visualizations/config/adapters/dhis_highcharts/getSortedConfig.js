"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _arrayPluck = _interopRequireDefault(require("d2-utilizr/lib/arrayPluck"));

var _arraySort = _interopRequireDefault(require("d2-utilizr/lib/arraySort"));

var _getStackedData = _interopRequireDefault(require("./getStackedData"));

var sortOrderMap = new Map([[-1, 'ASC'], [1, 'DESC']]);

function getIndexOrder(config, isStacked, direction) {
  var dataToBeSorted = isStacked ? (0, _getStackedData.default)(config.series) : config.series[0].data.slice();
  var dataObjectsToBeSorted = dataToBeSorted.map(function (value, index) {
    return {
      index: index,
      value: value
    };
  });
  (0, _arraySort.default)(dataObjectsToBeSorted, direction, 'value');
  return (0, _arrayPluck.default)(dataObjectsToBeSorted, 'index');
}

function getSortedConfig(config, isStacked, direction) {
  var categories = config.xAxis.categories;
  var series = config.series;
  var indexOrder = getIndexOrder(config, isStacked, direction);
  var sortedConfig = Object.assign({}, config);
  sortedConfig.xAxis.categories = indexOrder.map(function (index) {
    return categories[index];
  });
  sortedConfig.series = series.map(function (seriesObj) {
    return (0, _objectSpread2.default)({}, seriesObj, {
      data: seriesObj.data.map(function (value, index) {
        return seriesObj.data[indexOrder[index]];
      })
    });
  });
  return sortedConfig;
}

function _default(config, layout, isStacked) {
  var direction = sortOrderMap.get(parseInt(layout.sortOrder));
  return getSortedConfig(config, isStacked, direction);
}