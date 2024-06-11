"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPeriodTypesById = exports.YEARLY = exports.WEEKS_THIS_YEAR = exports.WEEKLYWED = exports.WEEKLYTHU = exports.WEEKLYSUN = exports.WEEKLYSAT = exports.WEEKLY = exports.SIXMONTHLYAPR = exports.SIXMONTHLY = exports.QUARTERLY = exports.MONTHLY = exports.FYOCT = exports.FYNOV = exports.FYJUL = exports.FYAPR = exports.FINANCIAL = exports.DAILY = exports.BIWEEKLY = exports.BIMONTHLY = void 0;
const DAILY = 'DAILY';
exports.DAILY = DAILY;
const WEEKLY = 'WEEKLY';
exports.WEEKLY = WEEKLY;
const WEEKLYWED = 'WEEKLYWED';
exports.WEEKLYWED = WEEKLYWED;
const WEEKLYTHU = 'WEEKLYTHU';
exports.WEEKLYTHU = WEEKLYTHU;
const WEEKLYSAT = 'WEEKLYSAT';
exports.WEEKLYSAT = WEEKLYSAT;
const WEEKLYSUN = 'WEEKLYSUN';
exports.WEEKLYSUN = WEEKLYSUN;
const WEEKS_THIS_YEAR = 'WEEKS_THIS_YEAR';
exports.WEEKS_THIS_YEAR = WEEKS_THIS_YEAR;
const BIWEEKLY = 'BIWEEKLY';
exports.BIWEEKLY = BIWEEKLY;
const MONTHLY = 'MONTHLY';
exports.MONTHLY = MONTHLY;
const BIMONTHLY = 'BIMONTHLY';
exports.BIMONTHLY = BIMONTHLY;
const QUARTERLY = 'QUARTERLY';
exports.QUARTERLY = QUARTERLY;
const SIXMONTHLY = 'SIXMONTHLY';
exports.SIXMONTHLY = SIXMONTHLY;
const SIXMONTHLYAPR = 'SIXMONTHLYAPR';
exports.SIXMONTHLYAPR = SIXMONTHLYAPR;
const YEARLY = 'YEARLY';
exports.YEARLY = YEARLY;
const FINANCIAL = 'FINANCIAL';
exports.FINANCIAL = FINANCIAL;
const FYNOV = 'FYNOV';
exports.FYNOV = FYNOV;
const FYOCT = 'FYOCT';
exports.FYOCT = FYOCT;
const FYJUL = 'FYJUL';
exports.FYJUL = FYJUL;
const FYAPR = 'FYAPR';
exports.FYAPR = FYAPR;

const filterPeriodTypesById = function () {
  let allPeriodTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let excludedPeriodTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return allPeriodTypes.filter(period => !excludedPeriodTypes.includes(period.id));
};

exports.filterPeriodTypesById = filterPeriodTypesById;