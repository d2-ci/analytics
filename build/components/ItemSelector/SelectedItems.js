"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectedItems = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button/Button"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _uiCore = require("@dhis2/ui-core");

var _SelectedItem = _interopRequireDefault(require("./widgets/SelectedItem"));

var _ArrowButton = require("./widgets/ArrowButton");

var _toggler = require("./modules/toggler");

var _reorderList = require("./modules/reorderList");

var _SelectedItems = _interopRequireDefault(require("./styles/SelectedItems.style"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Subtitle = function Subtitle() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "subtitle-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "subtitle-text"
  }, _d2I18n.default.t('Selected Data')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _SelectedItems.default.__hash
  }, _SelectedItems.default));
};

var InfoBox = function InfoBox(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "info-container"
  }, /*#__PURE__*/_react.default.createElement(_InfoOutlined.default, {
    style: {
      fontSize: 16,
      color: _uiCore.colors.grey600
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "info-text"
  }, message), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _SelectedItems.default.__hash
  }, _SelectedItems.default));
};

var ItemsList = function ItemsList(_ref2) {
  var innerRef = _ref2.innerRef,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("ul", {
    ref: innerRef,
    className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "selected-list"
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _SelectedItems.default.__hash
  }, _SelectedItems.default));
};

var CLONE_INDEX = 9999; // a high number to not influence the actual item list

var _ref7 = /*#__PURE__*/_react.default.createElement(Subtitle, null);

