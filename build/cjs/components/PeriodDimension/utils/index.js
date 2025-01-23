"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPeriodTypesById = exports.YEARLY = exports.WEEKS_THIS_YEAR = exports.WEEKLYWED = exports.WEEKLYTHU = exports.WEEKLYSUN = exports.WEEKLYSAT = exports.WEEKLY = exports.SIXMONTHLYAPR = exports.SIXMONTHLY = exports.QUARTERLY = exports.MONTHLY = exports.FYOCT = exports.FYNOV = exports.FYJUL = exports.FYAPR = exports.FINANCIAL = exports.DAILY = exports.BIWEEKLY = exports.BIMONTHLY = void 0;
const DAILY = exports.DAILY = 'DAILY';
const WEEKLY = exports.WEEKLY = 'WEEKLY';
const WEEKLYWED = exports.WEEKLYWED = 'WEEKLYWED';
const WEEKLYTHU = exports.WEEKLYTHU = 'WEEKLYTHU';
const WEEKLYSAT = exports.WEEKLYSAT = 'WEEKLYSAT';
const WEEKLYSUN = exports.WEEKLYSUN = 'WEEKLYSUN';
const WEEKS_THIS_YEAR = exports.WEEKS_THIS_YEAR = 'WEEKS_THIS_YEAR';
const BIWEEKLY = exports.BIWEEKLY = 'BIWEEKLY';
const MONTHLY = exports.MONTHLY = 'MONTHLY';
const BIMONTHLY = exports.BIMONTHLY = 'BIMONTHLY';
const QUARTERLY = exports.QUARTERLY = 'QUARTERLY';
const SIXMONTHLY = exports.SIXMONTHLY = 'SIXMONTHLY';
const SIXMONTHLYAPR = exports.SIXMONTHLYAPR = 'SIXMONTHLYAPR';
const YEARLY = exports.YEARLY = 'YEARLY';
const FINANCIAL = exports.FINANCIAL = 'FINANCIAL';
const FYNOV = exports.FYNOV = 'FYNOV';
const FYOCT = exports.FYOCT = 'FYOCT';
const FYJUL = exports.FYJUL = 'FYJUL';
const FYAPR = exports.FYAPR = 'FYAPR';
const filterPeriodTypesById = function () {
  let allPeriodTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let excludedPeriodTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return allPeriodTypes.filter(period => !excludedPeriodTypes.includes(period.id));
};
exports.filterPeriodTypesById = filterPeriodTypesById;