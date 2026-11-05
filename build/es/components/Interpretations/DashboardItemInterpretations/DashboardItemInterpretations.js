import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { InterpretationsProvider } from '../InterpretationsProvider/InterpretationsProvider.js';
import { InterpretationsUnit } from '../InterpretationsUnit/InterpretationsUnit.js';
import { DashboardInterpretationThread } from './DashboardInterpretationThread.js';
export const DashboardItemInterpretations = ({
  currentUser,
  dashboardRedirectUrl,
  id,
  type
}) => {
  const [activeInterpretationId, setActiveInterpretationId] = useState(null);
  const [initialFocus, setInitialFocus] = useState(false);
  const onInterpretationClick = useCallback(interpretationId => {
    setActiveInterpretationId(interpretationId);
  }, []);
  const onReplyIconClick = useCallback(interpretationId => {
    setActiveInterpretationId(interpretationId);
    setInitialFocus(true);
  }, []);
  const onClose = useCallback(() => {
    setActiveInterpretationId(null);
    setInitialFocus(false);
  }, []);
  return /*#__PURE__*/React.createElement(InterpretationsProvider, {
    currentUser: currentUser
  }, activeInterpretationId ? /*#__PURE__*/React.createElement(DashboardInterpretationThread, {
    interpretationId: activeInterpretationId,
    onClose: onClose,
    dashboardRedirectUrl: dashboardRedirectUrl,
    initialFocus: initialFocus
  }) : /*#__PURE__*/React.createElement(InterpretationsUnit, {
    id: id,
    type: type,
    dashboardRedirectUrl: dashboardRedirectUrl,
    onInterpretationClick: onInterpretationClick,
    onReplyIconClick: onReplyIconClick
  }));
};
DashboardItemInterpretations.propTypes = {
  currentUser: PropTypes.object.isRequired,
  dashboardRedirectUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};