var SelectedItems = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SelectedItems, _Component);

  var _super = _createSuper(SelectedItems);

  function SelectedItems() {
    var _this;

    (0, _classCallCheck2.default)(this, SelectedItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      highlighted: [],
      lastClickedIndex: 0,
      draggingId: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeselectHighlighted", function () {
      _this.props.onDeselect(_this.state.highlighted);

      _this.setState({
        highlighted: []
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeselectOne", function (id) {
      var highlighted = _this.state.highlighted.filter(function (highlightedId) {
        return highlightedId !== id;
      });

      _this.props.onDeselect([id]);

      _this.setState({
        highlighted: highlighted
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeselectAll", function () {
      _this.props.onDeselect(_this.props.items.map(function (item) {
        return item.id;
      }));

      _this.setState({
        highlighted: []
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleHighlight", function (_ref3) {
      var isCtrlPressed = _ref3.isCtrlPressed,
          isShiftPressed = _ref3.isShiftPressed,
          index = _ref3.index,
          id = _ref3.id;
      var newState = (0, _toggler.toggler)({
        id: id,
        isCtrlPressed: isCtrlPressed,
        isShiftPressed: isShiftPressed,
        index: index,
        lastClickedIndex: _this.state.lastClickedIndex,
        highlightedIds: _this.state.highlighted,
        items: _this.props.items.map(function (item) {
          return item.id;
        })
      });

      _this.setState({
        highlighted: newState.ids,
        lastClickedIndex: newState.lastClickedIndex
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isMultiDrag", function (draggableId) {
      return _this.state.highlighted.includes(draggableId) && _this.state.highlighted.length > 1;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragStart", function (start) {
      var id = start.draggableId;

      var selected = _this.state.highlighted.find(function (itemId) {
        return itemId === id;
      }); // if dragging an item that is not highlighted, unhighlight all items


      if (!selected) {
        _this.setState({
          highlighted: []
        });
      }

      _this.setState({
        draggingId: start.draggableId
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDragEnd", function (_ref4) {
      var destination = _ref4.destination,
          source = _ref4.source,
          draggableId = _ref4.draggableId;

      _this.setState({
        draggingId: null
      });

      if (destination === null) {
        return;
      }

      if (destination.draggableId === source.draggableId && destination.index === source.index) {
        return;
      }

      var newList = (0, _reorderList.reorderList)({
        destinationIndex: destination.index,
        sourceIndex: source.index,
        draggableId: draggableId,
        isMultiDrag: _this.isMultiDrag(draggableId),
        items: _this.props.items,
        highlightedItemIds: _this.state.highlighted
      });

      _this.props.onReorder(newList);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderListItem", function (_ref5, index) {
      var id = _ref5.id,
          name = _ref5.name,
          isActive = _ref5.isActive;
      return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
        draggableId: id,
        index: index,
        key: id
      }, function (provided, snapshot) {
        var isDraggedItem = snapshot.isDragging && _this.state.highlighted.length > 1 && _this.state.highlighted.includes(_this.state.draggingId);

        var ghost = _this.state.highlighted.includes(id) && Boolean(_this.state.draggingId) && _this.state.draggingId !== id;
        var itemText = isDraggedItem ? "".concat(_this.state.highlighted.length, " items") : name;
        return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
          id: id,
          onDoubleClick: function onDoubleClick() {
            return _this.onDeselectOne(id);
          }
        }, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          className: "jsx-".concat(_SelectedItems.default.__hash) + " " + (provided.dragHandleProps && provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps && provided.draggableProps.className != null && provided.draggableProps.className || "selected-list-item")
        }), /*#__PURE__*/_react.default.createElement(_SelectedItem.default, {
          id: id,
          index: index,
          name: itemText,
          highlighted: !!_this.state.highlighted.includes(id),
          active: isActive,
          onRemoveItem: _this.onDeselectOne,
          onClick: _this.toggleHighlight,
          ghost: ghost
        }), /*#__PURE__*/_react.default.createElement(_style.default, {
          id: _SelectedItems.default.__hash
        }, _SelectedItems.default));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderCloneItem", function (_ref6, index) {
      var id = _ref6.id,
          name = _ref6.name;
      var cloneId = "".concat(id, "-clone");
      return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
        draggableId: cloneId,
        index: index,
        key: cloneId
      }, function (provided) {
        return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
          id: cloneId
        }, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          className: "jsx-".concat(_SelectedItems.default.__hash) + " " + (provided.dragHandleProps && provided.dragHandleProps.className != null && provided.dragHandleProps.className || provided.draggableProps && provided.draggableProps.className != null && provided.draggableProps.className || "selected-list-item")
        }), /*#__PURE__*/_react.default.createElement(_SelectedItem.default, {
          id: cloneId,
          index: CLONE_INDEX,
          name: name,
          highlighted: !!_this.state.highlighted.includes(id),
          selected: true,
          ghost: true
        }), /*#__PURE__*/_react.default.createElement(_style.default, {
          id: _SelectedItems.default.__hash
        }, _SelectedItems.default));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getItemListWithClone", function () {
      var list = [];

      _this.props.items.forEach(function (item) {
        list.push(item);
        var isDraggedItem = _this.isMultiDrag(_this.state.draggingId) && _this.state.draggingId === item.id;

        if (isDraggedItem) {
          list.push({
            id: item.id,
            name: item.name,
            isActive: item.isActive,
            clone: true
          });
        }
      });

      return list;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var itemList = _this.getItemListWithClone().map(function (item, i) {
        return item.clone ? _this.renderCloneItem(item, i) : _this.renderListItem(item, i);
      });

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, _ref7, _this.props.infoBoxMessage ? /*#__PURE__*/_react.default.createElement(InfoBox, {
        message: _this.props.infoBoxMessage
      }) : null, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.DragDropContext, {
        onDragStart: _this.onDragStart,
        onDragEnd: _this.onDragEnd
      }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
        droppableId: "selected-items-droppable"
      }, function (provided) {
        return /*#__PURE__*/_react.default.createElement(ItemsList, (0, _extends2.default)({
          innerRef: provided.innerRef
        }, provided.droppableProps), itemList, provided.placeholder);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "deselect-all-button"
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: _this.onDeselectAll
      }, _d2I18n.default.t('Deselect All'))), /*#__PURE__*/_react.default.createElement("div", {
        className: "jsx-".concat(_SelectedItems.default.__hash) + " " + "deselect-highlighted-button"
      }, /*#__PURE__*/_react.default.createElement(_ArrowButton.ArrowButton, {
        onClick: _this.onDeselectHighlighted,
        iconType: 'arrowBack'
      })), /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _SelectedItems.default.__hash
      }, _SelectedItems.default));
    });
    return _this;
  }

  return SelectedItems;
}(_react.Component);

exports.SelectedItems = SelectedItems;
InfoBox.propTypes = {
  message: _propTypes.default.string
};
ItemsList.propTypes = {
  children: _propTypes.default.array,
  innerRef: _propTypes.default.func
};
SelectedItems.propTypes = {
  items: _propTypes.default.array.isRequired,
  onDeselect: _propTypes.default.func.isRequired,
  onReorder: _propTypes.default.func.isRequired,
  infoBoxMessage: _propTypes.default.string
};
var _default = SelectedItems;
exports.default = _default;