"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithValue = exports.NoValue = exports.AllowedPeriodTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FixedPeriodSelect = _interopRequireDefault(require("../components/PeriodDimension/FixedPeriodSelect.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var _default = exports.default = {
  title: 'FixedPeriodSelect'
};
const NoValue = () => {
  const [value, setValue] = (0, _react.useState)();
  return /*#__PURE__*/_react.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
};
exports.NoValue = NoValue;
NoValue.story = {
  name: 'No value'
};
const WithValue = () => {
  const [value, setValue] = (0, _react.useState)('20140304');
  return /*#__PURE__*/_react.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
};
exports.WithValue = WithValue;
WithValue.story = {
  name: 'With value'
};
const AllowedPeriodTypes = () => {
  const [value, setValue] = (0, _react.useState)('20140304');
  return /*#__PURE__*/_react.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value,
    allowedPeriodTypes: ['MONTHLY', 'DAILY', 'YEARLY']
  });
};
exports.AllowedPeriodTypes = AllowedPeriodTypes;
AllowedPeriodTypes.story = {
  name: 'Allowed period types'
};