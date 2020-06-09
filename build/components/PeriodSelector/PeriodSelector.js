"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ItemSelector = _interopRequireDefault(require("../ItemSelector/ItemSelector"));

var _PeriodTypeButton = _interopRequireDefault(require("./PeriodTypeButton"));

var _FixedPeriodFilter = _interopRequireDefault(require("./FixedPeriodFilter"));

var _RelativePeriodFilter = _interopRequireDefault(require("./RelativePeriodFilter"));

var _periodTypes = require("./modules/periodTypes");

var _PeriodSelector = _interopRequireDefault(require("./styles/PeriodSelector.style"));

var PeriodSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PeriodSelector, _Component);

  function PeriodSelector(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PeriodSelector);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PeriodSelector).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      offeredPeriods: [],
      offeredPeriodsInOrder: [],
      selectedPeriods: [],
      periodType: _periodTypes.RELATIVE
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPeriodTypeClick", function (periodType) {
      if (_this.state.periodType !== periodType) {
        _this.setState({
          periodType: periodType
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectPeriods", function (periodIds) {
      var offeredPeriods = _this.state.offeredPeriods.filter(function (period) {
        return !periodIds.includes(period.id);
      });

      var newPeriods = _this.state.offeredPeriods.filter(function (period) {
        return periodIds.includes(period.id);
      }).map(function (_ref) {
        var id = _ref.id,
            idx = _ref.idx,
            name = _ref.name;
        return {
          id: id,
          idx: idx,
          name: name()
        };
      });

      var selectedPeriods = _this.state.selectedPeriods.concat(newPeriods);

      _this.setState({
        selectedPeriods: selectedPeriods,
        offeredPeriods: offeredPeriods
      });

      _this.props.onSelect(selectedPeriods);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setSelectedPeriodOrder", function (periodIds) {
      var selectedPeriods = periodIds.map(function (id) {
        return _this.state.selectedPeriods.find(function (period) {
          return period.id === id;
        });
      });

      _this.setState({
        selectedPeriods: selectedPeriods
      });

      _this.props.onReorder(selectedPeriods);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeselectPeriods", function (periodIds) {
      var selectedPeriods = _this.state.selectedPeriods.filter(function (period) {
        return !periodIds.includes(period.id);
      });

      var removedPeriods = _this.state.selectedPeriods.filter(function (period) {
        return periodIds.includes(period.id);
      });

      var offeredPeriods = _this.state.offeredPeriodsInOrder.filter(function (period) {
        return !selectedPeriods.map(function (p) {
          return p.id;
        }).includes(period.id);
      });

      _this.setState({
        selectedPeriods: selectedPeriods,
        offeredPeriods: offeredPeriods
      });

      _this.props.onDeselect(removedPeriods);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "initializeOfferedPeriods", function (periods) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var selectedPeriods = initial ? _this.props.selectedItems : _this.state.selectedPeriods;
      var offeredPeriods = periods.filter(function (period) {
        return !selectedPeriods.map(function (p) {
          return p.id;
        }).includes(period.id);
      });

      _this.setState({
        offeredPeriodsInOrder: periods,
        offeredPeriods: offeredPeriods
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderPeriodTypeButtons", function () {
      return _react.default.createElement("div", null, _react.default.createElement(_PeriodTypeButton.default, {
        periodType: _periodTypes.RELATIVE,
        activePeriodType: _this.state.periodType,
        text: _d2I18n.default.t('Relative periods'),
        onClick: _this.onPeriodTypeClick
      }), _react.default.createElement(_PeriodTypeButton.default, {
        periodType: _periodTypes.FIXED,
        activePeriodType: _this.state.periodType,
        text: _d2I18n.default.t('Fixed periods'),
        onClick: _this.onPeriodTypeClick
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var filterZone = function filterZone() {
        var Filter = _this.state.periodType === _periodTypes.FIXED ? _FixedPeriodFilter.default : _RelativePeriodFilter.default;
        return _react.default.createElement("div", {
          className: "jsx-".concat(_PeriodSelector.default.__hash) + " " + "options-area"
        }, _react.default.createElement(Filter, {
          setOfferedPeriods: _this.initializeOfferedPeriods,
          className: "jsx-".concat(_PeriodSelector.default.__hash)
        }), _react.default.createElement(_style.default, {
          id: _PeriodSelector.default.__hash
        }, _PeriodSelector.default));
      };

      var unselectedItems = _this.state.offeredPeriods.map(function (_ref2) {
        var id = _ref2.id,
            idx = _ref2.idx,
            name = _ref2.name;
        return {
          id: id,
          idx: idx,
          name: name()
        };
      });

      var unselected = {
        items: unselectedItems,
        onSelect: _this.onSelectPeriods,
        filterText: ''
      };
      var selected = {
        items: _this.state.selectedPeriods,
        onDeselect: _this.onDeselectPeriods,
        onReorder: _this.setSelectedPeriodOrder
      };
      return _react.default.createElement(_react.Fragment, null, _this.renderPeriodTypeButtons(), _react.default.createElement("div", {
        style: {
          display: 'flex',
          marginTop: '18px'
        }
      }, _react.default.createElement(_ItemSelector.default, {
        itemClassName: "period-selector",
        unselected: unselected,
        selected: selected
      }, filterZone())));
    });
    _this.state.selectedPeriods = _this.props.selectedItems;
    return _this;
  }

  return PeriodSelector;
}(_react.Component);

PeriodSelector.propTypes = {
  onDeselect: _propTypes.default.func.isRequired,
  onReorder: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.object)
};
PeriodSelector.defaultProps = {
  selectedItems: []
};
var _default = PeriodSelector;
exports.default = _default;