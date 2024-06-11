import { IconDimensionDataSet16, IconDimensionIndicator16, IconDimensionEventDataItem16, IconDimensionProgramIndicator16 } from '@dhis2/ui';
import React from 'react';
import DataElementIcon from '../assets/DimensionItemIcons/DataElementIcon.js';
import GenericIcon from '../assets/DimensionItemIcons/GenericIcon.js';
import CalculationIcon from './../assets/DimensionItemIcons/CalculationIcon.js';
import { REPORTING_RATE } from './dataSets.js';
import { DIMENSION_TYPE_DATA_ELEMENT, DIMENSION_TYPE_DATA_ELEMENT_OPERAND, DIMENSION_TYPE_DATA_SET, DIMENSION_TYPE_EVENT_DATA_ITEM, DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM, DIMENSION_TYPE_PROGRAM_ATTRIBUTE, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, dataTypeMap as dataTypes, DIMENSION_TYPE_INDICATOR, DIMENSION_TYPE_PROGRAM_INDICATOR } from './dataTypes.js';
export const getTooltipText = _ref => {
  var _dataTypes$type;
  let {
    type,
    expression
  } = _ref;
  if (type === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && expression) {
    return dataTypes[DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM].getItemName();
  }
  switch (type) {
    case DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      return dataTypes[DIMENSION_TYPE_DATA_ELEMENT].getItemName();
    case REPORTING_RATE:
      return dataTypes[DIMENSION_TYPE_DATA_SET].getItemName();
    case DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      return dataTypes[DIMENSION_TYPE_EVENT_DATA_ITEM].getItemName();
    default:
      return (_dataTypes$type = dataTypes[type]) === null || _dataTypes$type === void 0 ? void 0 : _dataTypes$type.getItemName();
  }
};
export const getIcon = type => {
  switch (type) {
    case DIMENSION_TYPE_INDICATOR:
      return /*#__PURE__*/React.createElement(IconDimensionIndicator16, null);
    case DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
    case DIMENSION_TYPE_DATA_ELEMENT:
      return DataElementIcon;
    case REPORTING_RATE:
      return /*#__PURE__*/React.createElement(IconDimensionDataSet16, null);
    case DIMENSION_TYPE_EVENT_DATA_ITEM:
    case DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      return /*#__PURE__*/React.createElement(IconDimensionEventDataItem16, null);
    case DIMENSION_TYPE_PROGRAM_INDICATOR:
      return /*#__PURE__*/React.createElement(IconDimensionProgramIndicator16, null);
    case DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
      return CalculationIcon;
    default:
      return GenericIcon;
  }
};