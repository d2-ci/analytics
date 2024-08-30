import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { RichTextEditor, MessageEditorContainer, MessageButtonStrip, MessageInput } from '../common/index.js';
export const CommentAddForm = _ref => {
  let {
    interpretationId,
    currentUser,
    onSave,
    focusRef
  } = _ref;
  const [showRichTextEditor, setShowRichTextEditor] = useState(false);
  const [commentText, setCommentText] = useState('');
  const saveMutationRef = useRef({
    resource: "interpretations/".concat(interpretationId, "/comments"),
    type: 'create',
    data: _ref2 => {
      let {
        commentText
      } = _ref2;
      return commentText;
    }
  });
  const [save, {
    loading
  }] = useDataMutation(saveMutationRef.current, {
    onComplete: () => {
      setShowRichTextEditor(false);
      setCommentText('');
      onSave();
    }
  });
  const inputPlaceholder = i18n.t('Write a reply');
  return /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUser: currentUser
  }, showRichTextEditor ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichTextEditor, {
    inputPlaceholder: inputPlaceholder,
    onChange: setCommentText,
    value: commentText,
    ref: focusRef,
    disabled: loading
  }), /*#__PURE__*/React.createElement(MessageButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    onClick: () => save({
      commentText
    }),
    loading: loading
  }, i18n.t('Post reply')), /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    disabled: loading,
    onClick: () => {
      setCommentText('');
      setShowRichTextEditor(false);
    }
  }, i18n.t('Cancel')))) : /*#__PURE__*/React.createElement(MessageInput, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    ref: focusRef
  }));
};
CommentAddForm.propTypes = {
  currentUser: PropTypes.object.isRequired,
  focusRef: PropTypes.object.isRequired,
  interpretationId: PropTypes.string.isRequired,
  onSave: PropTypes.func
};