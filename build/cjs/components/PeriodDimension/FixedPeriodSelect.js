"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _FixedPeriodFilter = _interopRequireDefault(require("./FixedPeriodFilter.js"));
var _FixedPeriodSelectStyle = _interopRequireDefault(require("./styles/FixedPeriodSelect.style.js"));
var _fixedPeriods = require("./utils/fixedPeriods.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class FixedPeriodSelect extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      periodType: '',
      year: '',
      options: null
    });
    _defineProperty(this, "onSelectPeriodType", periodType => {
      this.setState({
        periodType,
        options: this.getUpdatedOptions(periodType, this.state.year)
      });
      this.props.onChange();
    });
    _defineProperty(this, "onSelectYear", year => {
      this.setState({
        year,
        options: this.getUpdatedOptions(this.state.periodType, year)
      });
      this.props.onChange();
    });
    _defineProperty(this, "onSelectPeriod", (_ref, event) => {
      let {
        selected: periodId
      } = _ref;
      const period = this.state.options.find(_ref2 => {
        let {
          id
        } = _ref2;
        return id === periodId;
      });
      this.props.onChange(period, event);
    });
  }
  static getDerivedStateFromProps(_ref3) {
    let {
      value,
      allowedPeriodTypes
    } = _ref3;
    const period = (0, _fixedPeriods.parsePeriodCode)(value, allowedPeriodTypes);
    if (!period) {
      return null;
    }
    return {
      periodType: period.id,
      year: period.year,
      options: period.options
    };
  }
  getUpdatedOptions(periodType, year) {
    const offset = (0, _fixedPeriods.getYearOffsetFromNow)(year);
    return (0, _fixedPeriods.getFixedPeriodsOptionsById)(periodType).getPeriods({
      offset
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-test": this.props.dataTest,
      className: `jsx-${_FixedPeriodSelectStyle.default.__hash}` + " " + (this.props.className || "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_FixedPeriodSelectStyle.default.__hash}` + " " + "row"
    }, /*#__PURE__*/_react.default.createElement(_FixedPeriodFilter.default, {
      allowedPeriodTypes: this.props.allowedPeriodTypes,
      currentPeriodType: this.state.periodType,
      currentYear: this.state.year,
      onSelectPeriodType: this.onSelectPeriodType,
      onSelectYear: this.onSelectYear
    })), this.state.periodType && this.state.year && /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
      label: _index.default.t('Period'),
      onChange: this.onSelectPeriod,
      dense: true,
      selected: this.props.value
    }, this.state.options.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
      key: option.id,
      value: option.id,
      label: option.name
    }))), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: _FixedPeriodSelectStyle.default.__hash
    }, _FixedPeriodSelectStyle.default));
  }
}
FixedPeriodSelect.defaultProps = {
  dataTest: 'dhis2-analytics-fixedperiodselect',
  value: ''
};
FixedPeriodSelect.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  allowedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  className: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  value: _propTypes.default.string
};
var _default = exports.default = FixedPeriodSelect;