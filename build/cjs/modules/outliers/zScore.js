"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getZScoreHelper = exports.getStdDev = exports.getMean = exports.STANDARD_Z_SCORE = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _mathjs = require("mathjs");
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const STANDARD_Z_SCORE = 'STANDARD_Z_SCORE';
exports.STANDARD_Z_SCORE = STANDARD_Z_SCORE;
const getStdDev = data => (0, _mathjs.std)(data, 'unbiased');
exports.getStdDev = getStdDev;
const getMean = data => (0, _mathjs.mean)(data);
exports.getMean = getMean;
const getZScoreHelper = (normalizationHelper, config, _ref) => {
  let {
    xyStats
  } = _ref;
  const sortedNormalized = normalizationHelper.normalized.slice().sort((a, b) => a - b);
  const stdDev = getStdDev(sortedNormalized);
  const zScoreThreshold = stdDev * config[_index.PROP_THRESHOLD_FACTOR];
  const mean = getMean(sortedNormalized);
  const lowZScoreThreshold = mean - zScoreThreshold;
  const highZScoreThreshold = mean + zScoreThreshold;
  const [lowThresholdLine, highThresholdLine] = normalizationHelper.getThresholdLines(lowZScoreThreshold, highZScoreThreshold);
  const outlierPoints = [];
  const inlierPoints = [];
  const detectOutliers = () => normalizationHelper.data.forEach((point, idx) => {
    normalizationHelper.isOutlierByIndex(idx, lowZScoreThreshold, highZScoreThreshold) ? outlierPoints.push(point) : inlierPoints.push(point);
  });
  return {
    name: STANDARD_Z_SCORE,
    thresholds: [{
      name: _d2I18n.default.t('{{thresholdFactor}} × Z-score low', {
        thresholdFactor: config[_index.PROP_THRESHOLD_FACTOR]
      }),
      value: lowZScoreThreshold,
      line: lowThresholdLine
    }, {
      name: _d2I18n.default.t('{{thresholdFactor}} × Z-score high', {
        thresholdFactor: config[_index.PROP_THRESHOLD_FACTOR]
      }),
      value: highZScoreThreshold,
      line: highThresholdLine
    }],
    detectOutliers,
    outlierPoints,
    inlierPoints,
    vars: {
      stdDev,
      zScoreThreshold,
      mean,
      lowZScoreThreshold,
      highZScoreThreshold,
      normalizationHelper,
      sortedNormalized,
      config,
      xyStats
    }
  };
};
exports.getZScoreHelper = getZScoreHelper;