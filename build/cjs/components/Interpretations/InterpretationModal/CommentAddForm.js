"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAddForm = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CommentAddForm = ({
  focusRef
}) => {
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const [showRichTextEditor, setShowRichTextEditor] = (0, _react.useState)(false);
  const [text, setText] = (0, _react.useState)('');
  const closeForm = (0, _react.useCallback)(() => {
    setShowRichTextEditor(false);
    setText('');
  }, []);
  const [save, {
    loading,
    error
  }] = (0, _hooks.useAddCommentToActiveInterpretation)({
    text,
    onComplete: closeForm
  });
  const inputPlaceholder = _d2I18n.default.t('Write a reply');
  return /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUserName: currentUser.name
  }, showRichTextEditor ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    inputPlaceholder: inputPlaceholder,
    onChange: setText,
    value: text,
    ref: focusRef,
    disabled: loading,
    errorText: error ? _d2I18n.default.t('Could not post reply') : ''
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    small: true,
    onClick: save,
    loading: loading
  }, _d2I18n.default.t('Post reply')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    disabled: loading,
    onClick: closeForm
  }, _d2I18n.default.t('Cancel')))) : /*#__PURE__*/_react.default.createElement(_index2.MessageInput, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    ref: focusRef
  }));
};
exports.CommentAddForm = CommentAddForm;
CommentAddForm.propTypes = {
  focusRef: _propTypes.default.object.isRequired
};