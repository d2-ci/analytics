"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _CalendarInput = require("./CalendarInput.jsx");
var _dateUtils = require("./dateUtils.js");
var _StartEndDateStyle = _interopRequireDefault(require("./styles/StartEndDate.style.js"));
var _useKeyDown = _interopRequireDefault(require("./useKeyDown.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const StartEndDate = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  errorText,
  periodsSettings
}) => {
  const formattedStartDate = (0, _dateUtils.formatDateInput)({
    date: startDate
  });
  const formattedEndDate = (0, _dateUtils.formatDateInput)({
    date: endDate
  });
  const [startDateChangeCount, setStartDateChangeCount] = (0, _react.useState)(0);
  const [endDateChangeCount, setEndDateChangeCount] = (0, _react.useState)(0);
  const [startCaretPosition, setStartCaretPosition] = (0, _react.useState)(null);
  const [endCaretPosition, setEndCaretPosition] = (0, _react.useState)(null);
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
    if ((0, _dateUtils.nextCharIsAutoHyphen)(dateInfo)) {
      newCaretPosition = caret + 1;
    } else if ((0, _dateUtils.nextCharIsManualHyphen)(dateInfo)) {
      // No change needed for caret position
    } else if (/\D/.test((date === null || date === void 0 ? void 0 : date[caret - 1]) || '')) {
      newCaretPosition = caret - 1;
    }
    setCaret(newCaretPosition);
    const formattedDate = (0, _dateUtils.formatDateInput)(dateInfo);
    onDateChange(formattedDate);
    setDateChangeCount(prevCount => prevCount + 1);
  };
  (0, _react.useEffect)(() => {
    if (startCaretPosition !== null) {
      const input = document.querySelector('.start input');
      input.setSelectionRange(startCaretPosition, startCaretPosition);
    }
  }, [startDateChangeCount, startCaretPosition]);
  (0, _react.useEffect)(() => {
    if (endCaretPosition !== null) {
      const input = document.querySelector('.end input');
      input.setSelectionRange(endCaretPosition, endCaretPosition);
    }
  }, [endDateChangeCount, endCaretPosition]);

  // Forces calendar to close when using Tab/Enter navigation
  (0, _useKeyDown.default)(['Tab', 'Enter'], () => {
    const backdropElement = document.querySelectorAll('.backdrop');
    if ((backdropElement === null || backdropElement === void 0 ? void 0 : backdropElement.length) === 3) {
      backdropElement[2].click();
    }
  });
  const hasDate = startDate !== undefined && endDate !== undefined;
  if (!hasDate) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_ui.Field, {
    className: _StartEndDateStyle.default.field,
    helpText: _d2I18n.default.t('Start and end dates are inclusive and will be reflected in the outputs.')
  }, (periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.calendar) !== _dateUtils.DEFAULT_CALENDAR && /*#__PURE__*/_react.default.createElement("p", null, _d2I18n.default.t('Start and end dates must be entered using the ISO 8601 (Gregorian) date format.')), /*#__PURE__*/_react.default.createElement("div", {
    className: _StartEndDateStyle.default.row
  }, /*#__PURE__*/_react.default.createElement(_CalendarInput.CalendarInput, {
    className: "start",
    label: _d2I18n.default.t('Start date'),
    calendar: _dateUtils.DEFAULT_CALENDAR,
    locale: periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.locale,
    date: formattedStartDate,
    onDateSelect: e => onStartDateChange(e === null || e === void 0 ? void 0 : e.calendarDateString),
    onChange: e => onDateChange('start', e === null || e === void 0 ? void 0 : e.value),
    onBlur: e => onStartDateChange((0, _dateUtils.formatDateOnBlur)(e === null || e === void 0 ? void 0 : e.value)),
    placeholder: _dateUtils.DEFAULT_PLACEHOLDER,
    width: _StartEndDateStyle.default.width,
    dataTest: "start-date-input",
    clearable: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _StartEndDateStyle.default.icon
  }, /*#__PURE__*/_react.default.createElement(_ui.IconArrowRight16, {
    color: _ui.colors.grey500
  })), /*#__PURE__*/_react.default.createElement(_CalendarInput.CalendarInput, {
    className: "end",
    label: _d2I18n.default.t('End date'),
    calendar: _dateUtils.DEFAULT_CALENDAR,
    locale: periodsSettings === null || periodsSettings === void 0 ? void 0 : periodsSettings.locale,
    date: formattedEndDate,
    onDateSelect: e => onEndDateChange(e === null || e === void 0 ? void 0 : e.calendarDateString),
    onChange: e => onDateChange('end', e === null || e === void 0 ? void 0 : e.value),
    onBlur: e => onEndDateChange((0, _dateUtils.formatDateOnBlur)(e === null || e === void 0 ? void 0 : e.value)),
    placeholder: _dateUtils.DEFAULT_PLACEHOLDER,
    width: _StartEndDateStyle.default.width,
    dataTest: "end-date-input",
    clearable: true
  })), errorText && /*#__PURE__*/_react.default.createElement("div", {
    className: _StartEndDateStyle.default.error
  }, errorText));
};
StartEndDate.propTypes = {
  onEndDateChange: _propTypes.default.func.isRequired,
  onStartDateChange: _propTypes.default.func.isRequired,
  endDate: _propTypes.default.string,
  errorText: _propTypes.default.string,
  periodsSettings: _propTypes.default.shape({
    calendar: _propTypes.default.string,
    locale: _propTypes.default.string
  }),
  startDate: _propTypes.default.string
};
var _default = exports.default = StartEndDate;