"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationModalActions = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _OfflineTooltip = require("../../OfflineTooltip.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SaveButton = _ref => {
  let {
    disabled,
    loading,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    onClick: onClick,
    loading: loading,
    disabled: disabled
  }, _d2I18n.default.t('Save translations'));
};
SaveButton.defaultProps = {
  disabled: false,
  loading: false,
  onClick: Function.prototype
};
SaveButton.propTypes = {
  disabled: _propTypes.default.bool.isRequired,
  loading: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired
};
const TranslationModalActions = _ref2 => {
  let {
    onClose,
    onSave,
    saveInProgress,
    saveButtonDisabled
  } = _ref2;
  const {
    isDisconnected: offline
  } = (0, _appRuntime.useDhis2ConnectionStatus)();
  return /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    onClick: onClose
  }, _d2I18n.default.t('Cancel')), offline ? /*#__PURE__*/_react.default.createElement(_OfflineTooltip.OfflineTooltip, {
    content: _d2I18n.default.t('Cannot save while offline')
  }, /*#__PURE__*/_react.default.createElement(SaveButton, {
    disabled: true
  })) : /*#__PURE__*/_react.default.createElement(SaveButton, {
    onClick: onSave,
    loading: saveInProgress,
    disabled: saveButtonDisabled
  })));
};
exports.TranslationModalActions = TranslationModalActions;
TranslationModalActions.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  saveButtonDisabled: _propTypes.default.bool,
  saveInProgress: _propTypes.default.bool,
  onSave: _propTypes.default.func
};