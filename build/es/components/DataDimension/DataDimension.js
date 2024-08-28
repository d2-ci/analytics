import { useConfig } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { dataTypeMap, DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM } from '../../modules/dataTypes.js';
import { DIMENSION_ID_DATA } from '../../modules/predefinedDimensions.js';
import ItemSelector from './ItemSelector.js';
const DataDimensionCtx = /*#__PURE__*/createContext({});
const DataDimension = _ref => {
  let {
    onSelect,
    selectedDimensions,
    displayNameProp,
    enabledDataTypes,
    infoBoxMessage,
    onCalculationSave,
    visType
  } = _ref;
  const {
    serverVersion
  } = useConfig();
  const filterDataTypesByVersion = useCallback(dataTypes => dataTypes.filter(_ref2 => {
    let {
      id
    } = _ref2;
    return (
      // Calculations only available from 2.40
      id !== DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM || serverVersion.minor >= 40
    );
  }), [serverVersion.minor]);
  const [dataTypes, setDataTypes] = useState(filterDataTypesByVersion(enabledDataTypes || Object.values(dataTypeMap)));
  const onSelectItems = selectedItem => onSelect({
    dimensionId: DIMENSION_ID_DATA,
    items: selectedItem.map(item => ({
      id: item.value,
      name: item.label,
      type: item.type,
      expression: item.expression
    }))
  });
  useEffect(() => enabledDataTypes && setDataTypes(filterDataTypesByVersion(enabledDataTypes)), [enabledDataTypes, filterDataTypesByVersion]);
  return /*#__PURE__*/React.createElement(DataDimensionCtx.Provider, {
    value: {
      visType
    }
  }, /*#__PURE__*/React.createElement(ItemSelector, {
    selectedItems: selectedDimensions.map(item => ({
      value: item.id,
      label: item.name,
      isActive: item.isActive,
      type: item.type,
      expression: item.expression,
      access: item.access
    })),
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    infoBoxMessage: infoBoxMessage,
    dataTest: 'data-dimension',
    dataTypes: dataTypes,
    onEDISave: onCalculationSave
  }));
};
DataDimension.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  selectedDimensions: PropTypes.arrayOf(PropTypes.shape({
    expression: PropTypes.string,
    id: PropTypes.string,
    isActive: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  enabledDataTypes: PropTypes.array,
  infoBoxMessage: PropTypes.string,
  visType: PropTypes.string,
  onCalculationSave: PropTypes.func
};
DataDimension.defaultProps = {
  selectedDimensions: [],
  onSelect: Function.prototype
};
export const useDataDimensionContext = () => useContext(DataDimensionCtx);
export default DataDimension;