"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DynamicDimension = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _ItemSelector = _interopRequireDefault(require("../ItemSelector/ItemSelector"));

var _FilterField = _interopRequireDefault(require("../FilterField"));

var _dimensions = require("../../api/dimensions");

var _DynamicDimension = require("./styles/DynamicDimension.style");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DynamicDimension = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DynamicDimension, _Component);

  var _super = _createSuper(DynamicDimension);

  function DynamicDimension() {
    var _this;

    (0, _classCallCheck2.default)(this, DynamicDimension);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      filterText: '',
      nextPage: null,
      items: [],
      unselectedIds: [],
      selectedIds: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "componentDidMount", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var items;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _dimensions.apiFetchItemsByDimension)(_this.props.d2, _this.props.dialogId);

            case 2:
              items = _context.sent;

              _this.setState({
                items: items
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClearFilter", function () {
      _this.setState({
        filterText: ''
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFilterTextChange", function (filterText) {
      var filteredItems = _this.state.items.map(function (item) {
        return item.name.toLowerCase().includes(filterText.toLowerCase()) && item.id;
      });

      _this.setState({
        filterText: filterText,
        unselectedIds: filteredItems
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectItems", function (selectedIds) {
      var unselectedIds = _this.state.unselectedIds.filter(function (id) {
        return !selectedIds.includes(id);
      });

      _this.setState({
        unselectedIds: unselectedIds
      });

      var itemsToAdd = _this.state.items.filter(function (di) {
        return selectedIds.includes(di.id);
      });

      _this.props.onSelect({
        dimensionId: _this.props.dialogId,
        items: [].concat((0, _toConsumableArray2.default)(_this.props.selectedItems.filter(function (item) {
          return !selectedIds.includes(item.id);
        })), (0, _toConsumableArray2.default)(itemsToAdd))
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "deselectItems", function (ids) {
      var unselectedIds = (0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(_this.state.unselectedIds), (0, _toConsumableArray2.default)(ids))));

      _this.setState({
        unselectedIds: unselectedIds
      });

      _this.props.onDeselect({
        dimensionId: _this.props.dialogId,
        itemIdsToRemove: ids
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "reorderItems", function (itemIds) {
      return _this.props.onReorder({
        dimensionId: _this.props.dialogId,
        itemIds: itemIds
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getUnselectedItems", function () {
      return _this.state.items.filter(function (item) {
        return !_this.props.selectedItems.find(function (i) {
          return i.id === item.id;
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var filterZone = function filterZone() {
        return /*#__PURE__*/_react.default.createElement(_FilterField.default, {
          text: _this.state.filterText,
          onFilterTextChange: _this.onFilterTextChange,
          onClearFilter: _this.onClearFilter
        });
      };

      var unselected = {
        items: _this.getUnselectedItems(),
        onSelect: _this.selectItems,
        filterText: _this.state.filterText
      };
      var selected = {
        items: _this.props.selectedItems,
        dialogId: _this.props.dialogId,
        onDeselect: _this.deselectItems,
        onReorder: _this.reorderItems
      };
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, null, _this.props.dialogTitle), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
        style: _DynamicDimension.styles.dialogContent
      }, /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
        itemClassName: "dynamic-dimension",
        unselected: unselected,
        selected: selected
      }, filterZone())));
    });
    return _this;
  }

  return DynamicDimension;
}(_react.Component);

exports.DynamicDimension = DynamicDimension;
DynamicDimension.propTypes = {
  d2: _propTypes.default.object.isRequired,
  dialogId: _propTypes.default.string.isRequired,
  dialogTitle: _propTypes.default.string.isRequired,
  selectedItems: _propTypes.default.array.isRequired,
  onDeselect: _propTypes.default.func.isRequired,
  onReorder: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired
};
DynamicDimension.defaultProps = {
  selectedItems: [],
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onReorder: Function.prototype
};
var _default = DynamicDimension;
exports.default = _default;