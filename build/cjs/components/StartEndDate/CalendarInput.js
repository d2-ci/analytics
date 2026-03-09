"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarInput = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _CalendarInputStyle = _interopRequireDefault(require("./styles/CalendarInput.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const offsetModifier = {
  name: 'offset',
  options: {
    offset: [0, 2]
  }
};
const CalendarInput = ({
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
  const ref = (0, _react.useRef)();
  const [open, setOpen] = (0, _react.useState)(false);
  const calendarProps = _react.default.useMemo(() => {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: `jsx-${_CalendarInputStyle.default.__hash}` + " " + "calendarInputWrapper"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, _extends({}, rest, {
    dataTest: dataTest,
    type: "text",
    onFocus: onFocus,
    onChange: onChange,
    value: date
  })), clearable && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalendarInputStyle.default.__hash}` + " " + "calendarClearButton"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    dataTest: "calendar-clear-button",
    secondary: true,
    small: true,
    onClick: () => calendarProps.onDateSelect(null),
    type: "button"
  }, _d2I18n.default.t('Clear')))), open && /*#__PURE__*/_react.default.createElement(_ui.Layer, {
    onBackdropClick: () => {
      setOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    reference: ref,
    placement: "bottom-start",
    modifiers: [offsetModifier]
  }, /*#__PURE__*/_react.default.createElement(_ui.Card, null, /*#__PURE__*/_react.default.createElement(_ui.Calendar, _extends({}, calendarProps, {
    date: date
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _CalendarInputStyle.default.__hash
  }, _CalendarInputStyle.default));
};
exports.CalendarInput = CalendarInput;
CalendarInput.propTypes = {
  calendar: _propTypes.default.object,
  cellSize: _propTypes.default.number,
  clearable: _propTypes.default.bool,
  dataTest: _propTypes.default.string,
  date: _propTypes.default.string,
  dir: _propTypes.default.string,
  locale: _propTypes.default.string,
  numberingSystem: _propTypes.default.string,
  timeZone: _propTypes.default.string,
  weekDayFormat: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onDateSelect: _propTypes.default.func
};