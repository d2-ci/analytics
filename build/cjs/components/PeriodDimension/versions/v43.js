"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useV43DataOutputPeriodTypes = exports.getV43PeriodTypeOptions = exports.filterEnabledRelativePeriodTypes = exports.applyFixedPeriodTypeDisplayLabels = exports.applyDisplayLabelOverrides = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
var _enabledPeriodTypes = require("../utils/enabledPeriodTypes.js");
var _fixedPeriods = require("../utils/fixedPeriods.js");
var _index = require("../utils/index.js");
var _relativePeriods = require("../utils/relativePeriods.js");
// v43: enabled period types from /configuration/dataOutputPeriodTypes, with a
// single `label` per period type. Relative period names are derived client side
// from that label ("This {label}", "Last {label}", ...).
// Remove this file (and its branches in useDataOutputPeriodTypes and
// periodTypeOptions.js) when v43 is no longer supported.

const v43Query = {
  enabledPeriodTypes: {
    resource: 'configuration/dataOutputPeriodTypes'
  },
  financialYearStart: {
    resource: 'systemSettings/analyticsFinancialYearStart'
  },
  analysisRelativePeriod: {
    resource: 'systemSettings/keyAnalysisRelativePeriod'
  },
  weeklyStart: {
    resource: 'systemSettings/analyticsWeeklyStart'
  }
};
const useV43DataOutputPeriodTypes = ({
  enabled
}) => {
  const {
    data: v43Data,
    error: v43Error,
    refetch: v43Refetch
  } = (0, _appRuntime.useDataQuery)(v43Query, {
    lazy: true
  });
  (0, _react.useEffect)(() => {
    if (enabled) {
      v43Refetch();
    }
  }, [enabled, v43Refetch]);
  const enabledPeriodTypesData = (0, _react.useMemo)(() => {
    var _v43Data$financialYea, _v43Data$weeklyStart, _v43Data$analysisRela;
    if (!enabled) {
      return null;
    }
    if (v43Error || !(v43Data !== null && v43Data !== void 0 && v43Data.enabledPeriodTypes)) {
      return null;
    }
    const enabledTypes = v43Data.enabledPeriodTypes;
    if (!enabledTypes || enabledTypes.length === 0) {
      return {
        version: 43,
        enabledTypes: [],
        financialYearStart: null,
        analysisRelativePeriod: null,
        noEnabledTypes: true
      };
    }
    let financialYearStart = null;
    let financialYearDisplayLabel = null;
    if ((_v43Data$financialYea = v43Data.financialYearStart) !== null && _v43Data$financialYea !== void 0 && _v43Data$financialYea.analyticsFinancialYearStart) {
      const fyStartValue = v43Data.financialYearStart.analyticsFinancialYearStart;
      const mappedFyPt = _enabledPeriodTypes.FY_SETTING_TO_SERVER_PT[fyStartValue];
      const matchingPt = enabledTypes.find(pt => pt.name === mappedFyPt);
      if (matchingPt) {
        financialYearStart = fyStartValue;
        if (matchingPt.displayLabel) {
          financialYearDisplayLabel = matchingPt.displayLabel;
        }
      }
    }
    let weeklyDisplayLabel = null;
    if ((_v43Data$weeklyStart = v43Data.weeklyStart) !== null && _v43Data$weeklyStart !== void 0 && _v43Data$weeklyStart.analyticsWeeklyStart) {
      const weeklyStartValue = v43Data.weeklyStart.analyticsWeeklyStart;
      const mappedWeeklyPt = _enabledPeriodTypes.WEEKLY_START_TO_SERVER_PT[weeklyStartValue];
      const matchingWeeklyPt = enabledTypes.find(pt => pt.name === mappedWeeklyPt);
      if (matchingWeeklyPt !== null && matchingWeeklyPt !== void 0 && matchingWeeklyPt.displayLabel) {
        weeklyDisplayLabel = matchingWeeklyPt.displayLabel;
      }
    }
    const analysisRelativePeriod = ((_v43Data$analysisRela = v43Data.analysisRelativePeriod) === null || _v43Data$analysisRela === void 0 ? void 0 : _v43Data$analysisRela.keyAnalysisRelativePeriod) || null;
    const metaData = {
      ...(financialYearDisplayLabel && {
        THIS_FINANCIAL_YEAR: {
          name: `This ${financialYearDisplayLabel}`
        },
        LAST_FINANCIAL_YEAR: {
          name: `Last ${financialYearDisplayLabel}`
        },
        LAST_5_FINANCIAL_YEARS: {
          name: `Last 5 ${financialYearDisplayLabel}`
        }
      }),
      ...(weeklyDisplayLabel && {
        THIS_WEEK: {
          name: `This ${weeklyDisplayLabel}`
        },
        LAST_WEEK: {
          name: `Last ${weeklyDisplayLabel}`
        },
        LAST_4_WEEKS: {
          name: `Last 4 ${weeklyDisplayLabel}`
        },
        LAST_12_WEEKS: {
          name: `Last 12 ${weeklyDisplayLabel}`
        },
        LAST_52_WEEKS: {
          name: `Last 52 ${weeklyDisplayLabel}`
        },
        WEEKS_THIS_YEAR: {
          name: `${weeklyDisplayLabel} this year`
        }
      })
    };
    return {
      version: 43,
      enabledTypes,
      financialYearStart,
      financialYearDisplayLabel,
      weeklyDisplayLabel,
      analysisRelativePeriod,
      metaData,
      noEnabledTypes: false
    };
  }, [enabled, v43Data, v43Error]);
  return {
    enabledPeriodTypesData,
    loading: enabled && !v43Data && !v43Error
  };
};

