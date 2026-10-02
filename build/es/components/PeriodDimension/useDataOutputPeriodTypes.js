import { useConfig, useDataQuery } from '@dhis2/app-runtime';
import { useEffect, useMemo } from 'react';
import { FINANCIAL_YEAR_START_TO_PERIOD_TYPE, WEEKLY_START_TO_PERIOD_TYPE } from './utils/enabledPeriodTypes.js';
const v43Query = {
  enabledPeriodTypes: {
    resource: 'configuration/dataOutputPeriodTypes'
  },
  // v43-only: analyticsFinancialYearStart is removed in v44
  financialYearStart: {
    resource: 'systemSettings/analyticsFinancialYearStart'
  },
  analysisRelativePeriod: {
    resource: 'systemSettings/keyAnalysisRelativePeriod'
  },
  // v43-only: analyticsWeeklyStart is removed in v44
  weeklyStart: {
    resource: 'systemSettings/analyticsWeeklyStart'
  }
};
const useDataOutputPeriodTypes = () => {
  const {
    serverVersion
  } = useConfig();
  const supportsEnabledPeriodTypes = serverVersion.minor >= 43;
  const {
    data: v43Data,
    error: v43Error,
    refetch: v43Refetch
  } = useDataQuery(v43Query, {
    lazy: true
  });
  useEffect(() => {
    if (supportsEnabledPeriodTypes) {
      v43Refetch();
    }
  }, [supportsEnabledPeriodTypes, v43Refetch]);
  const enabledPeriodTypesData = useMemo(() => {
    var _v43Data$financialYea, _v43Data$weeklyStart, _v43Data$analysisRela;
    if (!supportsEnabledPeriodTypes) {
      return null;
    }
    if (v43Error || !(v43Data !== null && v43Data !== void 0 && v43Data.enabledPeriodTypes)) {
      return null;
    }
    const enabledTypes = v43Data.enabledPeriodTypes;
    if (!enabledTypes || enabledTypes.length === 0) {
      return {
        enabledTypes: [],
        financialYearStart: null,
        analysisRelativePeriod: null,
        noEnabledTypes: true
      };
    }

    // v43-only: financial year logic goes away in v44
    let financialYearStart = null;
    let financialYearDisplayLabel = null;
    if ((_v43Data$financialYea = v43Data.financialYearStart) !== null && _v43Data$financialYea !== void 0 && _v43Data$financialYea.analyticsFinancialYearStart) {
      const fyStartValue = v43Data.financialYearStart.analyticsFinancialYearStart;
      const mappedFyPt = FINANCIAL_YEAR_START_TO_PERIOD_TYPE[fyStartValue];
      const matchingPt = enabledTypes.find(pt => pt.name === mappedFyPt);
      if (matchingPt) {
        financialYearStart = fyStartValue;
        if (matchingPt.displayLabel) {
          financialYearDisplayLabel = matchingPt.displayLabel;
        }
      }
    }

    // v43-only: weekly start logic goes away in v44
    let weeklyDisplayLabel = null;
    if ((_v43Data$weeklyStart = v43Data.weeklyStart) !== null && _v43Data$weeklyStart !== void 0 && _v43Data$weeklyStart.analyticsWeeklyStart) {
      const weeklyStartValue = v43Data.weeklyStart.analyticsWeeklyStart;
      const mappedWeeklyPt = WEEKLY_START_TO_PERIOD_TYPE[weeklyStartValue];
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
      enabledTypes,
      financialYearStart,
      financialYearDisplayLabel,
      weeklyDisplayLabel,
      analysisRelativePeriod,
      metaData,
      noEnabledTypes: false
    };
  }, [supportsEnabledPeriodTypes, v43Data, v43Error]);
  return {
    supportsEnabledPeriodTypes,
    enabledPeriodTypesData
  };
};
export { useDataOutputPeriodTypes };