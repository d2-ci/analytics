import i18n from '@dhis2/d2-i18n';
import { Button } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { RichTextEditor } from '../../RichText/index.js';
import { MessageEditorContainer, MessageButtonStrip, MessageInput } from '../common/index.js';
import { useAddCommentToActiveInterpretation, useInterpretationsCurrentUser } from '../InterpretationsProvider/hooks.js';
export const CommentAddForm = ({
  focusRef
}) => {
  const currentUser = useInterpretationsCurrentUser();
  const [showRichTextEditor, setShowRichTextEditor] = useState(false);
  const [text, setText] = useState('');
  const closeForm = useCallback(() => {
    setShowRichTextEditor(false);
    setText('');
  }, []);
  const [save, {
    loading,
    error
  }] = useAddCommentToActiveInterpretation({
    text,
    onComplete: closeForm
  });
  const inputPlaceholder = i18n.t('Write a reply');
  return /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUserName: currentUser.name
  }, showRichTextEditor ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichTextEditor, {
    inputPlaceholder: inputPlaceholder,
    onChange: setText,
    value: text,
    ref: focusRef,
    disabled: loading,
    errorText: error ? i18n.t('Could not post reply') : ''
  }), /*#__PURE__*/React.createElement(MessageButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    onClick: save,
    loading: loading
  }, i18n.t('Post reply')), /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    disabled: loading,
    onClick: closeForm
  }, i18n.t('Cancel')))) : /*#__PURE__*/React.createElement(MessageInput, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    ref: focusRef
  }));
};
CommentAddForm.propTypes = {
  focusRef: PropTypes.object.isRequired
};