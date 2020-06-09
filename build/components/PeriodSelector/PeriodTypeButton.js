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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PeriodTypeButton = _interopRequireDefault(require("./styles/PeriodTypeButton.style"));

var PeriodTypeButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PeriodTypeButton, _Component);

  function PeriodTypeButton() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PeriodTypeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PeriodTypeButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function () {
      _this.props.onClick(_this.props.periodType);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
        onClick: _this.handleClick,
        className: "jsx-".concat(_PeriodTypeButton.default.__hash) + " " + "nav-button ".concat(_this.props.periodType === _this.props.activePeriodType ? 'active' : '')
      }, _this.props.text), _react.default.createElement(_style.default, {
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