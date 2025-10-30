"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
var _CommentDeleteButton = require("./CommentDeleteButton.js");
var _CommentUpdateForm = require("./CommentUpdateForm.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Comment = ({
  comment,
  canComment
}) => {
  const [isUpdateMode, setIsUpdateMode] = (0, _react.useState)(false);
  const [commentText, setCommentText] = (0, _react.useState)(comment.text);
  const onUpdateComplete = (0, _react.useCallback)(newText => {
    setCommentText(newText);
    setIsUpdateMode(false);
  }, []);
  const onUpdateCancel = (0, _react.useCallback)(() => {
    setIsUpdateMode(false);
  }, []);
  const commentAccess = (0, _hooks.useCommentAccess)(comment, canComment);
  return isUpdateMode ? /*#__PURE__*/_react.default.createElement(_CommentUpdateForm.CommentUpdateForm, {
    onComplete: onUpdateComplete,
    onCancel: onUpdateCancel,
    id: comment.id,
    text: comment.text
  }) : /*#__PURE__*/_react.default.createElement(_index.Message, {
    text: commentText,
    created: comment.created,
    username: comment.createdBy.displayName
  }, commentAccess.edit && /*#__PURE__*/_react.default.createElement(_index.MessageStatsBar, null, /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    iconComponent: _ui.IconEdit16,
    tooltipContent: _d2I18n.default.t('Edit'),
    onClick: () => setIsUpdateMode(true)
  }), commentAccess.delete && /*#__PURE__*/_react.default.createElement(_CommentDeleteButton.CommentDeleteButton, {
    id: comment.id
  })));
};
exports.Comment = Comment;
Comment.propTypes = {
  comment: _propTypes.default.object.isRequired,
  canComment: _propTypes.default.bool
};