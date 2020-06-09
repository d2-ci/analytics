"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PeriodTypeButton = _interopRequireDefault(require("./styles/PeriodTypeButton.style"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PeriodTypeButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PeriodTypeButton, _Component);

  var _super = _createSuper(PeriodTypeButton);

  function PeriodTypeButton() {
    var _this;

    (0, _classCallCheck2.default)(this, PeriodTypeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function () {
      _this.props.onClick(_this.props.periodType);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: _this.handleClick,
        className: "jsx-".concat(_PeriodTypeButton.default.__hash) + " " + "nav-button ".concat(_this.props.periodType === _this.props.activePeriodType ? 'active' : '')
      }, _this.props.text), /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _PeriodTypeButton.default.__hash
      }, _PeriodTypeButton.default));
    });
    return _this;
  }

  return PeriodTypeButton;
}(_react.Component);

PeriodTypeButton.propTypes = {
  activePeriodType: _propTypes.default.string.isRequired,
  periodType: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = PeriodTypeButton;
exports.default = _default;