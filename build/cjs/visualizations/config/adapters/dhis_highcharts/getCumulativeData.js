"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _numberDecimals = _interopRequireDefault(require("d2-utilizr/lib/numberDecimals"));
var _visTypes = require("../../../../modules/visTypes.js");
var _getTwoCategorySplitSerieData = _interopRequireDefault(require("./getTwoCategorySplitSerieData.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getDefaultCumulativeData(series) {
  let decimals = 0;
  let cumulativeValues = [];
  series.forEach(seriesObj => {
    cumulativeValues = seriesObj.data.reduce((accumulator, value, index) => {
      decimals = Math.max(decimals, (0, _numberDecimals.default)(value));
      if (index > 0) {
        value += accumulator[index - 1];
      }
      accumulator.push(value);
      return accumulator;
    }, []);

    // round values to the largest number of decimals found in the serie
    // this is to avoid the floating-point problems in JavaScript
    // the condition in the return statement is because sometimes value can be null
    seriesObj.data = cumulativeValues.map(value => {
      return value ? parseFloat(value.toFixed(decimals)) : value;
    });
    decimals = 0;
  });
  return series;
}
function getTwoCategoryCumulativeData(series) {
  let decimals = 0;
  series.filter(seriesObj => !seriesObj.custom.isTwoCategoryFakeSerie).forEach(seriesObj => {
    const cumulativeValues = [];
    seriesObj.custom.data.forEach(groupObj => {
      const cumulativeGroupValues = [];
      groupObj.forEach((value, index) => {
        decimals = Math.max(decimals, (0, _numberDecimals.default)(value));
        if (index > 0) {
          value += cumulativeGroupValues[index - 1];
        }
        cumulativeGroupValues.push(value);
      });
      cumulativeValues.push(cumulativeGroupValues);
    });

    // round values to the largest number of decimals found in the serie
    // this is to avoid the floating-point problems in JavaScript
    // the condition in the return statement is because sometimes value can be null
    seriesObj.custom.data = cumulativeValues.map(groupObj => groupObj.map(value => value ? parseFloat(value.toFixed(decimals)) : value));
    seriesObj.data = (0, _getTwoCategorySplitSerieData.default)(seriesObj.custom.data);
    decimals = 0;
  });
  return series;
}
function _default(series, layout) {
  if ((0, _visTypes.isTwoCategoryChartType)(layout.type) && layout.rows.length > 1) {
    return getTwoCategoryCumulativeData(series);
  } else {
    return getDefaultCumulativeData(series);
  }
}