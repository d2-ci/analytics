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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CachedDataQueryCtx = /*#__PURE__*/(0, _react.createContext)({});
const CachedDataQueryProvider = _ref => {
  let {
    query,
    dataTransformation,
    children,
    translucent = true
  } = _ref;
  const {
    data: rawData,
    error,
    loading
  } = (0, _appRuntime.useDataQuery)(query);
  const [transformedData, setTransformedData] = (0, _react.useState)(undefined);
  const [transformLoading, setTransformLoading] = (0, _react.useState)(false);
  const [transformError, setTransformError] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    let isMounted = true;
    const transform = async () => {
      if (!rawData || !dataTransformation) {
        setTransformedData(rawData);
        return;
      }
      try {
        const result = dataTransformation(rawData);
        if (result instanceof Promise) {
          setTransformLoading(true);
          const awaitedResult = await result;
          isMounted && setTransformedData(awaitedResult);
        } else {
          isMounted && setTransformedData(result);
        }
      } catch (err) {
        isMounted && setTransformError(err);
      } finally {
        isMounted && setTransformLoading(false);
      }
    };
    transform();
    return () => {
      isMounted = false;
    };
  }, [rawData, dataTransformation]);
  if (loading || transformLoading) {
    return /*#__PURE__*/_react.default.createElement(_ui.Layer, {
      translucent: translucent
    }, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)));
  }
  if (error || transformError) {
    const fallbackMsg = _d2I18n.default.t('This app could not retrieve required data.');
    return /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
      error: true,
      title: _d2I18n.default.t('Network error')
    }, (error === null || error === void 0 ? void 0 : error.message) || (transformError === null || transformError === void 0 ? void 0 : transformError.message) || fallbackMsg);
  }
  return /*#__PURE__*/_react.default.createElement(CachedDataQueryCtx.Provider, {
    value: transformedData
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