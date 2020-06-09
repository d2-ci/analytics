"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _arrayContains = _interopRequireDefault(require("d2-utilizr/lib/arrayContains"));

var _arrayUnique = _interopRequireDefault(require("d2-utilizr/lib/arrayUnique"));

/* eslint-disable max-params */
function arrayCleanUndefined(array) {
  return array.filter(function (item) {
    return item !== undefined;
  });
}

function arrayNullsOnly(array) {
  return (0, _arrayContains.default)(array, null) && (0, _arrayUnique.default)(array).length === 1;
}

function getEmptySeriesIndexes(series) {
  var emptyIndexes = [];
  var seriesValues;
  series[0].data.forEach(function (value, index) {
    seriesValues = [];
    series.forEach(function (seriesObj) {
      seriesValues.push(seriesObj.data[index]);
    });

    if (arrayNullsOnly(seriesValues)) {
      emptyIndexes.push(index);
    }
  });
  return emptyIndexes;
}

function getFirstLastValueIndexes(series) {
  var firstValueIndex = undefined;
  var lastValueIndex = 0;
  var data;
  var i;
  series.forEach(function (seriesObj) {
    // make a copy of the array so we can reverse it
    // without affecting the original
    data = seriesObj.data.slice();
    i = data.findIndex(function (value) {
      return value != undefined;
    });

    if (i > -1) {
      firstValueIndex = firstValueIndex !== undefined ? Math.min(firstValueIndex, i) : i;
    }

    i = data.reverse().findIndex(function (value) {
      return value != undefined;
    });

    if (i > -1) {
      lastValueIndex = Math.max(lastValueIndex, data.length - 1 - i);
    }
  });
  return {
    firstValueIndex: firstValueIndex,
    lastValueIndex: lastValueIndex
  };
}

function cleanData(data, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  var cleanedData;

  switch (hideEmptyRowItems) {
    case 'ALL':
      cleanedData = arrayCleanUndefined(data.map(function (value, index) {
        return (0, _arrayContains.default)(emptySeriesIndexes, index) ? undefined : value;
      }));
      break;

    case 'BEFORE_FIRST':
      cleanedData = data.slice(firstValueIndex);
      break;

    case 'AFTER_LAST':
      cleanedData = data.slice(0, lastValueIndex + 1);
      break;

    case 'BEFORE_FIRST_AFTER_LAST':
      cleanedData = data.slice(firstValueIndex, lastValueIndex + 1);
      break;

    default:
      cleanedData = data;
  }

  return cleanedData;
}

function getTrimmedXAxisObject(xAxis, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  return {
    xAxis: (0, _objectSpread2.default)({}, xAxis, {
      categories: cleanData(xAxis.categories, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)
    })
  };
}

function getTrimmedSeriesObject(series, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems) {
  return {
    series: series.map(function (seriesObj) {
      return (0, _objectSpread2.default)({}, seriesObj, {
        data: cleanData(seriesObj.data, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)
      });
    })
  };
}

function _default(config, hideEmptyRowItems) {
  var emptySeriesIndexes = getEmptySeriesIndexes(config.series);

  var _getFirstLastValueInd = getFirstLastValueIndexes(config.series),
      firstValueIndex = _getFirstLastValueInd.firstValueIndex,
      lastValueIndex = _getFirstLastValueInd.lastValueIndex;

  return emptySeriesIndexes.length && config.xAxis && config.series ? Object.assign({}, config, getTrimmedXAxisObject(config.xAxis, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems), getTrimmedSeriesObject(config.series, emptySeriesIndexes, firstValueIndex, lastValueIndex, hideEmptyRowItems)) : config;
}