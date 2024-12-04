"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativePeriodsOptionsById = exports.getRelativePeriodsOptions = exports.getRelativePeriodsName = exports.getRelativePeriodsItemsCount = exports.getRelativePeriodIds = void 0;
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _index2 = require("./index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getDaysPeriodType = () => [{
  id: 'TODAY',
  name: _index.default.t('Today'),
  itemsCount: 1
}, {
  id: 'YESTERDAY',
  name: _index.default.t('Yesterday'),
  itemsCount: 1
}, {
  id: 'LAST_3_DAYS',
  name: _index.default.t('Last 3 days'),
  itemsCount: 3
}, {
  id: 'LAST_7_DAYS',
  name: _index.default.t('Last 7 days'),
  itemsCount: 7
}, {
  id: 'LAST_14_DAYS',
  name: _index.default.t('Last 14 days'),
  itemsCount: 14
}, {
  id: 'LAST_30_DAYS',
  name: _index.default.t('Last 30 days'),
  itemsCount: 30
}, {
  id: 'LAST_60_DAYS',
  name: _index.default.t('Last 60 days'),
  itemsCount: 60
}, {
  id: 'LAST_90_DAYS',
  name: _index.default.t('Last 90 days'),
  itemsCount: 90
}, {
  id: 'LAST_180_DAYS',
  name: _index.default.t('Last 180 days'),
  itemsCount: 180
}];
const getWeeksPeriodType = () => [{
  id: 'THIS_WEEK',
  name: _index.default.t('This week'),
  itemsCount: 1
}, {
  id: 'LAST_WEEK',
  name: _index.default.t('Last week'),
  itemsCount: 1
}, {
  id: 'LAST_4_WEEKS',
  name: _index.default.t('Last 4 weeks'),
  itemsCount: 4
}, {
  id: 'LAST_12_WEEKS',
  name: _index.default.t('Last 12 weeks'),
  itemsCount: 12
}, {
  id: 'LAST_52_WEEKS',
  name: _index.default.t('Last 52 weeks'),
  itemsCount: 52
}, {
  id: _index2.WEEKS_THIS_YEAR,
  name: _index.default.t('Weeks this year'),
  itemsCount: 52
}];
const getBiWeeksPeriodType = () => [{
  id: 'THIS_BIWEEK',
  name: _index.default.t('This bi-week'),
  itemsCount: 1
}, {
  id: 'LAST_BIWEEK',
  name: _index.default.t('Last bi-week'),
  itemsCount: 1
}, {
  id: 'LAST_4_BIWEEKS',
  name: _index.default.t('Last 4 bi-weeks'),
  itemsCount: 4
}];
const getMonthsPeriodType = () => [{
  id: 'THIS_MONTH',
  name: _index.default.t('This month'),
  itemsCount: 1
}, {
  id: 'LAST_MONTH',
  name: _index.default.t('Last month'),
  itemsCount: 1
}, {
  id: 'LAST_3_MONTHS',
  name: _index.default.t('Last 3 months'),
  itemsCount: 3
}, {
  id: 'LAST_6_MONTHS',
  name: _index.default.t('Last 6 months'),
  itemsCount: 6
}, {
  id: 'LAST_12_MONTHS',
  name: _index.default.t('Last 12 months'),
  itemsCount: 12
}, {
  id: 'MONTHS_THIS_YEAR',
  name: _index.default.t('Months this year'),
  itemsCount: 12
}];
const getBiMonthsPeriodType = () => [{
  id: 'THIS_BIMONTH',
  name: _index.default.t('This bi-month'),
  itemsCount: 1
}, {
  id: 'LAST_BIMONTH',
  name: _index.default.t('Last bi-month'),
  itemsCount: 1
}, {
  id: 'LAST_6_BIMONTHS',
  name: _index.default.t('Last 6 bi-months'),
  itemsCount: 6
}, {
  id: 'BIMONTHS_THIS_YEAR',
  name: _index.default.t('Bi-months this year'),
  itemsCount: 6
}];
const getQuartersPeriodType = () => [{
  id: 'THIS_QUARTER',
  name: _index.default.t('This quarter'),
  itemsCount: 1
}, {
  id: 'LAST_QUARTER',
  name: _index.default.t('Last quarter'),
  itemsCount: 1
}, {
  id: 'LAST_4_QUARTERS',
  name: _index.default.t('Last 4 quarters'),
  itemsCount: 4
}, {
  id: 'QUARTERS_THIS_YEAR',
  name: _index.default.t('Quarters this year'),
  itemsCount: 4
}];
const getSixMonthsPeriodType = () => [{
  id: 'THIS_SIX_MONTH',
  name: _index.default.t('This six-month'),
  itemsCount: 1
}, {
  id: 'LAST_SIX_MONTH',
  name: _index.default.t('Last six-month'),
  itemsCount: 1
}, {
  id: 'LAST_2_SIXMONTHS',
  name: _index.default.t('Last 2 six-month'),
  itemsCount: 2
}];
const getFinancialYearsPeriodType = () => [{
  id: 'THIS_FINANCIAL_YEAR',
  name: _index.default.t('This financial year'),
  itemsCount: 1
}, {
  id: 'LAST_FINANCIAL_YEAR',
  name: _index.default.t('Last financial year'),
  itemsCount: 1
}, {
  id: 'LAST_5_FINANCIAL_YEARS',
  name: _index.default.t('Last 5 financial years'),
  itemsCount: 5
}];
const getYearsPeriodType = () => [{
  id: 'THIS_YEAR',
  name: _index.default.t('This year'),
  itemsCount: 1
}, {
  id: 'LAST_YEAR',
  name: _index.default.t('Last year'),
  itemsCount: 1
}, {
  id: 'LAST_5_YEARS',
  name: _index.default.t('Last 5 years'),
  itemsCount: 5
}, {
  id: 'LAST_10_YEARS',
  name: _index.default.t('Last 10 years'),
  itemsCount: 10
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
const getRelativePeriodsName = () => Object.values(getOptions()).map(option => option.getPeriods()).flat().reduce((acc, period) => {
  acc[period.id] = period.name;
  return acc;
}, {});
exports.getRelativePeriodsName = getRelativePeriodsName;
const getRelativePeriodsItemsCount = () => Object.values(getOptions()).map(option => option.getPeriods()).flat().reduce((acc, period) => {
  acc[period.id] = period.itemsCount;
  return acc;
}, {});
exports.getRelativePeriodsItemsCount = getRelativePeriodsItemsCount;