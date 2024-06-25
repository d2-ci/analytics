import { useDataMutation } from '@dhis2/app-runtime';
import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import i18n from '../../locales/index.js';
import { supportedFileTypes, endpointFromFileType, labelForFileType } from './utils.js';

const getMutation = type => ({
  resource: endpointFromFileType(type),
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'delete'
});

export const DeleteDialog = _ref2 => {
  let {
    type,
    id,
    onClose,
    onDelete,
    onError
  } = _ref2;
  const mutation = useMemo(() => getMutation(type), []);
  const [mutate] = useDataMutation(mutation, {
    variables: {
      id
    },
    onError: error => {
      onError(error);
      onClose();
    },
    onComplete: () => {
      onDelete();
    }
  });
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    dataTest: "file-menu-delete-modal"
  }, /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Delete {{fileType}}', {
    fileType: labelForFileType(type)
  })), /*#__PURE__*/React.createElement(ModalContent, null, i18n.t('This {{fileType}} and related interpretations will be deleted. Continue?', {
    fileType: labelForFileType(type)
  })), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    secondary: true,
    dataTest: "file-menu-delete-modal-cancel"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: mutate,
    destructive: true,
    dataTest: "file-menu-delete-modal-delete"
  }, i18n.t('Delete')))));
};
DeleteDialog.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onError: PropTypes.func
};