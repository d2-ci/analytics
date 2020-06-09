"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultState = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PeriodTypeFilter = _interopRequireDefault(require("./PeriodTypeFilter"));

var _RelativePeriodsGenerator = _interopRequireWildcard(require("./modules/RelativePeriodsGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultState = {
  periodType: _RelativePeriodsGenerator.MONTHS
};
exports.defaultState = defaultState;

var RelativePeriods = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RelativePeriods, _Component);

  var _super = _createSuper(RelativePeriods);

  function RelativePeriods(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RelativePeriods);
    _this = _super.call(this, props);
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
        return _objectSpread(_objectSpread({}, period), {}, {
          idx: idx
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      return /*#__PURE__*/_react.default.createElement(_PeriodTypeFilter.default, {
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