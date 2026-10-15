"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePivotTableEngine = exports.Provider = exports.PivotTableEngineContext = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableEngineContext = exports.PivotTableEngineContext = /*#__PURE__*/(0, _react.createContext)(null);
const Provider = ({
  engine,
  children
}) => {
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