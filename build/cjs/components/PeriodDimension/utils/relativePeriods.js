"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativePeriodsOptionsById = exports.getRelativePeriodsOptions = exports.getRelativePeriodIds = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getDaysPeriodType = () => [{
  id: 'TODAY',
  name: _d2I18n.default.t('Today')
}, {
  id: 'YESTERDAY',
  name: _d2I18n.default.t('Yesterday')
}, {
  id: 'LAST_3_DAYS',
  name: _d2I18n.default.t('Last 3 days')
}, {
  id: 'LAST_7_DAYS',
  name: _d2I18n.default.t('Last 7 days')
}, {
  id: 'LAST_14_DAYS',
  name: _d2I18n.default.t('Last 14 days')
}, {
  id: 'LAST_30_DAYS',
  name: _d2I18n.default.t('Last 30 days')
}, {
  id: 'LAST_60_DAYS',
  name: _d2I18n.default.t('Last 60 days')
}, {
  id: 'LAST_90_DAYS',
  name: _d2I18n.default.t('Last 90 days')
}, {
  id: 'LAST_180_DAYS',
  name: _d2I18n.default.t('Last 180 days')
}];
const getWeeksPeriodType = () => [{
  id: 'THIS_WEEK',
  name: _d2I18n.default.t('This week')
}, {
  id: 'LAST_WEEK',
  name: _d2I18n.default.t('Last week')
}, {
  id: 'LAST_4_WEEKS',
  name: _d2I18n.default.t('Last 4 weeks')
}, {
  id: 'LAST_12_WEEKS',
  name: _d2I18n.default.t('Last 12 weeks')
}, {
  id: 'LAST_52_WEEKS',
  name: _d2I18n.default.t('Last 52 weeks')
}, {
  id: _index.WEEKS_THIS_YEAR,
  name: _d2I18n.default.t('Weeks this year')
}];
const getBiWeeksPeriodType = () => [{
  id: 'THIS_BIWEEK',
  name: _d2I18n.default.t('This bi-week')
}, {
  id: 'LAST_BIWEEK',
  name: _d2I18n.default.t('Last bi-week')
}, {
  id: 'LAST_4_BIWEEKS',
  name: _d2I18n.default.t('Last 4 bi-weeks')
}];
const getMonthsPeriodType = () => [{
  id: 'THIS_MONTH',
  name: _d2I18n.default.t('This month')
}, {
  id: 'LAST_MONTH',
  name: _d2I18n.default.t('Last month')
}, {
  id: 'LAST_3_MONTHS',
  name: _d2I18n.default.t('Last 3 months')
}, {
  id: 'LAST_6_MONTHS',
  name: _d2I18n.default.t('Last 6 months')
}, {
  id: 'LAST_12_MONTHS',
  name: _d2I18n.default.t('Last 12 months')
}, {
  id: 'MONTHS_THIS_YEAR',
  name: _d2I18n.default.t('Months this year')
}];
const getBiMonthsPeriodType = () => [{
  id: 'THIS_BIMONTH',
  name: _d2I18n.default.t('This bi-month')
}, {
  id: 'LAST_BIMONTH',
  name: _d2I18n.default.t('Last bi-month')
}, {
  id: 'LAST_6_BIMONTHS',
  name: _d2I18n.default.t('Last 6 bi-months')
}, {
  id: 'BIMONTHS_THIS_YEAR',
  name: _d2I18n.default.t('Bi-months this year')
}];
const getQuartersPeriodType = () => [{
  id: 'THIS_QUARTER',
  name: _d2I18n.default.t('This quarter')
}, {
  id: 'LAST_QUARTER',
  name: _d2I18n.default.t('Last quarter')
}, {
  id: 'LAST_4_QUARTERS',
  name: _d2I18n.default.t('Last 4 quarters')
}, {
  id: 'QUARTERS_THIS_YEAR',
  name: _d2I18n.default.t('Quarters this year')
}];
const getSixMonthsPeriodType = () => [{
  id: 'THIS_SIX_MONTH',
  name: _d2I18n.default.t('This six-month')
}, {
  id: 'LAST_SIX_MONTH',
  name: _d2I18n.default.t('Last six-month')
}, {
  id: 'LAST_2_SIXMONTHS',
  name: _d2I18n.default.t('Last 2 six-month')
}];
const getFinancialYearsPeriodType = () => [{
  id: 'THIS_FINANCIAL_YEAR',
  name: _d2I18n.default.t('This financial year')
}, {
  id: 'LAST_FINANCIAL_YEAR',
  name: _d2I18n.default.t('Last financial year')
}, {
  id: 'LAST_5_FINANCIAL_YEARS',
  name: _d2I18n.default.t('Last 5 financial years')
}];
const getYearsPeriodType = () => [{
  id: 'THIS_YEAR',
  name: _d2I18n.default.t('This year')
}, {
  id: 'LAST_YEAR',
  name: _d2I18n.default.t('Last year')
}, {
  id: 'LAST_5_YEARS',
  name: _d2I18n.default.t('Last 5 years')
}, {
  id: 'LAST_10_YEARS',
  name: _d2I18n.default.t('Last 10 years')
}];
const getOptions = () => [{
  id: _index.DAILY,
  getPeriods: () => getDaysPeriodType(),
  name: _d2I18n.default.t('Days')
}, {
  id: _index.WEEKLY,
  getPeriods: () => getWeeksPeriodType(),
  name: _d2I18n.default.t('Weeks')
}, {
  id: _index.BIWEEKLY,
  getPeriods: () => getBiWeeksPeriodType(),
  name: _d2I18n.default.t('Bi-weeks')
}, {
  id: _index.MONTHLY,
  getPeriods: () => getMonthsPeriodType(),
  name: _d2I18n.default.t('Months')
}, {
  id: _index.BIMONTHLY,
  getPeriods: () => getBiMonthsPeriodType(),
  name: _d2I18n.default.t('Bi-months')
}, {
  id: _index.QUARTERLY,
  getPeriods: () => getQuartersPeriodType(),
  name: _d2I18n.default.t('Quarters')
}, {
  id: _index.SIXMONTHLY,
  getPeriods: () => getSixMonthsPeriodType(),
  name: _d2I18n.default.t('Six-months')
}, {
  id: _index.FINANCIAL,
  getPeriods: () => getFinancialYearsPeriodType(),
  name: _d2I18n.default.t('Financial Years')
}, {
  id: _index.YEARLY,
  getPeriods: () => getYearsPeriodType(),
  name: _d2I18n.default.t('Years')
}];
const getRelativePeriodsOptionsById = id => getOptions().find(option => option.id === id);
exports.getRelativePeriodsOptionsById = getRelativePeriodsOptionsById;
const getRelativePeriodsOptions = () => getOptions();
exports.getRelativePeriodsOptions = getRelativePeriodsOptions;
const getRelativePeriodIds = () => Object.values(getOptions()).map(option => option.getPeriods().map(period => period.id)).flat();
exports.getRelativePeriodIds = getRelativePeriodIds;