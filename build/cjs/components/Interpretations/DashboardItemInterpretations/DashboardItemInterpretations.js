"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardItemInterpretations = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _InterpretationsProvider = require("../InterpretationsProvider/InterpretationsProvider.js");
var _InterpretationsUnit = require("../InterpretationsUnit/InterpretationsUnit.js");
var _DashboardInterpretationThread = require("./DashboardInterpretationThread.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DashboardItemInterpretations = ({
  currentUser,
  dashboardRedirectUrl,
  id,
  type
}) => {
  const [activeInterpretationId, setActiveInterpretationId] = (0, _react.useState)(null);
  const [initialFocus, setInitialFocus] = (0, _react.useState)(false);
  const onInterpretationClick = (0, _react.useCallback)(interpretationId => {
    setActiveInterpretationId(interpretationId);
  }, []);
  const onReplyIconClick = (0, _react.useCallback)(interpretationId => {
    setActiveInterpretationId(interpretationId);
    setInitialFocus(true);
  }, []);
  const onClose = (0, _react.useCallback)(() => {
    setActiveInterpretationId(null);
    setInitialFocus(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_InterpretationsProvider.InterpretationsProvider, {
    currentUser: currentUser
  }, activeInterpretationId ? /*#__PURE__*/_react.default.createElement(_DashboardInterpretationThread.DashboardInterpretationThread, {
    interpretationId: activeInterpretationId,
    onClose: onClose,
    dashboardRedirectUrl: dashboardRedirectUrl,
    initialFocus: initialFocus
  }) : /*#__PURE__*/_react.default.createElement(_InterpretationsUnit.InterpretationsUnit, {
    id: id,
    type: type,
    dashboardRedirectUrl: dashboardRedirectUrl,
    onInterpretationClick: onInterpretationClick,
    onReplyIconClick: onReplyIconClick
  }));
};
exports.DashboardItemInterpretations = DashboardItemInterpretations;
DashboardItemInterpretations.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  dashboardRedirectUrl: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired
};