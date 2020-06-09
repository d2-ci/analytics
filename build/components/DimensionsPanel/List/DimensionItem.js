"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _DimensionLabel = _interopRequireDefault(require("./DimensionLabel"));

var _RecommendedIcon = _interopRequireDefault(require("./RecommendedIcon"));

var _OptionsButton = _interopRequireDefault(require("./OptionsButton"));

var _DynamicDimensionIcon = _interopRequireDefault(require("../../../assets/DynamicDimensionIcon"));

var _predefinedDimensions = require("../../../modules/predefinedDimensions");

var _DimensionItem = require("./styles/DimensionItem.style");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DimensionItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DimensionItem, _Component);

  var _super = _createSuper(DimensionItem);

  function DimensionItem() {
    var _this;

    (0, _classCallCheck2.default)(this, DimensionItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOptionsClick", function (id) {
      return function (event) {
        return _this.props.onOptionsClick(event, id);
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseOver", function () {
      _this.setState({
        mouseOver: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseExit", function () {
      _this.setState({
        mouseOver: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDimensionIcon", function () {
      var Icon = (0, _predefinedDimensions.getPredefinedDimensionProp)(_this.props.id, 'icon');
      return Icon ? /*#__PURE__*/_react.default.createElement(Icon, {
        style: _DimensionItem.styles.fixedDimensionIcon
      }) : /*#__PURE__*/_react.default.createElement(_DynamicDimensionIcon.default, {
        style: _DimensionItem.styles.dynamicDimensionIcon
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDimensionType", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          name = _this$props.name,
          isDeactivated = _this$props.isDeactivated;
      return /*#__PURE__*/_react.default.createElement("span", {
        "data-dimensionid": id,
        style: _objectSpread(_objectSpread({}, _DimensionItem.styles.text), isDeactivated ? _DimensionItem.styles.textDeactivated : {})
      }, name);
    });
    return _this;
  }

  (0, _createClass2.default)(DimensionItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          isDeactivated = _this$props2.isDeactivated,
          isSelected = _this$props2.isSelected,
          isRecommended = _this$props2.isRecommended,
          isLocked = _this$props2.isLocked,
          onClick = _this$props2.onClick,
          onOptionsClick = _this$props2.onOptionsClick,
          innerRef = _this$props2.innerRef,
          style = _this$props2.style,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["id", "isDeactivated", "isSelected", "isRecommended", "isLocked", "onClick", "onOptionsClick", "innerRef", "style"]);
      var Icon = this.getDimensionIcon();
      var Label = this.getDimensionType();
      var itemStyle = isSelected && !isDeactivated ? _objectSpread(_objectSpread({}, _DimensionItem.styles.item), _DimensionItem.styles.selected) : _DimensionItem.styles.item;
      return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseExit,
        ref: innerRef,
        style: Object.assign({}, itemStyle, style)
      }, rest), /*#__PURE__*/_react.default.createElement(_DimensionLabel.default, {
        id: id,
        isDeactivated: isDeactivated,
        onClick: onClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: _DimensionItem.styles.iconWrapper
      }, Icon), /*#__PURE__*/_react.default.createElement("div", {
        style: _DimensionItem.styles.labelWrapper
      }, Label, /*#__PURE__*/_react.default.createElement(_RecommendedIcon.default, {
        isRecommended: isRecommended
      })), isLocked && /*#__PURE__*/_react.default.createElement("div", {
        style: _DimensionItem.styles.iconWrapper
      }, /*#__PURE__*/_react.default.createElement(_Lock.default, {
        style: _DimensionItem.styles.lockIcon
      }))), onOptionsClick ? /*#__PURE__*/_react.default.createElement("div", {
        style: _DimensionItem.styles.optionsWrapper
      }, this.state.mouseOver && !isDeactivated && !isLocked ? /*#__PURE__*/_react.default.createElement(_OptionsButton.default, {
        style: _DimensionItem.styles.optionsButton,
        onClick: this.onOptionsClick(id)
      }) : null) : null);
    }
  }]);
  return DimensionItem;
}(_react.Component);

exports.DimensionItem = DimensionItem;
DimensionItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  // XXX
  name: _propTypes.default.string.isRequired,
  innerRef: _propTypes.default.func,
  isDeactivated: _propTypes.default.bool,
  isLocked: _propTypes.default.bool,
  isRecommended: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  onOptionsClick: _propTypes.default.func
};
DimensionItem.defaultProps = {
  isDeactivated: false,
  isRecommended: false,
  isSelected: false,
  isLocked: false,
  onClick: Function.prototype,
  innerRef: Function.prototype,
  style: {}
};
var _default = DimensionItem;
exports.default = _default;