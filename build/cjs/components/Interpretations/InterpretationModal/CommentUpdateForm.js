"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentUpdateForm = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CommentUpdateForm = ({
  id,
  text,
  onCancel,
  onComplete
}) => {
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const [commentText, setCommentText] = (0, _react.useState)(text || '');
  const [update, {
    loading,
    error
  }] = (0, _hooks.useUpdateCommentForActiveInterpretation)({
    id,
    text: commentText,
    onComplete
  });
  const errorText = error ? _d2I18n.default.t('Could not update comment') : '';
  return /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUserName: currentUser.name
  }, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    inputPlaceholder: _d2I18n.default.t('Enter comment text'),
    onChange: setCommentText,
    value: commentText,
    disabled: loading,
    errorText: errorText
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    loading: loading,
    primary: true,
    small: true,
    onClick: update
  }, _d2I18n.default.t('Update')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: onCancel
  }, _d2I18n.default.t('Cancel'))));
};
exports.CommentUpdateForm = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  id: _propTypes.default.string.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  onComplete: _propTypes.default.func.isRequired,
  text: _propTypes.default.string
};