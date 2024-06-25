import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { getNowInCalendar } from '@dhis2/multi-calendar-dates';
import { TabBar, Tab, Transfer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PeriodIcon from '../../assets/DimensionItemIcons/PeriodIcon.js'; //TODO: Reimplement the icon.js

import i18n from '../../locales/index.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../modules/dimensionSelectorHelper.js';
import styles from '../styles/DimensionSelector.style.js';
import { TransferOption } from '../TransferOption.js';
import FixedPeriodFilter from './FixedPeriodFilter.js';
import RelativePeriodFilter from './RelativePeriodFilter.js';
import { getFixedPeriodsOptionsById } from './utils/fixedPeriods.js';
import { MONTHLY, QUARTERLY } from './utils/index.js';
import { getRelativePeriodsOptionsById } from './utils/relativePeriods.js';

const PeriodTransfer = _ref => {
  let {
    onSelect,
    dataTest,
    initialSelectedPeriods,
    rightFooter,
    excludedPeriodTypes,
    periodsSettings
  } = _ref;
  const defaultRelativePeriodType = excludedPeriodTypes.includes(MONTHLY) ? getRelativePeriodsOptionsById(QUARTERLY) : getRelativePeriodsOptionsById(MONTHLY);
  const defaultFixedPeriodType = excludedPeriodTypes.includes(MONTHLY) ? getFixedPeriodsOptionsById(QUARTERLY, periodsSettings) : getFixedPeriodsOptionsById(MONTHLY, periodsSettings);
  const now = getNowInCalendar(periodsSettings.calendar); // use ".eraYear" rather than ".year" because in Ethiopian calendar, eraYear is what our users expect to see (for other calendars, it doesn't matter)
  // there is still a pending decision in Temporal regarding which era to use by default: https://github.com/js-temporal/temporal-polyfill/blob/9350ee7dd0d29f329fc097debf923a517c32f813/lib/calendar.ts#L1964

  const defaultFixedPeriodYear = now.eraYear || now.year;

  const fixedPeriodConfig = year => ({
    offset: year - defaultFixedPeriodYear,
    filterFuturePeriods: false,
    reversePeriods: false
  });

  const [allPeriods, setAllPeriods] = useState(defaultRelativePeriodType.getPeriods());
  const [selectedPeriods, setSelectedPeriods] = useState(initialSelectedPeriods);
  const [isRelative, setIsRelative] = useState(true);
  const [relativeFilter, setRelativeFilter] = useState({
    periodType: defaultRelativePeriodType.id
  });
  const [fixedFilter, setFixedFilter] = useState({
    periodType: defaultFixedPeriodType.id,
    year: defaultFixedPeriodYear.toString()
  });

  const onIsRelativeClick = state => {
    if (state !== isRelative) {
      setIsRelative(state);
      setAllPeriods(state ? getRelativePeriodsOptionsById(relativeFilter.periodType).getPeriods() : getFixedPeriodsOptionsById(fixedFilter.periodType, periodsSettings).getPeriods(fixedPeriodConfig(Number(fixedFilter.year))));
    }
  };

  const renderLeftHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabBar, null, /*#__PURE__*/React.createElement(Tab, {
    selected: isRelative,
    onClick: () => onIsRelativeClick(true),
    dataTest: "".concat(dataTest, "-relative-periods-button")
  }, i18n.t('Relative periods')), /*#__PURE__*/React.createElement(Tab, {
    selected: !isRelative,
    onClick: () => onIsRelativeClick(false),
    dataTest: "".concat(dataTest, "-fixed-periods-button")
  }, i18n.t('Fixed periods'))), /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "filterContainer"
  }, isRelative ? /*#__PURE__*/React.createElement(RelativePeriodFilter, {
    currentFilter: relativeFilter.periodType,
    onSelectFilter: filter => {
      setRelativeFilter({
        periodType: filter
      });
      setAllPeriods(getRelativePeriodsOptionsById(filter).getPeriods());
    },
    dataTest: "".concat(dataTest, "-relative-period-filter"),
    excludedPeriodTypes: excludedPeriodTypes
  }) : /*#__PURE__*/React.createElement(FixedPeriodFilter, {
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
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  const renderRightHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "jsx-".concat(styles.__hash) + " " + "rightHeader"
  }, i18n.t('Selected Periods')), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  const onSelectFixedPeriods = filter => {
    setFixedFilter(filter);
    setAllPeriods(getFixedPeriodsOptionsById(filter.periodType, periodsSettings).getPeriods(fixedPeriodConfig(Number(filter.year)), periodsSettings));
  };

  const renderEmptySelection = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "jsx-".concat(styles.__hash) + " " + "emptyList"
  }, i18n.t('No periods selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  return /*#__PURE__*/React.createElement(Transfer, {
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
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
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
    renderOption: props => /*#__PURE__*/React.createElement(TransferOption, _extends({}, props, {
      icon: PeriodIcon,
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
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  excludedPeriodTypes: PropTypes.arrayOf(PropTypes.string),
  initialSelectedPeriods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  periodsSettings: PropTypes.shape({
    calendar: PropTypes.string,
    locale: PropTypes.string
  }),
  rightFooter: PropTypes.node
};
export default PeriodTransfer;