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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Comment = _ref => {
  let {
    comment,
    currentUser,
    interpretationId,
    onThreadUpdated,
    canComment
  } = _ref;
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