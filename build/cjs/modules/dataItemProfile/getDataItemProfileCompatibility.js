"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "COMPATIBILITY_FULL", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.COMPATIBILITY_FULL;
  }
});
Object.defineProperty(exports, "COMPATIBILITY_NONE", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.COMPATIBILITY_NONE;
  }
});
Object.defineProperty(exports, "COMPATIBILITY_PARTIAL", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.COMPATIBILITY_PARTIAL;
  }
});
Object.defineProperty(exports, "COMPATIBILITY_UNKNOWN", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.COMPATIBILITY_UNKNOWN;
  }
});
exports.REASON_NOTHING_TO_CARRY = exports.REASON_CARRIED = exports.REASON_AVERAGED = void 0;
Object.defineProperty(exports, "REASON_OPERAND_EMPTY", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.REASON_OPERAND_EMPTY;
  }
});
Object.defineProperty(exports, "REASON_OPERAND_PARTIAL", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.REASON_OPERAND_PARTIAL;
  }
});
exports.REASON_OTHER_TYPE = void 0;
Object.defineProperty(exports, "REASON_PROFILE_UNKNOWN", {
  enumerable: true,
  get: function () {
    return _compatibilityStatuses.REASON_PROFILE_UNKNOWN;
  }
});
exports.getDataItemProfileCompatibility = exports.REASON_UNSUPPORTED_VERSION = exports.REASON_UNKNOWN_PERIOD = exports.REASON_SHORTER = exports.REASON_SETTING_MISSING = exports.REASON_REPORTING_RATE = void 0;
var _carriedValues = require("./carriedValues.js");
var _compatibilityStatuses = require("./compatibilityStatuses.js");
var _getDataItemOrgUnitCompatibility = require("./getDataItemOrgUnitCompatibility.js");
var _getDataItemProfile = require("./getDataItemProfile.js");
var _periodTypeRelations = require("./periodTypeRelations.js");
var _periodTypes = require("./periodTypes.js");
// A value, but not measured for the period
const REASON_AVERAGED = exports.REASON_AVERAGED = 'AVERAGED';
const REASON_CARRIED = exports.REASON_CARRIED = 'CARRIED';
// No real value from some or all of the data
const REASON_SHORTER = exports.REASON_SHORTER = 'SHORTER';
const REASON_OTHER_TYPE = exports.REASON_OTHER_TYPE = 'OTHER_TYPE';
const REASON_REPORTING_RATE = exports.REASON_REPORTING_RATE = 'REPORTING_RATE';
const REASON_NOTHING_TO_CARRY = exports.REASON_NOTHING_TO_CARRY = 'NOTHING_TO_CARRY';
// Can't tell
const REASON_UNKNOWN_PERIOD = exports.REASON_UNKNOWN_PERIOD = 'UNKNOWN_PERIOD';
const REASON_SETTING_MISSING = exports.REASON_SETTING_MISSING = 'SETTING_MISSING';
const REASON_UNSUPPORTED_VERSION = exports.REASON_UNSUPPORTED_VERSION = 'UNSUPPORTED_VERSION';
const REASON_ORDER = [..._compatibilityStatuses.OPERAND_REASONS, REASON_SHORTER, REASON_OTHER_TYPE, REASON_REPORTING_RATE, REASON_NOTHING_TO_CARRY, REASON_AVERAGED, REASON_CARRIED, _compatibilityStatuses.REASON_PROFILE_UNKNOWN, REASON_UNKNOWN_PERIOD, REASON_SETTING_MISSING, REASON_UNSUPPORTED_VERSION, ..._getDataItemOrgUnitCompatibility.ORG_UNIT_REASON_ORDER.filter(reason => !_compatibilityStatuses.OPERAND_REASONS.includes(reason))];

