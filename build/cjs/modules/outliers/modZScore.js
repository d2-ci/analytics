"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModZScoreThresholds = exports.getModZScoreMAD0Thresholds = exports.getModZScoreMAD0 = exports.getModZScoreHelper = exports.getModZScore = exports.getMedianAbsoluteDeviation = exports.getMedian = exports.getMeanAbsoluteDeviation = exports.getMean = exports.getDataWithZScore = exports.MODIFIED_Z_SCORE = void 0;
var _isNumber = _interopRequireDefault(require("d2-utilizr/lib/isNumber"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _index2 = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MODIFIED_Z_SCORE = 'MODIFIED_Z_SCORE';
exports.MODIFIED_Z_SCORE = MODIFIED_Z_SCORE;
const MEDIAN_AD_CORRECTION = 0.6745;
const MEAN_AD_CORRECTION = 1.253314;
const getMean = values => values.reduce((total, value) => total + value, 0) / values.length;
exports.getMean = getMean;
const getMedian = values => {
  const hl = values.length / 2;
  return hl % 1 ? values[Math.floor(hl)] : getMean([values[hl - 1], values[hl]]);
};

// Absolute deviation
exports.getMedian = getMedian;
const getMedianAbsoluteDeviation = function (values) {
  let median = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getMedian(values);
  return getMedian(values.map(value => Math.abs(value - median)).sort((a, b) => a - b));
};
exports.getMedianAbsoluteDeviation = getMedianAbsoluteDeviation;
const getMeanAbsoluteDeviation = function (values) {
  let mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getMean(values);
  return getMean(values.map(value => Math.abs(value - mean)));
};

// Modified z-scores
exports.getMeanAbsoluteDeviation = getMeanAbsoluteDeviation;
const getModZScore = (value, median, medianAD) => MEDIAN_AD_CORRECTION * (value - median) / medianAD;
exports.getModZScore = getModZScore;
const getModZScoreMAD0 = (value, median, meanAD) => (value - median) / (meanAD * MEAN_AD_CORRECTION);

// Thresholds
exports.getModZScoreMAD0 = getModZScoreMAD0;
const getModZScoreThresholds = (thresholdFactor, medianAD, median) => [median - medianAD * thresholdFactor / MEDIAN_AD_CORRECTION, median + medianAD * thresholdFactor / MEDIAN_AD_CORRECTION];
exports.getModZScoreThresholds = getModZScoreThresholds;
const getModZScoreMAD0Thresholds = (thresholdFactor, meanAD, median) => [median - thresholdFactor * meanAD * MEAN_AD_CORRECTION, median + thresholdFactor * meanAD * MEAN_AD_CORRECTION];
exports.getModZScoreMAD0Thresholds = getModZScoreMAD0Thresholds;
const getDataWithZScore = function (dataWithNormalization) {
  let cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const normalizedData = cache.normalizedData || dataWithNormalization.map(obj => obj.normalized);
  const median = (0, _isNumber.default)(cache.median) ? cache.median : getMedian(normalizedData);
  const medianAD = (0, _isNumber.default)(cache.medianAD) ? cache.medianAD : getMedianAbsoluteDeviation();
  let dataWithZScore;
  if (medianAD === 0) {
    const meanAD = (0, _isNumber.default)(cache.meanAD) ? cache.meanAD : getMeanAbsoluteDeviation(normalizedData);
    dataWithZScore = dataWithNormalization.map(obj => ({
      ...obj,
      zScore: getModZScoreMAD0(obj.normalized, median, meanAD)
    }));
  } else {
    dataWithZScore = dataWithNormalization.map(obj => ({
      ...obj,
      zScore: getModZScore(obj.normalized, median, medianAD)
    }));
  }
  return dataWithZScore;
};
exports.getDataWithZScore = getDataWithZScore;
const getModZScoreHelper = (normalizationHelper, config, _ref) => {
  let {
    xyStats
  } = _ref;
  const sortedNormalized = normalizationHelper.normalized.slice().sort((a, b) => a - b);
  const median = getMedian(sortedNormalized);
  const medianAD = getMedianAbsoluteDeviation(sortedNormalized, median);
  const meanAD = medianAD === 0 ? getMeanAbsoluteDeviation(sortedNormalized) : null;
  const [lowThreshold, highThreshold] = medianAD === 0 ? getModZScoreMAD0Thresholds(config[_index2.PROP_THRESHOLD_FACTOR], meanAD, median) : getModZScoreThresholds(config[_index2.PROP_THRESHOLD_FACTOR], medianAD, median);
  const [lowThresholdLine, highThresholdLine] = normalizationHelper.getThresholdLines(lowThreshold, highThreshold);
  const outlierPoints = [];
  const inlierPoints = [];
  const detectOutliers = () => normalizationHelper.data.forEach((point, idx) => {
    normalizationHelper.isOutlierByIndex(idx, lowThreshold, highThreshold) ? outlierPoints.push(point) : inlierPoints.push(point);
  });
  return {
    name: MODIFIED_Z_SCORE,
    thresholds: [{
      name: _index.default.t('{{thresholdFactor}} × Modified Z-score low', {
        thresholdFactor: config[_index2.PROP_THRESHOLD_FACTOR]
      }),
      value: lowThreshold,
      line: lowThresholdLine
    }, {
      name: _index.default.t('{{thresholdFactor}} × Modified Z-score high', {
        thresholdFactor: config[_index2.PROP_THRESHOLD_FACTOR]
      }),
      value: highThreshold,
      line: highThresholdLine
    }],
    detectOutliers,
    outlierPoints,
    inlierPoints,
    vars: {
      median,
      medianAD,
      meanAD,
      lowThreshold,
      highThreshold,
      normalizationHelper,
      sortedNormalized,
      config,
      xyStats
    }
  };
};
exports.getModZScoreHelper = getModZScoreHelper;