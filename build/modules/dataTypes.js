"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultGroupId = defaultGroupId;
exports.defaultGroupDetail = defaultGroupDetail;
exports.DEFAULT_DATATYPE_ID = exports.dataTypes = exports.DETAIL = exports.TOTALS = exports.ALL_ID = exports.CHART_AGGREGATE_AGGREGATABLE_TYPES = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _dataSets = require("../modules/dataSets");

var _dataTypes;

var CHART_AGGREGATE_AGGREGATABLE_TYPES = ['BOOLEAN', 'TRUE_ONLY', 'INTEGER', 'INTEGER_POSITIVE', 'INTEGER_NEGATIVE', 'INTEGER_ZERO_OR_POSITIVE', 'NUMBER', 'UNIT_INTERVAL', 'PERCENTAGE'];
exports.CHART_AGGREGATE_AGGREGATABLE_TYPES = CHART_AGGREGATE_AGGREGATABLE_TYPES;
var ALL_ID = 'ALL';
exports.ALL_ID = ALL_ID;
var INDICATORS = 'indicators';
var DATA_ELEMENTS = 'dataElements';
var DATA_SETS = 'dataSets';
var EVENT_DATA_ITEMS = 'eventDataItems';
var PROGRAM_INDICATORS = 'programIndicators';
var TOTALS = 'totals';
exports.TOTALS = TOTALS;
var DETAIL = 'detail';
exports.DETAIL = DETAIL;

var getProgramText = function getProgramText() {
  return _d2I18n.default.t('Program');
};

var dataTypes = (_dataTypes = {}, (0, _defineProperty2.default)(_dataTypes, INDICATORS, {
  id: INDICATORS,
  name: function name() {
    return _d2I18n.default.t('Indicators');
  },
  groupLabel: function groupLabel() {
    return _d2I18n.default.t('Select indicator group');
  },
  defaultGroup: {
    id: ALL_ID,
    name: function name() {
      return _d2I18n.default.t('[ All groups ]');
    }
  },
  groupDetail: false
}), (0, _defineProperty2.default)(_dataTypes, DATA_ELEMENTS, {
  id: DATA_ELEMENTS,
  name: function name() {
    return _d2I18n.default.t('Data elements');
  },
  groupLabel: function groupLabel() {
    return _d2I18n.default.t('Select data element group');
  },
  defaultGroup: {
    id: ALL_ID,
    name: function name() {
      return _d2I18n.default.t('[ All data elements ]');
    }
  },
  groupDetail: {
    default: TOTALS
  }
}), (0, _defineProperty2.default)(_dataTypes, DATA_SETS, {
  id: DATA_SETS,
  name: function name() {
    return _d2I18n.default.t('Data sets');
  },
  groupLabel: function groupLabel() {
    return _d2I18n.default.t('Select data sets');
  },
  defaultGroup: {
    id: ALL_ID,
    name: function name() {
      return _d2I18n.default.t('[ All metrics ]');
    }
  },
  groupDetail: false,
  augmentAlternatives: function augmentAlternatives(alternatives, groupId) {
    return getReportingRates(alternatives, groupId);
  }
}), (0, _defineProperty2.default)(_dataTypes, EVENT_DATA_ITEMS, {
  id: EVENT_DATA_ITEMS,
  name: function name() {
    return _d2I18n.default.t('Event data items');
  },
  groupLabel: getProgramText,
  placeholder: function placeholder() {
    return _react.default.createElement("span", null, _d2I18n.default.t('Select a program'));
  },
  defaultGroup: null,
  groupDetail: false
}), (0, _defineProperty2.default)(_dataTypes, PROGRAM_INDICATORS, {
  id: PROGRAM_INDICATORS,
  name: function name() {
    return _d2I18n.default.t('Program indicators');
  },
  groupLabel: getProgramText,
  placeholder: function placeholder() {
    return _react.default.createElement("span", null, _d2I18n.default.t('Select a program'));
  },
  defaultGroup: null,
  groupDetail: false
}), _dataTypes);
exports.dataTypes = dataTypes;

function defaultGroupId(dataType) {
  return dataTypes[dataType].defaultGroup ? dataTypes[dataType].defaultGroup.id : '';
}

function defaultGroupDetail(dataType) {
  return dataTypes[dataType].groupDetail ? dataTypes[dataType].groupDetail.default : '';
}

var DEFAULT_DATATYPE_ID = INDICATORS;
exports.DEFAULT_DATATYPE_ID = DEFAULT_DATATYPE_ID;

var getReportingRates = function getReportingRates(contents, groupSetId) {
  var dataSets = [];

  if (groupSetId === ALL_ID) {
    _dataSets.DATA_SETS_CONSTANTS.forEach(function (reportingRate) {
      dataSets = [].concat((0, _toConsumableArray2.default)(dataSets), (0, _toConsumableArray2.default)(contents.map(function (dataSet) {
        return concatReportingRate(dataSet, reportingRate);
      })));
    });
  } else {
    var reportingRateIndex = _dataSets.DATA_SETS_CONSTANTS.find(function (item) {
      return item.id === groupSetId;
    });

    dataSets = contents.map(function (dataSet) {
      return concatReportingRate(dataSet, reportingRateIndex);
    });
  }

  return dataSets;
};

var concatReportingRate = function concatReportingRate(dataSet, reportingRate) {
  return {
    id: "".concat(dataSet.id, ".").concat(reportingRate.id),
    name: "".concat(dataSet.name, " (").concat(reportingRate.name(), ")")
  };
};