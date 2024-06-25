"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../locales/index.js"));

var _axis = require("../modules/axis.js");

var _axis2 = require("../modules/layout/axis.js");

var _index2 = require("../modules/layoutUiRules/index.js");

var _predefinedDimensions = require("../modules/predefinedDimensions.js");

var _visTypes = require("../modules/visTypes.js");

var _visTypeToLayoutType = require("../modules/visTypeToLayoutType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAxisItemLabel = (axisName, isDimensionInLayout) => isDimensionInLayout ? _index.default.t('Move to {{axisName}}', {
  axisName
}) : _index.default.t('Add to {{axisName}}', {
  axisName
});

const getDividerItem = key => /*#__PURE__*/_react.default.createElement(_ui.MenuDivider, {
  dense: true,
  key: key
});

const getUnavailableLabel = visType => _index.default.t('Not available for {{visualizationType}}', {
  visualizationType: (0, _visTypes.getDisplayNameByVisType)(visType)
});

const DimensionMenu = _ref => {
  let {
    dimensionId,
    currentAxisId,
    visType,
    numberOfDimensionItems,
    assignedCategoriesItemHandler,
    isAssignedCategoriesInLayout,
    axisItemHandler,
    removeItemHandler,
    classes,
    onClose,
    dataTest
  } = _ref;
  const menuItems = [];
  const isDimensionInLayout = !!currentAxisId; // add/move to axis item

  const availableAxisIds = (0, _index2.getAvailableAxes)(visType);
  const applicableAxisIds = availableAxisIds.filter(axisId => axisId !== currentAxisId);
  const assignedCategoriesAvailableDestinations = (0, _index2.getAvailableAxes)(visType).filter(axis => axis !== _axis2.AXIS_ID_FILTERS);
  const assignedCategoriesItemLabel = isAssignedCategoriesInLayout ? _index.default.t('Remove Assigned Categories') : _index.default.t('Add Assigned Categories');

  const getRemoveMenuItem = onClick => /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    key: "remove-menu-item",
    onClick: onClick,
    label: _index.default.t('Remove'),
    dataTest: "".concat(dataTest, "-item-remove-").concat(dimensionId)
  }); // Assigned categories


  if (dimensionId === _predefinedDimensions.DIMENSION_ID_DATA && assignedCategoriesItemHandler) {
    if (assignedCategoriesAvailableDestinations.length) {
      if (!isAssignedCategoriesInLayout) {
        menuItems.push( /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
          label: assignedCategoriesItemLabel,
          key: "assigned-categories-item-".concat(dimensionId),
          dataTest: "".concat(dataTest, "-item-co-menu")
        }, assignedCategoriesAvailableDestinations.map(destination => /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
          key: destination,
          onClick: () => {
            assignedCategoriesItemHandler(destination);
            onClose();
          },
          label: getAxisItemLabel((0, _axis.getAxisNameByLayoutType)(destination, (0, _visTypeToLayoutType.getLayoutTypeByVisType)(visType))),
          dataTest: "".concat(dataTest, "-item-action-co-to-").concat(destination)
        }))));
      } else {
        menuItems.push( /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
          key: "assigned-categories-item-".concat(dimensionId),
          onClick: () => {
            assignedCategoriesItemHandler();
            onClose();
          },
          label: assignedCategoriesItemLabel,
          dataTest: "".concat(dataTest, "-item-remove-co")
        }));
      }
    } else {
      menuItems.push( /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
        key: "assigned-categories-item-".concat(dimensionId),
        content: getUnavailableLabel(visType),
        "aria-label": "disabled",
        classes: classes
      }, /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
        disabled: true,
        dense: true,
        label: assignedCategoriesItemLabel,
        dataTest: "".concat(dataTest, "-item-co-menu")
      })));
    }
  } // divider


  menuItems.length && menuItems.push(getDividerItem('assigned-categories-divider'));
  menuItems.push(...applicableAxisIds.map(axisId => /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    key: "".concat(dimensionId, "-to-").concat(axisId),
    onClick: () => {
      axisItemHandler({
        dimensionId,
        axisId,
        numberOfDimensionItems,
        requireItems: !(0, _predefinedDimensions.getPredefinedDimensionProp)(dimensionId, _predefinedDimensions.DIMENSION_PROP_NO_ITEMS),
        isDimensionInLayout
      });
      onClose();
    },
    label: getAxisItemLabel((0, _axis.getAxisNameByLayoutType)(axisId, (0, _visTypeToLayoutType.getLayoutTypeByVisType)(visType)), isDimensionInLayout),
    dataTest: "".concat(dataTest, "-item-action-").concat(dimensionId, "-to-").concat(axisId)
  }))); // remove item

  if (isDimensionInLayout) {
    // divider
    if (applicableAxisIds.length) {
      menuItems.push(getDividerItem('remove-item-divider'));
    }

    menuItems.push(getRemoveMenuItem(() => {
      removeItemHandler(dimensionId);
      onClose();
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_ui.FlyoutMenu, {
    dense: true,
    dataTest: dataTest
  }, menuItems);
};

DimensionMenu.propTypes = {
  axisItemHandler: _propTypes.default.func.isRequired,
  numberOfDimensionItems: _propTypes.default.number.isRequired,
  removeItemHandler: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  assignedCategoriesItemHandler: _propTypes.default.func,
  classes: _propTypes.default.object,
  currentAxisId: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  dimensionId: _propTypes.default.string,
  isAssignedCategoriesInLayout: _propTypes.default.bool,
  visType: _propTypes.default.string
};
var _default = DimensionMenu;
exports.default = _default;