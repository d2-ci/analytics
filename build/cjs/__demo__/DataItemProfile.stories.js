"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProfilesAndCompatibility = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useDataItemProfiles = require("../components/DataItemProfile/useDataItemProfiles.js");
var _orgUnitSelection = require("../modules/dataItemProfile/orgUnitSelection.js");
var _DataItemProfileReference = require("./DataItemProfile.reference.js");
var _DataItemProfileShared = require("./DataItemProfile.shared.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'DataItemProfile/Hooks',
  decorators: [_DataItemProfileShared.Wrapper]
}; // Event data comes from programs: it is placed in any period by its dates
const isCollectedByDate = profile => !profile.unknown && profile.sources.every(({
  program
}) => program);
const describeCollection = ({
  period,
  ...profile
}) => {
  if (period.types.length) {
    return `${period.types.join(', ')}${period.mixed ? ' (mixed)' : ''}`;
  }
  return isCollectedByDate(profile) ? 'event dates' : 'unknown';
};

// A suggestion from metadata, for a fixed period that doesn't suit the item
const Suggestion = ({
  periods
}) => periods ? /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-2884615928"
}, "Suggestion: ", periods.join(', '), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Suggestion.propTypes = {
  periods: _propTypes.default.arrayOf(_propTypes.default.string)
};

// How many units at the deepest level entered the data sets are assigned to
const Coverage = ({
  coverage
}) => coverage ? /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-2884615928"
}, coverage.assigned.toLocaleString('en'), " of", ' ', coverage.total.toLocaleString('en'), " at level ", coverage.level, /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Coverage.propTypes = {
  coverage: _propTypes.default.object
};

