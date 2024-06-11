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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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