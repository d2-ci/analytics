import _JSXStyle from "styled-jsx/style";
import { SingleSelectField, InputField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import styles from './styles/PeriodFilter.style.js';
import { getFixedPeriodsOptions } from './utils/fixedPeriods.js';
import { filterPeriodTypesById } from './utils/index.js';
const FixedPeriodFilter = _ref => {
  let {
    allowedPeriodTypes,
    excludedPeriodTypes,
    currentPeriodType,
    currentYear,
    onSelectPeriodType,
    onSelectYear,
    dataTest
  } = _ref;
  const onlyAllowedTypeIsSelected = Array.isArray(allowedPeriodTypes) && allowedPeriodTypes.length === 1 && allowedPeriodTypes[0] === currentPeriodType;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "leftSection"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    label: i18n.t('Period type'),
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onSelectPeriodType(selected);
    },
    dense: true,
    selected: currentPeriodType,
    disabled: onlyAllowedTypeIsSelected,
    className: "filterElement",
    dataTest: `${dataTest}-period-type`
  }, (allowedPeriodTypes ? getFixedPeriodsOptions().filter(option => allowedPeriodTypes.some(type => type === option.id)) : filterPeriodTypesById(getFixedPeriodsOptions(), excludedPeriodTypes)).map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
    key: option.id,
    value: option.id,
    label: option.name,
    dataTest: `${dataTest}-period-type-option-${option.id}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "rightSection"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Year'),
    className: "filterElement",
    type: "number",
    placeholder: i18n.t('Select year'),
    value: currentYear,
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return onSelectYear(value);
    },
    dense: true,
    dataTest: `${dataTest}-year`
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
FixedPeriodFilter.defaultProps = {
  excludedPeriodTypes: []
};
FixedPeriodFilter.propTypes = {
  currentPeriodType: PropTypes.string.isRequired,
  currentYear: PropTypes.string.isRequired,
  onSelectPeriodType: PropTypes.func.isRequired,
  onSelectYear: PropTypes.func.isRequired,
  allowedPeriodTypes: PropTypes.arrayOf(PropTypes.string),
  dataTest: PropTypes.string,
  excludedPeriodTypes: PropTypes.arrayOf(PropTypes.string)
};
export default FixedPeriodFilter;