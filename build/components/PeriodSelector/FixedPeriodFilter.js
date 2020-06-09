"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YEARS_RANGE = exports.defaultState = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputLabel = _interopRequireDefault(require("./InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _PeriodTypeFilter = _interopRequireDefault(require("./PeriodTypeFilter"));

var _FixedPeriodsGenerator = _interopRequireWildcard(require("./modules/FixedPeriodsGenerator"));

var defaultState = {
  periodType: _FixedPeriodsGenerator.MONTHLY,
  year: new Date().getFullYear(),
  yearsOffset: 0,
  yearSelectElement: null
};
exports.defaultState = defaultState;
var YEARS_RANGE = 8;
exports.YEARS_RANGE = YEARS_RANGE;

var _ref =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowUp.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowDown.default, null);

var FixedPeriodFilter =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FixedPeriodFilter, _Component);

  function FixedPeriodFilter(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FixedPeriodFilter);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FixedPeriodFilter).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      var periods = _this.generatePeriods(_this.state.periodType, _this.state.year);

      _this.props.setOfferedPeriods(periods, true);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPeriodTypeChange", function (event) {
      _this.setState({
        periodType: event.target.value
      });

      if (_this.state.year) {
        _this.props.setOfferedPeriods(_this.generatePeriods(event.target.value, _this.state.year));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onYearChange", function (event) {
      _this.setState({
        year: event.target.value,
        yearSelectElement: null
      });

      if (_this.state.periodType) {
        _this.props.setOfferedPeriods(_this.generatePeriods(_this.state.periodType, event.target.value));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onYearSelectClick", function (event) {
      _this.setState({
        yearSelectElement: event.currentTarget
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getYears", function () {
      var years = [];
      years = years.concat((0, _toConsumableArray2.default)(Array(Math.floor(YEARS_RANGE / 2) + (YEARS_RANGE % 2 === 0 ? 1 : 2)).keys()).slice(1).reverse().map(function (offset) {
        return new Date().getFullYear() - offset + _this.state.yearsOffset;
      }));
      years = years.concat((0, _toConsumableArray2.default)(Array(Math.floor(YEARS_RANGE / 2)).keys()).map(function (offset) {
        return new Date().getFullYear() + offset + _this.state.yearsOffset;
      }));
      return years;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "generatePeriods", function (periodType, year) {
      var generator = _this.periodsGenerator.get(periodType);

      return generator.generatePeriods({
        offset: year - new Date().getFullYear(),
        filterFuturePeriods: false,
        reversePeriods: false
      }).map(function (period, idx) {
        return (0, _objectSpread2.default)({}, period, {
          idx: idx
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeYearSelect", function () {
      _this.setState({
        yearSelectElement: null
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shiftYearsBack", function () {
      _this.setState({
        yearsOffset: _this.state.yearsOffset - YEARS_RANGE
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shiftYearsForth", function () {
      _this.setState({
        yearsOffset: _this.state.yearsOffset + YEARS_RANGE
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderYearSelectValue", function () {
      return _this.state.year;
    });
    _this.periodsGenerator = new _FixedPeriodsGenerator.default();
    _this.state = defaultState;
    return _this;
  }

  (0, _createClass2.default)(FixedPeriodFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var years = this.getYears();
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_PeriodTypeFilter.default, {
        options: this.periodsGenerator.getOptions(),
        value: this.state.periodType,
        onChange: this.onPeriodTypeChange
      }), _react.default.createElement(_FormControl.default, null, _react.default.createElement(_InputLabel.default, {
        label: _d2I18n.default.t('Year')
      }), _react.default.createElement(_Select.default, {
        SelectDisplayProps: {
          style: {
            cursor: 'pointer',
            color: '#000000'
          },
          onClick: this.onYearSelectClick
        },
        value: this.state.year,
        inputProps: {
          name: 'year',
          id: 'year'
        },
        renderValue: this.renderYearSelectValue,
        disableUnderline: true,
        disabled: true
      }), _react.default.createElement(_Menu.default, {
        MenuListProps: {
          style: {
            width: '130px'
          }
        },
        anchorEl: this.state.yearSelectElement,
        open: Boolean(this.state.yearSelectElement),
        onClose: this.closeYearSelect
      }, _react.default.createElement(_MenuItem.default, {
        value: "",
        key: "shiftYearsBack",
        onClick: this.shiftYearsBack
      }, _ref), years.map(function (year) {
        return _react.default.createElement(_MenuItem.default, {
          onClick: _this2.onYearChange,
          key: year,
          value: year,
          selected: _this2.state.year === year
        }, year);
      }), _react.default.createElement(_MenuItem.default, {
        value: "",
        key: "shiftYearsForth",
        onClick: this.shiftYearsForth
      }, _ref2))));
    }
  }]);
  return FixedPeriodFilter;
}(_react.Component);

FixedPeriodFilter.propTypes = {
  setOfferedPeriods: _propTypes.default.func.isRequired
};
var _default = FixedPeriodFilter;
exports.default = _default;