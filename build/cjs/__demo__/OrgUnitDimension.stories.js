"use strict";

var _appRuntime = require("@dhis2/app-runtime");

var _react = require("@storybook/react");

var _react2 = _interopRequireWildcard(require("react"));

var _OrgUnitDimension = _interopRequireDefault(require("../components/OrgUnitDimension/OrgUnitDimension.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Wrapper = story => /*#__PURE__*/_react2.default.createElement(_appRuntime.DataProvider, {
  baseUrl: "https://debug.dhis2.org/analytics-dev/",
  apiVersion: ""
}, story());

const defaultRootOrgUnits = ['ImspTQPwCqd']; // Sierra Leone

(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('None selected', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Root selected', () => {
  const [selected, setSelected] = (0, _react2.useState)([{
    id: 'ImspTQPwCqd',
    path: '/ImspTQPwCqd',
    name: 'Sierra Leone'
  }]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Single level 2 child selected', () => {
  const [selected, setSelected] = (0, _react2.useState)([{
    id: 'fdc6uOvgoji',
    path: '/ImspTQPwCqd/fdc6uOvgoji',
    name: 'Bombali'
  }]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Multiple level 2 children selected', () => {
  const [selected, setSelected] = (0, _react2.useState)([{
    id: 'O6uvpzGd5pu',
    path: '/ImspTQPwCqd/O6uvpzGd5pu',
    name: 'Bo'
  }, {
    id: 'fdc6uOvgoji',
    path: '/ImspTQPwCqd/fdc6uOvgoji',
    name: 'Bombali'
  }, {
    id: 'lc3eMKXaEfw',
    path: '/ImspTQPwCqd/lc3eMKXaEfw',
    name: 'Bonthe'
  }]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Multiple selected across different levels', () => {
  const [selected, setSelected] = (0, _react2.useState)([{
    id: 'fdc6uOvgoji',
    path: '/ImspTQPwCqd/fdc6uOvgoji',
    name: 'Bombali'
  }, {
    id: 'KKkLOTpMXGV',
    path: '/ImspTQPwCqd/fdc6uOvgoji/KKkLOTpMXGV',
    name: 'Bombali Sebora'
  }, {
    id: 'GQcsUZf81vP',
    path: '/ImspTQPwCqd/fdc6uOvgoji/KKkLOTpMXGV/GQcsUZf81vP',
    name: 'Govt. Hosp. Makeni'
  }]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Multiple roots', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: ['O6uvpzGd5pu', 'fdc6uOvgoji'] // Bo + Bombali

  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Without user org units selection', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    hideUserOrgUnits: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Without level selector', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Without group selector', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Without level and group selector', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
});
(0, _react.storiesOf)('OrgUnitDimension', module).addDecorator(Wrapper).add('Without level and group selector, with warning text', () => {
  const [selected, setSelected] = (0, _react2.useState)([]);
  return /*#__PURE__*/_react2.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits,
    warning: 'No org. units selected'
  });
});