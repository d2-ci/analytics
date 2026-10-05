"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAlignedWithPeriodType = exports.getPreviousPeriod = exports.getPeriodDates = exports.getNextPeriod = exports.getFixedPeriodOfTypeByDate = exports.getCoveringPeriodRange = void 0;
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
var _enabledPeriodTypes = require("../../../components/PeriodDimension/utils/enabledPeriodTypes.js");
var _calendarDates = require("./calendarDates.js");
var _memoize = require("./memoize.js");
var _multiCalendarPatches = require("./multiCalendarPatches.js");
var _periodTypes = require("./periodTypes.js");
/* A period range is { startDate, endDate }, YYYY-MM-DD strings in one
 * calendar, so they compare as strings */

const isYearLongType = libraryPeriodType => libraryPeriodType === 'YEARLY' || libraryPeriodType.startsWith('FY');

/* Every period of a type in one year of the calendar (yearly and financial
 * types: the one starting that year), built once */
const getPeriodsOfYear = (0, _memoize.memoize)((libraryPeriodType, year, calendar) => {
  try {
    return (0, _multiCalendarDates.generateFixedPeriods)({
      year,
      periodType: libraryPeriodType,
      calendar,
      locale: 'en',
      ...(isYearLongType(libraryPeriodType) && {
        yearsCount: 1
      })
    });
  } catch {
    return [];
  }
}, {
  maxSize: 500
});
const readPeriodDates = (0, _memoize.memoize)((periodId, calendar) => {
  if ((0, _multiCalendarPatches.isNovemberPeriodId)(periodId)) {
    return (0, _calendarDates.isIsoCalendar)(calendar) ? (0, _multiCalendarPatches.getNovemberPeriodDates)(periodId) : null;
  }

  // The id names its year: the period is in that year's list
  const libraryPeriodType = _enabledPeriodTypes.SERVER_PT_TO_MULTI_CALENDAR_PT[(0, _periodTypes.getPeriodTypeOfPeriodId)(periodId)];
  const listed = libraryPeriodType && getPeriodsOfYear(libraryPeriodType, Number(periodId.slice(0, 4)), calendar).find(({
    id
  }) => id === periodId);
  if (listed) {
    return {
      startDate: listed.startDate,
      endDate: listed.endDate
    };
  }
  try {
    const {
      startDate,
      endDate
    } = (0, _multiCalendarDates.createFixedPeriodFromPeriodId)({
      periodId,
      calendar
    });
    return {
      startDate,
      endDate
    };
  } catch {
    return null;
  }
});

// A fixed period's range, or null for an id that can't be read
const getPeriodDates = (periodId, calendar = 'gregory') => readPeriodDates(periodId, calendar);

// Weeks and financial years can start in the year before or end in the year after
exports.getPeriodDates = getPeriodDates;
const findPeriodHolding = (libraryPeriodType, date, calendar) => {
  const year = (0, _calendarDates.getYear)(date);
  for (const candidateYear of [year, year - 1, year + 1]) {
    const period = getPeriodsOfYear(libraryPeriodType, candidateYear, calendar).find(({
      startDate,
      endDate
    }) => startDate <= date && date <= endDate);
    if (period) {
      const {
        id,
        startDate,
        endDate
      } = period;
      return {
        id,
        startDate,
        endDate
      };
    }
  }
  return null;
};

// The period of `periodType` that holds `date` ({ id, startDate, endDate }), or null
const getFixedPeriodOfTypeByDate = (periodType, date, calendar = 'gregory') => {
  if (!date) {
    return null;
  }
  if ((0, _multiCalendarPatches.isNovemberPeriodType)(periodType)) {
    return (0, _calendarDates.isIsoCalendar)(calendar) ? (0, _multiCalendarPatches.getNovemberPeriodByDate)(periodType, date) : null;
  }
  const libraryPeriodType = _enabledPeriodTypes.SERVER_PT_TO_MULTI_CALENDAR_PT[periodType];
  return libraryPeriodType ? findPeriodHolding(libraryPeriodType, date, calendar) : null;
};

// The period of the same type just before or just after `period`, or null
exports.getFixedPeriodOfTypeByDate = getFixedPeriodOfTypeByDate;
const getPreviousPeriod = (periodType, period, calendar = 'gregory') => getFixedPeriodOfTypeByDate(periodType, (0, _calendarDates.shiftDate)(period.startDate, -1, calendar), calendar);
exports.getPreviousPeriod = getPreviousPeriod;
const getNextPeriod = (periodType, period, calendar = 'gregory') => getFixedPeriodOfTypeByDate(periodType, (0, _calendarDates.shiftDate)(period.endDate, 1, calendar), calendar);

/**
 * The range from the start of the `periodType` period holding the start of
 * `range`, to the end of the one holding its end: the whole periods of that
 * type that cover it. Null when it can't be told.
 */
exports.getNextPeriod = getNextPeriod;
const getCoveringPeriodRange = (range, periodType, calendar = 'gregory') => {
  const first = getFixedPeriodOfTypeByDate(periodType, range.startDate, calendar);
  const last = getFixedPeriodOfTypeByDate(periodType, range.endDate, calendar);
  if (!first || !last) {
    return null;
  }
  return {
    startDate: first.startDate,
    endDate: last.endDate
  };
};

/**
 * Whether a range starts and ends on the edges of `periodType` periods, so
 * data of that type fits it exactly (a quarter on monthly data, not a month on
 * weekly data). Null when it can't be told.
 */
exports.getCoveringPeriodRange = getCoveringPeriodRange;
const isAlignedWithPeriodType = (range, periodType, calendar = 'gregory') => {
  const covering = getCoveringPeriodRange(range, periodType, calendar);
  return covering ? covering.startDate === range.startDate && covering.endDate === range.endDate : null;
};
exports.isAlignedWithPeriodType = isAlignedWithPeriodType;