"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _organisationUnits = require("../../api/organisationUnits.js");
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _list = require("../../modules/list.js");
var _index2 = require("../../modules/ouIdHelper/index.js");
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _OrgUnitDimensionStyle = _interopRequireDefault(require("./styles/OrgUnitDimension.style.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DYNAMIC_ORG_UNITS = [_index2.USER_ORG_UNIT, _index2.USER_ORG_UNIT_CHILDREN, _index2.USER_ORG_UNIT_GRANDCHILDREN];
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
  const [ouLevels, setOuLevels] = (0, _react.useState)([]);
  const [ouGroups, setOuGroups] = (0, _react.useState)([]);
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const onSelectItems = selectedItem => {
    const {
      id,
      checked,
      displayName,
      path
    } = selectedItem;
    let result = [...selected];
    if (checked && DYNAMIC_ORG_UNITS.includes(id)) {
      result = [...result.filter(item => DYNAMIC_ORG_UNITS.includes(item.id)), {
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
      dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
      items: result
    });
  };
  const clearSelection = () => onSelect({
    dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
    items: []
  });
  (0, _react.useEffect)(() => {
    const doFetchOuLevels = async () => {
      const result = await (0, _organisationUnits.apiFetchOrganisationUnitLevels)(dataEngine);
      result.sort((a, b) => a.level > b.level ? 1 : -1);
      setOuLevels(result);
    };
    const doFetchOuGroups = async () => {
      const result = await (0, _organisationUnits.apiFetchOrganisationUnitGroups)(dataEngine, displayNameProp);
      setOuGroups(result);
    };
    !hideLevelSelect && doFetchOuLevels();
    !hideGroupSelect && doFetchOuGroups();
  }, [dataEngine, hideLevelSelect, hideGroupSelect, displayNameProp]);
  const onLevelChange = ids => {
    const items = ids.map(id => ({
      id: _index2.ouIdHelper.addLevelPrefix(id),
      name: ouLevels.find(level => level.id === id).displayName
    }));
    onSelect({
      dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
      items: [...selected.filter(ou => !_index2.ouIdHelper.hasLevelPrefix(ou.id)), ...items]
    });
  };
  const onGroupChange = ids => {
    const items = ids.map(id => ({
      id: _index2.ouIdHelper.addGroupPrefix(id),
      name: ouGroups.find(group => group.id === id).displayName
    }));
    onSelect({
      dimensionId: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
      items: [...selected.filter(ou => !_index2.ouIdHelper.hasGroupPrefix(ou.id)), ...items]
    });
  };
  const getSummary = () => {
    let summary;
    if (selected.length) {
      const numberOfOrgUnits = selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !_index2.ouIdHelper.hasLevelPrefix(item.id) && !_index2.ouIdHelper.hasGroupPrefix(item.id)).length;
      const numberOfLevels = selected.filter(item => _index2.ouIdHelper.hasLevelPrefix(item.id)).length;
      const numberOfGroups = selected.filter(item => _index2.ouIdHelper.hasGroupPrefix(item.id)).length;
      const userOrgUnits = selected.filter(item => DYNAMIC_ORG_UNITS.includes(item.id));
      const parts = [];
      if (numberOfOrgUnits) {
        parts.push(_index.default.t('{{count}} org units', {
          count: numberOfOrgUnits,
          defaultValue: '{{count}} org unit',
          defaultValue_plural: '{{count}} org units'
        }));
      }
      if (numberOfLevels) {
        parts.push(_index.default.t('{{count}} levels', {
          count: numberOfLevels,
          defaultValue: '{{count}} level',
          defaultValue_plural: '{{count}} levels'
        }));
      }
      if (numberOfGroups) {
        parts.push(_index.default.t('{{count}} groups', {
          count: numberOfGroups,
          defaultValue: '{{count}} group',
          defaultValue_plural: '{{count}} groups'
        }));
      }
      userOrgUnits.forEach(orgUnit => {
        parts.push(orgUnit.name || orgUnit.displayName);
      });
      summary = _index.default.t('Selected: {{commaSeparatedListOfOrganisationUnits}}', {
        keySeparator: '>',
        nsSeparator: '|',
        commaSeparatedListOfOrganisationUnits: (0, _list.formatList)(parts)
      });
    } else {
      summary = _index.default.t('Nothing selected');
    }
    return summary;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "container"
  }, !hideUserOrgUnits && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "userOrgUnitsWrapper"
  }, /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: _index.default.t('User organisation unit'),
    checked: selected.some(item => item.id === _index2.USER_ORG_UNIT),
    onChange: _ref2 => {
      let {
        checked
      } = _ref2;
      return onSelectItems({
        id: _index2.USER_ORG_UNIT,
        checked,
        displayName: _index.default.t('User organisation unit')
      });
    },
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: _index.default.t('User sub-units'),
    checked: selected.some(item => item.id === _index2.USER_ORG_UNIT_CHILDREN),
    onChange: _ref3 => {
      let {
        checked
      } = _ref3;
      return onSelectItems({
        id: _index2.USER_ORG_UNIT_CHILDREN,
        checked,
        displayName: _index.default.t('User sub-units')
      });
    },
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: _index.default.t('User sub-x2-units'),
    checked: selected.some(item => item.id === _index2.USER_ORG_UNIT_GRANDCHILDREN),
    onChange: _ref4 => {
      let {
        checked
      } = _ref4;
      return onSelectItems({
        id: _index2.USER_ORG_UNIT_GRANDCHILDREN,
        checked,
        displayName: _index.default.t('User sub-x2-units')
      });
    },
    dense: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + ((0, _classnames.default)('orgUnitTreeWrapper', {
      disabled: selected.some(item => DYNAMIC_ORG_UNITS.includes(item.id))
    }) || "")
  }, /*#__PURE__*/_react.default.createElement(_ui.OrganisationUnitTree, {
    roots: roots,
    initiallyExpanded: [...(roots.length === 1 ? [`/${roots[0]}`] : []), ...selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !_index2.ouIdHelper.hasLevelPrefix(item.id) && !_index2.ouIdHelper.hasGroupPrefix(item.id)).map(item => item.path.substring(0, item.path.lastIndexOf('/'))).filter(path => path)],
    selected: selected.filter(item => !DYNAMIC_ORG_UNITS.includes(item.id) && !_index2.ouIdHelper.hasLevelPrefix(item.id) && !_index2.ouIdHelper.hasGroupPrefix(item.id)).map(item => item.path),
    onChange: onSelectItems,
    dataTest: 'org-unit-tree'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + ((0, _classnames.default)('selectsWrapper', {
      disabled: selected.some(item => DYNAMIC_ORG_UNITS.includes(item.id)),
      hidden: hideLevelSelect && hideGroupSelect
    }) || "")
  }, !hideLevelSelect && /*#__PURE__*/_react.default.createElement(_ui.MultiSelect, {
    selected: ouLevels.length ? selected.filter(item => _index2.ouIdHelper.hasLevelPrefix(item.id)).map(item => _index2.ouIdHelper.removePrefix(item.id)) : [],
    onChange: _ref5 => {
      let {
        selected
      } = _ref5;
      return onLevelChange(selected);
    },
    placeholder: _index.default.t('Select a level'),
    loading: !ouLevels.length,
    dense: true,
    dataTest: 'org-unit-level-select'
  }, ouLevels.map(level => /*#__PURE__*/_react.default.createElement(_ui.MultiSelectOption, {
    key: level.id,
    value: level.id,
    label: level.displayName,
    dataTest: `org-unit-level-select-option-${level.id}`
  }))), !hideGroupSelect && /*#__PURE__*/_react.default.createElement(_ui.MultiSelect, {
    selected: ouGroups.length ? selected.filter(item => _index2.ouIdHelper.hasGroupPrefix(item.id)).map(item => _index2.ouIdHelper.removePrefix(item.id)) : [],
    onChange: _ref6 => {
      let {
        selected
      } = _ref6;
      return onGroupChange(selected);
    },
    placeholder: _index.default.t('Select a group'),
    loading: !ouGroups.length,
    dense: true,
    dataTest: 'org-unit-group-select'
  }, ouGroups.map(group => /*#__PURE__*/_react.default.createElement(_ui.MultiSelectOption, {
    key: group.id,
    value: group.id,
    label: group.displayName,
    dataTest: `org-unit-group-select-option-${group.id}`
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "summaryWrapper"
  }, warning ? /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "warningWrapper"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconWarningFilled16, {
    color: _ui.colors.red500
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "warningText"
  }, warning)) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "summaryText"
  }, getSummary()), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OrgUnitDimensionStyle.default.__hash}` + " " + "deselectButton"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    onClick: clearSelection,
    disabled: !selected.length
  }, _index.default.t('Deselect all')))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OrgUnitDimensionStyle.default.__hash
  }, _OrgUnitDimensionStyle.default));
};
OrgUnitDimension.defaultProps = {
  hideGroupSelect: false,
  hideLevelSelect: false,
  hideUserOrgUnits: false
};
OrgUnitDimension.propTypes = {
  displayNameProp: _propTypes.default.string,
  hideGroupSelect: _propTypes.default.bool,
  hideLevelSelect: _propTypes.default.bool,
  hideUserOrgUnits: _propTypes.default.bool,
  roots: _propTypes.default.arrayOf(_propTypes.default.string),
  selected: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    path: _propTypes.default.string
  })),
  warning: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = exports.default = OrgUnitDimension;