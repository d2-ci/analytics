import { useCacheableSection, CacheableSection, useConfig } from '@dhis2/app-runtime';
import { CenteredContent, CircularLoader, CssVariables, Layer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getPWAInstallationStatus } from '../../modules/getPWAInstallationStatus.js';
const LoadingMask = () => {
  return /*#__PURE__*/React.createElement(Layer, null, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null)));
};
const CacheableSectionWrapper = ({
  id,
  children,
  isParentCached = false
}) => {
  const {
    startRecording,
    isCached,
    remove
  } = useCacheableSection(id);
  useEffect(() => {
    const shouldStartRecording = isParentCached && !isCached;
    const shouldRemove = !isParentCached && isCached;
    if (shouldStartRecording) {
      startRecording({
        onError: console.error
      });
    }
    if (shouldRemove) {
      // Synchronize cache state on load or prop update
      // -- a back-up to imperative `removeCachedData`
      remove();
    }
  }, [isCached, isParentCached, remove, startRecording]);
  return /*#__PURE__*/React.createElement(CacheableSection, {
    id: id,
    loadingMask: /*#__PURE__*/React.createElement(LoadingMask, null)
  }, children);
};
CacheableSectionWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isParentCached: PropTypes.bool
};
export const DashboardPluginWrapper = ({
  onInstallationStatusChange = Function.prototype,
  children,
  cacheId,
  isParentCached = false,
  ...props
}) => {
  const {
    pwaEnabled
  } = useConfig();
  useEffect(() => {
    // Get & send PWA installation status now
    getPWAInstallationStatus({
      onStateChange: onInstallationStatusChange
    }).then(onInstallationStatusChange);
  }, [onInstallationStatusChange]);
  return props ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      overflow: 'hidden'
    }
  }, pwaEnabled ? /*#__PURE__*/React.createElement(CacheableSectionWrapper, {
    id: cacheId,
    isParentCached: isParentCached
  }, children(props)) : children(props), /*#__PURE__*/React.createElement(CssVariables, {
    colors: true,
    spacers: true,
    elevations: true
  })) : null;
};
DashboardPluginWrapper.propTypes = {
  cacheId: PropTypes.string,
  children: PropTypes.func,
  isParentCached: PropTypes.bool,
  onInstallationStatusChange: PropTypes.func
};