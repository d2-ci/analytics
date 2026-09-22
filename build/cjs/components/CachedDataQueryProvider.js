"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCachedDataQuery = exports.CachedDataQueryProvider = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CachedDataQueryCtx = /*#__PURE__*/(0, _react.createContext)({});
const CachedDataQueryProvider = ({
  query,
  dataTransformation,
  children,
  translucent = true
}) => {
  const {
    data: rawData,
    ...rest
  } = (0, _appRuntime.useDataQuery)(query);
  const {
    error,
    loading
  } = rest;
  const data = rawData && dataTransformation ? dataTransformation(rawData) : rawData;
  if (loading) {
    return /*#__PURE__*/_react.default.createElement(_ui.Layer, {
      translucent: translucent
    }, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)));
  }
  if (error) {
    const fallbackMsg = _d2I18n.default.t('This app could not retrieve required data.');
    return /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
      error: true,
      title: _d2I18n.default.t('Network error')
    }, error.message || fallbackMsg);
  }
  return /*#__PURE__*/_react.default.createElement(CachedDataQueryCtx.Provider, {
    value: data
  }, children);
};
exports.CachedDataQueryProvider = CachedDataQueryProvider;
CachedDataQueryProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  query: _propTypes.default.object.isRequired,
  dataTransformation: _propTypes.default.func,
  translucent: _propTypes.default.bool
};
const useCachedDataQuery = () => (0, _react.useContext)(CachedDataQueryCtx);
exports.useCachedDataQuery = useCachedDataQuery;