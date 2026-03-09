import i18n from '@dhis2/d2-i18n';
import { Field, IconArrowRight16, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { CalendarInput } from './CalendarInput.jsx';
import { DEFAULT_CALENDAR, DEFAULT_PLACEHOLDER, formatDateInput, formatDateOnBlur, nextCharIsAutoHyphen, nextCharIsManualHyphen } from './dateUtils.js';
import styles from './styles/StartEndDate.style.js';
import useKeyDown from './useKeyDown.js';
const StartEndDate = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  errorText,
  periodsSettings
}) => {
  const formattedStartDate = formatDateInput({
    date: startDate
  });
  const formattedEndDate = formatDateInput({
    date: endDate
  });
  const [startDateChangeCount, setStartDateChangeCount] = useState(0);
  const [endDateChangeCount, setEndDateChangeCount] = useState(0);
  const [startCaretPosition, setStartCaretPosition] = useState(null);
  const [endCaretPosition, setEndCaretPosition] = useState(null);
  const onDateChange = (type, date) => {
    var _document$querySelect;
    const stateMap = {
      start: {
        prevDate: startDate,
        inputSelector: '.start input',
        onDateChange: onStartDateChange,
        setDateChangeCount: setStartDateChangeCount,
        setCaret: setStartCaretPosition
      },
      end: {
        prevDate: endDate,
        inputSelector: '.end input',
        onDateChange: onEndDateChange,
        setDateChangeCount: setEndDateChangeCount,
        setCaret: setEndCaretPosition
      }
    };
    if (!(type in stateMap)) {
      console.error(`Invalid type "${type}" passed to onDateChange. Expected "start" or "end".`);
      return;
    }
    const {
      prevDate: rawPrevDate,
      inputSelector,
      onDateChange,
      setDateChangeCount,
      setCaret
    } = stateMap[type];
    const prevDate = rawPrevDate ? rawPrevDate.split('T')[0] : '';
    if (prevDate === date) {
      return;
    }
    const caret = (_document$querySelect = document.querySelector(inputSelector)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.selectionStart;
    const dateInfo = {
      date,
      prevDate,
      caret
    };
    let newCaretPosition = caret;
    if (nextCharIsAutoHyphen(dateInfo)) {
      newCaretPosition = caret + 1;
    } else if (nextCharIsManualHyphen(dateInfo)) {
      // No change needed for caret position
    } else if (/\D/.test((date === null || date === void 0 ? void 0 : date[caret - 1]) || '')) {
      newCaretPosition = caret - 1;
    }
    setCaret(newCaretPosition);
    const formattedDate = formatDateInput(dateInfo);
    onDateChange(formattedDate);
    setDateChangeCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    if (startCaretPosition !== null) {
      const input = document.querySelector('.start input');
      input.setSelectionRange(startCaretPosition, startCaretPosition);
    }
  }, [startDateChangeCount, startCaretPosition]);
  useEffect(() => {
    if (endCaretPosition !== null) {
      const input = document.querySelector('.end input');
      input.setSelectionRange(endCaretPosition, endCaretPosition);
    }
  }, [endDateChangeCount, endCaretPosition]);

  // Forces calendar to close when using Tab/Enter navigation
  useKeyDown(['Tab', 'Enter'], () => {
    const backdropElement = document.querySelectorAll('.backdrop');
    if ((backdropElement === null || backdropElement === void 0 ? void 0 : backdropElement.length) === 3) {
      backdropElement[2].click();
    }
  });
  const hasDate = startDate !== undefined && endDate !== undefined;
  if (!hasDate) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Field, {
    className: styles.field,
    helpText: i18n.t('Start and end dates are inclusive and will be reflected in the outputs.')
  }, (periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.calendar) !== DEFAULT_CALENDAR && /*#__PURE__*/React.createElement("p", null, i18n.t('Start and end dates must be entered using the ISO 8601 (Gregorian) date format.')), /*#__PURE__*/React.createElement("div", {
    className: styles.row
  }, /*#__PURE__*/React.createElement(CalendarInput, {
    className: "start",
    label: i18n.t('Start date'),
    calendar: DEFAULT_CALENDAR,
    locale: periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.locale,
    date: formattedStartDate,
    onDateSelect: e => onStartDateChange(e === null || e === void 0 ? void 0 : e.calendarDateString),
    onChange: e => onDateChange('start', e === null || e === void 0 ? void 0 : e.value),
    onBlur: e => onStartDateChange(formatDateOnBlur(e === null || e === void 0 ? void 0 : e.value)),
    placeholder: DEFAULT_PLACEHOLDER,
    width: styles.width,
    dataTest: "start-date-input",
    clearable: true
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.icon
  }, /*#__PURE__*/React.createElement(IconArrowRight16, {
    color: colors.grey500
  })), /*#__PURE__*/React.createElement(CalendarInput, {
    className: "end",
    label: i18n.t('End date'),
    calendar: DEFAULT_CALENDAR,
    locale: periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.locale,
    date: formattedEndDate,
    onDateSelect: e => onEndDateChange(e === null || e === void 0 ? void 0 : e.calendarDateString),
    onChange: e => onDateChange('end', e === null || e === void 0 ? void 0 : e.value),
    onBlur: e => onEndDateChange(formatDateOnBlur(e === null || e === void 0 ? void 0 : e.value)),
    placeholder: DEFAULT_PLACEHOLDER,
    width: styles.width,
    dataTest: "end-date-input",
    clearable: true
  })), errorText && /*#__PURE__*/React.createElement("div", {
    className: styles.error
  }, errorText));
};
StartEndDate.propTypes = {
  onEndDateChange: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  endDate: PropTypes.string,
  errorText: PropTypes.string,
  periodsSettings: PropTypes.shape({
    calendar: PropTypes.string,
    locale: PropTypes.string
  }),
  startDate: PropTypes.string
};
export default StartEndDate;