import _JSXStyle from "styled-jsx/style";
import { Popover } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { REPORTING_RATE } from '../../../modules/dataSets.js'; // data sets
import { DIMENSION_TYPE_DATA_ELEMENT, DIMENSION_TYPE_DATA_ELEMENT_OPERAND, DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM,
// calculation
DIMENSION_TYPE_INDICATOR, DIMENSION_TYPE_PROGRAM_ATTRIBUTE,
// event data items
DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT,
// event data items
DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION, DIMENSION_TYPE_PROGRAM_INDICATOR } from '../../../modules/dataTypes.js';
import { CalculationInfo } from './CalculationInfo.js';
import { DataElementInfo } from './DataElementInfo.js';
import { DataElementOperandInfo } from './DataElementOperandInfo.js';
import { DataSetInfo } from './DataSetInfo.js';
import { EventDataItemInfo } from './EventDataItemInfo.js';
import { IndicatorInfo } from './IndicatorInfo.js';
import { OptionInfo } from './OptionInfo.js';
import { ProgramIndicatorInfo } from './ProgramIndicatorInfo.js';
import styles from './styles/InfoPopover.style.js';
export const InfoPopover = _ref => {
  let {
    reference,
    onClose,
    dataTest,
    ...props
  } = _ref;
  const type = props.item.type;
  const infoProps = {
    type,
    id: props.item.id,
    displayNameProp: props.displayNameProp
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom-end",
    reference: reference,
    onClickOutside: onClose,
    maxWidth: 480,
    arrow: false,
    elevation: "rgba(0, 0, 0, 0.1) 0px 1px 5px, rgba(0, 0, 0, 0.07) 0px 3.6px 13px, rgba(0, 0, 0, 0.06) 0px 8.4px 23px, rgba(0, 0, 0, 0.05) 0px 23px 35px"
  }, /*#__PURE__*/React.createElement("div", {
    "data-test": `${dataTest}-table`,
    className: `jsx-${styles.__hash}` + " " + "popover"
  }, type === DIMENSION_TYPE_DATA_ELEMENT && /*#__PURE__*/React.createElement(DataElementInfo, infoProps), type === DIMENSION_TYPE_DATA_ELEMENT_OPERAND && /*#__PURE__*/React.createElement(DataElementOperandInfo, infoProps), type === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && /*#__PURE__*/React.createElement(CalculationInfo, infoProps), type === REPORTING_RATE /* TODO: verify this! */ && /*#__PURE__*/React.createElement(DataSetInfo, infoProps), type === DIMENSION_TYPE_INDICATOR && /*#__PURE__*/React.createElement(IndicatorInfo, infoProps), [DIMENSION_TYPE_PROGRAM_ATTRIBUTE, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT].includes(type) && /*#__PURE__*/React.createElement(EventDataItemInfo, infoProps), type === DIMENSION_TYPE_PROGRAM_INDICATOR && /*#__PURE__*/React.createElement(ProgramIndicatorInfo, infoProps), [DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION, DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION].includes(type) && /*#__PURE__*/React.createElement(OptionInfo, infoProps))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
InfoPopover.propTypes = {
  dataTest: PropTypes.string,
  displayNameProp: PropTypes.string,
  item: PropTypes.object,
  reference: PropTypes.object,
  onClose: PropTypes.func
};