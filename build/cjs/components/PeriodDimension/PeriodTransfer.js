"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _PeriodIcon = _interopRequireDefault(require("../../assets/DimensionItemIcons/PeriodIcon.js"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dimensionSelectorHelper = require("../../modules/dimensionSelectorHelper.js");
var _DimensionSelectorStyle = _interopRequireDefault(require("../styles/DimensionSelector.style.js"));
var _TransferOption = require("../TransferOption.js");
var _FixedPeriodFilter = _interopRequireDefault(require("./FixedPeriodFilter.js"));
var _RelativePeriodFilter = _interopRequireDefault(require("./RelativePeriodFilter.js"));
var _enabledPeriodTypes = require("./utils/enabledPeriodTypes.js");
var _fixedPeriods = require("./utils/fixedPeriods.js");
var _index2 = require("./utils/index.js");
var _relativePeriods = require("./utils/relativePeriods.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } //TODO: Reimplement the icon.js
const RightHeader = ({
  infoBoxMessage
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "rightHeader"
}, _index.default.t('Selected Periods')), infoBoxMessage && /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "info-container"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}`
}, /*#__PURE__*/_react.default.createElement(_ui.IconInfo16, null)), /*#__PURE__*/_react.default.createElement("span", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "info-text"
}, infoBoxMessage)), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _DimensionSelectorStyle.default.__hash
}, _DimensionSelectorStyle.default));
RightHeader.propTypes = {
  infoBoxMessage: _propTypes.default.string
};
const SELECTED_ITEMS_PROP_DEFAULT = [];
const EXCLUDED_PERIOD_TYPES_PROP_DEFAULT = [];
const PERIODS_SETTINGS_PROP_DEFAULT = {
  calendar: 'gregory',
  locale: 'en'
};
const PeriodTransfer = ({
  onSelect,
  dataTest,
  selectedItems = SELECTED_ITEMS_PROP_DEFAULT,
  rightFooter,
  excludedPeriodTypes = EXCLUDED_PERIOD_TYPES_PROP_DEFAULT,
  periodsSettings = PERIODS_SETTINGS_PROP_DEFAULT,
  infoBoxMessage,
  height = _dimensionSelectorHelper.TRANSFER_HEIGHT,
  enabledPeriodTypesData = null,
  supportsEnabledPeriodTypes = false
}) => {
  const {
    filteredFixedOptions,
    filteredRelativeOptions
  } = (0, _react.useMemo)(() => {
    if (supportsEnabledPeriodTypes && enabledPeriodTypesData) {
      const {
        enabledTypes,
        financialYearStart,
        financialYearDisplayLabel,
        metaData
      } = enabledPeriodTypesData;
      const filteredFixed = (0, _enabledPeriodTypes.filterEnabledFixedPeriodTypes)((0, _fixedPeriods.getFixedPeriodsOptions)(periodsSettings), enabledTypes);
      let filteredRelative = (0, _enabledPeriodTypes.filterEnabledRelativePeriodTypes)((0, _relativePeriods.getRelativePeriodsOptions)(), enabledTypes, financialYearStart);
      if (financialYearDisplayLabel && metaData) {
        filteredRelative = filteredRelative.map(option => option.id === 'FINANCIAL' ? {
          ...option,
          name: financialYearDisplayLabel,
          getPeriods: () => option.getPeriods().map(period => {
            var _metaData$period$id;
            return {
              ...period,
              name: ((_metaData$period$id = metaData[period.id]) === null || _metaData$period$id === void 0 ? void 0 : _metaData$period$id.name) || period.name
            };
          })
        } : option);
      }
      return {
        filteredFixedOptions: filteredFixed,
        filteredRelativeOptions: filteredRelative
      };
    } else {
      const allFixed = (0, _fixedPeriods.getFixedPeriodsOptions)(periodsSettings);
      const allRelative = (0, _relativePeriods.getRelativePeriodsOptions)();
      return {
        filteredFixedOptions: (0, _index2.filterPeriodTypesById)(allFixed, excludedPeriodTypes),
        filteredRelativeOptions: (0, _index2.filterPeriodTypesById)(allRelative, excludedPeriodTypes)
      };
    }
  }, [supportsEnabledPeriodTypes, enabledPeriodTypesData, excludedPeriodTypes, periodsSettings]);
  const bestRelativePeriod = (0, _react.useMemo)(() => {
    if (supportsEnabledPeriodTypes && enabledPeriodTypesData) {
      const {
        analysisRelativePeriod
      } = enabledPeriodTypesData;
      return (0, _enabledPeriodTypes.findBestAvailableRelativePeriod)(filteredRelativeOptions, analysisRelativePeriod);
    }
    return null;
  }, [supportsEnabledPeriodTypes, enabledPeriodTypesData, filteredRelativeOptions]);
  const defaultRelativePeriodType = supportsEnabledPeriodTypes && bestRelativePeriod ? filteredRelativeOptions.find(opt => opt.id === bestRelativePeriod.categoryId) : filteredRelativeOptions.find(opt => opt.id === _index2.MONTHLY) || filteredRelativeOptions.find(opt => opt.id === _index2.QUARTERLY) || filteredRelativeOptions[0];
  const defaultFixedPeriodType = filteredFixedOptions.find(opt => opt.id === _index2.MONTHLY) || filteredFixedOptions.find(opt => opt.id === _index2.QUARTERLY) || filteredFixedOptions[0];
  const now = (0, _multiCalendarDates.getNowInCalendar)(periodsSettings.calendar);
  // use ".eraYear" rather than ".year" because in Ethiopian calendar, eraYear is what our users expect to see (for other calendars, it doesn't matter)
  // there is still a pending decision in Temporal regarding which era to use by default: https://github.com/js-temporal/temporal-polyfill/blob/9350ee7dd0d29f329fc097debf923a517c32f813/lib/calendar.ts#L1964
  const defaultFixedPeriodYear = now.eraYear || now.year;
  const fixedPeriodConfig = year => ({
    offset: year - defaultFixedPeriodYear,
    filterFuturePeriods: false,
    reversePeriods: false
  });
  const [userPeriods, setUserPeriods] = (0, _react.useState)(null);
  const [isRelative, setIsRelative] = (0, _react.useState)(true);
  const [relativeFilter, setRelativeFilter] = (0, _react.useState)({
    periodType: (defaultRelativePeriodType === null || defaultRelativePeriodType === void 0 ? void 0 : defaultRelativePeriodType.id) || ''
  });
  const [fixedFilter, setFixedFilter] = (0, _react.useState)({
    periodType: (defaultFixedPeriodType === null || defaultFixedPeriodType === void 0 ? void 0 : defaultFixedPeriodType.id) || '',
    year: defaultFixedPeriodYear.toString()
  });
  const effectiveRelativeFilterType = filteredRelativeOptions.some(opt => opt.id === relativeFilter.periodType) ? relativeFilter.periodType : (defaultRelativePeriodType === null || defaultRelativePeriodType === void 0 ? void 0 : defaultRelativePeriodType.id) || '';
  const effectiveFixedFilterType = filteredFixedOptions.some(opt => opt.id === fixedFilter.periodType) ? fixedFilter.periodType : (defaultFixedPeriodType === null || defaultFixedPeriodType === void 0 ? void 0 : defaultFixedPeriodType.id) || '';
  const prevEffectiveRelativeRef = (0, _react.useRef)(effectiveRelativeFilterType);
  const prevEffectiveFixedRef = (0, _react.useRef)(effectiveFixedFilterType);
  if (prevEffectiveRelativeRef.current !== effectiveRelativeFilterType) {
    prevEffectiveRelativeRef.current = effectiveRelativeFilterType;
    if (relativeFilter.periodType !== effectiveRelativeFilterType) {
      setRelativeFilter({
        periodType: effectiveRelativeFilterType
      });
    }
    if (isRelative) {
      setUserPeriods(null);
    }
  }
  if (prevEffectiveFixedRef.current !== effectiveFixedFilterType) {
    prevEffectiveFixedRef.current = effectiveFixedFilterType;
    if (fixedFilter.periodType !== effectiveFixedFilterType) {
      setFixedFilter(prev => ({
        ...prev,
        periodType: effectiveFixedFilterType
      }));
    }
    if (!isRelative) {
      setUserPeriods(null);
    }
  }
  const derivedPeriods = (0, _react.useMemo)(() => {
    if (isRelative) {
      const opt = filteredRelativeOptions.find(o => o.id === effectiveRelativeFilterType);
      return (opt === null || opt === void 0 ? void 0 : opt.getPeriods()) || [];
    } else {
      const opt = filteredFixedOptions.find(o => o.id === effectiveFixedFilterType);
      return (opt === null || opt === void 0 ? void 0 : opt.getPeriods(fixedPeriodConfig(Number(fixedFilter.year)))) || [];
    }
  }, [isRelative, effectiveRelativeFilterType, effectiveFixedFilterType, filteredRelativeOptions, filteredFixedOptions, fixedFilter.year]);
  const allPeriods = userPeriods !== null ? userPeriods : derivedPeriods;
  const isActive = value => {
    const item = selectedItems.find(item => item.id === value);
    return !item || item.isActive;
  };
  const onIsRelativeClick = state => {
    if (state !== isRelative) {
      setIsRelative(state);
      setUserPeriods(null);
    }
  };
  if (enabledPeriodTypesData !== null && enabledPeriodTypesData !== void 0 && enabledPeriodTypesData.noEnabledTypes) {
    return /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
      warning: true,
      title: _index.default.t('No period types available')
    }, _index.default.t('No period types are enabled in the system. Please contact your system administrator.'));
  }
  const renderLeftHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.TabBar, null, /*#__PURE__*/_react.default.createElement(_ui.Tab, {
    selected: isRelative,
    onClick: () => onIsRelativeClick(true),
    dataTest: `${dataTest}-relative-periods-button`
  }, _index.default.t('Relative periods')), /*#__PURE__*/_react.default.createElement(_ui.Tab, {
    selected: !isRelative,
    onClick: () => onIsRelativeClick(false),
    dataTest: `${dataTest}-fixed-periods-button`
  }, _index.default.t('Fixed periods'))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "filterContainer"
  }, isRelative ? /*#__PURE__*/_react.default.createElement(_RelativePeriodFilter.default, {
    currentFilter: effectiveRelativeFilterType,
    onSelectFilter: filter => {
      setRelativeFilter({
        periodType: filter
      });
      const selectedOption = filteredRelativeOptions.find(opt => opt.id === filter);
      setUserPeriods((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.getPeriods()) || []);
    },
    dataTest: `${dataTest}-relative-period-filter`,
    availableOptions: filteredRelativeOptions
  }) : /*#__PURE__*/_react.default.createElement(_FixedPeriodFilter.default, {
    currentPeriodType: effectiveFixedFilterType,
    currentYear: fixedFilter.year,
    onSelectPeriodType: periodType => {
      onSelectFixedPeriods({
        periodType,
        year: fixedFilter.year
      });
    },
    onSelectYear: year => {
      onSelectFixedPeriods({
        periodType: fixedFilter.periodType,
        year
      });
    },
    dataTest: `${dataTest}-fixed-period-filter`,
    availableOptions: filteredFixedOptions
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
  const onSelectFixedPeriods = filter => {
    setFixedFilter(filter);
    if (filter.year.match(/[0-9]{4}/)) {
      const selectedOption = filteredFixedOptions.find(opt => opt.id === filter.periodType);
      setUserPeriods((selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.getPeriods(fixedPeriodConfig(Number(filter.year)))) || []);
    }
  };
  const renderEmptySelection = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "emptyList"
  }, _index.default.t('No periods selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
  return /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: ({
      selected
    }) => {
      const formattedItems = selected.map(id => {
        const matchingItem = [...allPeriods, ...selectedItems].find(item => item.id === id);
        return {
          id,
          name: matchingItem.name,
          isActive: matchingItem.isActive
        };
      });
      onSelect(formattedItems);
    },
    selected: selectedItems.map(period => period.id),
    leftHeader: renderLeftHeader(),
    enableOrderChange: true,
    height: height,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: renderEmptySelection(),
    rightHeader: /*#__PURE__*/_react.default.createElement(RightHeader, {
      infoBoxMessage: infoBoxMessage
    }),
    rightFooter: rightFooter,
    options: [...allPeriods, ...selectedItems].map(({
      id,
      name
    }) => ({
      label: name,
      value: id
    })),
    renderOption: ({
      value,
      ...props
    }) => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, _extends({}, props, {
      value: value,
      active: isActive(value),
      icon: _PeriodIcon.default,
      dataTest: `${dataTest}-transfer-option`
    })),
    dataTest: `${dataTest}-transfer`
  });
};
PeriodTransfer.propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  enabledPeriodTypesData: _propTypes.default.shape({
    analysisRelativePeriod: _propTypes.default.string,
    enabledTypes: _propTypes.default.array,
    financialYearDisplayLabel: _propTypes.default.string,
    financialYearStart: _propTypes.default.string,
    noEnabledTypes: _propTypes.default.bool
  }),
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  height: _propTypes.default.string,
  infoBoxMessage: _propTypes.default.string,
  periodsSettings: _propTypes.default.shape({
    calendar: _propTypes.default.string,
    locale: _propTypes.default.string
  }),
  rightFooter: _propTypes.default.node,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    isActive: _propTypes.default.bool,
    name: _propTypes.default.string
  })),
  supportsEnabledPeriodTypes: _propTypes.default.bool
};
var _default = exports.default = PeriodTransfer;