// Most severe first
const SEVERITY = [_compatibilityStatuses.COMPATIBILITY_NONE, _compatibilityStatuses.COMPATIBILITY_PARTIAL, _compatibilityStatuses.COMPATIBILITY_UNKNOWN, _compatibilityStatuses.COMPATIBILITY_FULL];
const result = (status, reasons = []) => ({
  status,
  reasons
});
const getMostSevere = statuses => {
  var _SEVERITY$find;
  return (_SEVERITY$find = SEVERITY.find(status => statuses.includes(status))) !== null && _SEVERITY$find !== void 0 ? _SEVERITY$find : null;
};
const unionOfReasons = results => REASON_ORDER.filter(reason => results.some(({
  reasons
}) => reasons.includes(reason)));

// The most severe status, with every reason
const combine = results => {
  var _getMostSevere;
  return result((_getMostSevere = getMostSevere(results.map(({
    status
  }) => status))) !== null && _getMostSevere !== void 0 ? _getMostSevere : _compatibilityStatuses.COMPATIBILITY_FULL, unionOfReasons(results));
};
const getMissingReason = (dataPeriodType, queryPeriodType) => (0, _periodTypes.getFrequencyOrder)(queryPeriodType) < (0, _periodTypes.getFrequencyOrder)(dataPeriodType) ? REASON_SHORTER : REASON_OTHER_TYPE;

/* FIRST and LAST data, by analytics' carry rule (carriedValues.js): the
 * value of a data period inside the period, of one before it, or none. It can
 * only be told for fixed periods in a selection of fixed periods, since every
 * period of the request decides which data periods count. */
const getFirstOrLastResult = (element, dataPeriodType, query) => {
  const canDate = query.dates && query.years && (0, _periodTypeRelations.getFixedPeriodOfTypeByDate)(dataPeriodType, query.dates.endDate, query.calendar);
  if (!canDate) {
    const carries = element.periodAggregationType === _getDataItemProfile.PERIOD_AGGREGATION_FIRST || !(0, _periodTypeRelations.aggregatesInto)(dataPeriodType, query.periodType);
    return carries ? result(_compatibilityStatuses.COMPATIBILITY_FULL, [REASON_CARRIED]) : result(_compatibilityStatuses.COMPATIBILITY_FULL);
  }
  const source = (0, _carriedValues.getCarriedSource)({
    periodAggregationType: element.periodAggregationType,
    periodType: dataPeriodType,
    dates: query.dates,
    years: query.years,
    calendar: query.calendar
  });
  if (!source) {
    return result(_compatibilityStatuses.COMPATIBILITY_NONE, [REASON_NOTHING_TO_CARRY]);
  }
  return source.startDate >= query.dates.startDate ? result(_compatibilityStatuses.COMPATIBILITY_FULL) : result(_compatibilityStatuses.COMPATIBILITY_FULL, [REASON_CARRIED]);
};

/* One element of one data set, asked for one query. When the data can't add
 * up into the period, averaged values are repeated into it, and other data
 * gives none. FIRST and LAST follow their own rule. */
const getElementResult = (element, dataPeriodType, query) => {
  if (element.periodAggregationType === _getDataItemProfile.PERIOD_AGGREGATION_FIRST || element.periodAggregationType === _getDataItemProfile.PERIOD_AGGREGATION_LAST) {
    return getFirstOrLastResult(element, dataPeriodType, query);
  }
  if ((0, _periodTypeRelations.aggregatesInto)(dataPeriodType, query.periodType)) {
    return result(_compatibilityStatuses.COMPATIBILITY_FULL);
  }
  return element.periodAggregationType === _getDataItemProfile.PERIOD_AGGREGATION_AVERAGE ? result(_compatibilityStatuses.COMPATIBILITY_FULL, [REASON_AVERAGED]) : result(_compatibilityStatuses.COMPATIBILITY_NONE, [getMissingReason(dataPeriodType, query.periodType)]);
};

// A reporting rate asked for a shorter period gives a meaningless value
const getReportingRateResult = (dataPeriodType, queryPeriodType) => (0, _periodTypeRelations.aggregatesInto)(dataPeriodType, queryPeriodType) ? result(_compatibilityStatuses.COMPATIBILITY_FULL) : result(_compatibilityStatuses.COMPATIBILITY_NONE, [REASON_REPORTING_RATE]);
const getSourceResult = (source, query) => {
  const dataPeriodType = (0, _getDataItemProfile.getSourcePeriodType)(source);
  const results = source.elements.map(element => getElementResult(element, dataPeriodType, query));
  if (source.reportingRate) {
    results.push(getReportingRateResult(dataPeriodType, query.periodType));
  }
  return combine(results);
};

