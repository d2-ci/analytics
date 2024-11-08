"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePivotTableEngine = exports.Provider = exports.PivotTableEngineContext = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableEngineContext = exports.PivotTableEngineContext = /*#__PURE__*/(0, _react.createContext)(null);
const Provider = _ref => {
  let {
    engine,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(PivotTableEngineContext.Provider, {
    value: engine
  }, children);
};
exports.Provider = Provider;
Provider.propTypes = {
  engine: _propTypes.default.object.isRequired,
  children: _propTypes.default.node
};
const usePivotTableEngine = () => {
  return (0, _react.useContext)(PivotTableEngineContext);
};
exports.usePivotTableEngine = usePivotTableEngine;