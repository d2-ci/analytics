import { useCacheableSection, CacheableSection, useConfig } from '@dhis2/app-runtime';
import { CenteredContent, CircularLoader, CssVariables, Layer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getPWAInstallationStatus } from '../../modules/getPWAInstallationStatus.js';
const LoadingMask = () => {
  return /*#__PURE__*/React.createElement(Layer, null, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null)));
};
const CacheableSectionWrapper = _ref => {
  let {
    id,
    children,
    isParentCached
  } = _ref;
  const {
    startRecording,
    isCached,
    remove
  } = useCacheableSection(id);
  useEffect(() => {
    if (isParentCached && !isCached) {
      startRecording({
        onError: console.error
      });
    } else if (!isParentCached && isCached) {
      // Synchronize cache state on load or prop update
      // -- a back-up to imperative `removeCachedData`
      remove();
    }

    // NB: Adding `startRecording` to dependencies causes
    // an infinite recording loop as-is (probably need to memoize it)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isParentCached]);
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
export const DashboardPluginWrapper = _ref2 => {
  let {
    onInstallationStatusChange,
    children,
    cacheId,
    isParentCached,
    ...props
  } = _ref2;
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
DashboardPluginWrapper.defaultProps = {
  onInstallationStatusChange: Function.prototype
};
DashboardPluginWrapper.propTypes = {
  cacheId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  isParentCached: PropTypes.bool.isRequired,
  onInstallationStatusChange: PropTypes.func
};