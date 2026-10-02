"use strict";

var _periodRanges = require("../periodRanges.js");
describe('getPeriodDates', () => {
  it.each([['2025W1', '2024-12-30', '2025-01-05'], ['2025WedW1', '2025-01-01', '2025-01-07'], ['2025BiW1', '2024-12-30', '2025-01-12'], ['202501', '2025-01-01', '2025-01-31'], ['2025Q1', '2025-01-01', '2025-03-31'], ['2025AprilS1', '2025-04-01', '2025-09-30'], ['2025April', '2025-04-01', '2026-03-31'], ['20250115', '2025-01-15', '2025-01-15']])('%s: %s to %s', (periodId, startDate, endDate) => {
    expect((0, _periodRanges.getPeriodDates)(periodId)).toEqual({
      startDate,
      endDate
    });
  });
  it.each([['2025Nov', '2024-11-01', '2025-10-31'], ['2025NovQ1', '2024-11-01', '2025-01-31'], ['2025NovQ3', '2025-05-01', '2025-07-31'], ['2025NovS1', '2024-11-01', '2025-04-30'], ['2025NovS2', '2025-05-01', '2025-10-31']])('dates the November type %s as the server does', (periodId, startDate, endDate) => {
    expect((0, _periodRanges.getPeriodDates)(periodId)).toEqual({
      startDate,
      endDate
    });
    expect((0, _periodRanges.getPeriodDates)(periodId, 'iso8601')).toEqual({
      startDate,
      endDate
    });
  });
  it('gives no dates for November types in other calendars', () => {
    expect((0, _periodRanges.getPeriodDates)('2081Nov', 'nepali')).toBeNull();
  });
  it('gives dates in the calendar asked for', () => {
    expect((0, _periodRanges.getPeriodDates)('2081W1', 'nepali')).toEqual({
      startDate: '2081-01-03',
      endDate: '2081-01-09'
    });
  });
  it('is null for an id it cannot read', () => {
    expect((0, _periodRanges.getPeriodDates)('LAST_12_MONTHS')).toBeNull();
    expect((0, _periodRanges.getPeriodDates)('2025X1')).toBeNull();
  });
});
describe('comparePeriodRanges', () => {
  const jan = {
    startDate: '2025-01-01',
    endDate: '2025-01-31'
  };
  const q1 = {
    startDate: '2025-01-01',
    endDate: '2025-03-31'
  };
  const week1 = {
    startDate: '2024-12-30',
    endDate: '2025-01-05'
  };
  const feb = {
    startDate: '2025-02-01',
    endDate: '2025-02-28'
  };
  it.each([[jan, jan, 'same'], [jan, q1, 'within'], [q1, jan, 'contains'], [week1, jan, 'overlaps'], [jan, feb, 'disjoint'], [feb, jan, 'disjoint']])('%j to %j: %s', (a, b, expected) => {
    expect((0, _periodRanges.comparePeriodRanges)(a, b)).toBe(expected);
  });
});
describe('getFixedPeriodOfTypeByDate', () => {
  it('finds the period of a type that holds a date', () => {
    expect((0, _periodRanges.getFixedPeriodOfTypeByDate)('WeeklyWednesday', '2025-01-10')).toMatchObject({
      startDate: '2025-01-08',
      endDate: '2025-01-14'
    });
  });
  it.each([['FinancialNov', '2025-01-08', '2025Nov', '2024-11-01'], ['FinancialNov', '2024-11-01', '2025Nov', '2024-11-01'], ['FinancialNov', '2024-10-31', '2024Nov', '2023-11-01'], ['QuarterlyNov', '2025-01-08', '2025NovQ1', '2024-11-01'], ['QuarterlyNov', '2025-10-31', '2025NovQ4', '2025-08-01'], ['SixMonthlyNov', '2025-05-01', '2025NovS2', '2025-05-01']])('gives %s periods the ids the server uses (%s)', (...args) => {
    const [periodType, date, id, startDate] = args;
    expect((0, _periodRanges.getFixedPeriodOfTypeByDate)(periodType, date)).toMatchObject({
      id,
      startDate
    });
  });
  it('is null for November types in other calendars', () => {
    expect((0, _periodRanges.getFixedPeriodOfTypeByDate)('QuarterlyNov', '2081-09-24', 'nepali')).toBeNull();
  });
  it('is null for a type without an ISO format', () => {
    expect((0, _periodRanges.getFixedPeriodOfTypeByDate)('TwoYearly', '2025-01-10')).toBeNull();
  });
  it('is null for a date it cannot read', () => {
    expect((0, _periodRanges.getFixedPeriodOfTypeByDate)('Monthly', 'not a date')).toBeNull();
  });
});
describe('getCoveringPeriodRange', () => {
  it('widens to whole periods of the type', () => {
    expect((0, _periodRanges.getCoveringPeriodRange)((0, _periodRanges.getPeriodDates)('2025W2'), 'Monthly')).toEqual({
      startDate: '2025-01-01',
      endDate: '2025-01-31'
    });
    expect((0, _periodRanges.getCoveringPeriodRange)((0, _periodRanges.getPeriodDates)('2025W1'), 'Monthly')).toEqual({
      startDate: '2024-12-01',
      endDate: '2025-01-31'
    });
  });
  it('is null when it cannot tell', () => {
    expect((0, _periodRanges.getCoveringPeriodRange)((0, _periodRanges.getPeriodDates)('2025W2'), 'TwoYearly')).toBeNull();
  });
});
describe('isAlignedWithPeriodType', () => {
  it.each([['2025Q1', 'Monthly', true], ['2025', 'Quarterly', true], ['2025W2', 'Daily', true], ['2025BiW1', 'Weekly', true], ['202501', 'Weekly', false], ['2025', 'WeeklyWednesday', false], ['2025April', 'Quarterly', true], ['2025April', 'SixMonthly', false], ['2025Q1', 'TwoYearly', null]])('%s on %s data: %s', (periodId, periodType, expected) => {
    expect((0, _periodRanges.isAlignedWithPeriodType)((0, _periodRanges.getPeriodDates)(periodId), periodType)).toBe(expected);
  });
});