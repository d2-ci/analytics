"use strict";

var _calendarDates = require("../calendarDates.js");
describe('calendarDates', () => {
  it('needs no conversion for the ISO calendars only', () => {
    expect((0, _calendarDates.isIsoCalendar)()).toBe(true);
    expect((0, _calendarDates.isIsoCalendar)('iso8601')).toBe(true);
    expect((0, _calendarDates.isIsoCalendar)('nepali')).toBe(false);
  });
  it('formats and reads dates', () => {
    expect((0, _calendarDates.pad)(7)).toBe('07');
    expect((0, _calendarDates.pad)(825, 4)).toBe('0825');
    expect((0, _calendarDates.formatDate)({
      year: 2025,
      month: 1,
      day: 6
    })).toBe('2025-01-06');
    expect((0, _calendarDates.getYear)('2025-01-06')).toBe(2025);
  });
  it('shifts a date by days, across months and years', () => {
    expect((0, _calendarDates.shiftDate)('2025-01-01', -1)).toBe('2024-12-31');
    expect((0, _calendarDates.shiftDate)('2024-02-28', 1, 'iso8601')).toBe('2024-02-29');
  });
  it('shifts a date of another calendar in that calendar', () => {
    expect((0, _calendarDates.shiftDate)('2081-01-03', 1, 'nepali')).toBe('2081-01-04');
    expect((0, _calendarDates.toIsoDate)((0, _calendarDates.shiftDate)('2081-01-03', 1, 'nepali'), 'nepali')).toBe('2024-04-16');
  });
});
describe('toIsoDate', () => {
  it('keeps ISO dates', () => {
    expect((0, _calendarDates.toIsoDate)('2025-01-06')).toBe('2025-01-06');
    expect((0, _calendarDates.toIsoDate)('2025-01-06', 'iso8601')).toBe('2025-01-06');
  });
  it('converts dates of other calendars', () => {
    expect((0, _calendarDates.toIsoDate)('2081-01-03', 'nepali')).toBe('2024-04-15');
  });
});