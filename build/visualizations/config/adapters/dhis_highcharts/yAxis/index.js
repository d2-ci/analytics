"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _arrayClean = _interopRequireDefault(require("d2-utilizr/lib/arrayClean"));

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _isNumeric = _interopRequireDefault(require("d2-utilizr/lib/isNumeric"));

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle"));

var _type = require("../type");

var _gauge = _interopRequireDefault(require("./gauge"));

var _layout = require("../layout");

var DEFAULT_MIN_VALUE = 0;
var DEFAULT_GRIDLINE_COLOR = '#E1E1E1';
var DEFAULT_PLOTLINE = {
  color: '#000',
  width: 2,
  zIndex: 4
};
var DEFAULT_PLOTLINE_LABEL = {
  y: -7,
  style: {
    fontSize: 13,
    textShadow: '0 0 6px #FFF'
  }
};

function getMinValue(layout) {
  return (0, _isNumeric.default)(layout.rangeAxisMinValue) ? layout.rangeAxisMinValue : DEFAULT_MIN_VALUE;
}

function getMaxValue(layout) {
  return (0, _isNumeric.default)(layout.rangeAxisMaxValue) ? layout.rangeAxisMaxValue : undefined;
}

function getSteps(layout) {
  return (0, _isNumeric.default)(layout.rangeAxisSteps) ? layout.rangeAxisSteps : undefined;
}

function getTargetLine(layout) {
  return (0, _isNumeric.default)(layout.targetLineValue) ? Object.assign({}, DEFAULT_PLOTLINE, (0, _objectClean.default)({
    value: layout.targetLineValue,
    label: (0, _isString.default)(layout.targetLineLabel) ? Object.assign({}, DEFAULT_PLOTLINE_LABEL, {
      text: layout.targetLineLabel
    }) : undefined
  })) : undefined;
}

function getBaseLine(layout) {
  return (0, _isNumeric.default)(layout.baseLineValue) ? Object.assign({}, DEFAULT_PLOTLINE, (0, _objectClean.default)({
    value: layout.baseLineValue,
    label: (0, _isString.default)(layout.baseLineLabel) ? Object.assign({}, DEFAULT_PLOTLINE_LABEL, {
      text: layout.baseLineLabel
    }) : undefined
  })) : undefined;
}

function getFormatter(layout) {
  return {
    formatter: function formatter() {
      return this.value.toFixed(layout.rangeAxisDecimals);
    }
  };
}

function getLabels(layout) {
  return (0, _isNumeric.default)(layout.rangeAxisDecimals) ? getFormatter(layout) : undefined;
}

function getDualAxes(theme) {
  return [{
    title: {
      text: 'Axis 1',
      style: {
        color: theme[0].mainColor,
        'font-weight': 700
      }
    }
  }, {
    title: {
      text: 'Axis 2',
      style: {
        color: theme[1].mainColor,
        'font-weight': 700
      }
    },
    opposite: true
  }];
}

function getDefault(layout, extraOptions) {
  var axes = [];

  if ((0, _layout.shouldHaveDualAxis)(layout)) {
    var dualAxes = getDualAxes(extraOptions.multiAxisTheme);
    axes.push(dualAxes[0], dualAxes[1]);
  } else {
    axes.push((0, _objectClean.default)({
      min: getMinValue(layout),
      max: getMaxValue(layout),
      tickAmount: getSteps(layout),
      title: (0, _getAxisTitle.default)(layout.rangeAxisLabel),
      plotLines: (0, _arrayClean.default)([getTargetLine(layout), getBaseLine(layout)]),
      gridLineColor: DEFAULT_GRIDLINE_COLOR,
      labels: getLabels(layout),
      // DHIS2-649: put first serie at the bottom of the stack
      // in this way the legend sequence matches the serie sequence
      reversedStacks: (0, _type.getIsStacked)(layout.type) ? false : true
    }));
  }

  return axes;
}

function _default(layout, series, extraOptions) {
  var yAxis;

  switch (layout.type) {
    case _type.CHART_TYPE_GAUGE:
      yAxis = (0, _gauge.default)(series, extraOptions.legendSet);
      break;

    default:
      yAxis = getDefault(layout, extraOptions);
  }

  return yAxis;
}