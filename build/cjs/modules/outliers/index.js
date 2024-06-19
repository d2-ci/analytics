"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutlierHelper = exports.defaultConfig = exports.PROP_THRESHOLD_FACTOR = exports.PROP_OUTLIER_METHOD = exports.PROP_NORMALIZATION_METHOD = exports.PROP_EXTREME_LINES_VALUE = exports.PROP_EXTREME_LINES = exports.PROP_ENABLED = exports.DEFAULT_THRESHOLD_FACTOR = exports.DEFAULT_OUTLIER_METHOD = exports.DEFAULT_NORMALIZATION_METHOD = exports.DEFAULT_EXTREME_LINES_VALUE = exports.DEFAULT_ENABLED = void 0;

var _isNumber = _interopRequireDefault(require("d2-utilizr/lib/isNumber"));

var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _iqr = require("./iqr.js");

var _modZScore = require("./modZScore.js");

var _normalization = require("./normalization.js");

var _xyStats = require("./xyStats.js");

var _zScore = require("./zScore.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PROP_ENABLED = 'enabled';
exports.PROP_ENABLED = PROP_ENABLED;
const PROP_THRESHOLD_FACTOR = 'thresholdFactor';
exports.PROP_THRESHOLD_FACTOR = PROP_THRESHOLD_FACTOR;
const PROP_NORMALIZATION_METHOD = 'normalizationMethod';
exports.PROP_NORMALIZATION_METHOD = PROP_NORMALIZATION_METHOD;
const PROP_OUTLIER_METHOD = 'outlierMethod';
exports.PROP_OUTLIER_METHOD = PROP_OUTLIER_METHOD;
const PROP_EXTREME_LINES = 'extremeLines';
exports.PROP_EXTREME_LINES = PROP_EXTREME_LINES;
const PROP_EXTREME_LINES_VALUE = 'value';
exports.PROP_EXTREME_LINES_VALUE = PROP_EXTREME_LINES_VALUE;
const DEFAULT_ENABLED = false;
exports.DEFAULT_ENABLED = DEFAULT_ENABLED;
const DEFAULT_THRESHOLD_FACTOR = 1.5;
exports.DEFAULT_THRESHOLD_FACTOR = DEFAULT_THRESHOLD_FACTOR;
const DEFAULT_NORMALIZATION_METHOD = _normalization.Y_RESIDUALS_LINEAR;
exports.DEFAULT_NORMALIZATION_METHOD = DEFAULT_NORMALIZATION_METHOD;
const DEFAULT_OUTLIER_METHOD = _iqr.IQR;
exports.DEFAULT_OUTLIER_METHOD = DEFAULT_OUTLIER_METHOD;
const DEFAULT_EXTREME_LINES_VALUE = 1;
exports.DEFAULT_EXTREME_LINES_VALUE = DEFAULT_EXTREME_LINES_VALUE;
const defaultConfig = {
  [PROP_ENABLED]: DEFAULT_ENABLED,
  [PROP_THRESHOLD_FACTOR]: DEFAULT_THRESHOLD_FACTOR,
  [PROP_NORMALIZATION_METHOD]: DEFAULT_NORMALIZATION_METHOD,
  [PROP_OUTLIER_METHOD]: DEFAULT_OUTLIER_METHOD,
  [PROP_EXTREME_LINES]: {
    [PROP_ENABLED]: DEFAULT_ENABLED,
    [PROP_EXTREME_LINES_VALUE]: DEFAULT_EXTREME_LINES_VALUE
  }
};
exports.defaultConfig = defaultConfig;

const getExtremeLines = (percentage, xyStats) => {
  const lines = [];

  if (!(0, _isNumeric.default)(percentage)) {
    return lines;
  }

  const xExtremeValue = xyStats.xSum * (percentage / 100);
  const yExtremeValue = xyStats.ySum * (percentage / 100);
  lines.push({
    name: _index.default.t('{{percentage}}% of total x values', {
      percentage
    }),
    value: xExtremeValue,
    isVertical: true
  });
  lines.push({
    name: _index.default.t('{{percentage}}% of total y values', {
      percentage
    }),
    value: yExtremeValue
  });
  return lines;
};

const getMinMaxValue = (outlierHelper, isVertical, isMax) => {
  const prop = (isVertical ? 'y' : 'x') + (isMax ? 'Max' : 'Min');
  const extremeValue = outlierHelper.extremeLines && outlierHelper.extremeLines[isVertical ? 1 : 0].value;
  const extremeFactor = (0, _isNumber.default)(extremeValue) && isMax ? extremeValue + Math.abs(extremeValue) * 0.1 : extremeValue - Math.abs(extremeValue) * 0.1;
  return [...outlierHelper.thresholds.map(t => (0, _xyStats.getXYStats)([t.line[0], t.line[t.line.length - 1]])[prop]), extremeFactor].filter(_isNumeric.default).sort(isMax ? (a, b) => b - a : (a, b) => a - b)[0];
};

const getOutlierHelper = function (data) {
  let userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (data.length < 3) {
    return null;
  }

  const config = { ...defaultConfig,
    ...userConfig,
    [PROP_EXTREME_LINES]: { ...defaultConfig[PROP_EXTREME_LINES],
      ...userConfig[PROP_EXTREME_LINES]
    }
  };

  if (config[PROP_THRESHOLD_FACTOR] <= 0 && [_zScore.STANDARD_Z_SCORE, _modZScore.MODIFIED_Z_SCORE].includes(config[PROP_OUTLIER_METHOD])) {
    return null;
  }

  const normalizationHelper = (0, _normalization.getNormalizationHelper)(data, config.normalizationMethod);
  const options = {
    xyStats: (0, _xyStats.getXYStats)(data)
  };
  let helper;

  switch (config[PROP_OUTLIER_METHOD]) {
    case _zScore.STANDARD_Z_SCORE:
      helper = (0, _zScore.getZScoreHelper)(normalizationHelper, config, options);
      break;

    case _modZScore.MODIFIED_Z_SCORE:
      helper = (0, _modZScore.getModZScoreHelper)(normalizationHelper, config, options);
      break;

    case _iqr.IQR:
    default:
      helper = (0, _iqr.getIQRHelper)(normalizationHelper, config, options);
  }

  if (config[PROP_EXTREME_LINES][PROP_ENABLED] && (0, _isNumeric.default)(config[PROP_EXTREME_LINES][PROP_EXTREME_LINES_VALUE])) {
    helper.extremeLines = getExtremeLines(config[PROP_EXTREME_LINES][PROP_EXTREME_LINES_VALUE], options.xyStats);
  } // undefined means let highcharts decide


  const lineXMin = getMinMaxValue(helper, false, false);
  helper.xAxisMin = lineXMin < 0 && lineXMin < options.xyStats.xMin ? lineXMin : undefined;
  const lineYMin = getMinMaxValue(helper, true, false);
  helper.yAxisMin = lineYMin < 0 && lineYMin < options.xyStats.yMin ? lineYMin : undefined;
  const lineXMax = getMinMaxValue(helper, false, true);
  helper.xAxisMax = lineXMax > 0 && lineXMax > options.xyStats.xMax ? lineXMax : undefined;
  const lineYMax = getMinMaxValue(helper, true, true);
  helper.yAxisMax = lineYMax > 0 && lineYMax > options.xyStats.yMax ? lineYMax : undefined;
  return helper;
};

exports.getOutlierHelper = getOutlierHelper;