"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationUpdateForm = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../../RichText/index.js");
var _hooks = require("../../InterpretationsProvider/hooks.js");
var _index2 = require("../index.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationUpdateForm = ({
  id,
  onComplete,
  showSharingLink,
  text
}) => {
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const [interpretationText, setInterpretationText] = (0, _react.useState)(text || '');
  const {
    show: showErrorAlert
  } = (0, _appRuntime.useAlert)(_d2I18n.default.t('Could not update interpretation text'), {
    critical: true
  });
  const [update, {
    loading,
    error
  }] = (0, _hooks.useUpdateInterpretationText)({
    id,
    text: interpretationText,
    onComplete,
    onError: showErrorAlert
  });
  const errorText = error ? error.message || _d2I18n.default.t('Could not update interpretation') : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2690082310", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.colors.grey100]]]) + " " + "message"
  }, /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUserName: currentUser.name
  }, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    inputPlaceholder: _d2I18n.default.t('Enter interpretation text'),
    onChange: setInterpretationText,
    value: interpretationText,
    disabled: loading,
    errorText: errorText
  }), showSharingLink && /*#__PURE__*/_react.default.createElement(_index2.InterpretationSharingLink, {
    id: id,
    type: "interpretation"
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    loading: loading,
    primary: true,
    small: true,
    onClick: () => update({
      interpretationText
    })
  }, _d2I18n.default.t('Update')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: close
  }, _d2I18n.default.t('Cancel')))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2690082310",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp8, _ui.colors.grey100]
  }, [`.message.__jsx-style-dynamic-selector{padding:0 ${_ui.spacers.dp8} ${_ui.spacers.dp8};background-color:${_ui.colors.grey100};border-radius:5px;}`]));
};
exports.InterpretationUpdateForm = InterpretationUpdateForm;
InterpretationUpdateForm.propTypes = {
  id: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func.isRequired,
  showSharingLink: _propTypes.default.bool,
  text: _propTypes.default.string
};