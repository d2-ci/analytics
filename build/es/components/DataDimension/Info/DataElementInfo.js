import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { valueTypeDisplayNames } from '../../../modules/valueTypes.js';
import { getCommonFields, renderDataSets, renderLegendSets, renderGroupMemberships, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const dataElementQuery = {
  dataElement: {
    resource: 'dataElements',
    id: ({
      id
    }) => id,
    params: ({
      displayNameProp
    }) => ({
      fields: `${getCommonFields(displayNameProp)},aggregationType,categoryCombo[displayName,categories[id,displayName]],dataElementGroups[id,displayName],dataSetElements[dataSet[id,displayName]],legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant`
    })
  }
};
export const DataElementInfo = ({
  type,
  id,
  displayNameProp
}) => {
  const {
    loading,
    error,
    data
  } = useDataQuery(dataElementQuery, {
    variables: {
      id,
      displayNameProp
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.dataElement,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Data set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElement.dataSetElements) && renderDataSets(data.dataElement.dataSetElements.map(({
    dataSet
  }) => dataSet)))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Zero is significant')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.dataElement.zeroIsSignificant ? i18n.t('True') : i18n.t('False'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Value type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, valueTypeDisplayNames[data === null || data === void 0 ? void 0 : data.dataElement.valueType])), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Aggregation type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.aggregationType)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Category combo')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElement.categoryCombo.displayName) === 'default' ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')) : /*#__PURE__*/React.createElement("details", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("summary", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.categoryCombo.displayName), /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.categoryCombo.categories.map(({
    id,
    displayName
  }) => /*#__PURE__*/React.createElement("li", {
    key: id,
    className: `jsx-${styles.__hash}`
  }, displayName)))))), (data === null || data === void 0 ? void 0 : data.dataElement.optionSet) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Option set')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.dataElement.optionSet.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Group membership')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElement.dataElementGroups) && renderGroupMemberships(data.dataElement.dataElementGroups))), Boolean(data === null || data === void 0 ? void 0 : data.dataElement.legendSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Legend set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, renderLegendSets(data.dataElement.legendSets)))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataElementInfo.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};