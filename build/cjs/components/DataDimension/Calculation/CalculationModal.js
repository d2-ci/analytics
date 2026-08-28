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
var _useModalContentWidth = require("../../../modules/useModalContentWidth.js");
var _OfflineTooltip = require("../../OfflineTooltip.js");
var _DataElementSelector = _interopRequireDefault(require("./DataElementSelector.js"));
var _DndContext = _interopRequireWildcard(require("./DndContext.js"));
var _FormulaField = _interopRequireWildcard(require("./FormulaField.js"));
var _FormulaToolbar = _interopRequireDefault(require("./FormulaToolbar.js"));
var _CalculationModalStyle = _interopRequireDefault(require("./styles/CalculationModal.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FIRST_POSITION = 0;
const LAST_POSITION = -1;
const CALCULATION_PROP_DEFAULT = {};
const OPERATORS = (0, _expressions.getOperators)();
// Matches the content width of the previous fixed `large` Modal size, so
// the modal never gets narrower than it used to on small windows.
const MODAL_MIN_CONTENT_WIDTH = 740;
// Caps how far the modal grows on wide screens, so the two columns don't
// stretch out further than is useful.
const MODAL_MAX_CONTENT_WIDTH = 1000;
const getContentWidthCSS = width => ({
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3490052393",
    dynamic: [width]
  }, [`.content.__jsx-style-dynamic-selector{width:${width}px;}`]),
  className: _style.default.dynamic([["3490052393", [width]]])
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
  }] = (0, _appRuntime.useDataMutation)(_expression.validateIndicatorExpressionMutation, {
    onError: error => showError((error === null || error === void 0 ? void 0 : error.message) || error || _index.default.t('Could not validate the formula'))
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
  const nextItemIdRef = (0, _react.useRef)(1);
  // State is read through this ref instead of a closure, so the
  // document-level keydown listener can be registered once on mount
  // and still see fresh state on every keystroke.
  const latestRef = (0, _react.useRef)();
  const [validationOutput, setValidationOutput] = (0, _react.useState)(null);
  const [expressionArray, setExpressionArray] = (0, _react.useState)();
  const [name, setName] = (0, _react.useState)(calculation.name);
  const [showDeletePrompt, setShowDeletePrompt] = (0, _react.useState)(false);
  const [isSavingCalculation, setIsSavingCalculation] = (0, _react.useState)();
  const [focusItemId, setFocusItemId] = (0, _react.useState)(null);
  const [selectedItemId, setSelectedItemId] = (0, _react.useState)(null);
  const modalContentWidth = (0, _useModalContentWidth.useModalContentWidth)({
    minWidth: MODAL_MIN_CONTENT_WIDTH,
    maxWidth: MODAL_MAX_CONTENT_WIDTH
  });
  const contentWidthCSS = getContentWidthCSS(modalContentWidth);
  const expressionStatus = validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.status;
  const validationMessage = expressionStatus === _expressions.VALID_EXPRESSION ? _index.default.t('The formula is valid') : validationOutput === null || validationOutput === void 0 ? void 0 : validationOutput.message;
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
      value: type === _expressions.EXPRESSION_TYPE_DATA ? `#{${value}}` : value,
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
    if (newItem.type === _expressions.EXPRESSION_TYPE_NUMBER) {
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
  (0, _react.useEffect)(() => {
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
      if (isLoading || showDeletePrompt || event.metaKey || !isAltGraph && (event.ctrlKey || event.altKey) || (0, _DndContext.isInteractiveElement)(event.target)) {
        return;
      }
      const operator = OPERATORS.find(op => op.type === _expressions.EXPRESSION_TYPE_OPERATOR && op.value === event.key);
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
    setValidationOutput(null);
    const expression = (0, _expressions.parseArrayToExpression)(expressionArray);
    let result = (0, _expressions.validateExpression)(expression);
    if (!result) {
      const backendResult = await doBackendValidation({
        expression
      });

      // useDataMutation never rejects; network/engine failures go to
      // onError and this promise does not resolve.
      if (!backendResult) {
        return;
      }
      if (backendResult.status === _expressions.INVALID_EXPRESSION) {
        result = backendResult;
      } else {
        result = {
          ...backendResult,
          status: _expressions.VALID_EXPRESSION
        };
      }
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
    fluid: true
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, {
    dataTest: "calculation-modal-title"
  }, calculation.id ? _index.default.t('Data / Edit calculation') : _index.default.t('Data / New calculation')), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    dataTest: "calculation-modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "name-field"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Calculation name'),
    helpText: _index.default.t('Shown in table headers and chart axes/legends'),
    onChange: ({
      value
    }) => setName(value.substr(0, 50)),
    value: name,
    dataTest: "calculation-label",
    dense: true
  })), /*#__PURE__*/_react.default.createElement(_DndContext.default, {
    onDragStart: () => setFocusItemId(null),
    onDragEnd: addOrMoveDraggedItem
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + `content ${contentWidthCSS.className}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "left-section"
  }, /*#__PURE__*/_react.default.createElement(_DataElementSelector.default, {
    displayNameProp: displayNameProp,
    onClick: addItem,
    height: height
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "right-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "formula-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "sub-header-row"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "sub-header"
  }, _index.default.t('Formula'))), /*#__PURE__*/_react.default.createElement(_FormulaToolbar.default, {
    onAddOperator: addItem,
    onRemove: () => removeItem(selectedItemId),
    onValidate: validate,
    canRemove: Boolean(selectedItemId),
    isValidating: isValidating,
    isLoading: isLoading
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + ((0, _classnames.default)('formula-box', {
      valid: expressionStatus === _expressions.VALID_EXPRESSION,
      invalid: expressionStatus === _expressions.INVALID_EXPRESSION
    }) || "")
  }, /*#__PURE__*/_react.default.createElement(_FormulaField.default, {
    items: expressionArray,
    selectedItemId: selectedItemId,
    focusItemId: focusItemId,
    onChange: setItemValue,
    onClick: selectItem,
    loading: !expressionArray
  }), validationMessage && /*#__PURE__*/_react.default.createElement("div", {
    "aria-live": "polite",
    "data-test": "validation-message",
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "validation-bar"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "status"
  }, expressionStatus === _expressions.VALID_EXPRESSION ? /*#__PURE__*/_react.default.createElement(_ui.IconCheckmarkCircle16, {
    color: _ui.colors.green700
  }) : /*#__PURE__*/_react.default.createElement(_ui.IconErrorFilled16, {
    color: _ui.colors.red700
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_CalculationModalStyle.default.__hash}` + " " + "status-text"
  }, validationMessage))))))))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, {
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
  }, _index.default.t('Yes, delete'))))), contentWidthCSS.styles, /*#__PURE__*/_react.default.createElement(_style.default, {
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
  }),
  height: _propTypes.default.string
};
var _default = exports.default = CalculationModal;