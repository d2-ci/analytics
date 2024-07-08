import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { TOTALS, DETAIL } from '../../modules/dataTypes.js';
import styles from './styles/DetailSelector.style.js';
const getOptions = () => ({
  [TOTALS]: i18n.t('Totals only'),
  [DETAIL]: i18n.t('Details only')
});
export const DetailSelector = _ref => {
  let {
    currentValue,
    onChange,
    dataTest
  } = _ref;
  const options = getOptions();
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "detail-container"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    dataTest: dataTest,
    label: i18n.t('Disaggregation'),
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, Object.entries(options).map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: option[0],
    key: option[0],
    label: option[1],
    dataTest: `${dataTest}-option-${option[0]}`
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DetailSelector.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string
};
export default DetailSelector;