/* The values of one element over its data sets add up: some missing is
 * partial */
const combineDataSets = results => {
  const statuses = results.map(({
    status
  }) => status);
  const reasons = unionOfReasons(results);
  if (statuses.every(status => status === _compatibilityStatuses.COMPATIBILITY_NONE)) {
    return result(_compatibilityStatuses.COMPATIBILITY_NONE, reasons);
  }
  return statuses.includes(_compatibilityStatuses.COMPATIBILITY_NONE) ? result(_compatibilityStatuses.COMPATIBILITY_PARTIAL, reasons) : result(_compatibilityStatuses.COMPATIBILITY_FULL, reasons);
};

/* The item's operands: each element over its data sets, and each reporting
 * rate. An expression needs them all: the most severe one decides. */
const getItemResult = (profile, query) => {
  const elements = new Map();
  const operands = [];
  profile.sources.forEach(source => {
    const dataPeriodType = (0, _getDataItemProfile.getSourcePeriodType)(source);
    source.elements.forEach(element => {
      var _elements$get;
      const key = `${element.id}:${element.aggregationType}`;
      const results = (_elements$get = elements.get(key)) !== null && _elements$get !== void 0 ? _elements$get : [];
      results.push(getElementResult(element, dataPeriodType, query));
      elements.set(key, results);
    });
    if (source.reportingRate) {
      operands.push(getReportingRateResult(dataPeriodType, query.periodType));
    }
  });
  elements.forEach(results => operands.push(combineDataSets(results)));
  return (0, _compatibilityStatuses.withOperandReason)(combine(operands), operands.length);
};
const isSameResult = (a, b) => a.status === b.status && a.reasons.join() === b.reasons.join();

/* A relative period can be of several types: a result holds only when they
 * all agree. A type the server version can't answer gives unknown. */
const agreeOn = (queries, getResult) => {
  const results = queries.map(query => query.supported ? getResult(query) : result(_compatibilityStatuses.COMPATIBILITY_UNKNOWN, [REASON_UNSUPPORTED_VERSION]));
  return results.every(candidate => isSameResult(candidate, results[0])) ? results[0] : result(_compatibilityStatuses.COMPATIBILITY_UNKNOWN, [REASON_SETTING_MISSING]);
};

// Whether the period starts and ends on the edges of the data's own periods
const getAlignsWithData = (profile, {
  periodType,
  dates,
  calendar
}) => {
  const dataPeriodTypes = profile.sources.map(_getDataItemProfile.getSourcePeriodType).filter(dataPeriodType => (0, _periodTypeRelations.aggregatesInto)(dataPeriodType, periodType));
  if (!dates || !dataPeriodTypes.length) {
    return null;
  }
  const aligned = dataPeriodTypes.map(dataPeriodType => (0, _periodTypeRelations.periodNestsIn)(dates, dataPeriodType, calendar));
  if (aligned.includes(false)) {
    return false;
  }
  return aligned.includes(null) ? null : true;
};
const getDataSetId = ({
  dataSet
}) => {
  var _dataSet$id;
  return (_dataSet$id = dataSet === null || dataSet === void 0 ? void 0 : dataSet.id) !== null && _dataSet$id !== void 0 ? _dataSet$id : null;
};

/* The calendar years the selection's periods touch, as one request would, or
 * null when a period has no dates (a relative period, a period type) */
