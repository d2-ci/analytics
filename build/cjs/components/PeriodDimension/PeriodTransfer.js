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

var _fixedPeriods = require("./utils/fixedPeriods.js");

var _index2 = require("./utils/index.js");

var _relativePeriods = require("./utils/relativePeriods.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PeriodTransfer = _ref => {
  let {
    onSelect,
    dataTest,
    initialSelectedPeriods,
    rightFooter,
    excludedPeriodTypes,
    periodsSettings
  } = _ref;
  const defaultRelativePeriodType = excludedPeriodTypes.includes(_index2.MONTHLY) ? (0, _relativePeriods.getRelativePeriodsOptionsById)(_index2.QUARTERLY) : (0, _relativePeriods.getRelativePeriodsOptionsById)(_index2.MONTHLY);
  const defaultFixedPeriodType = excludedPeriodTypes.includes(_index2.MONTHLY) ? (0, _fixedPeriods.getFixedPeriodsOptionsById)(_index2.QUARTERLY, periodsSettings) : (0, _fixedPeriods.getFixedPeriodsOptionsById)(_index2.MONTHLY, periodsSettings);
  const now = (0, _multiCalendarDates.getNowInCalendar)(periodsSettings.calendar); // use ".eraYear" rather than ".year" because in Ethiopian calendar, eraYear is what our users expect to see (for other calendars, it doesn't matter)
  // there is still a pending decision in Temporal regarding which era to use by default: https://github.com/js-temporal/temporal-polyfill/blob/9350ee7dd0d29f329fc097debf923a517c32f813/lib/calendar.ts#L1964

  const defaultFixedPeriodYear = now.eraYear || now.year;

  const fixedPeriodConfig = year => ({
    offset: year - defaultFixedPeriodYear,
    filterFuturePeriods: false,
    reversePeriods: false
  });

  const [allPeriods, setAllPeriods] = (0, _react.useState)(defaultRelativePeriodType.getPeriods());
  const [selectedPeriods, setSelectedPeriods] = (0, _react.useState)(initialSelectedPeriods);
  const [isRelative, setIsRelative] = (0, _react.useState)(true);
  const [relativeFilter, setRelativeFilter] = (0, _react.useState)({
    periodType: defaultRelativePeriodType.id
  });
  const [fixedFilter, setFixedFilter] = (0, _react.useState)({
    periodType: defaultFixedPeriodType.id,
    year: defaultFixedPeriodYear.toString()
  });

  const onIsRelativeClick = state => {
    if (state !== isRelative) {
      setIsRelative(state);
      setAllPeriods(state ? (0, _relativePeriods.getRelativePeriodsOptionsById)(relativeFilter.periodType).getPeriods() : (0, _fixedPeriods.getFixedPeriodsOptionsById)(fixedFilter.periodType, periodsSettings).getPeriods(fixedPeriodConfig(Number(fixedFilter.year))));
    }
  };

  const renderLeftHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.TabBar, null, /*#__PURE__*/_react.default.createElement(_ui.Tab, {
    selected: isRelative,
    onClick: () => onIsRelativeClick(true),
    dataTest: "".concat(dataTest, "-relative-periods-button")
  }, _index.default.t('Relative periods')), /*#__PURE__*/_react.default.createElement(_ui.Tab, {
    selected: !isRelative,
    onClick: () => onIsRelativeClick(false),
    dataTest: "".concat(dataTest, "-fixed-periods-button")
  }, _index.default.t('Fixed periods'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "filterContainer"
  }, isRelative ? /*#__PURE__*/_react.default.createElement(_RelativePeriodFilter.default, {
    currentFilter: relativeFilter.periodType,
    onSelectFilter: filter => {
      setRelativeFilter({
        periodType: filter
      });
      setAllPeriods((0, _relativePeriods.getRelativePeriodsOptionsById)(filter).getPeriods());
    },
    dataTest: "".concat(dataTest, "-relative-period-filter"),
    excludedPeriodTypes: excludedPeriodTypes
  }) : /*#__PURE__*/_react.default.createElement(_FixedPeriodFilter.default, {
    currentPeriodType: fixedFilter.periodType,
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
    dataTest: "".concat(dataTest, "-fixed-period-filter"),
    excludedPeriodTypes: excludedPeriodTypes
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));

  const renderRightHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "rightHeader"
  }, _index.default.t('Selected Periods')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));

  const onSelectFixedPeriods = filter => {
    setFixedFilter(filter);
    setAllPeriods((0, _fixedPeriods.getFixedPeriodsOptionsById)(filter.periodType, periodsSettings).getPeriods(fixedPeriodConfig(Number(filter.year)), periodsSettings));
  };

  const renderEmptySelection = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "emptyList"
  }, _index.default.t('No periods selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));

  return /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      const formattedItems = selected.map(id => ({
        id,
        name: [...allPeriods, ...selectedPeriods].find(item => item.id === id).name
      }));
      setSelectedPeriods(formattedItems);
      onSelect(formattedItems);
    },
    selected: selectedPeriods.map(period => period.id),
    leftHeader: renderLeftHeader(),
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: renderEmptySelection(),
    rightHeader: renderRightHeader(),
    rightFooter: rightFooter,
    options: [...allPeriods, ...selectedPeriods].map(_ref3 => {
      let {
        id,
        name
      } = _ref3;
      return {
        label: name,
        value: id
      };
    }),
    renderOption: props => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, _extends({}, props, {
      icon: _PeriodIcon.default,
      dataTest: "".concat(dataTest, "-transfer-option")
    })),
    dataTest: "".concat(dataTest, "-transfer")
  });
};

PeriodTransfer.defaultProps = {
  initialSelectedPeriods: [],
  excludedPeriodTypes: [],
  periodsSettings: {
    calendar: 'gregory',
    locale: 'en'
  }
};
PeriodTransfer.propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  initialSelectedPeriods: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    name: _propTypes.default.string
  })),
  periodsSettings: _propTypes.default.shape({
    calendar: _propTypes.default.string,
    locale: _propTypes.default.string
  }),
  rightFooter: _propTypes.default.node
};
var _default = PeriodTransfer;
exports.default = _default;