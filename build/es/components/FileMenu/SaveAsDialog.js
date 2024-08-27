import _JSXStyle from "styled-jsx/style";
import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, InputField, TextAreaField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import i18n from '../../locales/index.js';
import { modalStyles } from './FileMenu.styles.js';
import { supportedFileTypes, labelForFileType } from './utils.js';
const NAME_MAXLENGTH = 230;
export const SaveAsDialog = _ref => {
  let {
    type,
    object,
    onClose,
    onSaveAs
  } = _ref;
  const [name, setName] = useState(object !== null && object !== void 0 && object.displayName || object !== null && object !== void 0 && object.name ? i18n.t('{{- objectName}} (copy)', {
    objectName: object.name
  }) : '');
  const [description, setDescription] = useState(object === null || object === void 0 ? void 0 : object.description);

  // the actual API request is done in the app
  const saveObjectAs = () => {
    onSaveAs({
      name,
      description
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    dataTest: "file-menu-saveas-modal"
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: modalStyles.__hash
  }, modalStyles), /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Save {{fileType}} as', {
    fileType: labelForFileType(type)
  })), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${modalStyles.__hash}` + " " + "modal-content"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Name'),
    value: name,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setName(value.substring(0, NAME_MAXLENGTH));
    },
    dataTest: "file-menu-saveas-modal-name"
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
    dataTest: "file-menu-saveas-modal-description"
  }))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    secondary: true,
    dataTest: "file-menu-saveas-modal-cancel"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: saveObjectAs,
    primary: true,
    dataTest: "file-menu-saveas-modal-save"
  }, i18n.t('Save')))));
};
SaveAsDialog.propTypes = {
  object: PropTypes.shape({
    description: PropTypes.string,
    displayName: PropTypes.string,
    name: PropTypes.string
  }),
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func,
  onSaveAs: PropTypes.func
};