const getSelectionYears = (periods, calendar) => {
  const dates = periods.map(period => (0, _periodTypes.getPeriodTypeOfPeriodId)(period) ? (0, _periodTypeRelations.getPeriodDates)(period, calendar) : null);
  if (!dates.length || dates.includes(null)) {
    return null;
  }
  return [...new Set(dates.flatMap(_carriedValues.getYearsTouched))].sort((a, b) => a - b);
};
const getUnknownPeriodResult = (profile, {
  period,
  periodTypes,
  reason
}) => ({
  id: period,
  periodTypes,
  ...result(_compatibilityStatuses.COMPATIBILITY_UNKNOWN, [reason]),
  alignsWithData: null,
  sources: profile.sources.map(source => ({
    dataSetId: getDataSetId(source),
    ...result(_compatibilityStatuses.COMPATIBILITY_UNKNOWN, [reason])
  }))
});
const getPeriodResult = (profile, period, options) => {
  const periodTypes = (0, _periodTypes.getCandidatePeriodTypes)(period, options);
  if (profile.unknown) {
    return getUnknownPeriodResult(profile, {
      period,
      periodTypes,
      reason: _compatibilityStatuses.REASON_PROFILE_UNKNOWN
    });
  }
  if (!periodTypes.length) {
    return getUnknownPeriodResult(profile, {
      period,
      periodTypes,
      reason: REASON_UNKNOWN_PERIOD
    });
  }
  const dates = (0, _periodTypes.getPeriodTypeOfPeriodId)(period) ? (0, _periodTypeRelations.getPeriodDates)(period, options.calendar) : null;
  const queries = periodTypes.map(periodType => ({
    periodType,
    dates,
    years: options.selectionYears,
    calendar: options.calendar,
    supported: (0, _periodTypes.isPeriodTypeSupported)(periodType, options.serverVersion)
  }));
  return {
    id: period,
    periodTypes,
    ...agreeOn(queries, query => getItemResult(profile, query)),
    alignsWithData: queries.length === 1 ? getAlignsWithData(profile, queries[0]) : null,
    sources: profile.sources.map(source => ({
      dataSetId: getDataSetId(source),
      ...agreeOn(queries, query => getSourceResult(source, query))
    }))
  };
};

/**
 * Whether a selection suits a data item, from its getDataItemProfile: for
 * each period, whether analytics will return the item's values.
 *
 * The compatibility status is `full`, `partial`, `none` or `unknown`:
 * compatible with all, some or none of the item's data sets. `reasons` say
 * why, and on a full result whether values are averaged or carried
 * rather than measured for the period. Results are given per period, per
 * source (aligned with `profile.sources`) and overall (the most severe, with
 * every reason).
 *
 * `selection.periods` are fixed ids, relative ids or period types. `options`
 * sets the type of relative weeks and financial years (`weeklyPeriodType`,
 * `financialYearPeriodType`), the `calendar` for dates, and the
 * `serverVersion` ({ major, minor }), since some versions can't answer some
 * period types. The periods are taken as one request: for FIRST and LAST data,
 * the years they touch decide which data periods count (other items of the
 * request, like a `.periodOffset()` operand, can add years and aren't seen).
 *
 * `selection.orgUnits` are DV's org unit items (unit ids, LEVEL-n, the
 * user's units), judged from `options.orgUnitCoverage` (fetchOrgUnitCoverage)
 * by getDataItemOrgUnitCompatibility: one result each, in `orgUnits`. Periods
 * and places are judged apart: a data set assigned to some places only, at
 * another period type than the others, isn't judged by place yet.
 */
const getDataItemProfileCompatibility = (profile, {
  periods = [],
  orgUnits = []
} = {}, options = {}) => {
  const selectionYears = getSelectionYears(periods, options.calendar);
  const results = periods.map(period => getPeriodResult(profile, period, {
    ...options,
    selectionYears
  }));
  const orgUnitResults = orgUnits.length ? (0, _getDataItemOrgUnitCompatibility.getDataItemOrgUnitCompatibility)(profile, orgUnits, options.orgUnitCoverage) : [];
  const all = [...results, ...orgUnitResults];
  const overall = all.length ? combine(all) : {
    status: null,
    reasons: []
  };
  return {
    ...overall,
    sources: profile.sources.map((source, i) => ({
      dataSetId: getDataSetId(source),
      ...(results.length ? combine(results.map(({
        sources
      }) => sources[i])) : {
        status: null,
        reasons: []
      })
    })),
    periods: results,
    ...(orgUnits.length && {
      orgUnits: orgUnitResults
    })
  };
};
exports.getDataItemProfileCompatibility = getDataItemProfileCompatibility;