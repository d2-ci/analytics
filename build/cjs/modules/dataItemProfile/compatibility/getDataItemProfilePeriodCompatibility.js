"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItemProfilePeriodCompatibility = void 0;
var _constants = require("../constants.js");
var _firstLastValues = require("../periods/firstLastValues.js");
var _periodRanges = require("../periods/periodRanges.js");
var _periodTypes = require("../periods/periodTypes.js");
var _assignedPeriodTypes = require("../profile/assignedPeriodTypes.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
var _periodSourceResults = require("./periodSourceResults.js");
// An expression needs all its operands: the most severe one decides
const getItemResult = (operands, query) => (0, _combineResults.combineOperandResults)(operands.map(operand => (0, _periodSourceResults.getOperandResult)(operand, query)));
const isSameResult = (a, b) => a.status === b.status && a.reasons.join() === b.reasons.join();

/* A relative period can be of several types: a result holds only when they
 * all agree. A type the server version can't answer gives unknown. */
const agreeOn = (queries, getResult) => {
  const results = queries.map(query => query.supported ? getResult(query) : (0, _combineResults.getUnknownResult)(_constants.REASON_UNSUPPORTED_VERSION));
  return results.every(candidate => isSameResult(candidate, results[0])) ? results[0] : (0, _combineResults.getUnknownResult)(_constants.REASON_SETTING_MISSING);
};

// Whether the period starts and ends on the edges of the data's own periods
const getAlignsWithData = (profile, {
  periodType,
  dates,
  calendar
}) => {
  const dataPeriodTypes = profile.sources.map(_assignedPeriodTypes.getSourcePeriodType).filter(dataPeriodType => (0, _periodTypes.canAggregateInto)(dataPeriodType, periodType));
  if (!dates || !dataPeriodTypes.length) {
    return null;
  }
  const aligned = new Set(dataPeriodTypes.map(dataPeriodType => (0, _periodRanges.isAlignedWithPeriodType)(dates, dataPeriodType, calendar)));
  if (aligned.has(false)) {
    return false;
  }
  return aligned.has(null) ? null : true;
};

/* The calendar years the selection's periods touch, as one request would, or
 * null when a period has no dates (a relative period, a period type) */
const getSelectionYears = (periods, calendar) => {
  const dates = periods.map(period => (0, _periodTypes.getPeriodTypeOfPeriodId)(period) ? (0, _periodRanges.getPeriodDates)(period, calendar) : null);
  if (!dates.length || dates.includes(null)) {
    return null;
  }
  return [...new Set(dates.flatMap(_firstLastValues.getYearsTouched))].sort((a, b) => a - b);
};
const getUnknownPeriodResult = (profile, {
  period,
  periodTypes,
  reason
}) => ({
  id: period,
  periodTypes,
  ...(0, _combineResults.getUnknownResult)(reason),
  alignsWithData: null,
  sources: profile.sources.map(source => ({
    sourceId: (0, _sources.getSourceId)(source),
    ...(0, _combineResults.getUnknownResult)(reason)
  }))
});
const getPeriodResult = (profile, period, options) => {
  const periodTypes = (0, _periodTypes.getCandidatePeriodTypes)(period, options);
  if (profile.unknown || !periodTypes.length) {
    return getUnknownPeriodResult(profile, {
      period,
      periodTypes,
      reason: profile.unknown ? _constants.REASON_PROFILE_UNKNOWN : _constants.REASON_UNKNOWN_PERIOD
    });
  }
  const dates = (0, _periodTypes.getPeriodTypeOfPeriodId)(period) ? (0, _periodRanges.getPeriodDates)(period, options.calendar) : null;
  const queries = periodTypes.map(periodType => ({
    periodType,
    dates,
    years: options.selectionYears,
    calendar: options.calendar,
    serverVersion: options.serverVersion,
    supported: (0, _periodTypes.isPeriodTypeSupported)(periodType, options.serverVersion)
  }));
  const operands = (0, _sources.getItemOperands)(profile);
  return {
    id: period,
    periodTypes,
    ...agreeOn(queries, query => getItemResult(operands, query)),
    alignsWithData: queries.length === 1 ? getAlignsWithData(profile, queries[0]) : null,
    sources: profile.sources.map(source => ({
      sourceId: (0, _sources.getSourceId)(source),
      ...agreeOn(queries, query => (0, _periodSourceResults.getSourceResult)(source, query))
    }))
  };
};

/**
 * Whether the periods of a selection suit a data item, from its profile: for
 * each period, `{ id, periodTypes, status, reasons, alignsWithData, sources }`,
 * with a result per source (aligned with `profile.sources`).
 *
 * `periods` are fixed ids, relative ids or period types. `options` sets the
 * type of relative weeks and financial years (`weeklyPeriodType`,
 * `financialYearPeriodType`), the `calendar` for dates, and the
 * `serverVersion` ({ major, minor }), since some versions can't answer some
 * period types. The periods are taken as one request: for FIRST and LAST
 * data, the years they touch decide which data periods count (other items of
 * the request, like a `.periodOffset()` operand, can add years and aren't
 * seen).
 */
const getDataItemProfilePeriodCompatibility = (profile, {
  periods = [],
  ...options
} = {}) => {
  const selectionYears = getSelectionYears(periods, options.calendar);
  return periods.map(period => getPeriodResult(profile, period, {
    ...options,
    selectionYears
  }));
};
exports.getDataItemProfilePeriodCompatibility = getDataItemProfilePeriodCompatibility;