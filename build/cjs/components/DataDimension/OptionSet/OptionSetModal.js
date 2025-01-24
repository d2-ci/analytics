"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _OptionsSelector = require("./OptionsSelector/OptionsSelector.js");
var _OutputMode = require("./OutputMode.js");
var _SelectionMode = require("./SelectionMode.js");
var _OptionSetModalStyle = _interopRequireDefault(require("./styles/OptionSetModal.style.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  const [selectionMode, setSelectionMode] = (0, _react.useState)(options !== null && options !== void 0 && options.length ? _SelectionMode.SELECTION_MODE_MANUAL : _SelectionMode.SELECTION_MODE_AUTOMATIC);
  const [outputMode, setOutputMode] = (0, _react.useState)(aggregation === AGGREGATION_DISAGGREGATED ? _OutputMode.OUTPUT_MODE_INDIVIDUAL : _OutputMode.OUTPUT_MODE_COMBINED);
  const [selectedOptions, setSelectedOptions] = (0, _react.useState)(options.map(_ref2 => {
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
      options: selectionMode === _SelectionMode.SELECTION_MODE_MANUAL ? selectedOptions.map(_ref3 => {
        let {
          value,
          label
        } = _ref3;
        return {
          id: value,
          name: label
        };
      }) : [],
      aggregation: outputMode === _OutputMode.OUTPUT_MODE_INDIVIDUAL ? AGGREGATION_DISAGGREGATED : undefined
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    dataTest: "optionSet-modal",
    position: "top",
    large: true
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, {
    dataTest: "optionSet-modal-title"
  }, _index.default.t('Data / {{dataItemName}}', {
    dataItemName: dataItem.name
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    dataTest: "optionSet-modal-content"
  }, /*#__PURE__*/_react.default.createElement(_SelectionMode.SelectionMode, {
    selectionMode: selectionMode,
    setSelectionMode: setSelectionMode
  }), selectionMode === _SelectionMode.SELECTION_MODE_MANUAL && /*#__PURE__*/_react.default.createElement(_OptionsSelector.OptionsSelector, {
    optionSetId: id,
    displayNameProp: displayNameProp,
    selectedOptions: selectedOptions,
    onSelect: setSelectedOptions
  }), /*#__PURE__*/_react.default.createElement(_OutputMode.OutputMode, {
    outputMode: outputMode,
    setOutputMode: setOutputMode
  })), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, {
    dataTest: "optionSet-modal-actions"
  }, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    onClick: onClose,
    dataTest: "cancel-button"
  }, _index.default.t('Cancel')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    onClick: onSaveClick,
    disabled: selectionMode === _SelectionMode.SELECTION_MODE_MANUAL && !selectedOptions.length,
    dataTest: "save-button"
  }, _index.default.t('Save options'))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OptionSetModalStyle.default.__hash
  }, _OptionSetModalStyle.default));
};
OptionSetModal.propTypes = {
  dataItem: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired
  }).isRequired,
  displayNameProp: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onSave: _propTypes.default.func.isRequired,
  aggregation: _propTypes.default.string,
  options: _propTypes.default.array
};
var _default = exports.default = OptionSetModal;