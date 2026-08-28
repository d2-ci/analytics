import _JSXStyle from "styled-jsx/style";
import { useAlert, useDataMutation, useDataQuery } from '@dhis2/app-runtime';
import { Button, Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, IconCheckmarkCircle16, IconErrorFilled16, InputField, colors } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { createCalculationMutation, deleteCalculationMutation, updateCalculationMutation, validateIndicatorExpressionMutation } from '../../../api/expression.js';
import i18n from '../../../locales/index.js';
import { parseExpressionToArray, parseArrayToExpression, validateExpression, getOperators, EXPRESSION_TYPE_DATA, EXPRESSION_TYPE_NUMBER, EXPRESSION_TYPE_OPERATOR, INVALID_EXPRESSION, VALID_EXPRESSION, getItemIdsFromExpression } from '../../../modules/expressions.js';
import { useModalContentWidth } from '../../../modules/useModalContentWidth.js';
import { OfflineTooltip as Tooltip } from '../../OfflineTooltip.js';
import DataElementSelector from './DataElementSelector.js';
import DndContext, { OPTIONS_PANEL, isInteractiveElement } from './DndContext.js';
import FormulaField, { LAST_DROPZONE_ID, FORMULA_BOX_ID } from './FormulaField.js';
import FormulaToolbar from './FormulaToolbar.js';
import styles from './styles/CalculationModal.style.js';
const FIRST_POSITION = 0;
const LAST_POSITION = -1;
const CALCULATION_PROP_DEFAULT = {};
const OPERATORS = getOperators();
// Matches the content width of the previous fixed `large` Modal size, so
// the modal never gets narrower than it used to on small windows.
const MODAL_MIN_CONTENT_WIDTH = 740;
// Caps how far the modal grows on wide screens, so the two columns don't
// stretch out further than is useful.
const MODAL_MAX_CONTENT_WIDTH = 1000;
const getContentWidthCSS = width => ({
  styles: /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3490052393",
    dynamic: [width]
  }, [`.content.__jsx-style-dynamic-selector{width:${width}px;}`]),
  className: _JSXStyle.dynamic([["3490052393", [width]]])
});
const CalculationModal = ({
  calculation = CALCULATION_PROP_DEFAULT,
  onSave,
  onClose,
  onDelete,
  displayNameProp,
  height
}) => {
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
  }] = useDataMutation(validateIndicatorExpressionMutation, {
    onError: error => showError((error === null || error === void 0 ? void 0 : error.message) || error || i18n.t('Could not validate the formula'))
  });
  const query = {
    dataElements: {
      resource: 'dataElements',
      params: ({
        ids = []
      }) => ({
        fields: `id,${displayNameProp}~rename(name)`,
        filter: `id:in:[${ids.join(',')}]`,
        paging: false
      })
    },
    dataElementOperands: {
      resource: 'dataElementOperands',
      params: ({
        ids = []
      }) => ({
        fields: `id,${displayNameProp}~rename(name)`,
        filter: `id:in:[${ids.join(',')}]`,
        paging: false
      })
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
  const nextItemIdRef = useRef(1);
  // State is read through this ref instead of a closure, so the
  // document-level keydown listener can be registered once on mount
  // and still see fresh state on every keystroke.
  const latestRef = useRef();
  const [validationOutput, setValidationOutput] = useState(null);
  const [expressionArray, setExpressionArray] = useState();
  const [name, setName] = useState(calculation.name);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [isSavingCalculation, setIsSavingCalculation] = useState();
  const [focusItemId, setFocusItemId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const modalContentWidth = useModalContentWidth({
    minWidth: MODAL_MIN_CONTENT_WIDTH,
    maxWidth: MODAL_MAX_CONTENT_WIDTH
  });
  const contentWidthCSS = getContentWidthCSS(modalContentWidth);
  const expressionStatus = validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.status;
  const validationMessage = expressionStatus === VALID_EXPRESSION ? i18n.t('The formula is valid') : validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.message;
  const selectItem = itemId => setSelectedItemId(prevSelected => {
    const next = prevSelected !== itemId ? itemId : null;
    if (latestRef.current) {
      latestRef.current.selectedItemId = next;
    }
    return next;
  });
  const isLoading = isCreatingCalculation || isUpdatingCalculation || isDeletingCalculation || isSavingCalculation || isValidating;
  const addItem = ({
    label,
    value,
    type,
    destIndex
  }) => {
    var _latestRef$current;
    if (isLoading || !expressionArray) {
      return;
    }
    setValidationOutput(null);
    const newItem = {
      id: `${type}-${nextItemIdRef.current++}`,
      value: type === EXPRESSION_TYPE_DATA ? `#{${value}}` : value,
      label,
      type
    };

    // Without an explicit destIndex, insert after the selected item
    // instead of always appending.
    const selectedId = (_latestRef$current = latestRef.current) === null || _latestRef$current === void 0 ? void 0 : _latestRef$current.selectedItemId;
    setExpressionArray(prevArray => {
      let insertAt = destIndex;
      if (insertAt === undefined) {
        const selectedIndex = prevArray.findIndex(item => item.id === selectedId);
        insertAt = selectedIndex === -1 ? prevArray.length : selectedIndex + 1;
      } else if (insertAt === LAST_POSITION) {
        insertAt = prevArray.length;
      }
      return [...prevArray.slice(0, insertAt), newItem, ...prevArray.slice(insertAt)];
    });
    if (newItem.type === EXPRESSION_TYPE_NUMBER) {
      setFocusItemId(newItem.id);
    }

    // Keep the newly added item selected so it becomes the anchor for
    // the next typed operator or arrow-key move.
    setSelectedItemId(newItem.id);
    latestRef.current.selectedItemId = newItem.id;
  };
  const moveItem = ({
    sourceIndex,
    destIndex
  }) => {
    if (isLoading) {
      return;
    }
    setValidationOutput(null);
    setExpressionArray(prevArray => {
      const sourceList = Array.from(prevArray);
      const [moved] = sourceList.splice(sourceIndex, 1);
      sourceList.splice(destIndex, 0, moved);
      return sourceList;
    });
  };
  const setItemValue = ({
    itemId,
    value
  }) => {
    const updatedItems = expressionArray.map(item => item.id === itemId ? Object.assign({}, item, {
      value
    }) : item);
    setExpressionArray(updatedItems);
  };
  const removeItem = itemId => {
    if (!isLoading && itemId !== null) {
      setValidationOutput(null);
      const index = expressionArray.findIndex(item => item.id === itemId);
      const sourceList = Array.from(expressionArray);
      sourceList.splice(index, 1);
      setExpressionArray(sourceList);
      setSelectedItemId(null);
    }
  };
  latestRef.current = {
    isLoading,
    showDeletePrompt,
    selectedItemId,
    expressionArray,
    addItem,
    moveItem
  };
  useEffect(() => {
    const handleKeyDown = event => {
      var _event$getModifierSta;
      const {
        isLoading,
        showDeletePrompt,
        selectedItemId,
        expressionArray,
        addItem,
        moveItem
      } = latestRef.current;

      // On some layouts (e.g. German, French) operator characters
      // like ( ) * are typed via AltGr, which browsers report as
      // altKey/ctrlKey being set - don't let that block the shortcut.
      const isAltGraph = (_event$getModifierSta = event.getModifierState) === null || _event$getModifierSta === void 0 ? void 0 : _event$getModifierSta.call(event, 'AltGraph');
      if (isLoading || showDeletePrompt || event.metaKey || !isAltGraph && (event.ctrlKey || event.altKey) || isInteractiveElement(event.target)) {
        return;
      }
      const operator = OPERATORS.find(op => op.type === EXPRESSION_TYPE_OPERATOR && op.value === event.key);
      if (operator) {
        event.preventDefault();
        addItem(operator);
        return;
      }
      if (!selectedItemId || !expressionArray) {
        return;
      }
      const index = expressionArray.findIndex(item => item.id === selectedItemId);
      if (index === -1) {
        return;
      }
      if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        moveItem({
          sourceIndex: index,
          destIndex: index - 1
        });
      } else if (event.key === 'ArrowRight' && index < expressionArray.length - 1) {
        event.preventDefault();
        moveItem({
          sourceIndex: index,
          destIndex: index + 1
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  const addOrMoveDraggedItem = ({
    item,
    destination
  }) => {
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
    setValidationOutput(null);
    const expression = parseArrayToExpression(expressionArray);
    let result = validateExpression(expression);
    if (!result) {
      const backendResult = await doBackendValidation({
        expression
      });

      // useDataMutation never rejects; network/engine failures go to
      // onError and this promise does not resolve.
      if (!backendResult) {
        return;
      }
      if (backendResult.status === INVALID_EXPRESSION) {
        result = backendResult;
      } else {
        result = {
          ...backendResult,
          status: VALID_EXPRESSION
        };
      }
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
    fluid: true
  }, /*#__PURE__*/React.createElement(ModalTitle, {
    dataTest: "calculation-modal-title"
  }, calculation.id ? i18n.t('Data / Edit calculation') : i18n.t('Data / New calculation')), /*#__PURE__*/React.createElement(ModalContent, {
    dataTest: "calculation-modal-content",
    className: "calculation-modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "modal-content-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "name-field"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Calculation name'),
    helpText: i18n.t('Shown in table headers and chart axes/legends'),
    onChange: ({
      value
    }) => setName(value.substr(0, 50)),
    value: name,
    dataTest: "calculation-label",
    dense: true
  })), /*#__PURE__*/React.createElement(DndContext, {
    onDragStart: () => setFocusItemId(null),
    onDragEnd: addOrMoveDraggedItem
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + `content ${contentWidthCSS.className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "left-section"
  }, /*#__PURE__*/React.createElement(DataElementSelector, {
    displayNameProp: displayNameProp,
    onClick: addItem,
    height: height
  })), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "right-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "formula-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "sub-header-row"
  }, /*#__PURE__*/React.createElement("h4", {
    className: `jsx-${styles.__hash}` + " " + "sub-header"
  }, i18n.t('Formula'))), /*#__PURE__*/React.createElement(FormulaToolbar, {
    onAddOperator: addItem,
    onRemove: () => removeItem(selectedItemId),
    onValidate: validate,
    canRemove: Boolean(selectedItemId),
    isValidating: isValidating,
    isLoading: isLoading
  }), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('formula-box', {
      valid: expressionStatus === VALID_EXPRESSION,
      invalid: expressionStatus === INVALID_EXPRESSION
    }) || "")
  }, /*#__PURE__*/React.createElement(FormulaField, {
    items: expressionArray,
    selectedItemId: selectedItemId,
    focusItemId: focusItemId,
    onChange: setItemValue,
    onClick: selectItem,
    loading: !expressionArray
  }), validationMessage && /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    "data-test": "validation-message",
    className: `jsx-${styles.__hash}` + " " + "validation-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "status"
  }, expressionStatus === VALID_EXPRESSION ? /*#__PURE__*/React.createElement(IconCheckmarkCircle16, {
    color: colors.green700
  }) : /*#__PURE__*/React.createElement(IconErrorFilled16, {
    color: colors.red700
  }), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "status-text"
  }, validationMessage)))))))))), /*#__PURE__*/React.createElement(ModalActions, {
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
  }, i18n.t('Yes, delete'))))), contentWidthCSS.styles, /*#__PURE__*/React.createElement(_JSXStyle, {
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
  }),
  height: PropTypes.string
};
export default CalculationModal;