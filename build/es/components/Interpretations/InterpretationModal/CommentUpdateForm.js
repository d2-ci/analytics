import i18n from '@dhis2/d2-i18n';
import { Button } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RichTextEditor } from '../../RichText/index.js';
import { MessageEditorContainer, MessageButtonStrip } from '../common/index.js';
import { useInterpretationsCurrentUser, useUpdateCommentForActiveInterpretation } from '../InterpretationsProvider/hooks.js';
export const CommentUpdateForm = ({
  id,
  text,
  onCancel,
  onComplete
}) => {
  const currentUser = useInterpretationsCurrentUser();
  const [commentText, setCommentText] = useState(text || '');
  const [update, {
    loading,
    error
  }] = useUpdateCommentForActiveInterpretation({
    id,
    text: commentText,
    onComplete
  });
  const errorText = error ? i18n.t('Could not update comment') : '';
  return /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUserName: currentUser.name
  }, /*#__PURE__*/React.createElement(RichTextEditor, {
    inputPlaceholder: i18n.t('Enter comment text'),
    onChange: setCommentText,
    value: commentText,
    disabled: loading,
    errorText: errorText
  }), /*#__PURE__*/React.createElement(MessageButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    loading: loading,
    primary: true,
    small: true,
    onClick: update
  }, i18n.t('Update')), /*#__PURE__*/React.createElement(Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: onCancel
  }, i18n.t('Cancel'))));
};
CommentUpdateForm.propTypes = {
  id: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string
};