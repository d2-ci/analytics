import _JSXStyle from "styled-jsx/style";
import { Button, ButtonStrip, Modal, ModalTitle, ModalContent, ModalActions } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import i18n from '../../../locales/index.js';
import { OptionsSelector } from './OptionsSelector/OptionsSelector.js';
import { OutputMode, OUTPUT_MODE_COMBINED, OUTPUT_MODE_INDIVIDUAL } from './OutputMode.js';
import { SelectionMode, SELECTION_MODE_AUTOMATIC, SELECTION_MODE_MANUAL } from './SelectionMode.js';
import styles from './styles/OptionSetModal.style.js';
const AGGREGATION_DISAGGREGATED = 'DISAGGREGATED';
const OptionSetModal = _ref => {
  let {
    id,
    options,
    aggregation,
    displayNameProp,
    dataItem,
    onSave,
    onClose
  } = _ref;
  // internal state is needed for persisting state between Modal toggling (when no Save is performed)
  const [selectionMode, setSelectionMode] = useState(options !== null && options !== void 0 && options.length ? SELECTION_MODE_MANUAL : SELECTION_MODE_AUTOMATIC);
  const [outputMode, setOutputMode] = useState(aggregation === AGGREGATION_DISAGGREGATED ? OUTPUT_MODE_INDIVIDUAL : OUTPUT_MODE_COMBINED);
  const [selectedOptions, setSelectedOptions] = useState(options.map(_ref2 => {
    let {
      id,
      name
    } = _ref2;
    return {
      value: id,
      label: name
    };
  }) || []);
  const onSaveClick = () => {
    console.log('save click', selectedOptions, outputMode);
    onSave({
      dataItemId: dataItem.id,
      id,
      options: selectionMode === SELECTION_MODE_MANUAL ? selectedOptions.map(_ref3 => {
        let {
          value,
          label
        } = _ref3;
        return {
          id: value,
          name: label
        };
      }) : [],
      aggregation: outputMode === OUTPUT_MODE_INDIVIDUAL ? AGGREGATION_DISAGGREGATED : undefined
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    dataTest: "optionSet-modal",
    position: "top",
    large: true
  }, /*#__PURE__*/React.createElement(ModalTitle, {
    dataTest: "optionSet-modal-title"
  }, i18n.t('Data / {{dataItemName}}', {
    dataItemName: dataItem.name
  })), /*#__PURE__*/React.createElement(ModalContent, {
    dataTest: "optionSet-modal-content"
  }, /*#__PURE__*/React.createElement(SelectionMode, {
    selectionMode: selectionMode,
    setSelectionMode: setSelectionMode
  }), selectionMode === SELECTION_MODE_MANUAL && /*#__PURE__*/React.createElement(OptionsSelector, {
    optionSetId: id,
    displayNameProp: displayNameProp,
    selectedOptions: selectedOptions,
    onSelect: setSelectedOptions
  }), /*#__PURE__*/React.createElement(OutputMode, {
    outputMode: outputMode,
    setOutputMode: setOutputMode
  })), /*#__PURE__*/React.createElement(ModalActions, {
    dataTest: "optionSet-modal-actions"
  }, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: onClose,
    dataTest: "cancel-button"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onSaveClick,
    disabled: selectionMode === SELECTION_MODE_MANUAL && !selectedOptions.length,
    dataTest: "save-button"
  }, i18n.t('Save options'))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OptionSetModal.propTypes = {
  dataItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  displayNameProp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  aggregation: PropTypes.string,
  options: PropTypes.array
};
export default OptionSetModal;