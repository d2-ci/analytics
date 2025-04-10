import _JSXStyle from "styled-jsx/style";
// import { useDataMutation } from '@dhis2/app-runtime'
import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, InputField, TextAreaField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import i18n from '../../locales/index.js';
import { getDisplayNameByVisType } from '../../modules/visTypes.js';
import { modalStyles } from './FileMenu.styles.js';
import { supportedFileTypes, labelForFileType } from './utils.js';
const getDefaultVisName = visualization => {
  console.log('jj visualization', visualization);
  if (!visualization) {
    return i18n.t('Untitled visualization');
  }
  const visualizationType = getDisplayNameByVisType(visualization.type);
  const dateFormat = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };
  const date = visualization.created ? new Date(visualization.created).toLocaleDateString(undefined, dateFormat) : new Date().toLocaleDateString(undefined, dateFormat);
  return i18n.t('Untitled {{visualizationType}} visualization, {{date}}', {
    visualizationType,
    date
  });
};
export const RenameDialog = _ref => {
  let {
    type,
    object,
    onClose,
    onRename
  } = _ref;
  const defaultVisName = getDefaultVisName(object);
  console.log('jj defaultVisName', defaultVisName);
  const [name, setName] = useState(object.name);
  const [description, setDescription] = useState(object.description);
  const renameObject = () => {
    onRename({
      name: name || defaultVisName,
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
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setName(value);
    },
    dataTest: "file-menu-rename-modal-name",
    placeholder: defaultVisName
  }), /*#__PURE__*/React.createElement(TextAreaField, {
    label: i18n.t('Description'),
    value: description,
    rows: 3,
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return setDescription(value);
    },
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
    name: PropTypes.string
  }),
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func,
  onRename: PropTypes.func
};