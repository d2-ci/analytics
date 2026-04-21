"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationSharingLink = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationSharingLink = ({
  type,
  id
}) => {
  const [showSharingDialog, setShowSharingDialog] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3323593508" + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    onClick: () => setShowSharingDialog(true)
  }, _d2I18n.default.t('Manage sharing'))), showSharingDialog && /*#__PURE__*/_react.default.createElement(_ui.SharingDialog, {
    open: true,
    type: type,
    id: id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3323593508"
  }, [".container.jsx-3323593508{margin-inline-start:auto;}"]));
};
exports.InterpretationSharingLink = InterpretationSharingLink;
InterpretationSharingLink.propTypes = {
  id: _propTypes.default.string,
  type: _propTypes.default.string
};