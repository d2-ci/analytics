import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { DATA_SETS_CONSTANTS } from '../../modules/dataSets.js';
import { DIMENSION_TYPE_ALL } from '../../modules/dataTypes.js';
import styles from './styles/MetricSelector.style.js';
export const MetricSelector = _ref => {
  let {
    currentValue,
    onChange,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "metric-container"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    label: i18n.t('Metric type'),
    selected: currentValue || DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true,
    dataTest: dataTest
  }, /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: DIMENSION_TYPE_ALL,
    key: DIMENSION_TYPE_ALL,
    label: i18n.t('All metrics'),
    dataTest: "".concat(dataTest, "-option-").concat(DIMENSION_TYPE_ALL)
  }), DATA_SETS_CONSTANTS.map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: option.id,
    key: option.id,
    label: option.getName(),
    dataTest: "".concat(dataTest, "-option-").concat(option.id)
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
MetricSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
  dataTest: PropTypes.string
};
export default MetricSelector;