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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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