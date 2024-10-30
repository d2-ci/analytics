import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { getCommonFields, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const calculationQuery = {
  calculation: {
    resource: 'expressionDimensionItems',
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
        fields: `${getCommonFields(displayNameProp)},expression`
      };
    }
  }
};
export const CalculationInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = useDataQuery(calculationQuery, {
    variables: {
      id,
      displayNameProp
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.calculation,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Expression')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data === null || data === void 0 ? void 0 : data.calculation.expression))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
CalculationInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};