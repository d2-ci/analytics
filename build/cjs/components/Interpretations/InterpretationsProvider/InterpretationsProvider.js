"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationsProvider = exports.InterpretationsContext = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _InterpretationsManager = require("./InterpretationsManager.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationsContext = exports.InterpretationsContext = /*#__PURE__*/(0, _react.createContext)(null);
const InterpretationsProvider = ({
  currentUser,
  children
}) => {
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const [interpretationsManager] = (0, _react.useState)(() => new _InterpretationsManager.InterpretationsManager(dataEngine, currentUser));
  return /*#__PURE__*/_react.default.createElement(InterpretationsContext.Provider, {
    value: interpretationsManager
  }, children);
};
exports.InterpretationsProvider = InterpretationsProvider;
InterpretationsProvider.propTypes = {
  children: _propTypes.default.node,
  currentUser: _propTypes.default.object
};