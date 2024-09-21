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
var _index = require("../index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const mutation = {
  resource: 'interpretations',
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'delete'
};
const InterpretationDeleteButton = _ref2 => {
  let {
    id,
    onComplete
  } = _ref2;
  const [remove, {
    loading
  }] = (0, _appRuntime.useDataMutation)(mutation, {
    onComplete,
    variables: {
      id
    }
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
  onComplete: _propTypes.default.func.isRequired
};