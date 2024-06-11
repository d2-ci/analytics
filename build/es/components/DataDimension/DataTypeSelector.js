import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { DIMENSION_TYPE_ALL, dataTypeMap } from '../../modules/dataTypes.js';
import { getDisplayNameByVisType } from '../../modules/visTypes.js';
import { useDataDimensionContext } from './DataDimension.js';
import styles from './styles/DataTypeSelector.style.js';
const DataTypeSelector = _ref => {
  let {
    currentDataType,
    dataTypes,
    onChange,
    dataTest
  } = _ref;
  const {
    visType
  } = useDataDimensionContext();
  const label = i18n.t('Data Type');
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "container"
  }, dataTypes.length === 1 ? /*#__PURE__*/React.createElement(SingleSelectField, {
    label: label,
    dataTest: dataTest,
    selected: dataTypes[0].id,
    onChange: ref => onChange(ref.selected),
    dense: true,
    disabled: true,
    helpText: visType ? i18n.t('Only {{dataType}} can be used in {{visType}}', {
      dataType: dataTypeMap[dataTypes[0].id].getName(),
      visType: getDisplayNameByVisType(visType)
    }) : ''
  }, dataTypes.map(type => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: `${dataTest}-option-${type.id}`
  }))) : /*#__PURE__*/React.createElement(SingleSelectField, {
    label: label,
    dataTest: dataTest,
    selected: currentDataType || DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: DIMENSION_TYPE_ALL,
    key: DIMENSION_TYPE_ALL,
    label: i18n.t('All types'),
    dataTest: `${dataTest}-option-all`
  }), dataTypes.map(type => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: `${dataTest}-option-${type.id}`
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataTypeSelector.propTypes = {
  currentDataType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  dataTypes: PropTypes.array
};
export default DataTypeSelector;