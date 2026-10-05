"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItemProfilePeriodCompatibility = void 0;
var _constants = require("../constants.js");
var _firstLastValues = require("../periods/firstLastValues.js");
var _periodRanges = require("../periods/periodRanges.js");
var _periodTypes = require("../periods/periodTypes.js");
var _relativePeriodRanges = require("../periods/relativePeriodRanges.js");
var _assignedPeriodTypes = require("../profile/assignedPeriodTypes.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
var _periodSourceResults = require("./periodSourceResults.js");
// The operands' results, combined as the item's expression says
const getItemResult = ({
  expression,
  operands
}, query) => {
  const results = new Map(operands.map(operand => [operand.key, (0, _periodSourceResults.getOperandResult)(operand, query)]));
  return (0, _combineResults.combineExpressionResults)(expression, [...results.keys()], key => results.get(key));
};
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

/* The date ranges a period covers for one of its types: a fixed period's,
 * the fixed periods of a relative one, none for a period type */
const getPeriodRanges = (period, periodType, options) => {
  if ((0, _periodTypes.getPeriodTypeOfPeriodId)(period)) {
    const dates = (0, _periodRanges.getPeriodDates)(period, options.calendar);
    return dates ? [dates] : null;
  }
  return (0, _periodTypes.isPeriodType)(period) ? null : (0, _relativePeriodRanges.getRelativePeriodFixedPeriods)(period, periodType, options);
};

/* The calendar years the selection's periods touch, as one request would, or
 * null when a fixed or relative period can't be dated. Period types aren't
 * periods of a request: they don't count. */
const getSelectionYears = (periods, options) => {
  const ranges = periods.filter(period => !(0, _periodTypes.isPeriodType)(period)).flatMap(period => (0, _periodTypes.getCandidatePeriodTypes)(period, options).map(periodType => getPeriodRanges(period, periodType, options)));
  if (!ranges.length || ranges.includes(null)) {
    return null;
  }
  return [...new Set(ranges.flat().flatMap(_firstLastValues.getYearsTouched))].sort((a, b) => a - b);
};

/* A result for each range of the query, added up: a relative period is
 * judged over its fixed periods. Without ranges, by type alone. */
const judgeRanges = (query, getResult) => query.ranges ? (0, _combineResults.combineAddedUpResults)(query.ranges.map(dates => getResult({
  ...query,
  dates
}))) : getResult({
  ...query,
  dates: null
});
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
  var _queries$0$ranges;
  const periodTypes = (0, _periodTypes.getCandidatePeriodTypes)(period, options);
  if (profile.unknown || !periodTypes.length) {
    return getUnknownPeriodResult(profile, {
      period,
      periodTypes,
      reason: profile.unknown ? _constants.REASON_PROFILE_UNKNOWN : _constants.REASON_UNKNOWN_PERIOD
    });
  }
  const queries = periodTypes.map(periodType => ({
    periodType,
    ranges: getPeriodRanges(period, periodType, options),
    years: options.selectionYears,
    calendar: options.calendar,
    serverVersion: options.serverVersion,
    supported: (0, _periodTypes.isPeriodTypeSupported)(periodType, options.serverVersion)
  }));
  const item = {
    expression: profile.expression,
    operands: (0, _sources.getItemOperands)(profile)
  };
  const isFixed = Boolean((0, _periodTypes.getPeriodTypeOfPeriodId)(period));
  return {
    id: period,
    periodTypes,
    ...agreeOn(queries, query => judgeRanges(query, rangeQuery => getItemResult(item, rangeQuery))),
    alignsWithData: isFixed ? getAlignsWithData(profile, {
      ...queries[0],
      dates: (_queries$0$ranges = queries[0].ranges) === null || _queries$0$ranges === void 0 ? void 0 : _queries$0$ranges[0]
    }) : null,
    sources: profile.sources.map(source => ({
      sourceId: (0, _sources.getSourceId)(source),
      ...agreeOn(queries, query => judgeRanges(query, rangeQuery => (0, _periodSourceResults.getSourceResult)(source, rangeQuery)))
    }))
  };
};

/**
 * Whether the periods of a selection suit a data item, from its profile: for
 * each period, `{ id, periodTypes, status, reasons, alignsWithData, sources }`,
 * with a result per source (aligned with `profile.sources`).
 *
 * `periods` are fixed ids, relative ids or period types. A relative period is
 * judged over the fixed periods it covers on `options.relativePeriodDate`
 * (an ISO date, today by default). `options` also sets the type of relative
 * weeks and financial years (`weeklyPeriodType`, `financialYearPeriodType`),
 * the `calendar` for dates, and the `serverVersion` ({ major, minor }), since
 * some versions can't answer some period types. The periods are taken as one
 * request: for FIRST and LAST data, the years they touch decide which data
 * periods count (other items of the request, like a `.periodOffset()`
 * operand, can add years and aren't seen). A period type is judged by type
 * alone.
 */
const getDataItemProfilePeriodCompatibility = (profile, {
  periods = []
} = {}, options = {}) => {
  const selectionYears = getSelectionYears(periods, options);
  return periods.map(period => getPeriodResult(profile, period, {
    ...options,
    selectionYears
  }));
};
exports.getDataItemProfilePeriodCompatibility = getDataItemProfilePeriodCompatibility;