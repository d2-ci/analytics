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
    if ((_v43Data$financialYea = v43Data.financialYearStart) !== null && _v43Data$financialYea !== void 0 && _v43Data$financialYea.analyticsFinancialYearStart) {
      const fyStartValue = v43Data.financialYearStart.analyticsFinancialYearStart;
      const mappedFyPt = FY_SETTING_TO_SERVER_PT[fyStartValue];
      if (mappedFyPt && enabledTypes.some(pt => pt.name === mappedFyPt)) {
        financialYearStart = fyStartValue;
      }
    }
    const analysisRelativePeriod = ((_v43Data$analysisRela = v43Data.analysisRelativePeriod) === null || _v43Data$analysisRela === void 0 ? void 0 : _v43Data$analysisRela.keyAnalysisRelativePeriod) || null;
    return {
      enabledTypes,
      financialYearStart,
      analysisRelativePeriod,
      noEnabledTypes: false
    };
  }, [supportsEnabledPeriodTypes, v43Data, v43Error]);
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