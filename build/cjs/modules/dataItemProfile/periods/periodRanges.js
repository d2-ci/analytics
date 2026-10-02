"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAlignedWithPeriodType = exports.getPeriodDates = exports.getFixedPeriodOfTypeByDate = exports.getCoveringPeriodRange = exports.comparePeriodRanges = void 0;
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
var _enabledPeriodTypes = require("../../../components/PeriodDimension/utils/enabledPeriodTypes.js");
var _constants = require("../constants.js");
var _calendarDates = require("./calendarDates.js");
var _multiCalendarPatches = require("./multiCalendarPatches.js");
/* A period range is { startDate, endDate }, YYYY-MM-DD strings in one
 * calendar, so they compare as strings */

// A fixed period's range, or null for an id that can't be read
const getPeriodDates = (periodId, calendar = 'gregory') => {
  if ((0, _multiCalendarPatches.isNovemberPeriodId)(periodId)) {
    return (0, _calendarDates.isIsoCalendar)(calendar) ? (0, _multiCalendarPatches.getNovemberPeriodDates)(periodId) : null;
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
};

/**
 * How range `a` relates to range `b`: the same dates, within it, containing
 * it, overlapping it, or disjoint.
 */
exports.getPeriodDates = getPeriodDates;
const comparePeriodRanges = (a, b) => {
  if (a.startDate === b.startDate && a.endDate === b.endDate) {
    return _constants.PERIOD_RANGE_SAME;
  }
  if (a.endDate < b.startDate || b.endDate < a.startDate) {
    return _constants.PERIOD_RANGE_DISJOINT;
  }
  if (a.startDate >= b.startDate && a.endDate <= b.endDate) {
    return _constants.PERIOD_RANGE_WITHIN;
  }
  if (b.startDate >= a.startDate && b.endDate <= a.endDate) {
    return _constants.PERIOD_RANGE_CONTAINS;
  }
  return _constants.PERIOD_RANGE_OVERLAPS;
};

// The period of `periodType` that holds `date` ({ id, startDate, endDate }), or null
exports.comparePeriodRanges = comparePeriodRanges;
const getFixedPeriodOfTypeByDate = (periodType, date, calendar = 'gregory') => {
  if ((0, _multiCalendarPatches.isNovemberPeriodType)(periodType)) {
    return (0, _calendarDates.isIsoCalendar)(calendar) ? (0, _multiCalendarPatches.getNovemberPeriodByDate)(periodType, date) : null;
  }
  const libraryPeriodType = _enabledPeriodTypes.SERVER_PT_TO_MULTI_CALENDAR_PT[periodType];
  if (!libraryPeriodType) {
    return null;
  }
  try {
    return (0, _multiCalendarDates.getFixedPeriodByDate)({
      periodType: libraryPeriodType,
      date,
      calendar
    });
  } catch {
    return null;
  }
};

/**
 * The range from the start of the `periodType` period holding the start of
 * `range`, to the end of the one holding its end: the whole periods of that
 * type that cover it. Null when it can't be told.
 */
exports.getFixedPeriodOfTypeByDate = getFixedPeriodOfTypeByDate;
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
  return covering ? comparePeriodRanges(covering, range) === _constants.PERIOD_RANGE_SAME : null;
};
exports.isAlignedWithPeriodType = isAlignedWithPeriodType;