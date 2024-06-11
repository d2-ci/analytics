import _JSXStyle from "styled-jsx/style";
import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { IconDelete16, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MessageIconButton } from '../common/index.js';
const mutation = {
  resource: 'interpretations',
  id: _ref => {
    let {
      interpretationId,
      commentId
    } = _ref;
    return `${interpretationId}/comments/${commentId}`;
  },
  type: 'delete'
};
const CommentDeleteButton = _ref2 => {
  let {
    commentId,
    interpretationId,
    onComplete
  } = _ref2;
  const [deleteError, setDeleteError] = useState(null);
  const [remove, {
    loading
  }] = useDataMutation(mutation, {
    onComplete: () => {
      setDeleteError(null);
      onComplete();
    },
    onError: () => setDeleteError(i18n.t('Delete failed')),
    variables: {
      commentId,
      interpretationId
    }
  });
  const onDelete = () => {
    setDeleteError(null);
    remove();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["945681082", [colors.red500]]]) + " " + "delete-button-container"
  }, /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: i18n.t('Delete'),
    iconComponent: IconDelete16,
    onClick: onDelete,
    disabled: loading
  }), deleteError && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["945681082", [colors.red500]]]) + " " + "delete-error"
  }, deleteError), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "945681082",
    dynamic: [colors.red500]
  }, [".delete-button-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;}", `.delete-error.__jsx-style-dynamic-selector{color:${colors.red500};font-size:12px;line-height:12px;}`]));
};
CommentDeleteButton.propTypes = {
  commentId: PropTypes.string.isRequired,
  interpretationId: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired
};
export { CommentDeleteButton };