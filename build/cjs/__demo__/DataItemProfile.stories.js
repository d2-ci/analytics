"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Periods = exports.OrgUnits = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useDataItemProfiles = require("../components/DataItemProfile/useDataItemProfiles.js");
var _orgUnitSelection = require("../modules/dataItemProfile/orgUnits/orgUnitSelection.js");
var _DataItemProfileReference = require("./DataItemProfile.reference.js");
var _DataItemProfileShared = require("./DataItemProfile.shared.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'DataItemProfile/Hooks',
  decorators: [_DataItemProfileShared.Wrapper]
}; // The status table with one example column: periods or org units
const statusReference = (exampleColumn, exampleIndex) => ({
  title: 'Compatibility statuses',
  columns: ['Status', 'Meaning', exampleColumn],
  rows: _DataItemProfileReference.STATUS_DEFINITIONS.map(([status, meaning, ...examples]) => [status, meaning, examples[exampleIndex]])
});

// Event data comes from programs: it is placed in any period by its dates
const isPlacedByDate = profile => !profile.unknown && profile.sources.every(({
  program
}) => program);
const listWithSeveral = ({
  hasSeveral
}, values) => `${values.join(', ')}${hasSeveral ? ' (several)' : ''}`;
const describePeriodTypes = profile => {
  const {
    assignedPeriodTypes
  } = profile;
  if (assignedPeriodTypes.types.length) {
    return listWithSeveral(assignedPeriodTypes, assignedPeriodTypes.types);
  }
  return isPlacedByDate(profile) ? 'Event dates' : 'Unknown';
};
const describeShortestDirectType = profile => {
  if (profile.assignedPeriodTypes.shortestDirectType) {
    return profile.assignedPeriodTypes.shortestDirectType;
  }
  return isPlacedByDate(profile) ? 'Any' : 'Unknown';
};

// The levels its data sets and programs are assigned at, deepest first
const describeLevels = ({
  assignedOrgUnitLevels
}) => assignedOrgUnitLevels !== null && assignedOrgUnitLevels !== void 0 && assignedOrgUnitLevels.levels.length ? listWithSeveral(assignedOrgUnitLevels, assignedOrgUnitLevels.levels) : '–';

/* How many org units at the deepest level assigned the data sets are
 * assigned to, of how many when the coverage counted them */
const Assignment = ({
  assignment
}) => assignment ? /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-2884615928"
}, assignment.assigned.toLocaleString('en'), assignment.total !== undefined && ` of ${assignment.total.toLocaleString('en')}`, ' ', "at level ", assignment.level, /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Assignment.propTypes = {
  assignment: _propTypes.default.object
};

// The item's name, its status when the profile is unknown, and the profile as JSON
const ItemCells = ({
  name,
  profile
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, name, profile.unknown && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, {
  status: "unknown",
  reasons: profile.reasons.map(({
    code
  }) => code)
}))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("details", null, /*#__PURE__*/_react.default.createElement("summary", null, "Show"), /*#__PURE__*/_react.default.createElement("pre", {
  className: "json"
}, JSON.stringify(profile, null, 2)))));
ItemCells.propTypes = {
  name: _propTypes.default.string,
  profile: _propTypes.default.object
};

