"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _arrayPluck = _interopRequireDefault(require("d2-utilizr/lib/arrayPluck"));
var _arraySort = _interopRequireDefault(require("d2-utilizr/lib/arraySort"));
var _visTypes = require("../../../../modules/visTypes.js");
var _getStackedData = _interopRequireDefault(require("./getStackedData.js"));
var _getTwoCategorySplitSerieData = _interopRequireDefault(require("./getTwoCategorySplitSerieData.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const sortOrderMap = new Map([[-1, 'ASC'], [1, 'DESC']]);
function getIndexOrder(dataToBeSorted, layout) {
  const dataObjectsToBeSorted = dataToBeSorted.map((value, index) => ({
    index,
    value
  }));
  const direction = sortOrderMap.get(layout.sortOrder);
  (0, _arraySort.default)(dataObjectsToBeSorted, direction, 'value');
  return (0, _arrayPluck.default)(dataObjectsToBeSorted, 'index');
}
function getTwoCategorySortedConfig(config, layout, stacked) {
  const series = config.series;
  const sortedConfig = Object.assign({}, config);
  const stackedData = (0, _getStackedData.default)(series, layout);
  const indexOrder = [];

  // loop through serie groups
  sortedConfig.series = series.map((seriesObj, seriesIndex) => {
    if (seriesObj.custom.isTwoCategoryFakeSerie) {
      return seriesObj;
    } else {
      seriesObj.custom.data = seriesObj.custom.data.map((groupObj, groupIndex) => {
        // sorting index computed on 1st serie data
        if (seriesIndex === 0) {
          indexOrder[groupIndex] = getIndexOrder(stacked ? stackedData[groupIndex] : groupObj, layout);

          // reorder 2nd category labels only once
          // based on the 1st serie group ordering
          const groupCategoryLabels = config.xAxis[0].categories[groupIndex];
          sortedConfig.xAxis[0].categories[groupIndex] = groupCategoryLabels.map((value, index) => groupCategoryLabels[indexOrder[groupIndex][index]]);
        }
        return groupObj.map((value, index) => groupObj[indexOrder[groupIndex][index]]);
      });
      seriesObj.data = (0, _getTwoCategorySplitSerieData.default)(seriesObj.custom.data);
      return seriesObj;
    }
  });
  return sortedConfig;
}
function getDefaultSortedConfig(config, layout, stacked) {
  var _config$xAxis;
  const categories = ((_config$xAxis = config.xAxis) === null || _config$xAxis === void 0 ? void 0 : _config$xAxis.length) && config.xAxis[0].categories;
  const series = config.series;
  const indexOrder = getIndexOrder(stacked ? (0, _getStackedData.default)(series, layout) : series[0].data, layout);
  const sortedConfig = Object.assign({}, config);
  if (categories) {
    sortedConfig.xAxis[0].categories = indexOrder.map(index => categories[index]);
  }
  sortedConfig.series = series.map(seriesObj => ({
    ...seriesObj,
    data: seriesObj.data.map((value, index) => seriesObj.data[indexOrder[index]])
  }));
  return sortedConfig;
}
function _default(config, layout, stacked) {
  if ((0, _visTypes.isTwoCategoryChartType)(layout.type) && layout.rows.length > 1) {
    return getTwoCategorySortedConfig(config, layout, stacked);
  } else {
    return getDefaultSortedConfig(config, layout, stacked);
  }
}