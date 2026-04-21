import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { IconDelete16, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { MessageIconButton } from '../common/index.js';
import { useConfirmClick } from '../common/useConfirmClick.js';
import { useDeleteCommentFromActiveInterpretation } from '../InterpretationsProvider/hooks.js';
const CommentDeleteButton = ({
  id
}) => {
  const [remove, {
    loading,
    error
  }] = useDeleteCommentFromActiveInterpretation({
    id
  });
  const {
    isConfirming,
    onClick
  } = useConfirmClick(remove);
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["945681082", [colors.red500]]]) + " " + "delete-button-container"
  }, /*#__PURE__*/React.createElement(MessageIconButton, {
    tooltipContent: isConfirming ? i18n.t('Click again to delete') : i18n.t('Delete'),
    iconComponent: IconDelete16,
    label: isConfirming ? i18n.t('Delete?') : undefined,
    confirming: isConfirming,
    onClick: onClick,
    disabled: loading
  }), error && /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["945681082", [colors.red500]]]) + " " + "delete-error"
  }, i18n.t('Could not delete comment')), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "945681082",
    dynamic: [colors.red500]
  }, [".delete-button-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;}", `.delete-error.__jsx-style-dynamic-selector{color:${colors.red500};font-size:12px;line-height:12px;}`]));
};
CommentDeleteButton.propTypes = {
  id: PropTypes.string.isRequired
};
export { CommentDeleteButton };