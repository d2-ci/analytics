import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import styles from './styles/PeriodFilter.style.js';
import { filterPeriodTypesById } from './utils/index.js';
import { getRelativePeriodsOptions } from './utils/relativePeriods.js';
const RelativePeriodFilter = ({
  currentFilter,
  onSelectFilter,
  dataTest,
  excludedPeriodTypes
}) => /*#__PURE__*/React.createElement("div", {
  "data-test": dataTest,
  className: `jsx-${styles.__hash}` + " " + "leftSection"
}, /*#__PURE__*/React.createElement(SingleSelectField, {
  label: i18n.t('Period type'),
  onChange: ({
    selected
  }) => onSelectFilter(selected),
  dense: true,
  selected: currentFilter,
  className: "filterElement",
  dataTest: `${dataTest}-period-type`
}, filterPeriodTypesById(getRelativePeriodsOptions(), excludedPeriodTypes).map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
  key: option.id,
  value: option.id,
  label: option.name,
  dataTest: `${dataTest}-period-type-option-${option.id}`
}))), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
RelativePeriodFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  excludedPeriodTypes: PropTypes.arrayOf(PropTypes.string)
};
export default RelativePeriodFilter;