"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentUpdateForm = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CommentUpdateForm = _ref => {
  let {
    interpretationId,
    commentId,
    currentUser,
    text,
    close,
    onComplete
  } = _ref;
  const [commentText, setCommentText] = (0, _react.useState)(text || '');
  const updateMutationRef = (0, _react.useRef)({
    resource: `interpretations/${interpretationId}/comments/${commentId}`,
    type: 'update',
    partial: false,
    data: _ref2 => {
      let {
        commentText
      } = _ref2;
      return commentText;
    }
  });
  const [update, {
    loading,
    error
  }] = (0, _appRuntime.useDataMutation)(updateMutationRef.current, {
    onComplete: () => {
      onComplete();
      close();
    }
  });
  const errorText = error ? _d2I18n.default.t('Could not update comment') : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2690082310", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.colors.grey100]]]) + " " + "message"
  }, /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUser: currentUser
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
    onClick: () => update({
      commentText
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
exports.CommentUpdateForm = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  close: _propTypes.default.func.isRequired,
  commentId: _propTypes.default.string.isRequired,
  currentUser: _propTypes.default.object.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func.isRequired,
  text: _propTypes.default.string
};