// What a story judges is judged alone: this says so above its table
const AloneNote = ({
  children
}) => /*#__PURE__*/_react.default.createElement("p", {
  className: "jsx-1036927177"
}, children, /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "1036927177"
}, ["p.jsx-1036927177{max-inline-size:900px;font-size:13px;color:#4a5768;}"]));
AloneNote.propTypes = {
  children: _propTypes.default.node
};
const PERIOD_EXAMPLES = 0;
const ORG_UNIT_EXAMPLES = 1;
const Periods = () => {
  var _relativePeriodTypes$, _relativePeriodTypes$2;
  const [periodsText, setPeriodsText] = (0, _react.useState)('2025W2, 202501, 2025Q1, 2025, LAST_12_MONTHS, LAST_4_WEEKS, Weekly');
  const periods = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(periodsText), [periodsText]);
  // No org units: periods need no request beyond the metadata
  const {
    loading,
    error,
    profiles,
    relativePeriodTypes,
    getDataItemCompatibility
  } = (0, _useDataItemProfiles.useDataItemProfiles)(_DataItemProfileShared.ITEMS);
  return /*#__PURE__*/_react.default.createElement("div", null, _DataItemProfileShared.tableStyle, /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.ApiPanel, {
    signature: "useDataItemProfiles(items) \u2192 getDataItemCompatibility(itemId, { periods })",
    runs: "When the items change (metadata only); periods are judged on each call, with no request",
    input: "items: [{ id, dimensionItemType }], as in a visualization's dx items; periods: fixed ids, relative ids or period types",
    summary: "For each data item: the period types its data sets are assigned at, and whether each period will return all its values.",
    basedOn: "Metadata only (each element's data sets and their period types, aggregation types, indicator expressions), the server's weekly and financial year settings, its calendar and version. No analytics request.",
    returns: "getDataItemCompatibility(itemId, { periods }).periods: [{ id, periodTypes, status, reasons, alignsWithData, sources }]",
    uses: "fetchDataItemProfileMetadata, getDataItemProfile, getDataItemProfilePeriodCompatibility",
    references: [statusReference('Example', PERIOD_EXAMPLES), {
      title: 'Period reasons (none: added up for the period)',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: _DataItemProfileReference.PERIOD_REASON_DEFINITIONS
    }]
  }), /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.DemoHeading, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "inputs"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: "Periods: fixed ids, relative ids or period types",
    value: periodsText,
    onChange: ({
      value
    }) => setPeriodsText(value),
    inputWidth: "600px"
  })), loading && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Loading, null), error && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(AloneNote, null, "Each period is judged alone, over all the item\u2019s data sets and programs, whatever the org units: where they are assigned isn\u2019t read here. Relative weeks:", ' ', (_relativePeriodTypes$ = relativePeriodTypes.weeklyPeriodType) !== null && _relativePeriodTypes$ !== void 0 ? _relativePeriodTypes$ : 'unknown', ". Relative financial years:", ' ', (_relativePeriodTypes$2 = relativePeriodTypes.financialYearPeriodType) !== null && _relativePeriodTypes$2 !== void 0 ? _relativePeriodTypes$2 : 'unknown', "."), /*#__PURE__*/_react.default.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 3,
    className: "group"
  }, "Profile ", /*#__PURE__*/_react.default.createElement("code", null, "getDataItemProfile")), periods.length > 0 && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: periods.length,
    className: "group"
  }, "Each period", ' ', /*#__PURE__*/_react.default.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "JSON"), /*#__PURE__*/_react.default.createElement("th", null, "Period types"), /*#__PURE__*/_react.default.createElement("th", null, "Shortest direct type"), periods.map(period => /*#__PURE__*/_react.default.createElement("th", {
    key: period
  }, period)))), /*#__PURE__*/_react.default.createElement("tbody", null, _DataItemProfileShared.ITEMS.map(({
    id,
    name
  }) => {
    const profile = profiles[id];
    const {
      periods: results
    } = getDataItemCompatibility(id, {
      periods
    });
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: id
    }, /*#__PURE__*/_react.default.createElement(ItemCells, {
      name: name,
      profile: profile
    }), /*#__PURE__*/_react.default.createElement("td", null, describePeriodTypes(profile)), /*#__PURE__*/_react.default.createElement("td", null, describeShortestDirectType(profile)), results.map(result => /*#__PURE__*/_react.default.createElement("td", {
      key: result.id
    }, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result))));
  })))));
};
exports.Periods = Periods;
Periods.storyName = 'Periods';

