"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithValue = exports.NoValue = exports.AllowedPeriodTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FixedPeriodSelect = _interopRequireDefault(require("../components/PeriodDimension/FixedPeriodSelect.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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