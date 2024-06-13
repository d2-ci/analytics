import { useDhis2ConnectionStatus } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button, ButtonStrip, ModalActions } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { OfflineTooltip } from '../../OfflineTooltip.js';
const SaveButton = _ref => {
  let {
    disabled,
    loading,
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onClick,
    loading: loading,
    disabled: disabled
  }, i18n.t('Save translations'));
};
SaveButton.defaultProps = {
  disabled: false,
  loading: false,
  onClick: Function.prototype
};
SaveButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export const TranslationModalActions = _ref2 => {
  let {
    onClose,
    onSave,
    saveInProgress,
    saveButtonDisabled
  } = _ref2;
  const {
    isDisconnected: offline
  } = useDhis2ConnectionStatus();
  return /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: onClose
  }, i18n.t('Cancel')), offline ? /*#__PURE__*/React.createElement(OfflineTooltip, {
    content: i18n.t('Cannot save while offline')
  }, /*#__PURE__*/React.createElement(SaveButton, {
    disabled: true
  })) : /*#__PURE__*/React.createElement(SaveButton, {
    onClick: onSave,
    loading: saveInProgress,
    disabled: saveButtonDisabled
  })));
};
TranslationModalActions.propTypes = {
  onClose: PropTypes.func.isRequired,
  saveButtonDisabled: PropTypes.bool,
  saveInProgress: PropTypes.bool,
  onSave: PropTypes.func
};