"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../../locales/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_COLOR = '#a8bf24';
const OUTLIER_COLOR = 'red';
const POINT_MARKER_SYMBOL = 'circle';

var _default = extraOptions => {
  const series = [];

  if (extraOptions.outlierHelper) {
    var _helper$vars$normaliz;

    const helper = extraOptions.outlierHelper;
    helper.detectOutliers(); // points

    helper.inlierPoints.length && series.push({
      data: helper.inlierPoints,
      marker: {
        symbol: POINT_MARKER_SYMBOL,
        fillColor: DEFAULT_COLOR,
        lineColor: 'rgb(0,0,0,0.5)',
        radius: 4
      },
      color: DEFAULT_COLOR
    });
    helper.outlierPoints.length && series.push({
      data: helper.outlierPoints,
      marker: {
        symbol: POINT_MARKER_SYMBOL,
        fillColor: OUTLIER_COLOR,
        lineColor: OUTLIER_COLOR,
        radius: 4
      },
      color: OUTLIER_COLOR
    }); // thresholds

    helper.thresholds.forEach(obj => {
      series.push({
        data: obj.line,
        name: obj.name,
        type: 'line',
        color: '#789',
        marker: {
          radius: 0
        },
        tooltip: {
          pointFormat: '{series.name}',
          headerFormat: ''
        }
      });
    }); // regression

    ((_helper$vars$normaliz = helper.vars.normalizationHelper) === null || _helper$vars$normaliz === void 0 ? void 0 : _helper$vars$normaliz.regression) && series.push({
      data: helper.vars.normalizationHelper.regression.points,
      name: _index.default.t('Linear Regression'),
      type: 'line',
      color: '#000',
      marker: {
        radius: 0
      },
      tooltip: {
        pointFormat: '{series.name}',
        headerFormat: ''
      }
    });
  } else {
    series.push({
      data: extraOptions.scatterPoints,
      marker: {
        symbol: POINT_MARKER_SYMBOL,
        fillColor: DEFAULT_COLOR,
        lineColor: DEFAULT_COLOR,
        radius: 4
      },
      color: DEFAULT_COLOR
    });
  }

  return series;
};

exports.default = _default;