"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationForm = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationForm = ({
  type,
  id,
  disabled,
  showNoTimeDimensionHelpText
}) => {
  const [showRichTextEditor, setShowRichTextEditor] = (0, _react.useState)(false);
  const [text, setText] = (0, _react.useState)('');
  const onComplete = (0, _react.useCallback)(() => {
    setShowRichTextEditor(false);
    setText('');
  }, []);
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const [save, {
    loading,
    error
  }] = (0, _hooks.useCreateInterpretation)({
    type,
    id,
    text,
    onComplete
  });
  const inputPlaceholder = _d2I18n.default.t('Write an interpretation');
  return /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUserName: currentUser.name,
    dataTest: "interpretation-form"
  }, showRichTextEditor ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    disabled: loading,
    inputPlaceholder: inputPlaceholder,
    onChange: setText,
    value: text,
    errorText: error ? _d2I18n.default.t('Could not post interpretation') : '',
    helpText: showNoTimeDimensionHelpText ? _d2I18n.default.t('Other people viewing this interpretation in the future may see more data.') : undefined
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    small: true,
    loading: loading,
    onClick: () => save({
      interpretationText: text
    })
  }, _d2I18n.default.t('Post interpretation')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    disabled: loading,
    onClick: () => {
      setText('');
      setShowRichTextEditor(false);
    }
  }, _d2I18n.default.t('Cancel')))) : /*#__PURE__*/_react.default.createElement(_ui.Input, {
    dense: true,
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    disabled: disabled
  }));
};
exports.InterpretationForm = InterpretationForm;
InterpretationForm.propTypes = {
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  showNoTimeDimensionHelpText: _propTypes.default.bool,
  type: _propTypes.default.string
};