"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shiftDate = exports.pad = exports.isIsoCalendar = exports.getYear = exports.fromIsoDate = exports.formatDate = void 0;
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
/* Dates are YYYY-MM-DD strings in the server's calendar. Other calendars are
 * supported: their dates are converted to ISO for analytics and back for
 * multi-calendar-dates. These need no conversion (gregorian is the id DHIS2
 * gives the gregorian calendar). */
const ISO_CALENDARS = new Set(['gregory', 'gregorian', 'iso8601']);
const isIsoCalendar = (calendar = 'gregory') => ISO_CALENDARS.has(calendar);
exports.isIsoCalendar = isIsoCalendar;
const pad = (number, length = 2) => String(number).padStart(length, '0');
exports.pad = pad;
const formatDate = ({
  year,
  month,
  day
}) => `${pad(year, 4)}-${pad(month)}-${pad(day)}`;
exports.formatDate = formatDate;
const getYear = date => Number(date.slice(0, 4));
exports.getYear = getYear;
const shiftIsoDate = (isoDate, days) => {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

// A conversion multi-calendar-dates can't make (an era it doesn't match) gives null
const convertOrNull = convert => {
  try {
    return convert();
  } catch {
    return null;
  }
};

// A date of the ISO calendar (YYYY-MM-DD) in the given calendar, or null
const fromIsoDate = (isoDate, calendar = 'gregory') => {
  if (isIsoCalendar(calendar)) {
    return isoDate;
  }
  return convertOrNull(() => {
    const {
      year,
      eraYear,
      month,
      day
    } = (0, _multiCalendarDates.convertFromIso8601)(isoDate, calendar);
    return formatDate({
      year: eraYear !== null && eraYear !== void 0 ? eraYear : year,
      month,
      day
    });
  });
};

// The date `days` later (or earlier, when negative), in the same calendar, or null
exports.fromIsoDate = fromIsoDate;
const shiftDate = (date, days, calendar = 'gregory') => {
  if (isIsoCalendar(calendar)) {
    return shiftIsoDate(date, days);
  }
  const isoDate = convertOrNull(() => formatDate((0, _multiCalendarDates.convertToIso8601)(date, calendar)));
  return isoDate && fromIsoDate(shiftIsoDate(isoDate, days), calendar);
};
exports.shiftDate = shiftDate;