import _JSXStyle from "styled-jsx/style";
import { useConfig, useDataMutation, useDataEngine } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { validateIndicatorExpressionMutation } from '../../../api/expression.js';
import i18n from '../../../locales/index.js';
import { getCommonFields, renderHumanReadableExpression, InfoTable } from './InfoTable.js';
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
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [expressionError, setExpressionError] = useState();
  const [loading, setLoading] = useState(true);
  const {
    baseUrl,
    apiVersion
  } = useConfig();
  const engine = useDataEngine();
  const [getHumanReadableExpression] = useDataMutation(validateIndicatorExpressionMutation, {
    onError: setExpressionError
  });
  const fetchData = useCallback(async () => {
    const {
      calculation
    } = await engine.query(calculationQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (calculation.expression) {
      const result = await getHumanReadableExpression({
        expression: calculation.expression
      });
      if (result) {
        calculation.humanReadableExpression = result;
      }
    }

    // inject href as it is not returned from the API
    calculation.href = new URL(`${calculationQuery.calculation.resource}/${id}`, new URL(`api/${apiVersion}/`, baseUrl === '..' ? window.location.href.split('dhis-web-data-visualizer/')[0] : `${baseUrl}/`)).href;
    setData({
      calculation
    });
    setLoading(false);
  }, [displayNameProp, engine, getHumanReadableExpression, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.calculation,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Expression description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.calculation.humanReadableExpression ? renderHumanReadableExpression(data.calculation.humanReadableExpression) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, expressionError ? i18n.t('Error loading value') : i18n.t('None'))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
CalculationInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};