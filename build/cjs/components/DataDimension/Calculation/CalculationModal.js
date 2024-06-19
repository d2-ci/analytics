"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _expression = require("../../../api/expression.js");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _expressions = require("../../../modules/expressions.js");
var _OfflineTooltip = require("../../OfflineTooltip.js");
var _DataElementSelector = _interopRequireDefault(require("./DataElementSelector.js"));
var _DndContext = _interopRequireWildcard(require("./DndContext.js"));
var _FormulaField = _interopRequireWildcard(require("./FormulaField.js"));
var _MathOperatorSelector = _interopRequireDefault(require("./MathOperatorSelector.js"));
var _CalculationModalStyle = _interopRequireDefault(require("./styles/CalculationModal.style.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  } = (0, _appRuntime.useAlert)(error => error, {
    critical: true
  });
  const mutationParams = {
    onError: error => showError(error)
  };
  const [createCalculation, {
    loading: isCreatingCalculation
  }] = (0, _appRuntime.useDataMutation)(_expression.createCalculationMutation, mutationParams);
  const [updateCalculation, {
    loading: isUpdatingCalculation
  }] = (0, _appRuntime.useDataMutation)(_expression.updateCalculationMutation, mutationParams);
  const [deleteCalculation, {
    loading: isDeletingCalculation
  }] = (0, _appRuntime.useDataMutation)(_expression.deleteCalculationMutation, mutationParams);
  const [doBackendValidation, {
    loading: isValidating
  }] = (0, _appRuntime.useDataMutation)(_expression.validateExpressionMutation, {
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
  } = (0, _appRuntime.useDataQuery)(query, {
    lazy: true
  });
  (0, _react.useEffect)(() => {
    const ids = (0, _expressions.getItemIdsFromExpression)(calculation.expression);

    // only fetch data if there are ids
    if (ids !== null && ids !== void 0 && ids.length) {
      refetch({
        ids
      });
    } else {
      setExpressionArray((0, _expressions.parseExpressionToArray)(calculation.expression).map((item, i) => ({
        ...item,
        id: `${item.type}-${-i}`
      })));
    }
  }, [refetch, calculation.expression]);
  (0, _react.useEffect)(() => {
    if (data) {
      var _data$dataElements, _data$dataElementOper;
      const metadata = [...(((_data$dataElements = data.dataElements) === null || _data$dataElements === void 0 ? void 0 : _data$dataElements.dataElements) || []), ...(((_data$dataElementOper = data.dataElementOperands) === null || _data$dataElementOper === void 0 ? void 0 : _data$dataElementOper.dataElementOperands) || [])];
      setExpressionArray((0, _expressions.parseExpressionToArray)(calculation.expression, metadata).map((item, i) => ({
        ...item,
        id: `${item.type}-${-i}`
      })));
    }
  }, [data, calculation.expression]);
  const [newIdCount, setNewIdCount] = (0, _react.useState)(1);
  const [validationOutput, setValidationOutput] = (0, _react.useState)(null);
  const [expressionArray, setExpressionArray] = (0, _react.useState)();
  const [name, setName] = (0, _react.useState)(calculation.name);
  const [showDeletePrompt, setShowDeletePrompt] = (0, _react.useState)(false);
  const [isSavingCalculation, setIsSavingCalculation] = (0, _react.useState)();
  const [focusItemId, setFocusItemId] = (0, _react.useState)(null);
  const [selectedItemId, setSelectedItemId] = (0, _react.useState)(null);
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
      value: type === _expressions.EXPRESSION_TYPE_DATA ? `#{${value}}` : value,
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
    if (newItem.type === _expressions.EXPRESSION_TYPE_NUMBER) {
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
    if (item.sourceContainerId === _DndContext.OPTIONS_PANEL) {
      if (destContainerId === _FormulaField.LAST_DROPZONE_ID) {
        destIndex = LAST_POSITION;
      } else if (destContainerId === _FormulaField.FORMULA_BOX_ID) {
        destIndex = destination.index + 1;
      }
      addItem({
        ...item.data,
        destIndex
      });
    } else {
      if (destContainerId === _FormulaField.LAST_DROPZONE_ID) {
        destIndex = expressionArray.length;
      } else if (destContainerId === _FormulaField.FORMULA_BOX_ID) {
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
    const expression = (0, _expressions.parseArrayToExpression)(expressionArray);
    let result = (0, _expressions.validateExpression)(expression);
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
    if (status !== _expressions.VALID_EXPRESSION) {
      status = await validate();
    }
    if (status === _expressions.VALID_EXPRESSION) {
      var _response;
      let response;
      const expression = (0, _expressions.parseArrayToExpression)(expressionArray);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    dataTest: "calculation-modal",
    position: "top",
    large: true
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, {
    dataTest: "calculation-modal-title"
  }, calculation.id ? _index.default.t('Data / Edit calculation') : _index.default.t('Data / New calculation')), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    dataTest: "calculation-modal-content"
  }, /*#__PURE__*/_react.default.createElement(_DndContext.default, {
    onDragStart: () => setFocusItemId(null),
    onDragEnd: addOrMoveDraggedItem
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "left-section"
  }, /*#__PURE__*/_react.default.createElement(_DataElementSelector.default, {
    displayNameProp: displayNameProp,
    onDoubleClick: addItem
  }), /*#__PURE__*/_react.default.createElement(_MathOperatorSelector.default, {
    onDoubleClick: addItem
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "right-section"
  }, /*#__PURE__*/_react.default.createElement(_FormulaField.default, {
    items: expressionArray,
    selectedItemId: selectedItemId,
    focusItemId: focusItemId,
    onChange: setItemValue,
    onClick: selectItem,
    onDoubleClick: removeItem,
    loading: !expressionArray,
    disabled: isLoading
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "button-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "remove-button"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    small: true,
    secondary: true,
    onClick: () => removeItem(selectedItemId),
    dataTest: "remove-button",
    disabled: !selectedItemId
  }, _index.default.t('Remove item'))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "validate-button"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    small: true,
    secondary: true,
    onClick: validate,
    dataTest: "validate-button",
    loading: isValidating,
    disabled: isLoading
  }, _index.default.t('Check formula')))), /*#__PURE__*/_react.default.createElement("span", {
    "data-test": "validation-message",
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + ((0, _classnames.default)('validation-message', {
      'validation-error': expressionStatus === _expressions.INVALID_EXPRESSION,
      'validation-success': expressionStatus === _expressions.VALID_EXPRESSION
    }) || "")
  }, validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.message), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "name-input"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Calculation name'),
    helpText: _index.default.t('Shown in table headers and chart axes/legends'),
    onChange: _ref8 => {
      let {
        value
      } = _ref8;
      return setName(value.substr(0, 50));
    },
    value: name,
    dataTest: "calculation-label",
    dense: true
  }))))))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, {
    dataTest: "calculation-modal-actions"
  }, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, calculation.id && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "delete-button"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    onClick: () => setShowDeletePrompt(true),
    dataTest: "delete-button",
    loading: isDeletingCalculation,
    disabled: isUpdatingCalculation
  }, _index.default.t('Delete calculation'))), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    onClick: onClose,
    disabled: isLoading,
    dataTest: "cancel-button"
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_OfflineTooltip.OfflineTooltip, {
    content: expressionStatus === _expressions.INVALID_EXPRESSION ? _index.default.t('The calculation can only be saved with a valid formula') : _index.default.t('Add a name to save this calculation'),
    disabled: expressionStatus === _expressions.INVALID_EXPRESSION || !name,
    disabledWhenOffline: false
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    onClick: onSaveClick,
    disabled: expressionStatus === _expressions.INVALID_EXPRESSION || !name || isDeletingCalculation || isValidating,
    loading: isCreatingCalculation || isUpdatingCalculation || isSavingCalculation,
    dataTest: "save-button"
  }, _index.default.t('Save calculation')))))), showDeletePrompt && /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    small: true,
    dataTest: "calculation-delete-modal"
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _index.default.t('Delete calculation')), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, _index.default.t('Are you sure you want to delete this calculation? It may be used by other visualizations.')), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, {
    end: true
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    onClick: () => setShowDeletePrompt()
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onDeleteClick,
    destructive: true
  }, _index.default.t('Yes, delete'))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _CalculationModalStyle.default.__hash
  }, _CalculationModalStyle.default));
};
CalculationModal.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onDelete: _propTypes.default.func.isRequired,
  onSave: _propTypes.default.func.isRequired,
  calculation: _propTypes.default.shape({
    expression: _propTypes.default.string,
    id: _propTypes.default.string,
    name: _propTypes.default.string
  })
};
CalculationModal.defaultProps = {
  calculation: {}
};
var _default = exports.default = CalculationModal;