"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DimensionLabel = require("./styles/DimensionLabel.style");

var _predefinedDimensions = require("../../../modules/predefinedDimensions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DimensionLabel = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DimensionLabel, _Component);

  var _super = _createSuper(DimensionLabel);

  function DimensionLabel() {
    var _this;

    (0, _classCallCheck2.default)(this, DimensionLabel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onLabelClick", function () {
      if (!_this.props.isDeactivated && !(0, _predefinedDimensions.getPredefinedDimensionProp)(_this.props.id, _predefinedDimensions.DIMENSION_PROP_NO_ITEMS)) {
        _this.props.onClick(_this.props.id);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyPress", function (event) {
      if (event.key === 'Enter' && event.ctrlKey === false) {
        _this.onLabelClick();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(DimensionLabel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        "data-test": "dimension-id-".concat(this.props.id),
        className: "label",
        onClick: this.onLabelClick,
        onKeyPress: this.onKeyPress,
        tabIndex: 0,
        style: _DimensionLabel.styles.label
      }, this.props.children);
    }
  }]);
  return DimensionLabel;
}(_react.Component);

exports.DimensionLabel = DimensionLabel;
(0, _defineProperty2.default)(DimensionLabel, "propTypes", {
  id: _propTypes.default.string.isRequired,
  isDeactivated: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired,
  children: _propTypes.default.array
});
var _default = DimensionLabel;
exports.default = _default;