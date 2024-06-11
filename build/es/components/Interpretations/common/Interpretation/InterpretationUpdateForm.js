import _JSXStyle from "styled-jsx/style";
import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button, spacers, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { RichTextEditor } from '../../../RichText/index.js';
import { MessageEditorContainer, MessageButtonStrip, InterpretationSharingLink } from '../index.js';
const mutation = {
  resource: 'interpretations',
  type: 'update',
  partial: false,
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  data: _ref2 => {
    let {
      interpretationText
    } = _ref2;
    return interpretationText;
  }
};
export const InterpretationUpdateForm = _ref3 => {
  let {
    close,
    currentUser,
    id,
    onComplete,
    showSharingLink,
    text
  } = _ref3;
  const [interpretationText, setInterpretationText] = useState(text || '');
  const [update, {
    loading,
    error
  }] = useDataMutation(mutation, {
    onComplete: () => {
      onComplete();
      close();
    },
    variables: {
      id
    }
  });
  const errorText = error ? error.message || i18n.t('Could not update interpretation') : '';
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2690082310", [spacers.dp8, spacers.dp8, colors.grey100]]]) + " " + "message"
  }, /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUser: currentUser
  }, /*#__PURE__*/React.createElement(RichTextEditor, {
    inputPlaceholder: i18n.t('Enter interpretation text'),
    onChange: setInterpretationText,
    value: interpretationText,
    disabled: loading,
    errorText: errorText
  }), showSharingLink && /*#__PURE__*/React.createElement(InterpretationSharingLink, {
    id: id,
    type: "interpretation"
  }), /*#__PURE__*/React.createElement(MessageButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    loading: loading,
    primary: true,
    small: true,
    onClick: () => update({
      interpretationText
    })
  }, i18n.t('Update')), /*#__PURE__*/React.createElement(Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: close
  }, i18n.t('Cancel')))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2690082310",
    dynamic: [spacers.dp8, spacers.dp8, colors.grey100]
  }, [`.message.__jsx-style-dynamic-selector{padding:0 ${spacers.dp8} ${spacers.dp8};background-color:${colors.grey100};border-radius:5px;}`]));
};
InterpretationUpdateForm.propTypes = {
  close: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  showSharingLink: PropTypes.bool,
  text: PropTypes.string
};