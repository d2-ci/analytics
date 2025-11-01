"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationDeleteButton = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _hooks = require("../../InterpretationsProvider/hooks.js");
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationDeleteButton = ({
  id,
  onComplete
}) => {
  const {
    show: showErrorAlert
  } = (0, _appRuntime.useAlert)(_d2I18n.default.t('Could not delete interpretation'), {
    critical: true
  });
  const [remove, {
    loading
  }] = (0, _hooks.useDeleteInterpretation)({
    id,
    onComplete,
    showErrorAlert
  });
  return /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('Delete'),
    iconComponent: _ui.IconDelete16,
    onClick: remove,
    disabled: loading,
    dataTest: "interpretation-delete-button"
  });
};
exports.InterpretationDeleteButton = InterpretationDeleteButton;
InterpretationDeleteButton.propTypes = {
  id: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func
};