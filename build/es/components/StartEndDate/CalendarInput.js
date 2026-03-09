import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import i18n from '@dhis2/d2-i18n';
import { Button, Card, InputField, Layer, Popper, Calendar } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styles from './styles/CalendarInput.style.js';
const offsetModifier = {
  name: 'offset',
  options: {
    offset: [0, 2]
  }
};
export const CalendarInput = ({
  onDateSelect,
  calendar,
  date,
  dir,
  locale,
  numberingSystem,
  weekDayFormat,
  timeZone,
  width,
  cellSize,
  clearable,
  dataTest = 'calendar-inputfield',
  ...rest
} = {}) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const calendarProps = React.useMemo(() => {
    const onDateSelectWrapper = selectedDate => {
      setOpen(false);
      onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(selectedDate);
    };
    return {
      onDateSelect: onDateSelectWrapper,
      calendar,
      date,
      dir,
      locale,
      numberingSystem,
      weekDayFormat,
      timeZone,
      width,
      cellSize
    };
  }, [calendar, cellSize, date, dir, locale, numberingSystem, onDateSelect, timeZone, weekDayFormat, width]);
  const onFocus = () => {
    setOpen(true);
  };
  const onChange = e => {
    setOpen(false);
    rest.onChange(e);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `jsx-${styles.__hash}` + " " + "calendarInputWrapper"
  }, /*#__PURE__*/React.createElement(InputField, _extends({}, rest, {
    dataTest: dataTest,
    type: "text",
    onFocus: onFocus,
    onChange: onChange,
    value: date
  })), clearable && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "calendarClearButton"
  }, /*#__PURE__*/React.createElement(Button, {
    dataTest: "calendar-clear-button",
    secondary: true,
    small: true,
    onClick: () => calendarProps.onDateSelect(null),
    type: "button"
  }, i18n.t('Clear')))), open && /*#__PURE__*/React.createElement(Layer, {
    onBackdropClick: () => {
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement(Popper, {
    reference: ref,
    placement: "bottom-start",
    modifiers: [offsetModifier]
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Calendar, _extends({}, calendarProps, {
    date: date
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
CalendarInput.propTypes = {
  calendar: PropTypes.object,
  cellSize: PropTypes.number,
  clearable: PropTypes.bool,
  dataTest: PropTypes.string,
  date: PropTypes.string,
  dir: PropTypes.string,
  locale: PropTypes.string,
  numberingSystem: PropTypes.string,
  timeZone: PropTypes.string,
  weekDayFormat: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDateSelect: PropTypes.func
};