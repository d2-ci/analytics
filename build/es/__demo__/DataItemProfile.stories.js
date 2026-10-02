import _JSXStyle from "styled-jsx/style";
import { InputField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { useDataItemProfiles } from '../components/DataItemProfile/useDataItemProfiles.js';
import { readOrgUnitSelection } from '../modules/dataItemProfile/orgUnitSelection.js';
import { ApiPanel, DemoHeading, ORG_UNIT_REASON_DEFINITIONS, REASON_DEFINITIONS, STATUS_DEFINITIONS } from './DataItemProfile.reference.js';
import { ErrorNotice, BO, ITEMS, JUNCTIONLA_MCHP, Loading, SIERRA_LEONE, splitList, Status, tableStyle, Wrapper } from './DataItemProfile.shared.js';
export default {
  title: 'DataItemProfile/Hooks',
  decorators: [Wrapper]
};

// Event data comes from programs: it is placed in any period by its dates
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
}) => periods ? /*#__PURE__*/React.createElement("div", {
  className: "jsx-2884615928"
}, "Suggestion: ", periods.join(', '), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Suggestion.propTypes = {
  periods: PropTypes.arrayOf(PropTypes.string)
};

// How many units at the deepest level entered the data sets are assigned to
const Coverage = ({
  coverage
}) => coverage ? /*#__PURE__*/React.createElement("div", {
  className: "jsx-2884615928"
}, coverage.assigned.toLocaleString('en'), " of", ' ', coverage.total.toLocaleString('en'), " at level ", coverage.level, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Coverage.propTypes = {
  coverage: PropTypes.object
};

// The levels its data sets are assigned at, deepest first
const describeLevels = ({
  orgUnit
}) => orgUnit !== null && orgUnit !== void 0 && orgUnit.levels.length ? `${orgUnit.levels.join(', ')}${orgUnit.mixed ? ' (mixed)' : ''}` : '–';
const describeFinest = profile => {
  var _profile$period$fines;
  return (_profile$period$fines = profile.period.finest) !== null && _profile$period$fines !== void 0 ? _profile$period$fines : isCollectedByDate(profile) ? 'any' : 'unknown';
};
export const ProfilesAndCompatibility = () => {
  var _relativePeriodTypes$, _relativePeriodTypes$2;
  const [periodsText, setPeriodsText] = useState('2025W2, 202501, 2025Q1, 2025, LAST_12_MONTHS, LAST_4_WEEKS, Weekly');
  const periods = useMemo(() => splitList(periodsText), [periodsText]);
  const [orgUnitsText, setOrgUnitsText] = useState(`${SIERRA_LEONE}, ${BO}, ${JUNCTIONLA_MCHP}, USER_ORGUNIT_CHILDREN`);
  const orgUnits = useMemo(() => splitList(orgUnitsText), [orgUnitsText]);
  const orgUnitItems = readOrgUnitSelection(orgUnits).items.map(({
    id
  }) => id);
  const {
    loading,
    error,
    profiles,
    relativePeriodTypes,
    getDataItemCompatibility,
    getDataItemSuggestion
  } = useDataItemProfiles(ITEMS, {
    orgUnits
  });
  return /*#__PURE__*/React.createElement("div", null, tableStyle, /*#__PURE__*/React.createElement(ApiPanel, {
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
      rows: STATUS_DEFINITIONS
    }, {
      title: 'Reasons (none: measured for the period)',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: REASON_DEFINITIONS
    }, {
      title: 'Org unit reasons',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: ORG_UNIT_REASON_DEFINITIONS
    }]
  }), /*#__PURE__*/React.createElement(DemoHeading, null), /*#__PURE__*/React.createElement("div", {
    className: "inputs"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Periods: fixed ids, relative ids or period types",
    value: periodsText,
    onChange: ({
      value
    }) => setPeriodsText(value),
    inputWidth: "600px"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inputs"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Org units: ids, LEVEL-n or OU_GROUP-id (the ids are then their boundaries), USER_ORGUNIT\u2026",
    value: orgUnitsText,
    onChange: ({
      value
    }) => setOrgUnitsText(value),
    inputWidth: "600px"
  })), loading && /*#__PURE__*/React.createElement(Loading, null), error && /*#__PURE__*/React.createElement(ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Relative weeks:", ' ', (_relativePeriodTypes$ = relativePeriodTypes.weeklyPeriodType) !== null && _relativePeriodTypes$ !== void 0 ? _relativePeriodTypes$ : 'unknown', ". Relative financial years:", ' ', (_relativePeriodTypes$2 = relativePeriodTypes.financialYearPeriodType) !== null && _relativePeriodTypes$2 !== void 0 ? _relativePeriodTypes$2 : 'unknown', "."), /*#__PURE__*/React.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/React.createElement("th", {
    colSpan: 4,
    className: "group"
  }, "Profile ", /*#__PURE__*/React.createElement("code", null, "getDataItemProfile")), periods.length > 0 && /*#__PURE__*/React.createElement("th", {
    colSpan: periods.length,
    className: "group"
  }, "Compatibility", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility"), ", suggestion", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemSuggestion")), orgUnitItems.length > 0 && /*#__PURE__*/React.createElement("th", {
    colSpan: orgUnitItems.length,
    className: "group"
  }, "Org units", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "JSON"), /*#__PURE__*/React.createElement("th", null, "Collected at"), /*#__PURE__*/React.createElement("th", null, "Levels"), /*#__PURE__*/React.createElement("th", null, "Finest"), periods.map(period => /*#__PURE__*/React.createElement("th", {
    key: period
  }, period)), orgUnitItems.map(orgUnit => /*#__PURE__*/React.createElement("th", {
    key: orgUnit
  }, orgUnit)))), /*#__PURE__*/React.createElement("tbody", null, ITEMS.map(({
    id,
    name
  }) => {
    var _compatibility$orgUni;
    const profile = profiles[id];
    const compatibility = getDataItemCompatibility(id, {
      periods,
      orgUnits
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, /*#__PURE__*/React.createElement("td", null, name, profile.unknown && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Status, {
      status: "unknown",
      reasons: profile.reasons.map(({
        code
      }) => code)
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "Show"), /*#__PURE__*/React.createElement("pre", {
      className: "json"
    }, JSON.stringify(profile, null, 2)))), /*#__PURE__*/React.createElement("td", null, describeCollection(profile)), /*#__PURE__*/React.createElement("td", null, describeLevels(profile)), /*#__PURE__*/React.createElement("td", null, describeFinest(profile)), compatibility.periods.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result), /*#__PURE__*/React.createElement(Suggestion, {
      periods: getDataItemSuggestion(id, {
        periods: [result.id]
      })
    }))), (_compatibility$orgUni = compatibility.orgUnits) === null || _compatibility$orgUni === void 0 ? void 0 : _compatibility$orgUni.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result), /*#__PURE__*/React.createElement(Coverage, {
      coverage: result.coverage
    }))));
  })))));
};
ProfilesAndCompatibility.storyName = 'Profiles and compatibility';