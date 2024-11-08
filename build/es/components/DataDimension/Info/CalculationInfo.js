import _JSXStyle from "styled-jsx/style";
import { useDataMutation, useDataEngine } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { validateExpressionMutation } from '../../../api/expression.js';
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
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const engine = useDataEngine();
  const [getHumanReadableExpression] = useDataMutation(validateExpressionMutation, {
    onError: setError
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
      if (result !== null && result !== void 0 && result.description) {
        calculation.humanReadableExpression = result.description;
      }
    }
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
  }, i18n.t('Expression description in human readable format')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.calculation.humanReadableExpression) || i18n.t('None')))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
CalculationInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};