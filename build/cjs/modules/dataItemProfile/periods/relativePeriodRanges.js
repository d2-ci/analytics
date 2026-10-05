"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativePeriodFixedPeriods = void 0;
var _calendarDates = require("./calendarDates.js");
var _memoize = require("./memoize.js");
var _periodRanges = require("./periodRanges.js");
var _periodTypes = require("./periodTypes.js");
// Today in the user's time zone, as an ISO date
const getLocalIsoDate = () => {
  const now = new Date();
  return [now.getFullYear(), (0, _calendarDates.pad)(now.getMonth() + 1), (0, _calendarDates.pad)(now.getDate())].join('-');
};

// Far more than the longest relative period (LAST_52_WEEKS, LAST_180_DAYS…)
const MAX_PERIODS = 400;
const stepPeriods = (period, steps, {
  periodType,
  calendar
}) => {
  const step = steps < 0 ? _periodRanges.getPreviousPeriod : _periodRanges.getNextPeriod;
  let current = period;
  for (let i = 0; current && i < Math.abs(steps); i++) {
    current = step(periodType, current, calendar);
  }
  return current;
};

// Weeks belong to the year that holds their Thursday: 4 January and 28 December always do
const getYearEdges = (periodType, year) => periodType.startsWith('Weekly') ? [`${(0, _calendarDates.pad)(year, 4)}-01-04`, `${(0, _calendarDates.pad)(year, 4)}-12-28`] : [`${(0, _calendarDates.pad)(year, 4)}-01-01`, `${(0, _calendarDates.pad)(year, 4)}-12-31`];

/* The first and last fixed periods of a relative period: from the period
 * holding `date`, `offset` periods away for the last one, `duration` periods
 * long. The "this year" ones (MONTHS_THIS_YEAR…) cover every period of the
 * year. */
const getEdgePeriods = (periodId, date, {
  periodType,
  calendar
}) => {
  const {
    offset,
    duration
  } = (0, _periodTypes.getRelativePeriodShape)(periodId);
  if (periodId.endsWith('_THIS_YEAR')) {
    return getYearEdges(periodType, Number(date.slice(0, 4))).map(edge => (0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, edge, calendar));
  }
  const current = (0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, date, calendar);
  const context = {
    periodType,
    calendar
  };
  const last = current && stepPeriods(current, offset, context);
  const first = last && stepPeriods(last, -(duration - 1), context);
  return [first, last];
};
const resolveRelativePeriod = (0, _memoize.memoize)((periodId, periodType, {
  calendar,
  date
}) => {
  const [first, last] = getEdgePeriods(periodId, date, {
    periodType,
    calendar
  });
  if (!first || !last) {
    return null;
  }
  const periods = [first];
  while (periods.at(-1).id !== last.id && periods.length < MAX_PERIODS) {
    const next = (0, _periodRanges.getNextPeriod)(periodType, periods.at(-1), calendar);
    if (!next) {
      return null;
    }
    periods.push(next);
  }
  return periods;
}, {
  getKey: (periodId, periodType, {
    calendar,
    date
  }) => [periodId, periodType, calendar, date].join('|')
});

/**
 * The fixed periods of `periodType` a relative period covers, as analytics
 * resolves it on `relativePeriodDate` (an ISO date, today by default), in
 * date order; null when it can't be told.
 */
const getRelativePeriodFixedPeriods = (periodId, periodType, {
  calendar = 'gregory',
  relativePeriodDate
} = {}) => {
  const date = (0, _calendarDates.fromIsoDate)(relativePeriodDate !== null && relativePeriodDate !== void 0 ? relativePeriodDate : getLocalIsoDate(), calendar);
  if (!(0, _periodTypes.getRelativePeriodShape)(periodId) || !(0, _periodTypes.isPeriodType)(periodType) || !date) {
    return null;
  }
  return resolveRelativePeriod(periodId, periodType, {
    calendar,
    date
  });
};
exports.getRelativePeriodFixedPeriods = getRelativePeriodFixedPeriods;