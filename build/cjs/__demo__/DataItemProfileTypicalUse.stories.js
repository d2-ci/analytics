"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TypicalUse = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useDataItemProfiles = require("../components/DataItemProfile/useDataItemProfiles.js");
var _DataItemProfileReference = require("./DataItemProfile.reference.js");
var _DataItemProfileShared = require("./DataItemProfile.shared.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'DataItemProfile/Typical use in Data Visualizer',
  decorators: [_DataItemProfileShared.Wrapper]
};
const STEPS = [['The user picks data items: DV loads their profiles, and where their data sets are assigned under the org units.', 'useDataItemProfiles(items, { orgUnits })'], ['The pickers mark each period type and each org unit level for those items.', "getDataItemCompatibility(itemId, { periods: [periodType], orgUnits: [boundary, 'LEVEL-n'] })"], ['Periods and org units selected, before Update: DV checks them, from current metadata only.', 'getDataItemCompatibility(itemId, { periods, orgUnits })']];

// The period types the picker offers in this demo, shortest first
const PICKER_PERIOD_TYPES = ['Daily', 'Weekly', 'WeeklyWednesday', 'BiWeekly', 'Monthly', 'Quarterly', 'SixMonthly', 'Yearly', 'FinancialApril'];

// The types of the data sets that can't fill the period: compatible with none
const getTypesLeftOut = ({
  sources
}, profile) => [...new Set(sources.map(({
  status
}, i) => {
  var _profile$sources$i$da;
  return status === 'none' ? (_profile$sources$i$da = profile.sources[i].dataSet) === null || _profile$sources$i$da === void 0 ? void 0 : _profile$sources$i$da.periodType : null;
}).filter(Boolean))];

// What DV could say about an item, for one period
const adviceFor = (result, profile) => {
  const {
    status,
    reasons
  } = result;
  const typesLeftOut = getTypesLeftOut(result, profile).join(' and ');
  switch (status) {
    case 'full':
      if (reasons.includes('CARRIED')) {
        return 'Shown, from an earlier data period.';
      }
      return reasons.includes('AVERAGED') ? 'Shown, repeated from the data period that holds it.' : 'Shown.';
    case 'partial':
      return reasons.includes('OPERAND_PARTIAL') ? 'Shown, but computed from incomplete data: it can be off either way.' : `Partly shown: the ${typesLeftOut} data can’t fill this period.`;
    case 'none':
      if (reasons.includes('REPORTING_RATE')) {
        return 'Not shown: a reporting rate can’t be shown by this period.';
      }
      if (reasons.includes('NOTHING_TO_CARRY')) {
        return 'Not shown: no earlier value in these years.';
      }
      return `Not shown: collected ${typesLeftOut}.`;
    default:
      return 'Can’t tell.';
  }
};
const PeriodTypeMarks = ({
  items,
  getDataItemCompatibility
}) => /*#__PURE__*/_react.default.createElement("table", {
  className: "profiles"
}, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Period type"), items.map(({
  id,
  name
}) => /*#__PURE__*/_react.default.createElement("th", {
  key: id
}, name)))), /*#__PURE__*/_react.default.createElement("tbody", null, PICKER_PERIOD_TYPES.map(periodType => /*#__PURE__*/_react.default.createElement("tr", {
  key: periodType
}, /*#__PURE__*/_react.default.createElement("td", null, periodType), items.map(({
  id
}) => /*#__PURE__*/_react.default.createElement("td", {
  key: id
}, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, getDataItemCompatibility(id, {
  periods: [periodType]
}))))))));
const formatCount = count => count.toLocaleString('en');

