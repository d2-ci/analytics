"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSourceResult = exports.getOperandResult = void 0;
var _constants = require("../constants.js");
var _firstLastValues = require("../periods/firstLastValues.js");
var _periodRanges = require("../periods/periodRanges.js");
var _periodTypes = require("../periods/periodTypes.js");
var _assignedPeriodTypes = require("../profile/assignedPeriodTypes.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
/* The period rules for one source and one query ({ periodType, dates, years,
 * calendar, serverVersion }): a fixed period's dates, the years the request
 * touches, and a period type of the selection */

const FULL = (0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL);
const getMissingReason = (dataPeriodType, queryPeriodType) => (0, _periodTypes.getFrequencyOrder)(queryPeriodType) < (0, _periodTypes.getFrequencyOrder)(dataPeriodType) ? _constants.REASON_PERIOD_TOO_SHORT : _constants.REASON_PERIOD_TYPE_MISMATCH;

/* FIRST and LAST data, by analytics' rule (firstLastValues.js): the value of
 * a data period inside the period, of one before it, or none. It can only be
 * told for fixed periods in a selection of fixed periods, since every period
 * of the request decides which data periods count. */
const getFirstOrLastResult = (element, dataPeriodType, query) => {
  const canDate = query.dates && query.years && (0, _periodRanges.getFixedPeriodOfTypeByDate)(dataPeriodType, query.dates.endDate, query.calendar);
  if (!canDate) {
    const takesEarlierValue = element.periodAggregationType === _constants.PERIOD_AGGREGATION_FIRST || !(0, _periodTypes.canAggregateInto)(dataPeriodType, query.periodType);
    return takesEarlierValue ? (0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL, [_constants.REASON_EARLIER_PERIOD_VALUE]) : FULL;
  }
  const valuePeriod = (0, _firstLastValues.getFirstOrLastValuePeriod)({
    periodAggregationType: element.periodAggregationType,
    periodType: dataPeriodType,
    dates: query.dates,
    years: query.years,
    calendar: query.calendar
  });
  if (!valuePeriod) {
    return (0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_NO_EARLIER_PERIOD_VALUE]);
  }
  return valuePeriod.startDate >= query.dates.startDate ? FULL : (0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL, [_constants.REASON_EARLIER_PERIOD_VALUE]);
};

/* One element of one data set, for one query. When the data can't add up
 * into the period, averaged values are repeated into it, and other data
 * gives none. FIRST and LAST follow their own rule. */
const getElementResult = (element, dataPeriodType, query) => {
  if (element.periodAggregationType === _constants.PERIOD_AGGREGATION_FIRST || element.periodAggregationType === _constants.PERIOD_AGGREGATION_LAST) {
    return getFirstOrLastResult(element, dataPeriodType, query);
  }
  if ((0, _periodTypes.canAggregateInto)(dataPeriodType, query.periodType)) {
    return FULL;
  }
  return element.periodAggregationType === _constants.PERIOD_AGGREGATION_AVERAGE ? (0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL, [_constants.REASON_REPEATED_VALUE]) : (0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [getMissingReason(dataPeriodType, query.periodType)]);
};

// A reporting rate asked for a shorter period gives a meaningless value
const getReportingRateResult = (dataPeriodType, query) => (0, _periodTypes.canAggregateInto)(dataPeriodType, query.periodType) ? FULL : (0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_REPORTING_RATE_TOO_SHORT]);

/* Events and enrollments are placed by their own dates: they fit any period.
 * VERSION-TOGGLE: remove the check when 43 is the lowest supported version.
 * Before 2.43, analytics can't query a program indicator without period
 * boundaries (E7145). */
const getProgramResult = (source, query) => {
  var _query$serverVersion;
  const missingBoundariesUnsupported = source.missingPeriodBoundaries && ((_query$serverVersion = query.serverVersion) === null || _query$serverVersion === void 0 ? void 0 : _query$serverVersion.major) === 2 && query.serverVersion.minor < 43;
  return missingBoundariesUnsupported ? (0, _combineResults.getUnknownResult)(_constants.REASON_UNSUPPORTED_VERSION) : FULL;
};
const getSourceResult = (source, query) => {
  if ((0, _sources.isProgramSource)(source)) {
    return getProgramResult(source, query);
  }
  const dataPeriodType = (0, _assignedPeriodTypes.getSourcePeriodType)(source);
  const results = source.elements.map(element => getElementResult(element, dataPeriodType, query));
  if (source.reportingRate) {
    results.push(getReportingRateResult(dataPeriodType, query));
  }
  return (0, _combineResults.combineResults)(results);
};
exports.getSourceResult = getSourceResult;
const getOperandResult = ({
  element,
  reportingRate,
  sources
}, query) => {
  if (element) {
    return (0, _combineResults.combineAddedUpResults)(sources.map(source => getElementResult(element, (0, _assignedPeriodTypes.getSourcePeriodType)(source), query)));
  }
  return reportingRate ? getReportingRateResult((0, _assignedPeriodTypes.getSourcePeriodType)(sources[0]), query) : getProgramResult(sources[0], query);
};
exports.getOperandResult = getOperandResult;