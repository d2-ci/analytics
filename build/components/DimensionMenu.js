"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DimensionMenu = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));

var _Zoom = _interopRequireDefault(require("@material-ui/core/Zoom"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _layoutUiRules = require("../modules/layoutUiRules");

var _axis = require("../modules/layout/axis");

var _predefinedDimensions = require("../modules/predefinedDimensions");

var _visTypes = require("../modules/visTypes");

var _axis2 = require("../modules/axis");

var _visTypeToLayoutType = require("../modules/visTypeToLayoutType");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var getAxisItemLabel = function getAxisItemLabel(axisName, isDimensionInLayout) {
  return isDimensionInLayout ? _d2I18n.default.t('Move to {{axisName}}', {
    axisName: axisName
  }) : _d2I18n.default.t('Add to {{axisName}}', {
    axisName: axisName
  });
};

var getRemoveMenuItem = function getRemoveMenuItem(onClick) {
  return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: "remove-menu-item",
    onClick: onClick
  }, _d2I18n.default.t('Remove'));
};

var getDividerItem = function getDividerItem(key) {
  return /*#__PURE__*/_react.default.createElement(_Divider.default, {
    light: true,
    key: key
  });
};

var getUnavailableLabel = function getUnavailableLabel(visType) {
  return _d2I18n.default.t('Not available for {{visualizationType}}', {
    visualizationType: (0, _visTypes.getDisplayNameByVisType)(visType)
  });
};

var getDualAxisMenuItemLabel = function getDualAxisMenuItemLabel(currentAxisId, visType, numberOfDimensionItems) {
  var label;

  if (!(0, _visTypes.isDualAxisType)(visType)) {
    label = getUnavailableLabel(visType);
  } else if (numberOfDimensionItems < 2) {
    label = _d2I18n.default.t('Requires 2 or more data items');
  } else if (currentAxisId !== _axis.AXIS_ID_COLUMNS) {
    label = _d2I18n.default.t('Only available when data is in Series');
  }

  return label;
};

var _ref = /*#__PURE__*/_react.default.createElement(_ArrowRight.default, null);

var _ref2 = /*#__PURE__*/_react.default.createElement(_ArrowRight.default, null);

