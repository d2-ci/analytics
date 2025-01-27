import i18n from '@dhis2/d2-i18n';
import { CenteredContent, CircularLoader, Modal, ModalContent, ModalTitle } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { TranslationForm } from './TranslationForm.js';
import { TranslationModalActions } from './TranslationModalActions.js';
import { useTranslationsResults } from './useTranslationsResults.js';
export const TranslationModal = _ref => {
  let {
    objectToTranslate,
    fieldsToTranslate,
    onClose,
    onTranslationSaved
  } = _ref;
  const [translations, setTranslations] = useState([]);
  const endpointPath = new URL(objectToTranslate.href).pathname;
  const endpointPathMatch = endpointPath.match(/api\/\d+\/(?<resource>.+)/);
  const resource = endpointPathMatch !== null && endpointPathMatch !== void 0 && endpointPathMatch.groups ? endpointPathMatch.groups.resource : null;
  const {
    translationsData,
    fetching
  } = useTranslationsResults({
    resource
  });
  useEffect(() => {
    if (translationsData) {
      setTranslations(translationsData);
    }
  }, [translationsData]);
  return /*#__PURE__*/React.createElement(Modal, {
    large: true,
    position: "middle",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Translate: {{objectName}}', {
    objectName: objectToTranslate.name || 'TEXT',
    // XXX
    nsSeparator: '^^'
  })), fetching ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null))), /*#__PURE__*/React.createElement(TranslationModalActions, {
    onClose: onClose,
    saveButtonDisabled: true
  })) : /*#__PURE__*/React.createElement(TranslationForm, {
    fieldsToTranslate: fieldsToTranslate,
    objectToTranslate: objectToTranslate,
    translations: translations,
    onTranslationSaved: onTranslationSaved,
    resource: resource,
    onClose: onClose
  }));
};
TranslationModal.propTypes = {
  fieldsToTranslate: PropTypes.array.isRequired,
  objectToTranslate: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onTranslationSaved: PropTypes.func.isRequired
};