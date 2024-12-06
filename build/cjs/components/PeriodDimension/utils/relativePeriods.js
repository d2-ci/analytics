"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativePeriodsOptionsById = exports.getRelativePeriodsOptions = exports.getRelativePeriodsName = exports.getRelativePeriodsDetails = exports.getRelativePeriodIds = void 0;
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _index2 = require("./index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getDaysPeriodType = () => [{
  id: 'TODAY',
  name: _index.default.t('Today'),
  offset: 0,
  duration: 1
}, {
  id: 'YESTERDAY',
  name: _index.default.t('Yesterday'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_3_DAYS',
  name: _index.default.t('Last 3 days'),
  offset: -1,
  duration: 3
}, {
  id: 'LAST_7_DAYS',
  name: _index.default.t('Last 7 days'),
  offset: -1,
  duration: 7
}, {
  id: 'LAST_14_DAYS',
  name: _index.default.t('Last 14 days'),
  offset: -1,
  duration: 14
}, {
  id: 'LAST_30_DAYS',
  name: _index.default.t('Last 30 days'),
  offset: -1,
  duration: 30
}, {
  id: 'LAST_60_DAYS',
  name: _index.default.t('Last 60 days'),
  offset: -1,
  duration: 60
}, {
  id: 'LAST_90_DAYS',
  name: _index.default.t('Last 90 days'),
  offset: -1,
  duration: 90
}, {
  id: 'LAST_180_DAYS',
  name: _index.default.t('Last 180 days'),
  offset: -1,
  duration: 180
}];
const getWeeksPeriodType = () => [{
  id: 'THIS_WEEK',
  name: _index.default.t('This week'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_WEEK',
  name: _index.default.t('Last week'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_4_WEEKS',
  name: _index.default.t('Last 4 weeks'),
  offset: -1,
  duration: 4
}, {
  id: 'LAST_12_WEEKS',
  name: _index.default.t('Last 12 weeks'),
  offset: -1,
  duration: 12
}, {
  id: 'LAST_52_WEEKS',
  name: _index.default.t('Last 52 weeks'),
  offset: -1,
  duration: 52
}, {
  id: _index2.WEEKS_THIS_YEAR,
  name: _index.default.t('Weeks this year'),
  offset: 51,
  duration: 52
}];
const getBiWeeksPeriodType = () => [{
  id: 'THIS_BIWEEK',
  name: _index.default.t('This bi-week'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_BIWEEK',
  name: _index.default.t('Last bi-week'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_4_BIWEEKS',
  name: _index.default.t('Last 4 bi-weeks'),
  offset: -1,
  duration: 4
}];
const getMonthsPeriodType = () => [{
  id: 'THIS_MONTH',
  name: _index.default.t('This month'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_MONTH',
  name: _index.default.t('Last month'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_3_MONTHS',
  name: _index.default.t('Last 3 months'),
  offset: -1,
  duration: 3
}, {
  id: 'LAST_6_MONTHS',
  name: _index.default.t('Last 6 months'),
  offset: -1,
  duration: 6
}, {
  id: 'LAST_12_MONTHS',
  name: _index.default.t('Last 12 months'),
  offset: -1,
  duration: 12
}, {
  id: 'MONTHS_THIS_YEAR',
  name: _index.default.t('Months this year'),
  offset: 11,
  duration: 12
}];
const getBiMonthsPeriodType = () => [{
  id: 'THIS_BIMONTH',
  name: _index.default.t('This bi-month'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_BIMONTH',
  name: _index.default.t('Last bi-month'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_6_BIMONTHS',
  name: _index.default.t('Last 6 bi-months'),
  offset: -1,
  duration: 6
}, {
  id: 'BIMONTHS_THIS_YEAR',
  name: _index.default.t('Bi-months this year'),
  offset: 5,
  duration: 6
}];
const getQuartersPeriodType = () => [{
  id: 'THIS_QUARTER',
  name: _index.default.t('This quarter'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_QUARTER',
  name: _index.default.t('Last quarter'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_4_QUARTERS',
  name: _index.default.t('Last 4 quarters'),
  offset: -1,
  duration: 4
}, {
  id: 'QUARTERS_THIS_YEAR',
  name: _index.default.t('Quarters this year'),
  offset: 3,
  duration: 4
}];
const getSixMonthsPeriodType = () => [{
  id: 'THIS_SIX_MONTH',
  name: _index.default.t('This six-month'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_SIX_MONTH',
  name: _index.default.t('Last six-month'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_2_SIXMONTHS',
  name: _index.default.t('Last 2 six-month'),
  offset: -1,
  duration: 2
}];
const getFinancialYearsPeriodType = () => [{
  id: 'THIS_FINANCIAL_YEAR',
  name: _index.default.t('This financial year'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_FINANCIAL_YEAR',
  name: _index.default.t('Last financial year'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_5_FINANCIAL_YEARS',
  name: _index.default.t('Last 5 financial years'),
  offset: -1,
  duration: 5
}];
const getYearsPeriodType = () => [{
  id: 'THIS_YEAR',
  name: _index.default.t('This year'),
  offset: 0,
  duration: 1
}, {
  id: 'LAST_YEAR',
  name: _index.default.t('Last year'),
  offset: -1,
  duration: 1
}, {
  id: 'LAST_5_YEARS',
  name: _index.default.t('Last 5 years'),
  offset: -1,
  duration: 5
}, {
  id: 'LAST_10_YEARS',
  name: _index.default.t('Last 10 years'),
  offset: -1,
  duration: 10
}];
const getOptions = () => [{
  id: _index2.DAILY,
  getPeriods: () => getDaysPeriodType(),
  name: _index.default.t('Days')
}, {
  id: _index2.WEEKLY,
  getPeriods: () => getWeeksPeriodType(),
  name: _index.default.t('Weeks')
}, {
  id: _index2.BIWEEKLY,
  getPeriods: () => getBiWeeksPeriodType(),
  name: _index.default.t('Bi-weeks')
}, {
  id: _index2.MONTHLY,
  getPeriods: () => getMonthsPeriodType(),
  name: _index.default.t('Months')
}, {
  id: _index2.BIMONTHLY,
  getPeriods: () => getBiMonthsPeriodType(),
  name: _index.default.t('Bi-months')
}, {
  id: _index2.QUARTERLY,
  getPeriods: () => getQuartersPeriodType(),
  name: _index.default.t('Quarters')
}, {
  id: _index2.SIXMONTHLY,
  getPeriods: () => getSixMonthsPeriodType(),
  name: _index.default.t('Six-months')
}, {
  id: _index2.FINANCIAL,
  getPeriods: () => getFinancialYearsPeriodType(),
  name: _index.default.t('Financial Years')
}, {
  id: _index2.YEARLY,
  getPeriods: () => getYearsPeriodType(),
  name: _index.default.t('Years')
}];
const getRelativePeriodsOptionsById = id => getOptions().find(option => option.id === id);
exports.getRelativePeriodsOptionsById = getRelativePeriodsOptionsById;
const getRelativePeriodsOptions = () => getOptions();
exports.getRelativePeriodsOptions = getRelativePeriodsOptions;
const getRelativePeriodIds = () => Object.values(getOptions()).map(option => option.getPeriods().map(period => period.id)).flat();
exports.getRelativePeriodIds = getRelativePeriodIds;
const getRelativePeriodsDetails = () => Object.values(getOptions()).map(option => option.getPeriods().map(period => ({
  id: period.id,
  name: period.name,
  offset: period.offset,
  duration: period.duration,
  type: option.id
}))).flat().reduce((acc, period) => {
  acc[period.id] = period;
  return acc;
}, {});
exports.getRelativePeriodsDetails = getRelativePeriodsDetails;
const getRelativePeriodsName = () => Object.values(getOptions()).map(option => option.getPeriods()).flat().reduce((acc, period) => {
  acc[period.id] = period.name;
  return acc;
}, {});
exports.getRelativePeriodsName = getRelativePeriodsName;