"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionsPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _Filter = _interopRequireDefault(require("../Filter/Filter"));

var _DimensionList = _interopRequireDefault(require("./List/DimensionList"));

var _DimensionsPanel = require("./styles/DimensionsPanel.style");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DimensionsPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DimensionsPanel, _Component);

  var _super = _createSuper(DimensionsPanel);

  function DimensionsPanel() {
    var _this;

    (0, _classCallCheck2.default)(this, DimensionsPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      filterText: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClearFilter", function () {
      _this.setState({
        filterText: ''
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFilterTextChange", function (filterText) {
      _this.setState({
        filterText: filterText
      });
    });
    return _this;
  }

  (0, _createClass2.default)(DimensionsPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dimensions = _this$props.dimensions,
          selectedIds = _this$props.selectedIds,
          disabledDimension = _this$props.disabledDimension,
          lockedDimension = _this$props.lockedDimension,
          recommendedDimension = _this$props.recommendedDimension,
          onDimensionClick = _this$props.onDimensionClick,
          onDimensionOptionsClick = _this$props.onDimensionOptionsClick,
          onDimensionDragStart = _this$props.onDimensionDragStart,
          style = _this$props.style;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread(_objectSpread({}, _DimensionsPanel.styles.divContainer), style)
      }, /*#__PURE__*/_react.default.createElement(_Filter.default, {
        style: _DimensionsPanel.styles.textField,
        placeholder: _d2I18n.default.t('Filter dimensions'),
        text: this.state.filterText,
        onChange: this.onFilterTextChange,
        onClear: this.onClearFilter
      }), /*#__PURE__*/_react.default.createElement(_DimensionList.default, {
        dimensions: dimensions,
        selectedIds: selectedIds,
        filterText: this.state.filterText,
        disabledDimension: disabledDimension,
        lockedDimension: lockedDimension,
        recommendedDimension: recommendedDimension,
        onDimensionOptionsClick: onDimensionOptionsClick,
        onDimensionClick: onDimensionClick,
        onDimensionDragStart: onDimensionDragStart
      }));
    }
  }]);
  return DimensionsPanel;
}(_react.Component);

exports.DimensionsPanel = DimensionsPanel;
DimensionsPanel.propTypes = {
  dimensions: _propTypes.default.array.isRequired,
  disabledDimension: _propTypes.default.func,
  lockedDimension: _propTypes.default.func,
  recommendedDimension: _propTypes.default.func,
  selectedIds: _propTypes.default.array,
  style: _propTypes.default.object,
  onDimensionClick: _propTypes.default.func,
  onDimensionDragStart: _propTypes.default.func,
  onDimensionOptionsClick: _propTypes.default.func
};
DimensionsPanel.defaultProps = {
  selectedIds: [],
  style: {},
  onDimensionClick: Function.prototype
};
var _default = DimensionsPanel;
exports.default = _default;