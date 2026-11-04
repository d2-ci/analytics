import _JSXStyle from "styled-jsx/style";
import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, InputField, TextAreaField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import i18n from '../../locales/index.js';
import { modalStyles } from './FileMenu.styles.js';
import { supportedFileTypes, labelForFileType } from './utils.js';
export const RenameDialog = ({
  type,
  object,
  onClose,
  onRename
}) => {
  const [name, setName] = useState(object.name);
  const [description, setDescription] = useState(object.description);
  const renameObject = () => {
    onRename({
      name,
      description
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    dataTest: "file-menu-rename-modal"
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: modalStyles.__hash
  }, modalStyles), /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Rename {{fileType}}', {
    fileType: labelForFileType(type)
  })), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${modalStyles.__hash}` + " " + "modal-content"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Name'),
    required: true,
    value: name,
    onChange: ({
      value
    }) => setName(value),
    dataTest: "file-menu-rename-modal-name"
  }), /*#__PURE__*/React.createElement(TextAreaField, {
    label: i18n.t('Description'),
    value: description,
    rows: 3,
    onChange: ({
      value
    }) => setDescription(value),
    dataTest: "file-menu-rename-modal-description"
  }))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    secondary: true,
    dataTest: "file-menu-rename-modal-cancel"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: renameObject,
    primary: true,
    dataTest: "file-menu-rename-modal-rename"
  }, i18n.t('Rename')))));
};
RenameDialog.propTypes = {
  object: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
  }),
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func,
  onRename: PropTypes.func
};