// The levels its data sets are assigned at, deepest first
const describeLevels = ({
  orgUnit
}) => orgUnit !== null && orgUnit !== void 0 && orgUnit.levels.length ? `${orgUnit.levels.join(', ')}${orgUnit.mixed ? ' (mixed)' : ''}` : '–';
const describeFinest = profile => {
  var _profile$period$fines;
  return (_profile$period$fines = profile.period.finest) !== null && _profile$period$fines !== void 0 ? _profile$period$fines : isCollectedByDate(profile) ? 'any' : 'unknown';
};
const ProfilesAndCompatibility = () => {
  var _relativePeriodTypes$, _relativePeriodTypes$2;
  const [periodsText, setPeriodsText] = (0, _react.useState)('2025W2, 202501, 2025Q1, 2025, LAST_12_MONTHS, LAST_4_WEEKS, Weekly');
  const periods = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(periodsText), [periodsText]);
  const [orgUnitsText, setOrgUnitsText] = (0, _react.useState)(`${_DataItemProfileShared.SIERRA_LEONE}, ${_DataItemProfileShared.BO}, ${_DataItemProfileShared.JUNCTIONLA_MCHP}, USER_ORGUNIT_CHILDREN`);
  const orgUnits = (0, _react.useMemo)(() => (0, _DataItemProfileShared.splitList)(orgUnitsText), [orgUnitsText]);
  const orgUnitItems = (0, _orgUnitSelection.readOrgUnitSelection)(orgUnits).items.map(({
    id
  }) => id);
  const {
    loading,
    error,
    profiles,
    relativePeriodTypes,
    getDataItemCompatibility,
    getDataItemSuggestion
  } = (0, _useDataItemProfiles.useDataItemProfiles)(_DataItemProfileShared.ITEMS, {
    orgUnits
  });
  return /*#__PURE__*/_react.default.createElement("div", null, _DataItemProfileShared.tableStyle, /*#__PURE__*/_react.default.createElement(_DataItemProfileReference.ApiPanel, {
    signature: "useDataItemProfiles(items, { orgUnits })",
    runs: "When the items or the org units change (metadata only)",
    input: "items: [{ id, dimensionItemType }], as in a visualization's dx items; orgUnits: DV's org unit items (ids, LEVEL-n, OU_GROUP-id, USER_ORGUNIT\u2026)",
    summary: "For each data item: how it is collected (period types, finest type, mixed or not), a function that tells whether chosen periods and org units will return values, and one that suggests periods that would.",
    basedOn: "Metadata only (each element's data sets and their period types, indicator expressions; where the data sets are assigned, as counts per level under the org units), the server's weekly and financial year settings, its calendar and version. No analytics request.",
    returns: "{ loading, error, profiles, orgUnitCoverage, relativePeriodTypes, getDataItemCompatibility(itemId, { periods, orgUnits }), getDataItemSuggestion(itemId, { periods, periodTypes }) }",
    uses: "fetchDataItemProfileMetadata, fetchOrgUnitCoverage, getDataItemProfile, getDataItemProfileCompatibility, getDataItemOrgUnitCompatibility, suggestDataItemPeriods",
    references: [{
      title: 'Compatibility statuses',
      columns: ['Status', 'Meaning', 'Period example', 'Org unit example'],
      rows: _DataItemProfileReference.STATUS_DEFINITIONS
    }, {
      title: 'Reasons (none: measured for the period)',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: _DataItemProfileReference.REASON_DEFINITIONS
    }, {
      title: 'Org unit reasons',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: _DataItemProfileReference.ORG_UNIT_REASON_DEFINITIONS
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
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "inputs"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: "Org units: ids, LEVEL-n or OU_GROUP-id (the ids are then their boundaries), USER_ORGUNIT\u2026",
    value: orgUnitsText,
    onChange: ({
      value
    }) => setOrgUnitsText(value),
    inputWidth: "600px"
  })), loading && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Loading, null), error && /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "Relative weeks:", ' ', (_relativePeriodTypes$ = relativePeriodTypes.weeklyPeriodType) !== null && _relativePeriodTypes$ !== void 0 ? _relativePeriodTypes$ : 'unknown', ". Relative financial years:", ' ', (_relativePeriodTypes$2 = relativePeriodTypes.financialYearPeriodType) !== null && _relativePeriodTypes$2 !== void 0 ? _relativePeriodTypes$2 : 'unknown', "."), /*#__PURE__*/_react.default.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 4,
    className: "group"
  }, "Profile ", /*#__PURE__*/_react.default.createElement("code", null, "getDataItemProfile")), periods.length > 0 && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: periods.length,
    className: "group"
  }, "Compatibility", ' ', /*#__PURE__*/_react.default.createElement("code", null, "getDataItemCompatibility"), ", suggestion", ' ', /*#__PURE__*/_react.default.createElement("code", null, "getDataItemSuggestion")), orgUnitItems.length > 0 && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: orgUnitItems.length,
    className: "group"
  }, "Org units", ' ', /*#__PURE__*/_react.default.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "JSON"), /*#__PURE__*/_react.default.createElement("th", null, "Collected at"), /*#__PURE__*/_react.default.createElement("th", null, "Levels"), /*#__PURE__*/_react.default.createElement("th", null, "Finest"), periods.map(period => /*#__PURE__*/_react.default.createElement("th", {
    key: period
  }, period)), orgUnitItems.map(orgUnit => /*#__PURE__*/_react.default.createElement("th", {
    key: orgUnit
  }, orgUnit)))), /*#__PURE__*/_react.default.createElement("tbody", null, _DataItemProfileShared.ITEMS.map(({
    id,
    name
  }) => {
    var _compatibility$orgUni;
    const profile = profiles[id];
    const compatibility = getDataItemCompatibility(id, {
      periods,
      orgUnits
    });
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: id
    }, /*#__PURE__*/_react.default.createElement("td", null, name, profile.unknown && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, {
      status: "unknown",
      reasons: profile.reasons.map(({
        code
      }) => code)
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("details", null, /*#__PURE__*/_react.default.createElement("summary", null, "Show"), /*#__PURE__*/_react.default.createElement("pre", {
      className: "json"
    }, JSON.stringify(profile, null, 2)))), /*#__PURE__*/_react.default.createElement("td", null, describeCollection(profile)), /*#__PURE__*/_react.default.createElement("td", null, describeLevels(profile)), /*#__PURE__*/_react.default.createElement("td", null, describeFinest(profile)), compatibility.periods.map(result => /*#__PURE__*/_react.default.createElement("td", {
      key: result.id
    }, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result), /*#__PURE__*/_react.default.createElement(Suggestion, {
      periods: getDataItemSuggestion(id, {
        periods: [result.id]
      })
    }))), (_compatibility$orgUni = compatibility.orgUnits) === null || _compatibility$orgUni === void 0 ? void 0 : _compatibility$orgUni.map(result => /*#__PURE__*/_react.default.createElement("td", {
      key: result.id
    }, /*#__PURE__*/_react.default.createElement(_DataItemProfileShared.Status, result), /*#__PURE__*/_react.default.createElement(Coverage, {
      coverage: result.coverage
    }))));
  })))));
};
exports.ProfilesAndCompatibility = ProfilesAndCompatibility;
ProfilesAndCompatibility.storyName = 'Profiles and compatibility';