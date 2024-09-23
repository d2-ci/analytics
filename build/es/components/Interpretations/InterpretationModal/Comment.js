import i18n from '@dhis2/d2-i18n';
import { IconEdit16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Message, MessageIconButton, MessageStatsBar, getCommentAccess } from '../common/index.js';
import { CommentDeleteButton } from './CommentDeleteButton.js';
import { CommentUpdateForm } from './CommentUpdateForm.js';
const Comment = _ref => {
  let {
    comment,
    currentUser,
    interpretationId,
    onThreadUpdated,
    canComment
  } = _ref;
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const commentAccess = getCommentAccess(comment, canComment, currentUser);
  return isUpdateMode ? /*#__PURE__*/React.createElement(CommentUpdateForm, {
    close: () => setIsUpdateMode(false),
    commentId: comment.id,
    interpretationId: interpretationId,
    onComplete: () => onThreadUpdated(false),
    text: comment.text,
    currentUser: currentUser
  }) : /*#__PURE__*/React.createElement(Message, {
    text: comment.text,
    created: comment.created,
    username: comment.createdBy.displayName
  }, commentAccess.edit && /*#__PURE__*/React.createElement(MessageStatsBar, null, /*#__PURE__*/React.createElement(MessageIconButton, {
    iconComponent: IconEdit16,
    tooltipContent: i18n.t('Edit'),
    onClick: () => setIsUpdateMode(true)
  }), commentAccess.delete && /*#__PURE__*/React.createElement(CommentDeleteButton, {
    commentId: comment.id,
    interpretationId: interpretationId,
    onComplete: () => onThreadUpdated(true)
  })));
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  interpretationId: PropTypes.string.isRequired,
  onThreadUpdated: PropTypes.func.isRequired,
  canComment: PropTypes.bool
};
export { Comment };