// What DV could say about an item, for one org unit selection item
const orgUnitAdviceFor = ({
  status,
  reasons,
  coverage
}, levels) => {
  var _levels$find;
  const levelName = coverage && ((_levels$find = levels.find(({
    level
  }) => level === coverage.level)) === null || _levels$find === void 0 ? void 0 : _levels$find.name);
  const counted = coverage && `${formatCount(coverage.assigned)} of ${formatCount(coverage.total)} units at level ${levelName !== null && levelName !== void 0 ? levelName : coverage.level}`;
  switch (status) {
    case 'full':
      return reasons.includes('PARTLY_ASSIGNED') ? `Shown: assigned to ${counted}; the others don’t collect it.` : `Shown: assigned to ${counted}.`;
    case 'partial':
      return reasons.includes('OPERAND_PARTIAL') ? 'Shown, but computed from incomplete data: it can be off either way.' : 'Partly shown: data entered at a higher level is left out.';
    case 'none':
      return reasons.includes('BELOW_COLLECTION') ? 'Not shown: entered at a higher level.' : 'Not shown: its data sets aren’t assigned here.';
    default:
      return reasons.includes('EVENT_DATA') ? 'Can’t tell for event data yet.' : 'Can’t tell.';
  }
};
const OrgUnitLevelMarks = ({
  items,
  levels,
  getDataItemCompatibility
}) => /*#__PURE__*/_react.default.createElement("table", {
  className: "profiles"
}, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Level"), items.map(({
  id,
  name
}) => /*#__PURE__*/_react.default.createElement("th", {
  key: id
}, name)))), /*#__PURE__*/_react.default.createElement("tbody", null, levels.map(({
  level,
  name
}) => /*#__PURE__*/_react.default.createElement("tr", {
  key: level
}, /*#__PURE__*/_react.default.createElement("td", null, name), items.map(({
  id
}) => /*#__PURE__*/_react.default.createElement("td", {
  key: id
}, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, getDataItemCompatibility(id, {
  orgUnits: [_DataItemProfileShared.SIERRA_LEONE, `LEVEL-${level}`]
}).orgUnits[0])))))));
OrgUnitLevelMarks.propTypes = {
  getDataItemCompatibility: _propTypes.default.func,
  items: _propTypes.default.array,
  levels: _propTypes.default.array
};
PeriodTypeMarks.propTypes = {
  getDataItemCompatibility: _propTypes.default.func,
  items: _propTypes.default.array
};

