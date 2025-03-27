import _JSXStyle from "styled-jsx/style";
import { useDataMutation } from '@dhis2/app-runtime';
import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, InputField, TextAreaField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import i18n from '../../locales/index.js';
import { modalStyles } from './FileMenu.styles.js';
import { supportedFileTypes, endpointFromFileType, labelForFileType } from './utils.js';
const formatPayload = (name, description) => {
  const payload = [{
    op: 'add',
    path: '/name',
    value: name
  }];
  if (description) {
    payload.push({
      op: 'add',
      path: '/description',
      value: description
    });
  }
  return payload;
};
const getMutation = type => ({
  resource: endpointFromFileType(type),
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'json-patch',
  data: _ref2 => {
    let {
      name,
      description
    } = _ref2;
    return formatPayload(name, description);
  }
});
export const RenameDialog = _ref3 => {
  let {
    type,
    object,
    onClose,
    onRename,
    onError
  } = _ref3;
  const [name, setName] = useState(object.name);
  const [description, setDescription] = useState(object.description);
  const mutation = useMemo(() => getMutation(type), [type]);
  const [mutate, {
    loading
  }] = useDataMutation(mutation, {
    onError: error => {
      onError(error);
      onClose();
    },
    onComplete: () => {
      onRename({
        name,
        description
      });
      onClose();
    }
  });
  const renameObject = () => {
    mutate({
      id: object.id,
      name,
      description
    });
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
    disabled: loading,
    required: true,
    value: name,
    onChange: _ref4 => {
      let {
        value
      } = _ref4;
      return setName(value);
    },
    dataTest: "file-menu-rename-modal-name"
  }), /*#__PURE__*/React.createElement(TextAreaField, {
    label: i18n.t('Description'),
    disabled: loading,
    value: description,
    rows: 3,
    onChange: _ref5 => {
      let {
        value
      } = _ref5;
      return setDescription(value);
    },
    dataTest: "file-menu-rename-modal-description"
  }))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    disabled: loading,
    secondary: true,
    dataTest: "file-menu-rename-modal-cancel"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: renameObject,
    disabled: loading,
    primary: true,
    dataTest: "file-menu-rename-modal-rename"
  }, i18n.t('Rename')))));
};
RenameDialog.propTypes = {
  id: PropTypes.string,
  object: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    name: PropTypes.string
  }),
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func,
  onError: PropTypes.func,
  onRename: PropTypes.func
};