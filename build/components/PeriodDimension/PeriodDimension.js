"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PeriodDimension = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _PeriodSelector = _interopRequireDefault(require("../PeriodSelector/PeriodSelector"));

var _predefinedDimensions = require("../../modules/predefinedDimensions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PeriodDimension = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PeriodDimension, _Component);

  var _super = _createSuper(PeriodDimension);

  function PeriodDimension() {
    var _this;

    (0, _classCallCheck2.default)(this, PeriodDimension);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectItems", function (periods) {
      var newItems = periods.map(function (p) {
        return {
          id: p.id,
          name: p.name
        };
      });

      var alreadySelected = _this.props.selectedPeriods.map(function (p) {
        return {
          id: p.id,
          name: p.name
        };
      });

      _this.props.onSelect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_PERIOD,
        items: (0, _uniqBy.default)(alreadySelected.concat(newItems), 'id')
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deselectItems", function (periods) {
      var itemIdsToRemove = periods.map(function (period) {
        return period.id;
      });

      _this.props.onDeselect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_PERIOD,
        itemIdsToRemove: itemIdsToRemove
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "reorderItems", function (periods) {
      var itemIds = periods.map(function (period) {
        return period.id;
      });

      _this.props.onReorder({
        dimensionId: _predefinedDimensions.DIMENSION_ID_PERIOD,
        itemIds: itemIds
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var selectedPeriods = _this.props.selectedPeriods;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, null, _d2I18n.default.t('Period')), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_PeriodSelector.default, {
        onSelect: _this.selectItems,
        onDeselect: _this.deselectItems,
        onReorder: _this.reorderItems,
        selectedItems: selectedPeriods
      })));
    });
    return _this;
  }

  return PeriodDimension;
}(_react.Component);

exports.PeriodDimension = PeriodDimension;
PeriodDimension.propTypes = {
  onDeselect: _propTypes.default.func.isRequired,
  onReorder: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  selectedPeriods: _propTypes.default.array
};
PeriodDimension.defaultProps = {
  selectedPeriods: []
};
var _default = PeriodDimension;
exports.default = _default;