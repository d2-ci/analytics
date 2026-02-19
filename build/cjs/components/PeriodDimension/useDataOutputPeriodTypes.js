"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataOutputPeriodTypes = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
const v43Query = {
  enabledPeriodTypes: {
    resource: 'configuration/dataOutputPeriodTypes'
  },
  financialYearStart: {
    resource: 'systemSettings/analyticsFinancialYearStart'
  },
  analysisRelativePeriod: {
    resource: 'systemSettings/keyAnalysisRelativePeriod'
  }
};
const FY_SETTING_TO_SERVER_PT = {
  FINANCIAL_YEAR_APRIL: 'FinancialApril',
  FINANCIAL_YEAR_JULY: 'FinancialJuly',
  FINANCIAL_YEAR_SEPTEMBER: 'FinancialSep',
  FINANCIAL_YEAR_OCTOBER: 'FinancialOct',
  FINANCIAL_YEAR_NOVEMBER: 'FinancialNov'
};
const useDataOutputPeriodTypes = () => {
  const {
    serverVersion
  } = (0, _appRuntime.useConfig)();
  const supportsEnabledPeriodTypes = serverVersion.minor >= 43;
  const {
    data: v43Data,
    error: v43Error,
    refetch: v43Refetch
  } = (0, _appRuntime.useDataQuery)(v43Query, {
    lazy: true
  });
  (0, _react.useEffect)(() => {
    if (supportsEnabledPeriodTypes) {
      v43Refetch();
    }
  }, [supportsEnabledPeriodTypes, v43Refetch]);
  const enabledPeriodTypesData = (0, _react.useMemo)(() => {
    var _v43Data$financialYea, _v43Data$analysisRela;
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
    let financialYearStart = null;
    let financialYearDisplayLabel = null;
    if ((_v43Data$financialYea = v43Data.financialYearStart) !== null && _v43Data$financialYea !== void 0 && _v43Data$financialYea.analyticsFinancialYearStart) {
      const fyStartValue = v43Data.financialYearStart.analyticsFinancialYearStart;
      const mappedFyPt = FY_SETTING_TO_SERVER_PT[fyStartValue];
      const matchingPt = enabledTypes.find(pt => pt.name === mappedFyPt);
      //TODO: remove
      matchingPt.displayLabel = 'Academic year';
      if (mappedFyPt && matchingPt) {
        financialYearStart = fyStartValue;
        if (matchingPt.displayLabel) {
          financialYearDisplayLabel = matchingPt.displayLabel;
        }
      }
    }
    const analysisRelativePeriod = ((_v43Data$analysisRela = v43Data.analysisRelativePeriod) === null || _v43Data$analysisRela === void 0 ? void 0 : _v43Data$analysisRela.keyAnalysisRelativePeriod) || null;
    const metaData = financialYearDisplayLabel ? {
      THIS_FINANCIAL_YEAR: {
        name: `This ${financialYearDisplayLabel}`
      },
      LAST_FINANCIAL_YEAR: {
        name: `Last ${financialYearDisplayLabel}`
      },
      LAST_5_FINANCIAL_YEARS: {
        name: `Last 5 ${financialYearDisplayLabel}`
      }
    } : null;
    return {
      enabledTypes,
      financialYearStart,
      financialYearDisplayLabel,
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
exports.useDataOutputPeriodTypes = useDataOutputPeriodTypes;