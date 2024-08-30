"use strict";

var _react = require("@storybook/react");

var _react2 = _interopRequireWildcard(require("react"));

var _FixedPeriodSelect = _interopRequireDefault(require("../components/PeriodDimension/FixedPeriodSelect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react.storiesOf)('FixedPeriodSelect', module).add('No value', () => {
  const [value, setValue] = (0, _react2.useState)();
  return /*#__PURE__*/_react2.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
});
(0, _react.storiesOf)('FixedPeriodSelect', module).add('With value', () => {
  const [value, setValue] = (0, _react2.useState)('20140304');
  return /*#__PURE__*/_react2.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value
  });
});
(0, _react.storiesOf)('FixedPeriodSelect', module).add('Allowed period types', () => {
  const [value, setValue] = (0, _react2.useState)('20140304');
  return /*#__PURE__*/_react2.default.createElement(_FixedPeriodSelect.default, {
    onChange: period => setValue(period === null || period === void 0 ? void 0 : period.id),
    value: value,
    allowedPeriodTypes: ['MONTHLY', 'DAILY', 'YEARLY']
  });
});