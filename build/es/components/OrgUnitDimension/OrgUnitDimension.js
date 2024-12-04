import _JSXStyle from "styled-jsx/style";
import { useDataEngine } from '@dhis2/app-runtime';
import { OrganisationUnitTree, Checkbox, MultiSelect, MultiSelectOption, Button, IconWarningFilled16, colors } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { apiFetchOrganisationUnitGroups, apiFetchOrganisationUnitLevels } from '../../api/organisationUnits.js';
import i18n from '../../locales/index.js';
import { formatList } from '../../modules/list.js';
import { ouIdHelper, USER_ORG_UNIT, USER_ORG_UNIT_CHILDREN, USER_ORG_UNIT_GRANDCHILDREN } from '../../modules/ouIdHelper/index.js';
import { DIMENSION_ID_ORGUNIT } from '../../modules/predefinedDimensions.js';
import styles from './styles/OrgUnitDimension.style.js';
const DYNAMIC_ORG_UNITS = [USER_ORG_UNIT, USER_ORG_UNIT_CHILDREN, USER_ORG_UNIT_GRANDCHILDREN];
const OrgUnitDimension = _ref => {
  let {
    roots,
    selected,
    onSelect,
    hideGroupSelect,
    hideLevelSelect,
    hideUserOrgUnits,
    warning,
    displayNameProp
  } = _ref;
  const [ouLevels, setOuLevels] = useState([]);
  const [ouGroups, setOuGroups] = useState([]);
  const dataEngine = useDataEngine();
  const onSelectItems = selectedItem => {
    const {
      id,
      checked,
      displayName,
      path
    } = selectedItem;
    let result = [...selected];
    if (checked && DYNAMIC_ORG_UNITS.includes(id)) {
      result = [...result, {
        id,
        displayName
      }];
    } else if (checked) {
      result.push({
        id,
        path,
        name: displayName
      });
    } else {
      result = [...result.filter(item => item.id !== id)];
    }
    onSelect({
      dimensionId: DIMENSION_ID_ORGUNIT,
      items: result
    });
  };
  const clearSelection = () => onSelect({
    dimensionId: DIMENSION_ID_ORGUNIT,
    items: []
  });
  useEffect(() => {
    const doFetchOuLevels = async () => {
      const result = await apiFetchOrganisationUnitLevels(dataEngine);
      result.sort((a, b) => a.level > b.level ? 1 : -1);
      setOuLevels(result);
    };
    const doFetchOuGroups = async () => {
      const result = await apiFetchOrganisationUnitGroups(dataEngine, displayNameProp);
      setOuGroups(result);
    };
    !hideLevelSelect && doFetchOuLevels();
    !hideGroupSelect && doFetchOuGroups();
  }, [dataEngine, hideLevelSelect, hideGroupSelect, displayNameProp]);
  const onLevelChange = ids => {
    const items = ids.map(id => ({
      id: ouIdHelper.addLevelPrefix(id),
      name: ouLevels.find(level => level.id === id).displayName
    }));
    onSelect({
      dimensionId: DIMENSION_ID_ORGUNIT,
      items: [...selected.filter(ou => !ouIdHelper.hasLevelPrefix(ou.id)), ...items]
    });
  };
  const onGroupChange = ids => {
    const items = ids.map(id => ({
      id: ouIdHelper.addGroupPrefix(id),
      name: ouGroups.find(group => group.id === id).displayName
    }));
    onSelect({
      dimensionId: DIMENSION_ID_ORGUNIT,
      items: [...selected.filter(ou => !ouIdHelper.hasGroupPrefix(ou.id)), ...items]
    });
  };
  const getSummary = () => {
    let summary;
    if (selected.length) {
      const numberOfOrgUnits = selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !ouIdHelper.hasLevelPrefix(item.id) && !ouIdHelper.hasGroupPrefix(item.id)).length;
      const numberOfLevels = selected.filter(item => ouIdHelper.hasLevelPrefix(item.id)).length;
      const numberOfGroups = selected.filter(item => ouIdHelper.hasGroupPrefix(item.id)).length;
      const userOrgUnits = selected.filter(item => DYNAMIC_ORG_UNITS.includes(item.id));
      const parts = [];
      if (numberOfOrgUnits) {
        parts.push(i18n.t('{{count}} org units', {
          count: numberOfOrgUnits,
          defaultValue: '{{count}} org unit',
          defaultValue_plural: '{{count}} org units'
        }));
      }
      if (numberOfLevels) {
        parts.push(i18n.t('{{count}} levels', {
          count: numberOfLevels,
          defaultValue: '{{count}} level',
          defaultValue_plural: '{{count}} levels'
        }));
      }
      if (numberOfGroups) {
        parts.push(i18n.t('{{count}} groups', {
          count: numberOfGroups,
          defaultValue: '{{count}} group',
          defaultValue_plural: '{{count}} groups'
        }));
      }
      userOrgUnits.forEach(orgUnit => {
        parts.push(orgUnit.name || orgUnit.displayName);
      });
      summary = i18n.t('Selected: {{commaSeparatedListOfOrganisationUnits}}', {
        keySeparator: '>',
        nsSeparator: '|',
        commaSeparatedListOfOrganisationUnits: formatList(parts)
      });
    } else {
      summary = i18n.t('Nothing selected');
    }
    return summary;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "container"
  }, !hideUserOrgUnits && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "userOrgUnitsWrapper"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: i18n.t('User organisation unit'),
    checked: selected.some(item => item.id === USER_ORG_UNIT),
    onChange: _ref2 => {
      let {
        checked
      } = _ref2;
      return onSelectItems({
        id: USER_ORG_UNIT,
        checked,
        displayName: i18n.t('User organisation unit')
      });
    },
    dense: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: i18n.t('User sub-units'),
    checked: selected.some(item => item.id === USER_ORG_UNIT_CHILDREN),
    onChange: _ref3 => {
      let {
        checked
      } = _ref3;
      return onSelectItems({
        id: USER_ORG_UNIT_CHILDREN,
        checked,
        displayName: i18n.t('User sub-units')
      });
    },
    dense: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: i18n.t('User sub-x2-units'),
    checked: selected.some(item => item.id === USER_ORG_UNIT_GRANDCHILDREN),
    onChange: _ref4 => {
      let {
        checked
      } = _ref4;
      return onSelectItems({
        id: USER_ORG_UNIT_GRANDCHILDREN,
        checked,
        displayName: i18n.t('User sub-x2-units')
      });
    },
    dense: true
  })), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "orgUnitTreeWrapper"
  }, /*#__PURE__*/React.createElement(OrganisationUnitTree, {
    roots: roots,
    initiallyExpanded: [...(roots.length === 1 ? [`/${roots[0]}`] : []), ...selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !ouIdHelper.hasLevelPrefix(item.id) && !ouIdHelper.hasGroupPrefix(item.id)).map(item => item.path.substring(0, item.path.lastIndexOf('/'))).filter(path => path)],
    selected: selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !ouIdHelper.hasLevelPrefix(item.id) && !ouIdHelper.hasGroupPrefix(item.id)).map(item => item.path),
    onChange: onSelectItems,
    dataTest: 'org-unit-tree'
  })), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('selectsWrapper', {
      hidden: hideLevelSelect && hideGroupSelect
    }) || "")
  }, !hideLevelSelect && /*#__PURE__*/React.createElement(MultiSelect, {
    selected: ouLevels.length ? selected.filter(item => ouIdHelper.hasLevelPrefix(item.id)).map(item => ouIdHelper.removePrefix(item.id)) : [],
    onChange: _ref5 => {
      let {
        selected
      } = _ref5;
      return onLevelChange(selected);
    },
    placeholder: i18n.t('Select a level'),
    loading: !ouLevels.length,
    dense: true,
    dataTest: 'org-unit-level-select'
  }, ouLevels.map(level => /*#__PURE__*/React.createElement(MultiSelectOption, {
    key: level.id,
    value: level.id,
    label: level.displayName,
    dataTest: `org-unit-level-select-option-${level.id}`
  }))), !hideGroupSelect && /*#__PURE__*/React.createElement(MultiSelect, {
    selected: ouGroups.length ? selected.filter(item => ouIdHelper.hasGroupPrefix(item.id)).map(item => ouIdHelper.removePrefix(item.id)) : [],
    onChange: _ref6 => {
      let {
        selected
      } = _ref6;
      return onGroupChange(selected);
    },
    placeholder: i18n.t('Select a group'),
    loading: !ouGroups.length,
    dense: true,
    dataTest: 'org-unit-group-select'
  }, ouGroups.map(group => /*#__PURE__*/React.createElement(MultiSelectOption, {
    key: group.id,
    value: group.id,
    label: group.displayName,
    dataTest: `org-unit-group-select-option-${group.id}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "summaryWrapper"
  }, warning ? /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "warningWrapper"
  }, /*#__PURE__*/React.createElement(IconWarningFilled16, {
    color: colors.red500
  }), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "warningText"
  }, warning)) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "summaryText"
  }, getSummary()), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "deselectButton"
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    onClick: clearSelection,
    disabled: !selected.length
  }, i18n.t('Deselect all')))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OrgUnitDimension.defaultProps = {
  hideGroupSelect: false,
  hideLevelSelect: false,
  hideUserOrgUnits: false
};
OrgUnitDimension.propTypes = {
  displayNameProp: PropTypes.string,
  hideGroupSelect: PropTypes.bool,
  hideLevelSelect: PropTypes.bool,
  hideUserOrgUnits: PropTypes.bool,
  roots: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string
  })),
  warning: PropTypes.string,
  onSelect: PropTypes.func
};
export default OrgUnitDimension;