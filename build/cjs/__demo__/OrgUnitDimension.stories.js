"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithoutUserOrgUnitsSelection = exports.WithoutLevelSelector = exports.WithoutLevelAndGroupSelectorWithWarningText = exports.WithoutLevelAndGroupSelector = exports.WithoutGroupSelector = exports.SingleLevel2ChildSelected = exports.RootSelected = exports.NoneSelected = exports.MultipleSelectedAcrossDifferentLevels = exports.MultipleRoots = exports.MultipleLevel2ChildrenSelected = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = _interopRequireWildcard(require("react"));
var _OrgUnitDimension = _interopRequireDefault(require("../components/OrgUnitDimension/OrgUnitDimension.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Wrapper = story => /*#__PURE__*/_react.default.createElement(_appRuntime.DataProvider, {
  baseUrl: "https://test.e2e.dhis2.org/anly-42/",
  apiVersion: "42"
}, story());
const defaultRootOrgUnits = ['ImspTQPwCqd']; // Sierra Leone
var _default = exports.default = {
  title: 'OrgUnitDimension',
  decorators: [Wrapper]
};
const NoneSelected = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.NoneSelected = NoneSelected;
NoneSelected.story = {
  name: 'None selected'
};
const RootSelected = () => {
  const [selected, setSelected] = (0, _react.useState)([{
    id: 'ImspTQPwCqd',
    path: '/ImspTQPwCqd',
    name: 'Sierra Leone'
  }]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.RootSelected = RootSelected;
RootSelected.story = {
  name: 'Root selected'
};
const SingleLevel2ChildSelected = () => {
  const [selected, setSelected] = (0, _react.useState)([{
    id: 'fdc6uOvgoji',
    path: '/ImspTQPwCqd/fdc6uOvgoji',
    name: 'Bombali'
  }]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.SingleLevel2ChildSelected = SingleLevel2ChildSelected;
SingleLevel2ChildSelected.story = {
  name: 'Single level 2 child selected'
};
const MultipleLevel2ChildrenSelected = () => {
  const [selected, setSelected] = (0, _react.useState)([{
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
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.MultipleLevel2ChildrenSelected = MultipleLevel2ChildrenSelected;
MultipleLevel2ChildrenSelected.story = {
  name: 'Multiple level 2 children selected'
};
const MultipleSelectedAcrossDifferentLevels = () => {
  const [selected, setSelected] = (0, _react.useState)([{
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
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.MultipleSelectedAcrossDifferentLevels = MultipleSelectedAcrossDifferentLevels;
MultipleSelectedAcrossDifferentLevels.story = {
  name: 'Multiple selected across different levels'
};
const MultipleRoots = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: ['O6uvpzGd5pu', 'fdc6uOvgoji'] // Bo + Bombali
  });
};
exports.MultipleRoots = MultipleRoots;
MultipleRoots.story = {
  name: 'Multiple roots'
};
const WithoutUserOrgUnitsSelection = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    hideUserOrgUnits: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.WithoutUserOrgUnitsSelection = WithoutUserOrgUnitsSelection;
WithoutUserOrgUnitsSelection.story = {
  name: 'Without user org units selection'
};
const WithoutLevelSelector = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.WithoutLevelSelector = WithoutLevelSelector;
WithoutLevelSelector.story = {
  name: 'Without level selector'
};
const WithoutGroupSelector = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.WithoutGroupSelector = WithoutGroupSelector;
WithoutGroupSelector.story = {
  name: 'Without group selector'
};
const WithoutLevelAndGroupSelector = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits
  });
};
exports.WithoutLevelAndGroupSelector = WithoutLevelAndGroupSelector;
WithoutLevelAndGroupSelector.story = {
  name: 'Without level and group selector'
};
const WithoutLevelAndGroupSelectorWithWarningText = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_OrgUnitDimension.default, {
    hideLevelSelect: true,
    hideGroupSelect: true,
    selected: selected,
    onSelect: response => setSelected(response.items),
    roots: defaultRootOrgUnits,
    warning: 'No org. units selected'
  });
};
exports.WithoutLevelAndGroupSelectorWithWarningText = WithoutLevelAndGroupSelectorWithWarningText;
WithoutLevelAndGroupSelectorWithWarningText.story = {
  name: 'Without level and group selector, with warning text'
};