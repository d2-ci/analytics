"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardPluginWrapper = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _getPWAInstallationStatus = require("../../modules/getPWAInstallationStatus.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoadingMask = () => {
  return /*#__PURE__*/_react.default.createElement(_ui.Layer, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)));
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
  } = (0, _appRuntime.useCacheableSection)(id);
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement(_appRuntime.CacheableSection, {
    id: id,
    loadingMask: /*#__PURE__*/_react.default.createElement(LoadingMask, null)
  }, children);
};
CacheableSectionWrapper.propTypes = {
  children: _propTypes.default.node,
  id: _propTypes.default.string,
  isParentCached: _propTypes.default.bool
};
const DashboardPluginWrapper = _ref2 => {
  let {
    onInstallationStatusChange,
    children,
    cacheId,
    isParentCached,
    ...props
  } = _ref2;
  const {
    pwaEnabled
  } = (0, _appRuntime.useConfig)();
  (0, _react.useEffect)(() => {
    // Get & send PWA installation status now
    (0, _getPWAInstallationStatus.getPWAInstallationStatus)({
      onStateChange: onInstallationStatusChange
    }).then(onInstallationStatusChange);
  }, [onInstallationStatusChange]);
  return props ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      overflow: 'hidden'
    }
  }, pwaEnabled ? /*#__PURE__*/_react.default.createElement(CacheableSectionWrapper, {
    id: cacheId,
    isParentCached: isParentCached
  }, children(props)) : children(props), /*#__PURE__*/_react.default.createElement(_ui.CssVariables, {
    colors: true,
    spacers: true,
    elevations: true
  })) : null;
};
exports.DashboardPluginWrapper = DashboardPluginWrapper;
DashboardPluginWrapper.defaultProps = {
  isParentCached: false,
  onInstallationStatusChange: Function.prototype
};
DashboardPluginWrapper.propTypes = {
  cacheId: _propTypes.default.string,
  children: _propTypes.default.func,
  isParentCached: _propTypes.default.bool,
  onInstallationStatusChange: _propTypes.default.func
};