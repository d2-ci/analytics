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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoadingMask = () => {
  return /*#__PURE__*/_react.default.createElement(_ui.Layer, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)));
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
  } = (0, _appRuntime.useCacheableSection)(id);
  (0, _react.useEffect)(() => {
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
const DashboardPluginWrapper = ({
  onInstallationStatusChange = Function.prototype,
  children,
  cacheId,
  isParentCached = false,
  ...props
}) => {
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
DashboardPluginWrapper.propTypes = {
  cacheId: _propTypes.default.string,
  children: _propTypes.default.func,
  isParentCached: _propTypes.default.bool,
  onInstallationStatusChange: _propTypes.default.func
};