// Org unit selections to try, one per kind of selection item
const ORG_UNIT_SCENARIOS = [['Org units', `${_DataItemProfileShared.SIERRA_LEONE}, ${_DataItemProfileShared.BO}, ${_DataItemProfileShared.JUNCTIONLA_MCHP}, USER_ORGUNIT_CHILDREN`], ['Levels in Bo', `${_DataItemProfileShared.BO}, LEVEL-3, LEVEL-4`], ['District group', 'OU_GROUP-w1Atoz18PCL'], ['Clinic group in Bo', `${_DataItemProfileShared.BO}, OU_GROUP-RXL3lPSK8oG`]];
const OrgUnits = () => {
  // Typed org units apply on blur: each change sends requests
  const [orgUnitsText, setOrgUnitsText] = (0, _react.useState)(ORG_UNIT_SCENARIOS[0][1]);
  const [orgUnitsDraft, setOrgUnitsDraft] = (0, _react.useState)(orgUnitsText);
  const applyOrgUnits = text => {
    setOrgUnitsDraft(text);
    setOrgUnitsText(text);
  };
  const orgUnits = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(orgUnitsText), [orgUnitsText]);
  const orgUnitItems = (0, _orgUnitSelection.readOrgUnitSelection)(orgUnits).selectionItems.map(({
    id
  }) => id);
  const [withAssignmentTotals, setWithAssignmentTotals] = (0, _react.useState)(false);
  const {
    loading,
    error,
    profiles,
    getDataItemCompatibility
  } = (0, _useDataItemProfiles.useDataItemProfiles)(_DataItemProfileShared.ITEMS, {
    orgUnits,
    withAssignmentTotals
  });
  return /*#__PURE__*/_react.default.createElement("div", null, _DataItemProfileShared.tableStyle, /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.ApiPanel, {
    signature: "useDataItemProfiles(items, { orgUnits, withAssignmentTotals }) \u2192 getDataItemCompatibility(itemId, { orgUnits })",
    runs: "When the items or the org units change (metadata only)",
    input: "items: [{ id, dimensionItemType }], as in a visualization's dx items; orgUnits: DV's org unit items (ids, LEVEL-n, OU_GROUP-id, USER_ORGUNIT\u2026); withAssignmentTotals: also count the org units under them, for x of y and PARTLY_ASSIGNED",
    summary: "For each data item: the org unit levels its data sets and programs are assigned at, and whether each selected org unit, level or group will return all its values.",
    basedOn: "Metadata only: where the data sets and programs are assigned, as counts per level under the org units, and the elements' aggregation levels. No analytics request.",
    returns: "getDataItemCompatibility(itemId, { orgUnits }).orgUnits: [{ id, status, reasons, assignment }], and orgUnitCoverage from the hook",
    uses: "fetchDataItemProfileMetadata, fetchOrgUnitCoverage, getDataItemProfile, getDataItemProfileOrgUnitCompatibility",
    references: [statusReference('Example', ORG_UNIT_EXAMPLES), {
      title: 'Org unit reasons',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: _DataItemProfileReference.ORG_UNIT_REASON_DEFINITIONS
    }]
  }), /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.DemoHeading, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-2587292789" + " " + "orgUnitInputs"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: "Org units: ids, LEVEL-n or OU_GROUP-id (the ids are then their parents), USER_ORGUNIT\u2026",
    helpText: "Applied when the field loses focus",
    value: orgUnitsDraft,
    onChange: ({
      value
    }) => setOrgUnitsDraft(value),
    onBlur: ({
      value
    }) => applyOrgUnits(value),
    inputWidth: "600px"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-2587292789" + " " + "scenarios"
  }, ORG_UNIT_SCENARIOS.map(([label, text]) => /*#__PURE__*/_react.default.createElement(_ui.Button, {
    key: label,
    small: true,
    onClick: () => applyOrgUnits(text)
  }, label))), /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: "Count the org units too (x of y, PARTLY_ASSIGNED): more requests",
    checked: withAssignmentTotals,
    onChange: ({
      checked
    }) => setWithAssignmentTotals(checked),
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2587292789"
  }, [".orgUnitInputs.jsx-2587292789{margin-block-end:16px;}", ".scenarios.jsx-2587292789{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-block-start:8px;}"])), loading && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Loading, null), error && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(AloneNote, null, "Each org unit, level or group is judged alone, over all the item\u2019s data sets and programs, whatever the periods: their period types aren\u2019t read here."), /*#__PURE__*/_react.default.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 2,
    className: "group"
  }, "Profile ", /*#__PURE__*/_react.default.createElement("code", null, "getDataItemProfile")), orgUnitItems.length > 0 && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: orgUnitItems.length,
    className: "group"
  }, "Each org unit", ' ', /*#__PURE__*/_react.default.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "JSON"), /*#__PURE__*/_react.default.createElement("th", null, "Org unit levels"), orgUnitItems.map(orgUnit => /*#__PURE__*/_react.default.createElement("th", {
    key: orgUnit
  }, orgUnit)))), /*#__PURE__*/_react.default.createElement("tbody", null, _DataItemProfileShared.ITEMS.map(({
    id,
    name
  }) => {
    const profile = profiles[id];
    const {
      orgUnits: results = []
    } = getDataItemCompatibility(id, {
      orgUnits
    });
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: id
    }, /*#__PURE__*/_react.default.createElement(ItemCells, {
      name: name,
      profile: profile
    }), /*#__PURE__*/_react.default.createElement("td", null, describeLevels(profile)), results.map(result => /*#__PURE__*/_react.default.createElement("td", {
      key: result.id
    }, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result), /*#__PURE__*/_react.default.createElement(Assignment, {
      assignment: result.assignment
    }))));
  })))));
};
exports.OrgUnits = OrgUnits;
OrgUnits.storyName = 'Org units';