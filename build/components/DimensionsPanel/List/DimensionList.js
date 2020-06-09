"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _DimensionItem = _interopRequireDefault(require("./DimensionItem"));

var _DimensionList = require("./styles/DimensionList.style");

var _predefinedDimensions = require("../../../modules/predefinedDimensions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DimensionList = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DimensionList, _Component);

  var _super = _createSuper(DimensionList);

  function DimensionList() {
    var _this;

    (0, _classCallCheck2.default)(this, DimensionList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nameContainsFilterText", function (dimension) {
      return dimension.name.toLowerCase().includes(_this.props.filterText.toLowerCase());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isDisabled", function (dimensionId) {
      return _this.props.disabledDimension(dimensionId) || false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isRecommended", function (dimensionId) {
      return _this.props.recommendedDimension(dimensionId) || false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isLocked", function (dimensionId) {
      return _this.props.lockedDimension(dimensionId) || false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderItem", function (dimension) {
      return /*#__PURE__*/_react.default.createElement(_DimensionItem.default, {
        id: dimension.id,
        key: dimension.id,
        name: dimension.name,
        isLocked: _this.isLocked(dimension.id),
        isSelected: _this.props.selectedIds.includes(dimension.id),
        isRecommended: _this.isRecommended(dimension.id),
        isDeactivated: _this.isDisabled(dimension.id),
        onClick: _this.props.onDimensionClick,
        onOptionsClick: _this.props.onDimensionOptionsClick,
        onDragStart: _this.props.onDimensionDragStart
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDimensionItemsByFilter", function (filter) {
      return _this.props.dimensions.filter(filter).filter(_this.nameContainsFilterText).map(_this.renderItem);
    });
    return _this;
  }

  (0, _createClass2.default)(DimensionList, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var fixedDimensions = this.getDimensionItemsByFilter(function (dimension) {
        return Object.values((0, _predefinedDimensions.getFixedDimensions)()).some(function (fixedDim) {
          return fixedDim.id === dimension.id;
        });
      });
      var nonPredefinedDimensions = this.getDimensionItemsByFilter(function (dimension) {
        return !Object.values((0, _predefinedDimensions.getPredefinedDimensions)()).some(function (predefDim) {
          return predefDim.id === dimension.id;
        });
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.container
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.wrapper
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.section
      }, /*#__PURE__*/_react.default.createElement("h3", {
        className: classes.header
      }, _d2I18n.default.t('Main dimensions')), /*#__PURE__*/_react.default.createElement("ul", {
        className: classes.list
      }, fixedDimensions)), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.section
      }, /*#__PURE__*/_react.default.createElement("h3", {
        className: classes.header
      }, _d2I18n.default.t('Your dimensions')), /*#__PURE__*/_react.default.createElement("ul", {
        className: classes.list
      }, nonPredefinedDimensions))));
    }
  }]);
  return DimensionList;
}(_react.Component);

exports.DimensionList = DimensionList;
DimensionList.propTypes = {
  dimensions: _propTypes.default.array.isRequired,
  filterText: _propTypes.default.string.isRequired,
  classes: _propTypes.default.object,
  disabledDimension: _propTypes.default.func,
  lockedDimension: _propTypes.default.func,
  recommendedDimension: _propTypes.default.func,
  selectedIds: _propTypes.default.array,
  onDimensionClick: _propTypes.default.func,
  onDimensionDragStart: _propTypes.default.func,
  onDimensionOptionsClick: _propTypes.default.func
};
DimensionList.defaultProps = {
  selectedIds: [],
  disabledDimension: Function.prototype,
  lockedDimension: Function.prototype,
  recommendedDimension: Function.prototype
};

var _default = (0, _styles.withStyles)(_DimensionList.styles)(DimensionList);

exports.default = _default;