// One column per dimension
const Columns = ({
  period,
  orgUnit
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-2882414800" + " " + "columns"
}, /*#__PURE__*/_react.default.createElement("section", {
  className: "jsx-2882414800"
}, /*#__PURE__*/_react.default.createElement("h4", {
  className: "jsx-2882414800"
}, "Period"), period), /*#__PURE__*/_react.default.createElement("section", {
  className: "jsx-2882414800"
}, /*#__PURE__*/_react.default.createElement("h4", {
  className: "jsx-2882414800"
}, "Org unit"), orgUnit !== null && orgUnit !== void 0 ? orgUnit : /*#__PURE__*/_react.default.createElement("p", {
  className: "jsx-2882414800"
}, "Coming soon.")), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2882414800"
}, [".columns.jsx-2882414800{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}", "h4.jsx-2882414800{margin-block:0 8px;font-size:14px;color:#4a5768;}", "section.jsx-2882414800+section.jsx-2882414800{border-inline-start:1px solid #d5dde5;padding-inline-start:16px;}"]));
Columns.propTypes = {
  orgUnit: _propTypes.default.node,
  period: _propTypes.default.node
};
const TypicalUse = () => {
  const [selectedIds, setSelectedIds] = (0, _react.useState)(['fbfJHSPpUQD', 'Uvn6LCg7dVU', 'YazgqXbizv1']);
  const [periodsText, setPeriodsText] = (0, _react.useState)('2025W2');
  const [orgUnitsText, setOrgUnitsText] = (0, _react.useState)(_DataItemProfileShared.SIERRA_LEONE);
  const items = (0, _react.useMemo)(() => _DataItemProfileShared.ITEMS.filter(({
    id
  }) => selectedIds.includes(id)), [selectedIds]);
  const periods = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(periodsText), [periodsText]);
  const orgUnits = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(orgUnitsText), [orgUnitsText]);
  // The country, for the levels in the picker, and the units selected
  const loadedOrgUnits = (0, _react.useMemo)(() => [...new Set([_DataItemProfileShared.SIERRA_LEONE, ...orgUnits])], [orgUnits]);
  const {
    loading,
    error,
    profiles,
    orgUnitCoverage,
    getDataItemCompatibility
  } = (0, _useDataItemProfiles.useDataItemProfiles)(items, {
    orgUnits: loadedOrgUnits
  });
  const toggle = id => setSelectedIds(ids => ids.includes(id) ? ids.filter(other => other !== id) : [...ids, id]);
  return /*#__PURE__*/_react.default.createElement("div", null, _DataItemProfileShared.tableStyle, /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.ScenarioPanel, {
    title: "A user builds a chart in Data Visualizer",
    steps: STEPS
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Data items"), _DataItemProfileShared.ITEMS.map(({
    id,
    name
  }) => /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    key: id,
    label: name,
    checked: selectedIds.includes(id),
    onChange: () => toggle(id)
  })), loading && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Loading, null), error && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.ErrorNotice, {
    error: error
  }), profiles && items.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", null, "Pickers"), /*#__PURE__*/_react.default.createElement(Columns, {
    period: /*#__PURE__*/_react.default.createElement(PeriodTypeMarks, {
      items: items,
      getDataItemCompatibility: getDataItemCompatibility
    }),
    orgUnit: orgUnitCoverage ? /*#__PURE__*/_react.default.createElement(OrgUnitLevelMarks, {
      items: items,
      levels: orgUnitCoverage.levels,
      getDataItemCompatibility: getDataItemCompatibility
    }) : /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Loading, null)
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Selected, before Update"), /*#__PURE__*/_react.default.createElement(Columns, {
    period: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "inputs"
    }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
      label: "Fixed or relative periods",
      value: periodsText,
      onChange: ({
        value
      }) => setPeriodsText(value)
    })), /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
      title: "Derived from current metadata only"
    }, "Past data may have been collected with a different configuration."), /*#__PURE__*/_react.default.createElement("table", {
      className: "profiles"
    }, /*#__PURE__*/_react.default.createElement("tbody", null, items.map(({
      id,
      name
    }) => {
      var _getDataItemCompatibi;
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: id
      }, /*#__PURE__*/_react.default.createElement("td", null, name), /*#__PURE__*/_react.default.createElement("td", null, (_getDataItemCompatibi = getDataItemCompatibility(id, {
        periods
      })) === null || _getDataItemCompatibi === void 0 ? void 0 : _getDataItemCompatibi.periods.map(result => /*#__PURE__*/_react.default.createElement("div", {
        key: result.id
      }, /*#__PURE__*/_react.default.createElement("code", null, result.id), ' ', /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result), ' ', adviceFor(result, profiles[id]), ' '))));
    })))),
    orgUnit: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "inputs"
    }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
      label: "Org units: ids, LEVEL-n, OU_GROUP-id, USER_ORGUNIT\u2026",
      value: orgUnitsText,
      onChange: ({
        value
      }) => setOrgUnitsText(value)
    })), /*#__PURE__*/_react.default.createElement("table", {
      className: "profiles"
    }, /*#__PURE__*/_react.default.createElement("tbody", null, items.map(({
      id,
      name
    }) => {
      var _getDataItemCompatibi2;
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: id
      }, /*#__PURE__*/_react.default.createElement("td", null, name), /*#__PURE__*/_react.default.createElement("td", null, orgUnitCoverage ? (_getDataItemCompatibi2 = getDataItemCompatibility(id, {
        orgUnits
      })) === null || _getDataItemCompatibi2 === void 0 || (_getDataItemCompatibi2 = _getDataItemCompatibi2.orgUnits) === null || _getDataItemCompatibi2 === void 0 ? void 0 : _getDataItemCompatibi2.map(result => /*#__PURE__*/_react.default.createElement("div", {
        key: result.id
      }, /*#__PURE__*/_react.default.createElement("code", null, result.id), ' ', /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result), ' ', orgUnitAdviceFor(result, orgUnitCoverage.levels))) : null));
    }))))
  })));
};
exports.TypicalUse = TypicalUse;
TypicalUse.storyName = 'Typical use in Data Visualizer';