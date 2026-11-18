"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getV42PeriodTypeOptions = void 0;
var _fixedPeriods = require("../utils/fixedPeriods.js");
var _index = require("../utils/index.js");
var _relativePeriods = require("../utils/relativePeriods.js");
// v42: no enabled period types API, all period types and relative periods
// come from the hardcoded client lists.
// Remove this file (and its branch in periodTypeOptions.js) when v42 is no longer supported.

// period types that were introduced in v43
const V43_PERIOD_TYPES = [_index.WEEKLYFRI, _index.FYFEB, _index.FYAUG, _index.FYSEP];
const getV42PeriodTypeOptions = ({
  periodsSettings,
  excludedPeriodTypes
}) => {
  const allExcludedPeriodTypes = [...excludedPeriodTypes, ...V43_PERIOD_TYPES];
  return {
    fixedOptions: (0, _index.filterPeriodTypesById)((0, _fixedPeriods.getFixedPeriodsOptions)(periodsSettings), allExcludedPeriodTypes),
    relativeOptions: (0, _index.filterPeriodTypesById)((0, _relativePeriods.getRelativePeriodsOptions)(), allExcludedPeriodTypes)
  };
};
exports.getV42PeriodTypeOptions = getV42PeriodTypeOptions;