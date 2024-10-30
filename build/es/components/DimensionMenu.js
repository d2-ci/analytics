import { MenuDivider, FlyoutMenu, MenuItem, Tooltip } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../locales/index.js';
import { getAxisNameByLayoutType } from '../modules/axis.js';
import { AXIS_ID_FILTERS } from '../modules/layout/axis.js';
import { getAvailableAxes } from '../modules/layoutUiRules/index.js';
import { DIMENSION_ID_DATA, getPredefinedDimensionProp, DIMENSION_PROP_NO_ITEMS } from '../modules/predefinedDimensions.js';
import { getDisplayNameByVisType } from '../modules/visTypes.js';
import { getLayoutTypeByVisType } from '../modules/visTypeToLayoutType.js';
const getAxisItemLabel = (axisName, isDimensionInLayout) => isDimensionInLayout ? i18n.t('Move to {{axisName}}', {
  axisName
}) : i18n.t('Add to {{axisName}}', {
  axisName
});
const getDividerItem = key => /*#__PURE__*/React.createElement(MenuDivider, {
  dense: true,
  key: key
});
const getUnavailableLabel = visType => i18n.t('Not available for {{visualizationType}}', {
  visualizationType: getDisplayNameByVisType(visType)
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
  const isDimensionInLayout = !!currentAxisId;

  // add/move to axis item
  const availableAxisIds = getAvailableAxes(visType);
  const applicableAxisIds = availableAxisIds.filter(axisId => axisId !== currentAxisId);
  const assignedCategoriesAvailableDestinations = getAvailableAxes(visType).filter(axis => axis !== AXIS_ID_FILTERS);
  const assignedCategoriesItemLabel = isAssignedCategoriesInLayout ? i18n.t('Remove Assigned Categories') : i18n.t('Add Assigned Categories');
  const getRemoveMenuItem = onClick => /*#__PURE__*/React.createElement(MenuItem, {
    key: "remove-menu-item",
    onClick: onClick,
    label: i18n.t('Remove'),
    dataTest: `${dataTest}-item-remove-${dimensionId}`
  });

  // Assigned categories
  if (dimensionId === DIMENSION_ID_DATA && assignedCategoriesItemHandler) {
    if (assignedCategoriesAvailableDestinations.length) {
      if (!isAssignedCategoriesInLayout) {
        menuItems.push( /*#__PURE__*/React.createElement(MenuItem, {
          label: assignedCategoriesItemLabel,
          key: `assigned-categories-item-${dimensionId}`,
          dataTest: `${dataTest}-item-co-menu`
        }, assignedCategoriesAvailableDestinations.map(destination => /*#__PURE__*/React.createElement(MenuItem, {
          key: destination,
          onClick: () => {
            assignedCategoriesItemHandler(destination);
            onClose();
          },
          label: getAxisItemLabel(getAxisNameByLayoutType(destination, getLayoutTypeByVisType(visType))),
          dataTest: `${dataTest}-item-action-co-to-${destination}`
        }))));
      } else {
        menuItems.push( /*#__PURE__*/React.createElement(MenuItem, {
          key: `assigned-categories-item-${dimensionId}`,
          onClick: () => {
            assignedCategoriesItemHandler();
            onClose();
          },
          label: assignedCategoriesItemLabel,
          dataTest: `${dataTest}-item-remove-co`
        }));
      }
    } else {
      menuItems.push( /*#__PURE__*/React.createElement(Tooltip, {
        key: `assigned-categories-item-${dimensionId}`,
        content: getUnavailableLabel(visType),
        "aria-label": "disabled",
        classes: classes
      }, /*#__PURE__*/React.createElement(MenuItem, {
        disabled: true,
        dense: true,
        label: assignedCategoriesItemLabel,
        dataTest: `${dataTest}-item-co-menu`
      })));
    }
  }

  // divider
  menuItems.length && menuItems.push(getDividerItem('assigned-categories-divider'));
  menuItems.push(...applicableAxisIds.map(axisId => /*#__PURE__*/React.createElement(MenuItem, {
    key: `${dimensionId}-to-${axisId}`,
    onClick: () => {
      axisItemHandler({
        dimensionId,
        axisId,
        numberOfDimensionItems,
        requireItems: !getPredefinedDimensionProp(dimensionId, DIMENSION_PROP_NO_ITEMS),
        isDimensionInLayout
      });
      onClose();
    },
    label: getAxisItemLabel(getAxisNameByLayoutType(axisId, getLayoutTypeByVisType(visType)), isDimensionInLayout),
    dataTest: `${dataTest}-item-action-${dimensionId}-to-${axisId}`
  })));

  // remove item
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
  return /*#__PURE__*/React.createElement(FlyoutMenu, {
    dense: true,
    dataTest: dataTest
  }, menuItems);
};
DimensionMenu.propTypes = {
  axisItemHandler: PropTypes.func.isRequired,
  numberOfDimensionItems: PropTypes.number.isRequired,
  removeItemHandler: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  assignedCategoriesItemHandler: PropTypes.func,
  classes: PropTypes.object,
  currentAxisId: PropTypes.string,
  dataTest: PropTypes.string,
  dimensionId: PropTypes.string,
  isAssignedCategoriesInLayout: PropTypes.bool,
  visType: PropTypes.string
};
export default DimensionMenu;