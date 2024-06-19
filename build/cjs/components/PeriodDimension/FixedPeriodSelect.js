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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      className: "jsx-".concat(_FixedPeriodSelectStyle.default.__hash) + " " + (this.props.className || "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "jsx-".concat(_FixedPeriodSelectStyle.default.__hash) + " " + "row"
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
var _default = FixedPeriodSelect;
exports.default = _default;