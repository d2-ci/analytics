"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WeeklyExcluded = exports.V44WeeklyStartDisabled = exports.V44Translated = exports.V44CustomLabels = exports.V43Labels = exports.V42 = exports.UsingRightFooter = exports.OneSelected = exports.NoneSelected = exports.MonthlyExcluded = exports.AllBelowQuarterlyExcluded = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _appServiceConfig = require("@dhis2/app-service-config");
var _react = _interopRequireDefault(require("react"));
var _PeriodDimension = _interopRequireDefault(require("../components/PeriodDimension/PeriodDimension.js"));
var _index = require("../components/PeriodDimension/utils/index.js");
var _periodTypesV = require("./data/periodTypes.v44.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// The period selector has one implementation per server version (42, 43, 44),
// selected by serverVersion.minor. The server responses are mocked.
const withServer = ({
  minor,
  data
}) => function MockServer(Story) {
  return /*#__PURE__*/_react.default.createElement(_appServiceConfig.ConfigProvider, {
    config: {
      baseUrl: '..',
      apiVersion: minor,
      serverVersion: {
        major: 2,
        minor,
        patch: 0
      },
      systemInfo: {
        calendar: 'gregory'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_appRuntime.CustomDataProvider, {
    data: data
  }, /*#__PURE__*/_react.default.createElement(Story, null)));
};

// Mimics the v44 server: relative period labels are stored per relative
// period and returned under every period type that has the relative period
const applyV44Labels = (periodTypes, {
  periodTypeLabels,
  relativePeriodLabels
}) => periodTypes.map(pt => ({
  ...pt,
  displayName: periodTypeLabels[pt.name] || pt.displayName,
  relativePeriods: Object.fromEntries(Object.entries(pt.relativePeriods).map(([id, rp]) => [id, {
    displayName: relativePeriodLabels[id] || rp.displayName
  }]))
}));
const v44Data = ({
  // the server returns all period types when none are configured
  enabledPeriodTypes = _periodTypesV.periodTypesV44.map(({
    name
  }) => name),
  periodTypeLabels = {},
  relativePeriodLabels = {},
  weeklyStart = 'WEEKLY',
  financialYearStart = 'FINANCIAL_YEAR_OCTOBER',
  analysisRelativePeriod = 'LAST_12_MONTHS'
} = {}) => ({
  // PeriodDimension reads keyUiLocale for generating fixed periods
  userSettings: {
    keyUiLocale: 'en'
  },
  'configuration/dataOutputPeriodTypes': applyV44Labels(_periodTypesV.periodTypesV44.filter(({
    name
  }) => enabledPeriodTypes.includes(name)), {
    periodTypeLabels,
    relativePeriodLabels
  }),
  'systemSettings/keyAnalysisRelativePeriod': {
    keyAnalysisRelativePeriod: analysisRelativePeriod
  },
  'systemSettings/analyticsWeeklyStart': {
    analyticsWeeklyStart: weeklyStart
  },
  'systemSettings/analyticsFinancialYearStart': {
    analyticsFinancialYearStart: financialYearStart
  }
});
const selectedPeriods = [{
  id: 'LAST_12_MONTHS',
  name: 'Last 12 months'
}];
var _default = exports.default = {
  title: 'PeriodDimension',
  decorators: [withServer({
    minor: 44,
    data: v44Data()
  })]
};
const NoneSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
};
exports.NoneSelected = NoneSelected;
NoneSelected.storyName = 'None selected';
const OneSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    selectedPeriods: selectedPeriods,
    onSelect: selected => console.log(selected)
  });
};
exports.OneSelected = OneSelected;
OneSelected.storyName = 'One selected';
const MonthlyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.MONTHLY],
    onSelect: selected => console.log(selected)
  });
};
exports.MonthlyExcluded = MonthlyExcluded;
MonthlyExcluded.storyName = 'Monthly excluded';
const WeeklyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN],
    onSelect: selected => console.log(selected)
  });
};
exports.WeeklyExcluded = WeeklyExcluded;
WeeklyExcluded.storyName = 'Weekly excluded';
const AllBelowQuarterlyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.DAILY, _index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN, _index.BIWEEKLY, _index.MONTHLY, _index.BIMONTHLY],
    onSelect: selected => console.log(selected)
  });
};
exports.AllBelowQuarterlyExcluded = AllBelowQuarterlyExcluded;
AllBelowQuarterlyExcluded.storyName = 'All below Quarterly excluded';
const UsingRightFooter = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    rightFooter: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '8px',
        margin: '8px 0',
        border: '1px solid #f79533'
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, "Right footer goes here")),
    onSelect: selected => console.log(selected)
  });
};
exports.UsingRightFooter = UsingRightFooter;
UsingRightFooter.storyName = 'Using right footer';
const V44CustomLabels = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default
  // stored name of a saved visualization is replaced by the label
  , {
    selectedPeriods: [{
      id: 'LAST_4_WEEKS',
      name: 'Last 4 weeks'
    }],
    onSelect: selected => console.log(selected)
  });
};
exports.V44CustomLabels = V44CustomLabels;
V44CustomLabels.storyName = 'v44: custom labels, only Weekly Sunday and Financial April enabled';
V44CustomLabels.decorators = [withServer({
  minor: 44,
  data: v44Data({
    enabledPeriodTypes: ['Daily', 'WeeklySunday', 'Monthly', 'Quarterly', 'Yearly', 'FinancialApril'],
    weeklyStart: 'WEEKLY_SUNDAY',
    financialYearStart: 'FINANCIAL_YEAR_APRIL',
    // opens the weekly relative periods
    analysisRelativePeriod: 'LAST_4_WEEKS',
    periodTypeLabels: {
      WeeklySunday: 'EPI week',
      FinancialApril: 'Fiscal year'
    },
    relativePeriodLabels: {
      THIS_WEEK: 'This EPI week',
      LAST_WEEK: 'Last EPI week',
      LAST_4_WEEKS: 'Last 4 EPI weeks',
      LAST_12_WEEKS: 'Last 12 EPI weeks',
      LAST_52_WEEKS: 'Last 52 EPI weeks',
      WEEKS_THIS_YEAR: 'EPI weeks this year',
      THIS_FINANCIAL_YEAR: 'This fiscal year',
      LAST_FINANCIAL_YEAR: 'Last fiscal year',
      LAST_5_FINANCIAL_YEARS: 'Last 5 fiscal years',
      LAST_10_FINANCIAL_YEARS: 'Last 10 fiscal years'
    }
  })
})];
const V44Translated = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default
  // stored name of a saved visualization is replaced by the translation
  , {
    selectedPeriods: [{
      id: 'LAST_12_MONTHS',
      name: 'Last 12 months'
    }],
    onSelect: selected => console.log(selected)
  });
};
exports.V44Translated = V44Translated;
V44Translated.storyName = 'v44: label translations (db locale fr)';
V44Translated.decorators = [withServer({
  minor: 44,
  data: v44Data({
    enabledPeriodTypes: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    periodTypeLabels: {
      Daily: 'Quotidien',
      Weekly: 'Hebdomadaire',
      Monthly: 'Mensuel',
      Yearly: 'Annuel'
    },
    relativePeriodLabels: {
      TODAY: "Aujourd'hui",
      YESTERDAY: 'Hier',
      THIS_WEEK: 'Cette semaine',
      LAST_WEEK: 'La semaine dernière',
      THIS_MONTH: 'Ce mois-ci',
      LAST_MONTH: 'Le mois dernier',
      LAST_3_MONTHS: '3 derniers mois',
      LAST_6_MONTHS: '6 derniers mois',
      LAST_12_MONTHS: '12 derniers mois',
      THIS_YEAR: 'Cette année',
      LAST_YEAR: "L'année dernière"
    }
  })
})];
const V44WeeklyStartDisabled = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
};
exports.V44WeeklyStartDisabled = V44WeeklyStartDisabled;
V44WeeklyStartDisabled.storyName = 'v44: weekly start Sunday, but only Weekly enabled (no weekly relative periods)';
V44WeeklyStartDisabled.decorators = [withServer({
  minor: 44,
  data: v44Data({
    enabledPeriodTypes: ['Weekly', 'Monthly'],
    weeklyStart: 'WEEKLY_SUNDAY'
  })
})];
const V43Labels = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
};
exports.V43Labels = V43Labels;
V43Labels.storyName = 'v43: period type labels, relative period names derived from them';
V43Labels.decorators = [withServer({
  minor: 43,
  data: {
    userSettings: {
      keyUiLocale: 'en'
    },
    'configuration/dataOutputPeriodTypes': [{
      name: 'Daily'
    }, {
      name: 'WeeklySunday',
      displayLabel: 'EPI week'
    }, {
      name: 'Monthly'
    }, {
      name: 'Quarterly'
    }, {
      name: 'Yearly'
    }, {
      name: 'FinancialApril',
      displayLabel: 'Fiscal year'
    }],
    'systemSettings/keyAnalysisRelativePeriod': {
      keyAnalysisRelativePeriod: 'LAST_12_MONTHS'
    },
    'systemSettings/analyticsWeeklyStart': {
      analyticsWeeklyStart: 'WEEKLY_SUNDAY'
    },
    'systemSettings/analyticsFinancialYearStart': {
      analyticsFinancialYearStart: 'FINANCIAL_YEAR_APRIL'
    }
  }
})];
const V42 = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
};
exports.V42 = V42;
V42.storyName = 'v42: client period types and relative periods';
V42.decorators = [withServer({
  minor: 42,
  data: {
    userSettings: {
      keyUiLocale: 'en'
    }
  }
})];