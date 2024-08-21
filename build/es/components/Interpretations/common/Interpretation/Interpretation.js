import i18n from '@dhis2/d2-i18n';
import { Button, SharingDialog, IconReply16, IconShare16, IconThumbUp16, IconEdit16, IconLaunch16, IconView16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Message, MessageStatsBar, MessageIconButton, getInterpretationAccess } from '../index.js';
import { InterpretationDeleteButton } from './InterpretationDeleteButton.js';
import { InterpretationUpdateForm } from './InterpretationUpdateForm.js';
import { useLike } from './useLike.js';
export const Interpretation = _ref => {
  let {
    interpretation,
    currentUser,
    onClick,
    onUpdated,
    onDeleted,
    disabled,
    onReplyIconClick,
    dashboardRedirectUrl,
    isInThread,
    onLikeToggled
  } = _ref;
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showSharingDialog, setShowSharingDialog] = useState(false);
  const {
    toggleLike,
    isLikedByCurrentUser,
    toggleLikeInProgress
  } = useLike({
    interpretation,
    currentUser,
    onComplete: likedBy => onLikeToggled({
      id: interpretation.id,
      likedBy
    })
  });
  const shouldShowButton = Boolean(!!onClick && !disabled & !dashboardRedirectUrl);
  const interpretationAccess = getInterpretationAccess(interpretation, currentUser);
  let tooltip = i18n.t('Reply');
  if (!interpretationAccess.comment) {
    if (isInThread) {
      tooltip = i18n.t('{{count}} replies', {
        count: interpretation.comments.length,
        defaultValue: '{{count}} reply',
        defaultValue_plural: '{{count}} replies'
      });
    } else {
      tooltip = i18n.t('View replies');
    }
  }

  // Maps still uses old url style /?id= instead of hash
  const getAppInterpretationUrl = () => dashboardRedirectUrl.includes('?') ? `${dashboardRedirectUrl}&interpretationId=${interpretation.id}` : `${dashboardRedirectUrl}?interpretationId=${interpretation.id}`;
  return isUpdateMode ? /*#__PURE__*/React.createElement(InterpretationUpdateForm, {
    close: () => setIsUpdateMode(false),
    id: interpretation.id,
    showSharingLink: interpretationAccess.share,
    onComplete: onUpdated,
    text: interpretation.text,
    currentUser: currentUser
  }) : /*#__PURE__*/React.createElement(Message, {
    text: interpretation.text,
    created: interpretation.created,
    username: interpretation.createdBy.displayName
  }, !disabled && /*#__PURE__*/React.createElement(MessageStatsBar, null, /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: isLikedByCurrentUser ? i18n.t('Unlike') : i18n.t('Like'),
    iconComponent: IconThumbUp16,
    onClick: toggleLike,
    selected: isLikedByCurrentUser,
    count: interpretation.likes,
    disabled: toggleLikeInProgress,
    dataTest: "interpretation-like-unlike-button"
  }), /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: tooltip,
    iconComponent: IconReply16,
    onClick: () => onReplyIconClick && onReplyIconClick(interpretation.id),
    count: interpretation.comments.length,
    dataTest: "interpretation-reply-button",
    viewOnly: isInThread && !interpretationAccess.comment
  }), dashboardRedirectUrl && !isInThread && /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: i18n.t('See interpretation'),
    iconComponent: IconView16,
    onClick: () => onClick(interpretation.id),
    dataTest: "interpretation-view-button"
  }), dashboardRedirectUrl && /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: i18n.t('Open in app'),
    iconComponent: IconLaunch16,
    onClick: () => window.open(getAppInterpretationUrl(), '_blank'),
    dataTest: "interpretation-launch-in-app-button"
  }), interpretationAccess.share && /*#__PURE__*/React.createElement(MessageIconButton, {
    iconComponent: IconShare16,
    tooltipContent: i18n.t('Share'),
    onClick: () => setShowSharingDialog(true),
    dataTest: "interpretation-share-button"
  }), showSharingDialog && /*#__PURE__*/React.createElement(SharingDialog, {
    open: true,
    type: 'interpretation',
    id: interpretation.id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/React.createElement(React.Fragment, null, interpretationAccess.edit && /*#__PURE__*/React.createElement(MessageIconButton, {
    iconComponent: IconEdit16,
    tooltipContent: i18n.t('Edit'),
    onClick: () => setIsUpdateMode(true),
    dataTest: "interpretation-edit-button"
  }), interpretationAccess.delete && /*#__PURE__*/React.createElement(InterpretationDeleteButton, {
    id: interpretation.id,
    onComplete: onDeleted
  }))), shouldShowButton && /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    onClick: (_, event) => {
      event.stopPropagation();
      onClick(interpretation.id);
    }
  }, i18n.t('See interpretation')));
};
Interpretation.propTypes = {
  currentUser: PropTypes.object.isRequired,
  interpretation: PropTypes.object.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onLikeToggled: PropTypes.func.isRequired,
  onReplyIconClick: PropTypes.func.isRequired,
  onUpdated: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool,
  isInThread: PropTypes.bool,
  onClick: PropTypes.func
};