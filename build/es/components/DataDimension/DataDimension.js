function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useConfig } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { dataTypeMap, DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM } from '../../modules/dataTypes.js';
import { DIMENSION_ID_DATA } from '../../modules/predefinedDimensions.js';
import { InfoPopover } from './Info/InfoPopover.js';
import { ItemOptionsSelector } from './ItemOptionsSelector/ItemOptionsSelector.js';
import ItemSelector from './ItemSelector/ItemSelector.js';
const DataDimensionCtx = /*#__PURE__*/createContext({});
const SELECTED_DIMENSIONS_PROP_DEFAULT = [];
const DataDimension = ({
  currentUser,
  onSelect = Function.prototype,
  selectedDimensions = SELECTED_DIMENSIONS_PROP_DEFAULT,
  displayNameProp,
  enabledDataTypes,
  infoBoxMessage,
  onCalculationSave,
  visType,
  height,
  heightCalculation
}) => {
  const {
    serverVersion
  } = useConfig();
  const itemsRef = useRef(new Map());
  const filterDataTypesByVersion = useCallback(dataTypes => dataTypes.filter(({
    id
  }) =>
  // Calculations only available from 2.40
  id !== DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM || serverVersion.minor >= 40), [serverVersion.minor]);
  const [dataTypes, setDataTypes] = useState(filterDataTypesByVersion(enabledDataTypes || Object.values(dataTypeMap)));
  const supportsEDI = dataTypes.map(({
    id
  }) => id).includes(DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM);
  const [currentCalculation, setCurrentCalculation] = useState();
  const [currentDataItem, setCurrentDataItem] = useState();
  const [infoDataItem, setInfoDataItem] = useState();
  const selectedItems = useMemo(() => selectedDimensions.map(item => ({
    value: item.id,
    label: item.name,
    isActive: item.isActive,
    type: item.type,
    optionSetId: item.optionSetId,
    expression: item.expression,
    access: item.access
  })), [selectedDimensions]);
  const onSelectItems = selectedItem => onSelect({
    dimensionId: DIMENSION_ID_DATA,
    items: selectedItem.map(item => ({
      id: item.value,
      name: item.label,
      type: item.type,
      optionSetId: item.optionSetId,
      expression: item.expression
    }))
  });
  useEffect(() => enabledDataTypes && setDataTypes(filterDataTypesByVersion(enabledDataTypes)), [enabledDataTypes, filterDataTypesByVersion]);
  const onEditClick = dataItem => {
    var _dataItem$access;
    if (dataItem.type === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && !(((_dataItem$access = dataItem.access) === null || _dataItem$access === void 0 ? void 0 : _dataItem$access.write) === false) && supportsEDI) {
      // calculation
      setCurrentCalculation({
        id: dataItem.value,
        name: dataItem.label,
        expression: dataItem.expression
      });
    } else if (dataItem.optionSetId) {
      setCurrentDataItem({
        id: dataItem.value,
        name: dataItem.label,
        type: dataItem.type,
        optionSetId: dataItem.optionSetId
      });
    }
  };
  return /*#__PURE__*/React.createElement(DataDimensionCtx.Provider, {
    value: {
      visType,
      currentUser
    }
  }, /*#__PURE__*/React.createElement(ItemSelector, {
    selectedItems: selectedItems,
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    infoBoxMessage: infoBoxMessage,
    dataTest: 'data-dimension',
    dataTypes: dataTypes,
    itemsRef: itemsRef,
    supportsEDI: supportsEDI,
    onEDISave: onCalculationSave,
    isOptionViewMode: Boolean(currentDataItem),
    currentCalculation: currentCalculation,
    setCurrentCalculation: setCurrentCalculation,
    infoDataItem: infoDataItem,
    setInfoDataItem: setInfoDataItem,
    onEditClick: onEditClick,
    height: height,
    heightCalculation: heightCalculation
  }), currentDataItem && /*#__PURE__*/React.createElement(ItemOptionsSelector, _extends({}, currentDataItem, {
    selectedItems: selectedItems,
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    dataTest: 'data-dimension',
    itemsRef: itemsRef,
    infoDataItem: infoDataItem,
    setInfoDataItem: setInfoDataItem,
    onClose: () => setCurrentDataItem(),
    onEditClick: onEditClick,
    height: height
  })), infoDataItem && /*#__PURE__*/React.createElement(InfoPopover, {
    dataTest: 'data-dimension-info',
    item: infoDataItem,
    reference: itemsRef.current.get(infoDataItem.id),
    onClose: () => setInfoDataItem(),
    displayNameProp: displayNameProp
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
  currentUser: PropTypes.object,
  enabledDataTypes: PropTypes.array,
  height: PropTypes.string,
  heightCalculation: PropTypes.string,
  infoBoxMessage: PropTypes.string,
  visType: PropTypes.string,
  onCalculationSave: PropTypes.func
};
export const useDataDimensionContext = () => useContext(DataDimensionCtx);
export default DataDimension;