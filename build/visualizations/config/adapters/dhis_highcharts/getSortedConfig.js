"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _arrayPluck = _interopRequireDefault(require("d2-utilizr/lib/arrayPluck"));

var _arraySort = _interopRequireDefault(require("d2-utilizr/lib/arraySort"));

var _getStackedData = _interopRequireDefault(require("./getStackedData"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    return _objectSpread(_objectSpread({}, seriesObj), {}, {
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