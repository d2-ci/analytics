"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _PeriodTransfer = _interopRequireDefault(require("./PeriodTransfer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const userSettingsQuery = {
  userSettings: {
    resource: 'userSettings',
    params: {
      key: ['keyUiLocale']
    }
  }
};
const enabledPeriodTypesQuery = {
  enabledPeriodTypes: {
    resource: 'configuration/dataOutputPeriodTypes'
  }
};
const financialYearStartQuery = {
  financialYearStart: {
    resource: 'systemSettings/analyticsFinancialYearStart'
  }
};
const analysisRelativePeriodQuery = {
  analysisRelativePeriod: {
    resource: 'systemSettings/keyAnalysisRelativePeriod'
  }
};
const SELECTED_PERIODS_PROP_DEFAULT = [];
const PeriodDimension = ({
  onSelect,
  selectedPeriods = SELECTED_PERIODS_PROP_DEFAULT,
  rightFooter,
  excludedPeriodTypes,
  infoBoxMessage,
  height
}) => {
  const config = (0, _appRuntime.useConfig)();
  const {
    systemInfo,
    serverVersion
  } = config;
  const userSettingsResult = (0, _appRuntime.useDataQuery)(userSettingsQuery);
  const supportsEnabledPeriodTypes = serverVersion.minor >= 43;

  // Conditionally fetch enabled period types for v43+
  const enabledPeriodTypesResult = (0, _appRuntime.useDataQuery)(supportsEnabledPeriodTypes ? enabledPeriodTypesQuery : {
    skip: true
  });

  // Conditionally fetch financial year start setting for v43+
  const financialYearStartResult = (0, _appRuntime.useDataQuery)(supportsEnabledPeriodTypes ? financialYearStartQuery : {
    skip: true
  });

  // Conditionally fetch analysis relative period setting for v43+
  const analysisRelativePeriodResult = (0, _appRuntime.useDataQuery)(supportsEnabledPeriodTypes ? analysisRelativePeriodQuery : {
    skip: true
  });
  const {
    calendar = 'gregory'
  } = systemInfo;
  const {
    data: {
      userSettings: {
        keyUiLocale: locale
      } = {}
    } = {}
  } = userSettingsResult;
  const periodsSettings = {
    calendar,
    locale
  };

  // Process enabled period types and validate financial year setting
  const enabledPeriodTypesData = (0, _react.useMemo)(() => {
    var _fyStartData$financia, _analysisRpData$analy;
    if (!supportsEnabledPeriodTypes) {
      return null;
    }
    const {
      data: enabledTypesData,
      error: enabledTypesError
    } = enabledPeriodTypesResult;
    const {
      data: fyStartData,
      error: fyStartError
    } = financialYearStartResult;
    const {
      data: analysisRpData,
      error: analysisRpError
    } = analysisRelativePeriodResult;
    if (enabledTypesError || fyStartError || analysisRpError) {
      return null;
    }
    if (!(enabledTypesData !== null && enabledTypesData !== void 0 && enabledTypesData.enabledPeriodTypes)) {
      return null;
    }
    const enabledTypes = enabledTypesData.enabledPeriodTypes;

    // Handle empty enabled types
    if (!enabledTypes || enabledTypes.length === 0) {
      alert('No period types are enabled in the system. Please contact your system administrator.');
      return {
        enabledTypes: [],
        financialYearStart: null,
        analysisRelativePeriod: null
      };
    }

    // Process financial year start setting
    let financialYearStart = null;
    if (fyStartData !== null && fyStartData !== void 0 && (_fyStartData$financia = fyStartData.financialYearStart) !== null && _fyStartData$financia !== void 0 && _fyStartData$financia.analyticsFinancialYearStart) {
      const fyStartValue = fyStartData.financialYearStart.analyticsFinancialYearStart;

      // Map system setting to server PT name
      const FY_SETTING_TO_SERVER_PT = {
        FINANCIAL_YEAR_APRIL: 'FinancialApril',
        FINANCIAL_YEAR_JULY: 'FinancialJuly',
        FINANCIAL_YEAR_SEPTEMBER: 'FinancialSep',
        FINANCIAL_YEAR_OCTOBER: 'FinancialOct',
        FINANCIAL_YEAR_NOVEMBER: 'FinancialNov'
      };
      const mappedFyPt = FY_SETTING_TO_SERVER_PT[fyStartValue];
      if (mappedFyPt && enabledTypes.some(pt => pt.name === mappedFyPt)) {
        financialYearStart = fyStartValue;
      }
    }

    // Process analysis relative period setting
    const analysisRelativePeriod = (analysisRpData === null || analysisRpData === void 0 ? void 0 : (_analysisRpData$analy = analysisRpData.analysisRelativePeriod) === null || _analysisRpData$analy === void 0 ? void 0 : _analysisRpData$analy.keyAnalysisRelativePeriod) || null;
    return {
      enabledTypes,
      financialYearStart,
      analysisRelativePeriod
    };
  }, [supportsEnabledPeriodTypes, enabledPeriodTypesResult, financialYearStartResult, analysisRelativePeriodResult]);
  const selectPeriods = periods => {
    onSelect({
      dimensionId: _predefinedDimensions.DIMENSION_ID_PERIOD,
      items: periods
    });
  };
  return /*#__PURE__*/_react.default.createElement(_PeriodTransfer.default, {
    onSelect: selectPeriods,
    selectedItems: selectedPeriods,
    infoBoxMessage: infoBoxMessage,
    rightFooter: rightFooter,
    dataTest: 'period-dimension',
    excludedPeriodTypes: excludedPeriodTypes,
    periodsSettings: periodsSettings,
    height: height,
    enabledPeriodTypesData: enabledPeriodTypesData,
    supportsEnabledPeriodTypes: supportsEnabledPeriodTypes
  });
};
PeriodDimension.propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  height: _propTypes.default.string,
  infoBoxMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedPeriods: _propTypes.default.array
};
var _default = exports.default = PeriodDimension;