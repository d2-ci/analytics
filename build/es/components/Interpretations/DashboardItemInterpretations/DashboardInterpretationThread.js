import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { Layer, CenteredContent, CircularLoader, Button, IconChevronLeft16, NoticeBox } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { InterpretationThread } from '../InterpretationModal/InterpretationThread.js';
import { useActiveInterpretation } from '../InterpretationsProvider/hooks.js';
export const DashboardInterpretationThread = ({
  interpretationId,
  onClose,
  dashboardRedirectUrl,
  initialFocus
}) => {
  const {
    data: interpretation,
    loading,
    error
  } = useActiveInterpretation(interpretationId);
  if (loading) {
    return /*#__PURE__*/React.createElement(Layer, null, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-95761030" + " " + "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-95761030" + " " + "button-container"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    icon: /*#__PURE__*/React.createElement(IconChevronLeft16, null),
    onClick: onClose
  }, i18n.t('Back to all interpretations'))), error && /*#__PURE__*/React.createElement(NoticeBox, {
    error: true,
    title: i18n.t('Could not load interpretation details')
  }, i18n.t('The request to fetch interpretation comments failed')), interpretation && !error && /*#__PURE__*/React.createElement(InterpretationThread, {
    loading: loading,
    interpretation: interpretation,
    onInterpretationDeleted: onClose,
    initialFocus: initialFocus,
    dashboardRedirectUrl: dashboardRedirectUrl
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "95761030"
  }, [".container.jsx-95761030{padding:var(--spacers-dp16) var(--spacers-dp16) var(--spacers-dp32) var(--spacers-dp16);}", ".button-container.jsx-95761030{margin-bottom:var(--spacers-dp8);}"]));
};
DashboardInterpretationThread.propTypes = {
  interpretationId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  initialFocus: PropTypes.bool
};