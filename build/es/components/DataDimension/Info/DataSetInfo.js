import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { getCommonFields, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const dataSetQuery = {
  dataSet: {
    resource: 'dataSets',
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
        fields: `${getCommonFields(displayNameProp)},dataSetElements[dataElement[id,displayName]],expiryDays,indicators[id,displayName],periodType,`
      };
    }
  }
};
export const DataSetInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = useDataQuery(dataSetQuery, {
    variables: {
      id,
      displayNameProp
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.dataSet,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Period type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataSet.periodType)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Data elements')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataSet.dataSetElements.length) === 1 ? data.dataSet.dataSetElements[0].dataElement.displayName : /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataSet.dataSetElements.map(_ref4 => {
    let {
      dataElement
    } = _ref4;
    return /*#__PURE__*/React.createElement("li", {
      key: dataElement.id,
      className: `jsx-${styles.__hash}`
    }, dataElement.displayName);
  }))))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Indicators')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataSet.indicators.length) === 1 ? data.dataSet.indicators[0].displayName : (data === null || data === void 0 ? void 0 : data.dataSet.indicators.length) > 1 ? /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data.dataSet.indicators.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Expiry days')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataSet.expiryDays))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataSetInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};