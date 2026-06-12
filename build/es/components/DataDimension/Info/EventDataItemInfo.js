import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { DIMENSION_TYPE_PROGRAM_DATA_ELEMENT } from '../../../modules/dataTypes.js';
import { valueTypeDisplayNames } from '../../../modules/valueTypes.js';
import { getCommonFields, renderLegendSets, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const programDataElementQuery = {
  programDataElement: {
    resource: 'dataElements',
    id: ({
      id
    }) => id,
    params: ({
      displayNameProp
    }) => ({
      fields: `${getCommonFields(displayNameProp)},aggregationType,dimensionItemType,legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant`
    })
  }
};
const programAttributeQuery = {
  programAttribute: {
    resource: 'trackedEntityAttributes',
    id: ({
      id
    }) => id,
    params: ({
      displayNameProp
    }) => ({
      fields: `${getCommonFields(displayNameProp)},aggregationType,dimensionItemType,legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant`
    })
  }
};
export const EventDataItemInfo = ({
  type,
  id,
  displayNameProp
}) => {
  const {
    loading,
    error,
    data
  } = useDataQuery(type === DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? programDataElementQuery : programAttributeQuery, {
    // strip program id (if present)
    variables: {
      id: id.split('.').reverse()[0],
      displayNameProp
    }
  });
  const renderInfoTable = data => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    dataType: type,
    data: data,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, type === DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? i18n.t('Data element') : i18n.t('Tracked entity attribute'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Value type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, valueTypeDisplayNames[data === null || data === void 0 ? void 0 : data.valueType])), (data === null || data === void 0 ? void 0 : data.optionSet) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Option set')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.optionSet.displayName)), Boolean(data === null || data === void 0 ? void 0 : data.legendSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Legend set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, renderLegendSets(data.legendSets)))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
  return type === DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? renderInfoTable(data === null || data === void 0 ? void 0 : data.programDataElement) : renderInfoTable(data === null || data === void 0 ? void 0 : data.programAttribute);
};
EventDataItemInfo.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};