import _JSXStyle from "styled-jsx/style";
import { useAlert, useDataMutation, useDataQuery } from '@dhis2/app-runtime';
import { Button, Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, InputField } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createCalculationMutation, deleteCalculationMutation, updateCalculationMutation, validateExpressionMutation } from '../../../api/expression.js';
import i18n from '../../../locales/index.js';
import { parseExpressionToArray, parseArrayToExpression, validateExpression, EXPRESSION_TYPE_DATA, EXPRESSION_TYPE_NUMBER, INVALID_EXPRESSION, VALID_EXPRESSION, getItemIdsFromExpression } from '../../../modules/expressions.js';
import { OfflineTooltip as Tooltip } from '../../OfflineTooltip.js';
import DataElementSelector from './DataElementSelector.js';
import DndContext, { OPTIONS_PANEL } from './DndContext.js';
import FormulaField, { LAST_DROPZONE_ID, FORMULA_BOX_ID } from './FormulaField.js';
import MathOperatorSelector from './MathOperatorSelector.js';
import styles from './styles/CalculationModal.style.js';
const FIRST_POSITION = 0;
const LAST_POSITION = -1;
const CalculationModal = _ref => {
  let {
    calculation,
    onSave,
    onClose,
    onDelete,
    displayNameProp
  } = _ref;
  const {
    show: showError
  } = useAlert(error => error, {
    critical: true
  });
  const mutationParams = {
    onError: error => showError(error)
  };
  const [createCalculation, {
    loading: isCreatingCalculation
  }] = useDataMutation(createCalculationMutation, mutationParams);
  const [updateCalculation, {
    loading: isUpdatingCalculation
  }] = useDataMutation(updateCalculationMutation, mutationParams);
  const [deleteCalculation, {
    loading: isDeletingCalculation
  }] = useDataMutation(deleteCalculationMutation, mutationParams);
  const [doBackendValidation, {
    loading: isValidating
  }] = useDataMutation(validateExpressionMutation, {
    onError: error => showError(error)
  });
  const query = {
    dataElements: {
      resource: 'dataElements',
      params: _ref2 => {
        let {
          ids = []
        } = _ref2;
        return {
          fields: `id,${displayNameProp}~rename(name)`,
          filter: `id:in:[${ids.join(',')}]`,
          paging: false
        };
      }
    },
    dataElementOperands: {
      resource: 'dataElementOperands',
      params: _ref3 => {
        let {
          ids = []
        } = _ref3;
        return {
          fields: `id,${displayNameProp}~rename(name)`,
          filter: `id:in:[${ids.join(',')}]`,
          paging: false
        };
      }
    }
  };
  const {
    data,
    refetch
  } = useDataQuery(query, {
    lazy: true
  });
  useEffect(() => {
    const ids = getItemIdsFromExpression(calculation.expression);

    // only fetch data if there are ids
    if (ids !== null && ids !== void 0 && ids.length) {
      refetch({
        ids
      });
    } else {
      setExpressionArray(parseExpressionToArray(calculation.expression).map((item, i) => ({
        ...item,
        id: `${item.type}-${-i}`
      })));
    }
  }, [refetch, calculation.expression]);
  useEffect(() => {
    if (data) {
      var _data$dataElements, _data$dataElementOper;
      const metadata = [...(((_data$dataElements = data.dataElements) === null || _data$dataElements === void 0 ? void 0 : _data$dataElements.dataElements) || []), ...(((_data$dataElementOper = data.dataElementOperands) === null || _data$dataElementOper === void 0 ? void 0 : _data$dataElementOper.dataElementOperands) || [])];
      setExpressionArray(parseExpressionToArray(calculation.expression, metadata).map((item, i) => ({
        ...item,
        id: `${item.type}-${-i}`
      })));
    }
  }, [data, calculation.expression]);
  const [newIdCount, setNewIdCount] = useState(1);
  const [validationOutput, setValidationOutput] = useState(null);
  const [expressionArray, setExpressionArray] = useState();
  const [name, setName] = useState(calculation.name);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [isSavingCalculation, setIsSavingCalculation] = useState();
  const [focusItemId, setFocusItemId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const expressionStatus = validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.status;
  const selectItem = itemId => setSelectedItemId(prevSelected => prevSelected !== itemId ? itemId : null);
  const isLoading = isCreatingCalculation || isUpdatingCalculation || isDeletingCalculation || isSavingCalculation || isValidating;
  const addItem = _ref4 => {
    let {
      label,
      value,
      type,
      destIndex = LAST_POSITION
    } = _ref4;
    if (isLoading) {
      return null;
    }
    setValidationOutput();
    const newItem = {
      id: `${type}-${newIdCount}`,
      value: type === EXPRESSION_TYPE_DATA ? `#{${value}}` : value,
      label,
      type
    };
    setNewIdCount(newIdCount + 1);
    if (destIndex === LAST_POSITION) {
      setExpressionArray(prevArray => prevArray.concat([newItem]));
    } else if (destIndex === FIRST_POSITION) {
      setExpressionArray(prevArray => [newItem].concat(prevArray));
    } else {
      const items = Array.from(expressionArray);
      const newFormulaItems = [...items.slice(0, destIndex), newItem, ...items.slice(destIndex)];
      setExpressionArray(newFormulaItems);
    }
    if (newItem.type === EXPRESSION_TYPE_NUMBER) {
      setFocusItemId(newItem.id);
    }
  };
  const moveItem = _ref5 => {
    let {
      sourceIndex,
      destIndex
    } = _ref5;
    if (isLoading) {
      return null;
    }
    setValidationOutput();
    const sourceList = Array.from(expressionArray);
    const [moved] = sourceList.splice(sourceIndex, 1);
    sourceList.splice(destIndex, 0, moved);
    setExpressionArray(sourceList);
  };
  const setItemValue = _ref6 => {
    let {
      itemId,
      value
    } = _ref6;
    const updatedItems = expressionArray.map(item => item.id === itemId ? Object.assign({}, item, {
      value
    }) : item);
    setExpressionArray(updatedItems);
  };
  const removeItem = itemId => {
    if (!isLoading && itemId !== null) {
      setValidationOutput();
      const index = expressionArray.findIndex(item => item.id === itemId);
      const sourceList = Array.from(expressionArray);
      sourceList.splice(index, 1);
      setExpressionArray(sourceList);
      setSelectedItemId(null);
    }
  };
  const addOrMoveDraggedItem = _ref7 => {
    let {
      item,
      destination
    } = _ref7;
    const destContainerId = destination.containerId;
    let destIndex = FIRST_POSITION;
    if (item.sourceContainerId === OPTIONS_PANEL) {
      if (destContainerId === LAST_DROPZONE_ID) {
        destIndex = LAST_POSITION;
      } else if (destContainerId === FORMULA_BOX_ID) {
        destIndex = destination.index + 1;
      }
      addItem({
        ...item.data,
        destIndex
      });
    } else {
      if (destContainerId === LAST_DROPZONE_ID) {
        destIndex = expressionArray.length;
      } else if (destContainerId === FORMULA_BOX_ID) {
        destIndex = destination.index;
      }
      moveItem({
        sourceIndex: item.sourceIndex,
        destIndex
      });
    }
  };
  const validate = async () => {
    var _result;
    setValidationOutput();
    const expression = parseArrayToExpression(expressionArray);
    let result = validateExpression(expression);
    if (!result) {
      result = await doBackendValidation({
        expression
      });
    }
    setValidationOutput(result);
    return (_result = result) === null || _result === void 0 ? void 0 : _result.status;
  };
  const onSaveClick = async () => {
    setIsSavingCalculation(true);
    let status = expressionStatus;
    if (status !== VALID_EXPRESSION) {
      status = await validate();
    }
    if (status === VALID_EXPRESSION) {
      var _response;
      let response;
      const expression = parseArrayToExpression(expressionArray);
      if (calculation.id) {
        response = await updateCalculation({
          id: calculation.id,
          name,
          expression
        });
      } else {
        response = await createCalculation({
          name,
          expression
        });
      }
      onSave({
        id: calculation.id || ((_response = response) === null || _response === void 0 ? void 0 : _response.response.uid),
        name,
        isNew: !calculation.id,
        expression
      });
    }
    setIsSavingCalculation(false);
  };
  const onDeleteClick = async () => {
    setShowDeletePrompt();
    await deleteCalculation({
      id: calculation.id
    });
    onDelete({
      id: calculation.id
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    dataTest: "calculation-modal",
    position: "top",
    large: true
  }, /*#__PURE__*/React.createElement(ModalTitle, {
    dataTest: "calculation-modal-title"
  }, calculation.id ? i18n.t('Data / Edit calculation') : i18n.t('Data / New calculation')), /*#__PURE__*/React.createElement(ModalContent, {
    dataTest: "calculation-modal-content"
  }, /*#__PURE__*/React.createElement(DndContext, {
    onDragStart: () => setFocusItemId(null),
    onDragEnd: addOrMoveDraggedItem
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "left-section"
  }, /*#__PURE__*/React.createElement(DataElementSelector, {
    displayNameProp: displayNameProp,
    onDoubleClick: addItem
  }), /*#__PURE__*/React.createElement(MathOperatorSelector, {
    onDoubleClick: addItem
  })), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "right-section"
  }, /*#__PURE__*/React.createElement(FormulaField, {
    items: expressionArray,
    selectedItemId: selectedItemId,
    focusItemId: focusItemId,
    onChange: setItemValue,
    onClick: selectItem,
    onDoubleClick: removeItem,
    loading: !expressionArray,
    disabled: isLoading
  }), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "actions-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "button-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "remove-button"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    secondary: true,
    onClick: () => removeItem(selectedItemId),
    dataTest: "remove-button",
    disabled: !selectedItemId
  }, i18n.t('Remove item'))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "validate-button"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    secondary: true,
    onClick: validate,
    dataTest: "validate-button",
    loading: isValidating,
    disabled: isLoading
  }, i18n.t('Check formula')))), /*#__PURE__*/React.createElement("span", {
    "data-test": "validation-message",
    className: `jsx-${styles.__hash}` + " " + (cx('validation-message', {
      'validation-error': expressionStatus === INVALID_EXPRESSION,
      'validation-success': expressionStatus === VALID_EXPRESSION
    }) || "")
  }, validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.message), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "name-input"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Calculation name'),
    helpText: i18n.t('Shown in table headers and chart axes/legends'),
    onChange: _ref8 => {
      let {
        value
      } = _ref8;
      return setName(value.substr(0, 50));
    },
    value: name,
    dataTest: "calculation-label",
    dense: true
  }))))))), /*#__PURE__*/React.createElement(ModalActions, {
    dataTest: "calculation-modal-actions"
  }, /*#__PURE__*/React.createElement(ButtonStrip, null, calculation.id && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "delete-button"
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: () => setShowDeletePrompt(true),
    dataTest: "delete-button",
    loading: isDeletingCalculation,
    disabled: isUpdatingCalculation
  }, i18n.t('Delete calculation'))), /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: onClose,
    disabled: isLoading,
    dataTest: "cancel-button"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Tooltip, {
    content: expressionStatus === INVALID_EXPRESSION ? i18n.t('The calculation can only be saved with a valid formula') : i18n.t('Add a name to save this calculation'),
    disabled: expressionStatus === INVALID_EXPRESSION || !name,
    disabledWhenOffline: false
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onSaveClick,
    disabled: expressionStatus === INVALID_EXPRESSION || !name || isDeletingCalculation || isValidating,
    loading: isCreatingCalculation || isUpdatingCalculation || isSavingCalculation,
    dataTest: "save-button"
  }, i18n.t('Save calculation')))))), showDeletePrompt && /*#__PURE__*/React.createElement(Modal, {
    small: true,
    dataTest: "calculation-delete-modal"
  }, /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Delete calculation')), /*#__PURE__*/React.createElement(ModalContent, null, i18n.t('Are you sure you want to delete this calculation? It may be used by other visualizations.')), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: () => setShowDeletePrompt()
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: onDeleteClick,
    destructive: true
  }, i18n.t('Yes, delete'))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
CalculationModal.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  calculation: PropTypes.shape({
    expression: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
  })
};
CalculationModal.defaultProps = {
  calculation: {}
};
export default CalculationModal;