var DimensionMenu = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DimensionMenu, _Component);

  var _super = _createSuper(DimensionMenu);

  function DimensionMenu() {
    var _this;

    (0, _classCallCheck2.default)(this, DimensionMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      submenuAnchorEl: null
    });
    return _this;
  }

  (0, _createClass2.default)(DimensionMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          dimensionId = _this$props.dimensionId,
          currentAxisId = _this$props.currentAxisId,
          visType = _this$props.visType,
          numberOfDimensionItems = _this$props.numberOfDimensionItems,
          assignedCategoriesItemHandler = _this$props.assignedCategoriesItemHandler,
          isAssignedCategoriesInLayout = _this$props.isAssignedCategoriesInLayout,
          dualAxisItemHandler = _this$props.dualAxisItemHandler,
          axisItemHandler = _this$props.axisItemHandler,
          removeItemHandler = _this$props.removeItemHandler,
          anchorEl = _this$props.anchorEl,
          onClose = _this$props.onClose,
          classes = _this$props.classes;
      var menuItems = [];
      var isDimensionInLayout = !!currentAxisId; // add/move to axis item

      var availableAxisIds = (0, _layoutUiRules.getAvailableAxes)(visType);
      var applicableAxisIds = availableAxisIds.filter(function (axisId) {
        return axisId !== currentAxisId;
      });
      var assignedCategoriesAvailableDestinations = (0, _layoutUiRules.getAvailableAxes)(visType).filter(function (axis) {
        return axis !== _axis.AXIS_ID_FILTERS;
      });
      var assignedCategoriesItemLabel = isAssignedCategoriesInLayout ? _d2I18n.default.t('Remove Assigned Categories') : _d2I18n.default.t('Add Assigned Categories');

      var closeSubMenu = function closeSubMenu() {
        _this2.setState({
          submenuAnchorEl: null
        });
      };

      var closeWholeMenu = function closeWholeMenu() {
        onClose();
        closeSubMenu();
      };

      var getDualAxisMenuItem = function getDualAxisMenuItem(isDisabled) {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: "dual-axis-item-".concat(dimensionId),
          onClick: function onClick() {
            dualAxisItemHandler();
            closeWholeMenu();
          },
          disabled: isDisabled
        }, /*#__PURE__*/_react.default.createElement("div", null, _d2I18n.default.t('Manage chart axes')));
      }; // Create dual axis menu item


      if (dimensionId === _predefinedDimensions.DIMENSION_ID_DATA) {
        if (currentAxisId === _axis.AXIS_ID_COLUMNS && (0, _visTypes.isDualAxisType)(visType) && numberOfDimensionItems >= 2) {
          menuItems.push(getDualAxisMenuItem(false));
        } else {
          var label = getDualAxisMenuItemLabel(currentAxisId, visType, numberOfDimensionItems);
          menuItems.push( /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
            key: "dual-axis-tooltip-".concat(dimensionId),
            title: label,
            "aria-label": "disabled",
            placement: "right-start",
            classes: classes
          }, /*#__PURE__*/_react.default.createElement("div", null, getDualAxisMenuItem(true))));
        } // divider


        if (applicableAxisIds.length) {
          menuItems.push(getDividerItem('dual-axis-item-divider'));
        }
      } // Assigned categories


      if (dimensionId === _predefinedDimensions.DIMENSION_ID_DATA && assignedCategoriesItemHandler) {
        if (assignedCategoriesAvailableDestinations.length) {
          if (!isAssignedCategoriesInLayout) {
            menuItems.push( /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
              key: "assigned-categories-item-".concat(dimensionId),
              onClick: function onClick(event) {
                return _this2.setState({
                  submenuAnchorEl: event.currentTarget
                });
              }
            }, /*#__PURE__*/_react.default.createElement("div", null, assignedCategoriesItemLabel), _ref));
            menuItems.push( /*#__PURE__*/_react.default.createElement(_Menu.default, {
              key: "assigned-categories-sub-menu-".concat(dimensionId),
              open: Boolean(this.state.submenuAnchorEl),
              anchorEl: this.state.submenuAnchorEl,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              onClose: closeSubMenu,
              onExited: closeSubMenu
            }, assignedCategoriesAvailableDestinations.map(function (destination) {
              return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
                key: destination,
                onClick: function onClick() {
                  assignedCategoriesItemHandler(destination);
                  closeWholeMenu();
                }
              }, getAxisItemLabel((0, _axis2.getAxisNameByLayoutType)(destination, (0, _visTypeToLayoutType.getLayoutTypeByVisType)(visType))));
            })));
          } else {
            menuItems.push( /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
              key: "assigned-categories-item-".concat(dimensionId),
              onClick: function onClick() {
                assignedCategoriesItemHandler();
                closeWholeMenu();
              }
            }, /*#__PURE__*/_react.default.createElement("div", null, assignedCategoriesItemLabel)));
          }
        } else {
          menuItems.push( /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
            key: "assigned-categories-item-".concat(dimensionId),
            title: getUnavailableLabel(visType),
            "aria-label": "disabled",
            placement: "right-start",
            classes: classes
          }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
            disabled: true
          }, /*#__PURE__*/_react.default.createElement("div", null, assignedCategoriesItemLabel), _ref2))));
        }
      } // divider


      menuItems.length && menuItems.push(getDividerItem('assigned-categories-divider'));
      menuItems.push.apply(menuItems, (0, _toConsumableArray2.default)(applicableAxisIds.map(function (axisId) {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: "".concat(dimensionId, "-to-").concat(axisId),
          onClick: function onClick() {
            axisItemHandler({
              dimensionId: dimensionId,
              axisId: axisId,
              numberOfDimensionItems: numberOfDimensionItems,
              requireItems: !(0, _predefinedDimensions.getPredefinedDimensionProp)(dimensionId, _predefinedDimensions.DIMENSION_PROP_NO_ITEMS),
              isDimensionInLayout: isDimensionInLayout
            });
            closeWholeMenu();
          }
        }, getAxisItemLabel((0, _axis2.getAxisNameByLayoutType)(axisId, (0, _visTypeToLayoutType.getLayoutTypeByVisType)(visType)), isDimensionInLayout));
      }))); // remove item

      if (isDimensionInLayout) {
        // divider
        if (applicableAxisIds.length) {
          menuItems.push(getDividerItem('remove-item-divider'));
        }

        menuItems.push(getRemoveMenuItem(function () {
          removeItemHandler(dimensionId);
          closeWholeMenu();
        }));
      }

      return /*#__PURE__*/_react.default.createElement(_Menu.default, {
        id: dimensionId,
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: closeWholeMenu,
        onExited: closeWholeMenu,
        transitionDuration: {
          enter: 50,
          exit: 0
        },
        TransitionComponent: _Zoom.default
      }, menuItems);
    }
  }]);
  return DimensionMenu;
}(_react.Component);

exports.DimensionMenu = DimensionMenu;
DimensionMenu.propTypes = {
  axisItemHandler: _propTypes.default.func.isRequired,
  numberOfDimensionItems: _propTypes.default.number.isRequired,
  removeItemHandler: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  anchorEl: _propTypes.default.object,
  assignedCategoriesItemHandler: _propTypes.default.func,
  classes: _propTypes.default.object,
  currentAxisId: _propTypes.default.string,
  dimensionId: _propTypes.default.string,
  dualAxisItemHandler: _propTypes.default.func,
  isAssignedCategoriesInLayout: _propTypes.default.bool,
  visType: _propTypes.default.string
};
var _default = DimensionMenu;
exports.default = _default;