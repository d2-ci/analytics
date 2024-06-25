import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { DIMENSION_TYPE_ALL, dataTypeMap as dataTypes } from '../../modules/dataTypes.js';
import styles from './styles/DataTypeSelector.style.js';

const DataTypeSelector = _ref => {
  var _dataTypes$currentDat;

  let {
    currentDataType,
    onChange,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "container"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    label: i18n.t('Data Type'),
    dataTest: dataTest,
    selected: ((_dataTypes$currentDat = dataTypes[currentDataType]) === null || _dataTypes$currentDat === void 0 ? void 0 : _dataTypes$currentDat.id) || DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: DIMENSION_TYPE_ALL,
    key: DIMENSION_TYPE_ALL,
    label: i18n.t('All types'),
    dataTest: "".concat(dataTest, "-option-all")
  }), Object.values(dataTypes).map(type => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: "".concat(dataTest, "-option-").concat(type.id)
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

DataTypeSelector.propTypes = {
  currentDataType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string
};
export default DataTypeSelector;