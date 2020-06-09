"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultState = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _d2UiOrgUnitDialog = require("@dhis2/d2-ui-org-unit-dialog");

var _organisationUnits = require("../../api/organisationUnits");

var _ouIdHelper = require("../../modules/ouIdHelper");

var _predefinedDimensions = require("../../modules/predefinedDimensions");

var _OrgUnitDimension = _interopRequireDefault(require("./styles/OrgUnitDimension.style"));

var _colors = require("../../modules/colors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultState = {
  root: undefined,
  roots: undefined,
  // use "selected" property for cloning org units while user org unit(s) is (are) selected
  selected: [],
  ouLevels: [],
  ouGroups: [],
  showOrgUnitsTree: true
};
exports.defaultState = defaultState;

var OrgUnitDimension = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(OrgUnitDimension, _Component);

  var _super = _createSuper(OrgUnitDimension);

  function OrgUnitDimension(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OrgUnitDimension);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showOrgUnitsTree", function () {
      _this.setState({
        showOrgUnitsTree: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hideOrgUnitsTree", function () {
      _this.setState({
        showOrgUnitsTree: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getUserOrgUnitsFromIds", function (ids) {
      return _d2UiOrgUnitDialog.userOrgUnits.filter(function (ou) {
        return ids.includes(ou.id);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onLevelChange", function (event) {
      var levelIds = event.target.value.filter(function (id) {
        return !!id;
      });

      _this.props.onSelect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
        items: [].concat((0, _toConsumableArray2.default)(_this.props.ouItems.filter(function (ou) {
          return !_ouIdHelper.ouIdHelper.hasLevelPrefix(ou.id);
        })), (0, _toConsumableArray2.default)(levelIds.map(function (id) {
          var levelOu = _this.state.ouLevels.find(function (ou) {
            return ou.id === id;
          });

          return _objectSpread(_objectSpread({}, levelOu), {}, {
            id: _ouIdHelper.ouIdHelper.addLevelPrefix(levelOu.id)
          });
        })))
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onGroupChange", function (event) {
      var groupIds = event.target.value.filter(function (id) {
        return !!id;
      });

      _this.props.onSelect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
        items: [].concat((0, _toConsumableArray2.default)(_this.props.ouItems.filter(function (ou) {
          return !_ouIdHelper.ouIdHelper.hasGroupPrefix(ou.id);
        })), (0, _toConsumableArray2.default)(groupIds.map(function (id) {
          var groupOu = _this.state.ouGroups.find(function (ou) {
            return ou.id === id;
          });

          return _objectSpread(_objectSpread({}, groupOu), {}, {
            id: _ouIdHelper.ouIdHelper.addGroupPrefix(id)
          });
        })))
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeselectAllClick", function () {
      return _this.props.onDeselect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
        itemIdsToRemove: _this.props.ouItems.map(function (ou) {
          return ou.id;
        })
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "loadOrgUnitTree", function (d2, displayNameProperty) {
      (0, _organisationUnits.apiFetchOrganisationUnits)(d2, displayNameProperty).then(function (rootLevel) {
        return rootLevel.toArray();
      }).then(function (roots) {
        _this.setState({
          roots: roots,
          root: roots[0]
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "loadOrgUnitGroups", function (d2, displayNameProperty) {
      (0, _organisationUnits.apiFetchOrganisationUnitGroups)(d2, displayNameProperty).then(function (organisationUnitGroups) {
        return _this.setState({
          ouGroups: organisationUnitGroups
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "loadOrgUnitLevels", function (d2) {
      (0, _organisationUnits.apiFetchOrganisationUnitLevels)(d2).then(function (organisationUnitLevels) {
        return _this.setState({
          ouLevels: (0, _sortBy.default)(organisationUnitLevels, ['level'])
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOrgUnitClick", function (event, orgUnit) {
      var selected = _this.props.ouItems;

      if (selected.some(function (ou) {
        return ou.path === orgUnit.path;
      })) {
        _this.props.onDeselect({
          dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
          itemIdsToRemove: [orgUnit.id]
        });
      } else {
        _this.props.onSelect({
          dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
          items: [].concat((0, _toConsumableArray2.default)(selected), [_objectSpread(_objectSpread({}, orgUnit), {}, {
            name: orgUnit.name || orgUnit.displayName
          })])
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleUserOrgUnitClick", function (event, checked) {
      if (checked) {
        if (!_this.state.selected.length) {
          _this.setState({
            selected: _this.props.ouItems.slice()
          });
        }

        _this.props.onSelect({
          dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
          items: [].concat((0, _toConsumableArray2.default)(_this.props.ouItems.filter(function (ou) {
            return _this.userOrgUnitIds.includes(ou.id);
          })), [_d2UiOrgUnitDialog.userOrgUnits.find(function (ou) {
            return ou.id === event.target.name;
          })])
        });
      } else {
        if (_this.props.ouItems.length === 1 && _this.state.selected.length > 0) {
          _this.props.onSelect({
            dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
            items: _this.state.selected
          });
        } else {
          _this.props.onDeselect({
            dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
            itemIdsToRemove: [event.target.name]
          });
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMultipleOrgUnitsSelect", function (orgUnits) {
      var selected = _this.props.ouItems;

      _this.props.onSelect({
        dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
        items: [].concat((0, _toConsumableArray2.default)(selected), (0, _toConsumableArray2.default)(orgUnits.reduce(function (obj, ou) {
          // avoid duplicates when clicking "Select children" multiple times
          if (!selected.find(function (i) {
            return i.id === ou.id;
          })) {
            obj.push(_objectSpread(_objectSpread({}, ou), {}, {
              name: ou.name || ou.displayName
            }));
          }

          return obj;
        }, [])))
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var ids = _this.props.ouItems.map(function (ou) {
        return ou.id;
      });

      var selected = _this.props.ouItems.filter(function (ou) {
        return !_this.userOrgUnitIds.includes(ou.id) && !_ouIdHelper.ouIdHelper.hasLevelPrefix(ou.id) && !_ouIdHelper.ouIdHelper.hasGroupPrefix(ou.id);
      });

      var userOrgUnits = _this.getUserOrgUnitsFromIds(ids);

      var level = ids.filter(_ouIdHelper.ouIdHelper.hasLevelPrefix).map(_ouIdHelper.ouIdHelper.removePrefix);
      var group = ids.filter(_ouIdHelper.ouIdHelper.hasGroupPrefix).map(_ouIdHelper.ouIdHelper.removePrefix);
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, null, _d2I18n.default.t('Organisation units')), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
        style: _OrgUnitDimension.default.dialogContent
      }, _this.state.root && _this.state.showOrgUnitsTree && /*#__PURE__*/_react.default.createElement(_d2UiOrgUnitDialog.OrgUnitSelector, {
        d2: _this.props.d2,
        root: _this.state.root,
        roots: _this.state.roots,
        selected: selected,
        userOrgUnits: userOrgUnits,
        level: level,
        group: group,
        levelOptions: _this.state.ouLevels,
        groupOptions: _this.state.ouGroups,
        onLevelChange: _this.onLevelChange,
        onGroupChange: _this.onGroupChange,
        onDeselectAllClick: _this.onDeselectAllClick,
        handleUserOrgUnitClick: _this.handleUserOrgUnitClick,
        handleOrgUnitClick: _this.handleOrgUnitClick,
        handleMultipleOrgUnitsSelect: _this.handleMultipleOrgUnitsSelect,
        checkboxColor: "secondary",
        deselectAllTooltipFontColor: _colors.colors.black,
        deselectAllTooltipBackgroundColor: _colors.colors.greyLight,
        displayNameProperty: _this.props.displayNameProperty,
        isUserDataViewFallback: true
      }), !_this.state.root && /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
        style: _OrgUnitDimension.default.loader
      })));
    });
    _this.state = defaultState;
    _this.userOrgUnitIds = _d2UiOrgUnitDialog.userOrgUnits.map(function (ou) {
      return ou.id;
    });

    _this.loadOrgUnitTree(props.d2, props.displayNameProperty);

    _this.loadOrgUnitGroups(props.d2, props.displayNameProperty);

    _this.loadOrgUnitLevels(props.d2);

    return _this;
  }

  (0, _createClass2.default)(OrgUnitDimension, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var previousId = prevProps.current ? prevProps.current.id : null;
      var currentId = this.props.current ? this.props.current.id : null; // remount org units selector component to ensure
      // only selected org units are expanded

      if (previousId !== currentId) {
        this.hideOrgUnitsTree();
        setTimeout(this.showOrgUnitsTree, 0);
      }
    }
  }]);
  return OrgUnitDimension;
}(_react.Component);

OrgUnitDimension.propTypes = {
  current: _propTypes.default.object,
  d2: _propTypes.default.object,
  displayNameProperty: _propTypes.default.string,
  ouItems: _propTypes.default.array,
  onDeselect: _propTypes.default.func,
  onSelect: _propTypes.default.func
};
var _default = OrgUnitDimension;
exports.default = _default;