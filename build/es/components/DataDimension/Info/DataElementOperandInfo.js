import _JSXStyle from "styled-jsx/style";
import { useConfig, useDataEngine } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import i18n from '../../../locales/index.js';
import { capitalizeText, getCommonFields, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const dataElementOperandsQuery = {
  dataElementOperands: {
    resource: 'dataElementOperands',
    params: _ref => {
      let {
        displayNameProp,
        id
      } = _ref;
      return {
        filter: `id:eq:${id}`,
        fields: [`${getCommonFields(displayNameProp)}`, 'categoryOptionCombo[categoryCombo[categories[displayName,id],displayName],displayName]', `dataElement[${getCommonFields(displayNameProp)},aggregationType,categoryCombo[displayName,categories[id,displayName]],dataElementGroups[id,displayName],dataSetElements[dataSet[id,displayName]],legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant]`, 'displayName,id']
      };
    }
  }
};
export const DataElementOperandInfo = _ref2 => {
  let {
    id,
    displayNameProp
  } = _ref2;
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const {
    baseUrl,
    apiVersion
  } = useConfig();
  const engine = useDataEngine();
  const fetchData = useCallback(async () => {
    const {
      dataElementOperands
    } = await engine.query(dataElementOperandsQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    const dataElementOperand = dataElementOperands.dataElementOperands[0]

    // copy some common fields from dataElement
    ;
    ['code', 'created', 'createdBy', 'displayDescription', 'lastUpdated'].forEach(key => dataElementOperand[key] = dataElementOperand.dataElement[key]);

    // inject href as it is not returned from the API
    dataElementOperand.href = new URL(`${dataElementOperandsQuery.dataElementOperands.resource}?${new URLSearchParams({
      filter: `id:eq:${id}`
    })}`, new URL(`api/${apiVersion}/`, `${baseUrl}/`)).href;
    setData({
      dataElementOperand
    });
    setLoading(false);
  }, [displayNameProp, engine, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.dataElementOperand,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Data set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataSetElements.length) === 1 ? data.dataElementOperand.dataElement.dataSetElements[0].dataSet.displayName : /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataSetElements.map(_ref3 => {
    let {
      dataSet
    } = _ref3;
    return /*#__PURE__*/React.createElement("li", {
      key: dataSet.id,
      className: `jsx-${styles.__hash}`
    }, dataSet.displayName);
  })))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Zero is significant')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.dataElementOperand.dataElement.zeroIsSignificant ? i18n.t('True') : i18n.t('False'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Value type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, capitalizeText(data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.valueType))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Aggregation type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.aggregationType)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Category combo')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("details", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("summary", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.displayName), /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.categories.map(_ref4 => {
    let {
      id,
      displayName
    } = _ref4;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))))), (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.optionSet) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Option set')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.dataElementOperand.dataElement.optionSet.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Group membership')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataElementGroups.length) === 1 ? data.dataElementOperand.dataElement.dataElementGroups[0].displayName : /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataElementGroups.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  })))), Boolean(data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.legendSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Legend set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.dataElementOperand.dataElement.legendSets.length === 1 ? data.dataElementOperand.dataElement.legendSets[0].displayName : /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data.dataElementOperand.dataElement.legendSets.map(_ref6 => {
    let {
      id,
      displayName
    } = _ref6;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  })))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Category option name')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Category combo name')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.categoryCombo.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Categories name')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.categoryCombo.categories.map(_ref7 => {
    let {
      id,
      displayName
    } = _ref7;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataElementOperandInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};