/**
 * Apply displayLabel overrides to fixed period type names
 */
exports.useV43DataOutputPeriodTypes = useV43DataOutputPeriodTypes;
const applyFixedPeriodTypeDisplayLabels = (filteredFixedOptions, enabledServerPeriodTypes) => {
  if (!enabledServerPeriodTypes) {
    return filteredFixedOptions;
  }
  const displayLabelMap = new Map();
  enabledServerPeriodTypes.forEach(pt => {
    if (pt.displayLabel) {
      const multiCalendarPt = _enabledPeriodTypes.SERVER_PT_TO_MULTI_CALENDAR_PT[pt.name];
      if (multiCalendarPt) {
        displayLabelMap.set(multiCalendarPt, pt.displayLabel);
      }
    }
  });
  if (displayLabelMap.size === 0) {
    return filteredFixedOptions;
  }
  return filteredFixedOptions.map(option => {
    const displayLabel = displayLabelMap.get(option.id);
    return displayLabel ? {
      ...option,
      name: displayLabel
    } : option;
  });
};

/**
 * Apply display label overrides to relative period options
 */
exports.applyFixedPeriodTypeDisplayLabels = applyFixedPeriodTypeDisplayLabels;
const applyDisplayLabelOverrides = (filteredRelativeOptions, {
  financialYearDisplayLabel,
  weeklyDisplayLabel,
  metaData
}) => {
  const overrides = {};
  if (financialYearDisplayLabel) {
    overrides['FINANCIAL'] = {
      name: financialYearDisplayLabel
    };
  }
  if (weeklyDisplayLabel) {
    overrides['WEEKLY'] = {
      name: weeklyDisplayLabel
    };
  }
  if (Object.keys(overrides).length === 0) {
    return filteredRelativeOptions;
  }
  return filteredRelativeOptions.map(option => {
    const override = overrides[option.id];
    if (!override) {
      return option;
    }
    return {
      ...option,
      name: override.name,
      getPeriods: () => (0, _enabledPeriodTypes.applyPeriodNameOverrides)(option.getPeriods(), metaData)
    };
  });
};

/**
 * Filter relative period categories based on enabled server period types
 * @param {Array} allRelativePeriodOptions - All available relative period options
 * @param {Array} enabledServerPeriodTypes - Enabled period types from server
 * @param {string|null} financialYearStart - Financial year start setting (if enabled)
 * @returns {Array} Filtered relative period options
 */
exports.applyDisplayLabelOverrides = applyDisplayLabelOverrides;
const filterEnabledRelativePeriodTypes = (allRelativePeriodOptions, enabledServerPeriodTypes, financialYearStart = null) => {
  if (!enabledServerPeriodTypes || enabledServerPeriodTypes.length === 0) {
    return [];
  }
  const enabledServerPtNames = new Set(enabledServerPeriodTypes.map(pt => pt.name));
  return allRelativePeriodOptions.filter(option => {
    // Special handling for financial years
    if (option.id === 'FINANCIAL') {
      return financialYearStart !== null;
    }

    // Check if any of the required FP dependencies are enabled
    const requiredFpTypes = _enabledPeriodTypes.RP_CATEGORY_TO_FP_DEPENDENCIES[option.id];
    if (!requiredFpTypes) {
      return true; // Show if no dependency mapping (shouldn't happen)
    }
    return requiredFpTypes.some(fpType => enabledServerPtNames.has(fpType));
  });
};
exports.filterEnabledRelativePeriodTypes = filterEnabledRelativePeriodTypes;
const getV43PeriodTypeOptions = ({
  enabledPeriodTypesData,
  periodsSettings,
  excludedPeriodTypes
}) => {
  const {
    enabledTypes,
    financialYearStart,
    financialYearDisplayLabel,
    weeklyDisplayLabel,
    metaData
  } = enabledPeriodTypesData;
  return {
    fixedOptions: (0, _index.filterPeriodTypesById)(applyFixedPeriodTypeDisplayLabels((0, _enabledPeriodTypes.filterEnabledFixedPeriodTypes)((0, _fixedPeriods.getFixedPeriodsOptions)(periodsSettings), enabledTypes), enabledTypes), excludedPeriodTypes),
    relativeOptions: (0, _index.filterPeriodTypesById)(applyDisplayLabelOverrides(filterEnabledRelativePeriodTypes((0, _relativePeriods.getRelativePeriodsOptions)(), enabledTypes, financialYearStart), {
      financialYearDisplayLabel,
      weeklyDisplayLabel,
      metaData
    }), excludedPeriodTypes)
  };
};
exports.getV43PeriodTypeOptions = getV43PeriodTypeOptions;