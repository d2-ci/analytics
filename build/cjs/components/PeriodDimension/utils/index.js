"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPeriodTypesById = exports.YEARLY = exports.WEEKS_THIS_YEAR = exports.WEEKLYWED = exports.WEEKLYTHU = exports.WEEKLYSUN = exports.WEEKLYSAT = exports.WEEKLYFRI = exports.WEEKLY = exports.SIXMONTHLYAPR = exports.SIXMONTHLY = exports.QUARTERLY = exports.MONTHLY = exports.FYSEP = exports.FYOCT = exports.FYNOV = exports.FYJUL = exports.FYFEB = exports.FYAUG = exports.FYAPR = exports.FINANCIAL = exports.DAILY = exports.BIWEEKLY = exports.BIMONTHLY = void 0;
const DAILY = exports.DAILY = 'DAILY';
const WEEKLY = exports.WEEKLY = 'WEEKLY';
const WEEKLYWED = exports.WEEKLYWED = 'WEEKLYWED';
const WEEKLYTHU = exports.WEEKLYTHU = 'WEEKLYTHU';
const WEEKLYFRI = exports.WEEKLYFRI = 'WEEKLYFRI';
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
const FYFEB = exports.FYFEB = 'FYFEB';
const FYAPR = exports.FYAPR = 'FYAPR';
const FYJUL = exports.FYJUL = 'FYJUL';
const FYAUG = exports.FYAUG = 'FYAUG';
const FYSEP = exports.FYSEP = 'FYSEP';
const FYOCT = exports.FYOCT = 'FYOCT';
const FYNOV = exports.FYNOV = 'FYNOV';
const filterPeriodTypesById = (allPeriodTypes = [], excludedPeriodTypes = []) => allPeriodTypes.filter(period => !excludedPeriodTypes.includes(period.id));
exports.filterPeriodTypesById = filterPeriodTypesById;