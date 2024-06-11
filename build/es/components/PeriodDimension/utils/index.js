export const DAILY = 'DAILY';
export const WEEKLY = 'WEEKLY';
export const WEEKLYWED = 'WEEKLYWED';
export const WEEKLYTHU = 'WEEKLYTHU';
export const WEEKLYSAT = 'WEEKLYSAT';
export const WEEKLYSUN = 'WEEKLYSUN';
export const WEEKS_THIS_YEAR = 'WEEKS_THIS_YEAR';
export const BIWEEKLY = 'BIWEEKLY';
export const MONTHLY = 'MONTHLY';
export const BIMONTHLY = 'BIMONTHLY';
export const QUARTERLY = 'QUARTERLY';
export const SIXMONTHLY = 'SIXMONTHLY';
export const SIXMONTHLYAPR = 'SIXMONTHLYAPR';
export const YEARLY = 'YEARLY';
export const FINANCIAL = 'FINANCIAL';
export const FYNOV = 'FYNOV';
export const FYOCT = 'FYOCT';
export const FYJUL = 'FYJUL';
export const FYAPR = 'FYAPR';
export const filterPeriodTypesById = function () {
  let allPeriodTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let excludedPeriodTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return allPeriodTypes.filter(period => !excludedPeriodTypes.includes(period.id));
};