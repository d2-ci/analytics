import _JSXStyle from "styled-jsx/style";
import { useDataMutation, useDataEngine } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { validateIndicatorExpressionMutation } from '../../../api/expression.js';
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
        fields: `${getCommonFields(displayNameProp)},annualized,dataSets[id,displayName],decimals,denominator,displayDenominatorDescription,displayNumeratorDescription,indicatorGroups[id,displayName],indicatorType[displayName,factor],legendSets[id,displayName],numerator`
      };
    }
  }
};
export const IndicatorInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const engine = useDataEngine();
  const [getHumanReadableExpression] = useDataMutation(validateIndicatorExpressionMutation, {
    onError: setError
  });
  const fetchData = useCallback(async () => {
    const {
      indicator
    } = await engine.query(indicatorQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (indicator.denominator) {
      const result = await getHumanReadableExpression({
        expression: indicator.denominator
      });
      if (result !== null && result !== void 0 && result.description) {
        indicator.humanReadableDenominatorExpression = result.description;
      }
    }
    if (indicator.numerator) {
      const result = await getHumanReadableExpression({
        expression: indicator.numerator
      });
      if (result !== null && result !== void 0 && result.description) {
        indicator.humanReadableNumeratorExpression = result.description;
      }
    }
    setData({
      indicator
    });
    setLoading(false);
  }, [displayNameProp, engine, getHumanReadableExpression, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.indicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Numerator description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.displayNumeratorDescription)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Numerator expression')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.indicator.humanReadableNumeratorExpression ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data.indicator.humanReadableNumeratorExpression) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Denominator description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.displayDenominatorDescription)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Denominator expression')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.indicator.humanReadableDenominatorExpression ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data.indicator.humanReadableDenominatorExpression) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Annualized')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.indicator.annualized ? i18n.t('Yes') : i18n.t('No'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Indicator type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${data === null || data === void 0 ? void 0 : data.indicator.indicatorType.displayName}, ${data === null || data === void 0 ? void 0 : data.indicator.indicatorType.factor}`)), (data === null || data === void 0 ? void 0 : data.indicator.decimals) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Decimals in output')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.indicator.decimals)), Boolean(data === null || data === void 0 ? void 0 : data.indicator.dataSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Data set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.indicator.dataSets.length === 1 ? data.indicator.dataSets[0].displayName : /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data.indicator.dataSets.map(_ref4 => {
    let {
      id,
      displayName
    } = _ref4;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Group membership')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.indicator.indicatorGroups.length) === 1 ? data.indicator.indicatorGroups[0].displayName : /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.indicatorGroups.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))))), Boolean(data === null || data === void 0 ? void 0 : data.indicator.legendSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Legend set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.indicator.legendSets.length === 1 ? data.indicator.legendSets[0].displayName : /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data.indicator.legendSets.map(_ref6 => {
    let {
      id,
      displayName
    } = _ref6;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  })))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
IndicatorInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};