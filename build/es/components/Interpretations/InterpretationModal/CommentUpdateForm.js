import _JSXStyle from "styled-jsx/style";
import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button, spacers, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { MessageEditorContainer, RichTextEditor, MessageButtonStrip } from '../common/index.js';
export const CommentUpdateForm = _ref => {
  let {
    interpretationId,
    commentId,
    currentUser,
    text,
    close,
    onComplete
  } = _ref;
  const [commentText, setCommentText] = useState(text || '');
  const updateMutationRef = useRef({
    resource: "interpretations/".concat(interpretationId, "/comments/").concat(commentId),
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
  }] = useDataMutation(updateMutationRef.current, {
    onComplete: () => {
      onComplete();
      close();
    }
  });
  const errorText = error ? error.message || i18n.t('Could not update comment') : '';
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2690082310", [spacers.dp8, spacers.dp8, colors.grey100]]]) + " " + "message"
  }, /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUser: currentUser
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
    onClick: () => update({
      commentText
    })
  }, i18n.t('Update')), /*#__PURE__*/React.createElement(Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: close
  }, i18n.t('Cancel')))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2690082310",
    dynamic: [spacers.dp8, spacers.dp8, colors.grey100]
  }, [".message.__jsx-style-dynamic-selector{padding:0 ".concat(spacers.dp8, " ").concat(spacers.dp8, ";background-color:").concat(colors.grey100, ";border-radius:5px;}")]));
};
CommentUpdateForm.propTypes = {
  close: PropTypes.func.isRequired,
  commentId: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  interpretationId: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string
};