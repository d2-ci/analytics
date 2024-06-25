import _JSXStyle from "styled-jsx/style";
import { useDataEngine } from '@dhis2/app-runtime';
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { apiFetchGroups } from '../../api/dimensions.js';
import i18n from '../../locales/index.js';
import { dataTypeMap as dataTypes, SUB_GROUP_DETAIL, SUB_GROUP_METRIC } from '../../modules/dataTypes.js';
import { DetailSelector } from './DetailSelector.js';
import { MetricSelector } from './MetricSelector.js';
import styles from './styles/GroupSelector.style.js';

const GroupSelector = _ref => {
  var _dataTypes$dataType, _dataTypes$dataType2, _dataTypes$dataType3, _dataTypes$dataType4, _dataTypes$dataType5, _dataTypes$dataType6, _dataTypes$dataType7;

  let {
    dataType,
    currentGroup,
    onGroupChange,
    dataTest,
    displayNameProp,
    currentSubGroup,
    onSubGroupChange
  } = _ref;
  const dataEngine = useDataEngine();
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const defaultGroup = (_dataTypes$dataType = dataTypes[dataType]) === null || _dataTypes$dataType === void 0 ? void 0 : _dataTypes$dataType.defaultGroup;
  const subGroupType = (_dataTypes$dataType2 = dataTypes[dataType]) === null || _dataTypes$dataType2 === void 0 ? void 0 : _dataTypes$dataType2.subGroup;

  const fetchGroups = async () => {
    setIsLoading(true);
    const result = await apiFetchGroups(dataEngine, dataType, displayNameProp);
    setGroups(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGroups();
  }, [dataType]);
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "container"
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles), /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "group-container"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    label: (_dataTypes$dataType3 = dataTypes[dataType]) === null || _dataTypes$dataType3 === void 0 ? void 0 : _dataTypes$dataType3.getGroupLabel(),
    dataTest: "".concat(dataTest, "-groups-select-field"),
    selected: currentGroup || defaultGroup.id,
    placeholder: !currentGroup && (_dataTypes$dataType4 = dataTypes[dataType]) !== null && _dataTypes$dataType4 !== void 0 && _dataTypes$dataType4.getPlaceholder ? dataTypes[dataType].getPlaceholder() : null,
    onChange: ref => onGroupChange(ref.selected),
    dense: true,
    empty: ((_dataTypes$dataType5 = dataTypes[dataType]) === null || _dataTypes$dataType5 === void 0 ? void 0 : _dataTypes$dataType5.getGroupEmptyLabel()) || i18n.t('No data'),
    loadingText: ((_dataTypes$dataType6 = dataTypes[dataType]) === null || _dataTypes$dataType6 === void 0 ? void 0 : _dataTypes$dataType6.getGroupLoadingLabel()) || i18n.t('Loading'),
    loading: isLoading
  }, (_dataTypes$dataType7 = dataTypes[dataType]) !== null && _dataTypes$dataType7 !== void 0 && _dataTypes$dataType7.defaultGroup ? /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: defaultGroup.id,
    key: defaultGroup.id,
    label: defaultGroup.getName(),
    dataTest: "".concat(dataTest, "-groups-select-field-option-").concat(defaultGroup.id)
  }) : null, !isLoading ? groups.map(item => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: item.id,
    key: item.id,
    label: item.name,
    dataTest: "".concat(dataTest, "-groups-select-field-option-").concat(item.id)
  })) : null)), subGroupType === SUB_GROUP_DETAIL && /*#__PURE__*/React.createElement(DetailSelector, {
    currentValue: currentSubGroup,
    onChange: onSubGroupChange,
    dataTest: "".concat(dataTest, "-sub-group-select-field")
  }), subGroupType === SUB_GROUP_METRIC && /*#__PURE__*/React.createElement(MetricSelector, {
    currentValue: currentSubGroup,
    onChange: onSubGroupChange,
    dataTest: "".concat(dataTest, "-sub-group-select-field")
  }));
};

GroupSelector.propTypes = {
  dataType: PropTypes.string.isRequired,
  displayNameProp: PropTypes.string.isRequired,
  onGroupChange: PropTypes.func.isRequired,
  onSubGroupChange: PropTypes.func.isRequired,
  currentGroup: PropTypes.string,
  currentSubGroup: PropTypes.string,
  dataTest: PropTypes.string
};
export default GroupSelector;