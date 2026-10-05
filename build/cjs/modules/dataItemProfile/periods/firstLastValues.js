"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYearsTouched = exports.getFirstOrLastValuePeriod = void 0;
var _constants = require("../constants.js");
var _calendarDates = require("./calendarDates.js");
var _memoize = require("./memoize.js");
var _periodRanges = require("./periodRanges.js");
/* How analytics answers FIRST and LAST data (checked by the test tool on 2.40
 * to 2.44): a data period counts when it ended by the end of the period asked
 * for, and its year is one of the calendar years the request's periods touch.
 * FIRST takes the earliest that counts, LAST the latest; none gives no value.
 * So FIRST in July gives January's value, and LAST on 1 January gives
 * nothing. */

/* A data period's year is the year it starts in, except for weeks: the year
 * in the id. 2025W1, from 30 December 2024, is a 2025 period, but 2025BiW1,
 * from the same day, and 2025NovQ1, from November 2024, are 2024 periods. */
const getDataPeriodYear = (period, periodType) => periodType.startsWith('Weekly') ? Number(period.id.slice(0, 4)) : (0, _calendarDates.getYear)(period.startDate);

// Enough to reach the last periods of the next year in the request, after a jump
const MAX_STEPS = 20;
const getLastPeriodEndingBy = (periodType, date, calendar) => {
  const holding = (0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, date, calendar);
  if (!holding || holding.endDate <= date) {
    return holding;
  }
  return (0, _periodRanges.getPreviousPeriod)(periodType, holding, calendar);
};

/* Over a gap in the years, jump to the period holding 1 January after the
 * highest year left: it, or the one before it, starts in that year. Periods
 * of one type don't overlap, so one that starts earlier also ended by then. */
const getPeriodBefore = (period, {
  periodType,
  highestYear,
  calendar
}) => {
  const jumped = (0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, `${(0, _calendarDates.pad)(highestYear + 1, 4)}-01-01`, calendar);
  return jumped && jumped.startDate < period.startDate ? jumped : (0, _periodRanges.getPreviousPeriod)(periodType, period, calendar);
};
const getLatestCounting = ({
  periodType,
  dates,
  years,
  calendar
}) => {
  let period = getLastPeriodEndingBy(periodType, dates.endDate, calendar);
  for (let step = 0; period && step < MAX_STEPS; step++) {
    const year = getDataPeriodYear(period, periodType);
    if (years.includes(year)) {
      return period;
    }
    const lowerYears = years.filter(otherYear => otherYear < year);
    if (!lowerYears.length) {
      return null;
    }
    period = getPeriodBefore(period, {
      periodType,
      highestYear: Math.max(...lowerYears),
      calendar
    });
  }
  return null;
};
const getEarliestCounting = ({
  periodType,
  dates,
  years,
  calendar
}) => {
  const firstYear = Math.min(...years);
  let period = (0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, `${(0, _calendarDates.pad)(firstYear, 4)}-01-01`, calendar);
  for (let step = 0; period && step < MAX_STEPS; step++) {
    if (getDataPeriodYear(period, periodType) >= firstYear) {
      return period.endDate <= dates.endDate ? period : null;
    }
    period = (0, _periodRanges.getNextPeriod)(periodType, period, calendar);
  }
  return null;
};

/**
 * The data period whose value analytics returns for FIRST or LAST data of
 * `periodType`, in a period with `dates`, when the request touches the
 * calendar `years`; null when there is none.
 */
const findFirstOrLastValuePeriod = (0, _memoize.memoize)(({
  periodAggregationType,
  ...query
}) => periodAggregationType === _constants.PERIOD_AGGREGATION_FIRST ? getEarliestCounting(query) : getLatestCounting(query), {
  getKey: ({
    periodAggregationType,
    periodType,
    dates,
    years,
    calendar
  }) => [periodAggregationType, periodType, dates.startDate, dates.endDate, years.join(','), calendar].join('|')
});
const getFirstOrLastValuePeriod = ({
  periodAggregationType,
  periodType,
  dates,
  years,
  calendar = 'gregory'
}) => years.length ? findFirstOrLastValuePeriod({
  periodAggregationType,
  periodType,
  dates,
  years,
  calendar
}) : null;

// The calendar years a range's dates fall in
exports.getFirstOrLastValuePeriod = getFirstOrLastValuePeriod;
const getYearsTouched = ({
  startDate,
  endDate
}) => {
  const years = [];
  for (let year = (0, _calendarDates.getYear)(startDate); year <= (0, _calendarDates.getYear)(endDate); year++) {
    years.push(year);
  }
  return years;
};
exports.getYearsTouched = getYearsTouched;