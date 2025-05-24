import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button, Input } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { RichTextEditor } from '../../RichText/index.js';
import { MessageEditorContainer, MessageButtonStrip } from '../common/index.js';
export const InterpretationForm = _ref => {
  let {
    type,
    id,
    currentUser,
    disabled,
    showNoTimeDimensionHelpText,
    onSave
  } = _ref;
  const [showRichTextEditor, setShowRichTextEditor] = useState(false);
  const [interpretationText, setInterpretationText] = useState('');
  const saveMutationRef = useRef({
    resource: `interpretations/${type}/${id}`,
    type: 'create',
    data: _ref2 => {
      let {
        interpretationText
      } = _ref2;
      return interpretationText;
    }
  });
  const [save, {
    loading: saveMutationInProgress
  }] = useDataMutation(saveMutationRef.current, {
    onComplete: () => {
      setShowRichTextEditor(false);
      setInterpretationText('');
      onSave();
    }
  });
  const inputPlaceholder = i18n.t('Write an interpretation');
  return /*#__PURE__*/React.createElement(MessageEditorContainer, {
    currentUser: currentUser,
    dataTest: "interpretation-form"
  }, showRichTextEditor ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RichTextEditor, {
    disabled: saveMutationInProgress,
    inputPlaceholder: inputPlaceholder,
    onChange: setInterpretationText,
    value: interpretationText,
    helpText: showNoTimeDimensionHelpText ? i18n.t('Other people viewing this interpretation in the future may see more data.') : undefined
  }), /*#__PURE__*/React.createElement(MessageButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    loading: saveMutationInProgress,
    onClick: () => save({
      interpretationText
    })
  }, i18n.t('Post interpretation')), /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    disabled: saveMutationInProgress,
    onClick: () => {
      setInterpretationText('');
      setShowRichTextEditor(false);
    }
  }, i18n.t('Cancel')))) : /*#__PURE__*/React.createElement(Input, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    disabled: disabled
  }));
};
InterpretationForm.propTypes = {
  currentUser: PropTypes.object,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  showNoTimeDimensionHelpText: PropTypes.bool,
  type: PropTypes.string,
  onSave: PropTypes.func
};