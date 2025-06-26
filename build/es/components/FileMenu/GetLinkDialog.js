import _JSXStyle from "styled-jsx/style";
import { useConfig } from '@dhis2/app-runtime';
import { Modal, ModalContent, ModalActions, ButtonStrip, Button, IconCopy24 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { styles } from './GetLinkDialog.styles.js';
import { supportedFileTypes, appPathFor } from './utils.js';
export const GetLinkDialog = ({
  type,
  id,
  onClose
}) => {
  const {
    apiVersion,
    baseUrl
  } = useConfig();
  const appBaseUrl = new URL(baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`, self.location.href).href;
  const appUrl = new URL(appPathFor(type, id, apiVersion), appBaseUrl).href;
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Open in this app')), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "link-container"
  }, /*#__PURE__*/React.createElement("a", {
    href: appUrl,
    className: `jsx-${styles.__hash}`
  }, appUrl), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(IconCopy24, null),
    small: true,
    onClick: () => navigator.clipboard.writeText(appUrl),
    "aria-label": i18n.t('Copy to clipboard')
  }))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    secondary: true
  }, i18n.t('Close')))));
};
GetLinkDialog.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(supportedFileTypes),
  onClose: PropTypes.func
};