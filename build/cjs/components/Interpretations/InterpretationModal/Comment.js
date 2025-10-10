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
var _CommentDeleteButton = require("./CommentDeleteButton.js");
var _CommentUpdateForm = require("./CommentUpdateForm.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Comment = ({
  comment,
  currentUser,
  interpretationId,
  onThreadUpdated,
  canComment
}) => {
  const [isUpdateMode, setIsUpdateMode] = (0, _react.useState)(false);
  const commentAccess = (0, _index.getCommentAccess)(comment, canComment, currentUser);
  return isUpdateMode ? /*#__PURE__*/_react.default.createElement(_CommentUpdateForm.CommentUpdateForm, {
    close: () => setIsUpdateMode(false),
    commentId: comment.id,
    interpretationId: interpretationId,
    onComplete: () => onThreadUpdated(false),
    text: comment.text,
    currentUser: currentUser
  }) : /*#__PURE__*/_react.default.createElement(_index.Message, {
    text: comment.text,
    created: comment.created,
    username: comment.createdBy.displayName
  }, commentAccess.edit && /*#__PURE__*/_react.default.createElement(_index.MessageStatsBar, null, /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    iconComponent: _ui.IconEdit16,
    tooltipContent: _d2I18n.default.t('Edit'),
    onClick: () => setIsUpdateMode(true)
  }), commentAccess.delete && /*#__PURE__*/_react.default.createElement(_CommentDeleteButton.CommentDeleteButton, {
    commentId: comment.id,
    interpretationId: interpretationId,
    onComplete: () => onThreadUpdated(true)
  })));
};
exports.Comment = Comment;
Comment.propTypes = {
  comment: _propTypes.default.object.isRequired,
  currentUser: _propTypes.default.object.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onThreadUpdated: _propTypes.default.func.isRequired,
  canComment: _propTypes.default.bool
};