"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuartileValue = exports.getQuartilePosition = exports.getIQRHelper = exports.Q3 = exports.Q2 = exports.Q1 = exports.IQR = void 0;

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _index2 = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IQR = 'IQR';
exports.IQR = IQR;
const Q1 = 0.25;
exports.Q1 = Q1;
const Q2 = 0.5;
exports.Q2 = Q2;
const Q3 = 0.75;
exports.Q3 = Q3;

const getQuartilePosition = (data, quartile) => {
  const pos = (data.length + 1) / 4;

  switch (quartile) {
    case Q3:
      return pos * 3;

    case Q2:
      return pos * 2;

    case Q1:
    default:
      return pos;
  }
};

exports.getQuartilePosition = getQuartilePosition;

const getQuartileValue = function (data) {
  let quartile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Q1;

  if (data.length < 3) {
    return;
  }

  const pos = getQuartilePosition(data, quartile);
  const rest = pos % 1;

  if (rest === 0) {
    return data[pos - 1];
  }

  var base = Math.floor(pos);
  var diff = data[base] - data[base - 1];
  return data[base - 1] + diff * rest;
};

exports.getQuartileValue = getQuartileValue;

const getIQRHelper = (normalizationHelper, config, _ref) => {
  let {
    xyStats
  } = _ref;
  const sortedNormalized = normalizationHelper.normalized.slice().sort((a, b) => a - b);
  const q1 = getQuartileValue(sortedNormalized, Q1);
  const q3 = getQuartileValue(sortedNormalized, Q3);
  const iqr = q3 - q1;
  const iqrThreshold = iqr * config[_index2.PROP_THRESHOLD_FACTOR];
  const q1Threshold = q1 - iqrThreshold;
  const q3Threshold = q3 + iqrThreshold;
  const [q1ThresholdLine, q3ThresholdLine] = normalizationHelper.getThresholdLines(q1Threshold, q3Threshold);
  const outlierPoints = [];
  const inlierPoints = [];

  const detectOutliers = () => normalizationHelper.data.forEach((point, idx) => {
    normalizationHelper.isOutlierByIndex(idx, q1Threshold, q3Threshold) ? outlierPoints.push(point) : inlierPoints.push(point);
  });

  return {
    name: IQR,
    thresholds: [{
      name: _index.default.t('{{thresholdFactor}} × IQR Q1', {
        thresholdFactor: config[_index2.PROP_THRESHOLD_FACTOR]
      }),
      value: q1Threshold,
      line: q1ThresholdLine
    }, {
      name: _index.default.t('{{thresholdFactor}} × IQR Q3', {
        thresholdFactor: config[_index2.PROP_THRESHOLD_FACTOR]
      }),
      value: q3Threshold,
      line: q3ThresholdLine
    }],
    detectOutliers,
    outlierPoints,
    inlierPoints,
    vars: {
      q1,
      q3,
      iqr,
      iqrThreshold,
      q1Threshold,
      q3Threshold,
      normalizationHelper,
      config,
      xyStats
    }
  };
};

exports.getIQRHelper = getIQRHelper;