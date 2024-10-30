import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { getCommonFields, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const indicatorQuery = {
  indicator: {
    resource: 'indicators',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: _ref2 => {
      let {
        displayNameProp
      } = _ref2;
      return {
        fields: `${getCommonFields(displayNameProp)},indicatorType[displayName],annualized,numerator,displayNumeratorDescription,denominator,displayDenominatorDescription`
      };
    }
  }
};
export const IndicatorInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = useDataQuery(indicatorQuery, {
    variables: {
      id,
      displayNameProp
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.indicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Indicator type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.type)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Annualized')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.indicator.annualized ? i18n.t('True') : i18n.t('False'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Numerator')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.numerator, ": $", data === null || data === void 0 ? void 0 : data.indicator.displayNumerator)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Denominator')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.denominator, ": $", data === null || data === void 0 ? void 0 : data.indicator.displayDenominator))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
IndicatorInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};