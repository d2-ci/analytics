"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultState = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PeriodTypeFilter = _interopRequireDefault(require("./PeriodTypeFilter"));

var _RelativePeriodsGenerator = _interopRequireWildcard(require("./modules/RelativePeriodsGenerator"));

var defaultState = {
  periodType: _RelativePeriodsGenerator.MONTHS
};
exports.defaultState = defaultState;

var RelativePeriods =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RelativePeriods, _Component);

  function RelativePeriods(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RelativePeriods);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RelativePeriods).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", function () {
      var periods = _this.generatePeriods(_this.state.periodType);

      _this.props.setOfferedPeriods(periods, true);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPeriodTypeChange", function (event) {
      _this.setState({
        periodType: event.target.value
      });

      _this.props.setOfferedPeriods(_this.generatePeriods(event.target.value));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "generatePeriods", function (periodType) {
      var generator = _this.periodsGenerator.get(periodType);

      return generator.generatePeriods().map(function (period, idx) {
        return (0, _objectSpread2.default)({}, period, {
          idx: idx
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      return _react.default.createElement(_PeriodTypeFilter.default, {
        options: _this.periodsGenerator.getOptions(),
        value: _this.state.periodType,
        onChange: _this.onPeriodTypeChange
      });
    });
    _this.state = defaultState;
    _this.periodsGenerator = new _RelativePeriodsGenerator.default();
    return _this;
  }

  return RelativePeriods;
}(_react.Component);

RelativePeriods.propTypes = {
  setOfferedPeriods: _propTypes.default.func.isRequired
};
var _default = RelativePeriods;
exports.default = _default;