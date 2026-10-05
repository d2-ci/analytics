import _JSXStyle from "styled-jsx/style";
import { Button, InputField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { useDataItemProfiles } from '../components/DataItemProfile/useDataItemProfiles.js';
import { readOrgUnitSelection } from '../modules/dataItemProfile/orgUnits/orgUnitSelection.js';
import { ApiPanel, DemoHeading, ORG_UNIT_REASON_DEFINITIONS, PERIOD_REASON_DEFINITIONS, STATUS_DEFINITIONS } from './DataItemProfile.reference.js';
import { ErrorNotice, BO, ITEMS, JUNCTIONLA_MCHP, Loading, SIERRA_LEONE, splitList, Status, tableStyle, Wrapper } from './DataItemProfile.shared.js';
export default {
  title: 'DataItemProfile/Hooks',
  decorators: [Wrapper]
};

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
  return isPlacedByDate(profile) ? 'event dates' : 'unknown';
};

// How many org units at the deepest level assigned the data sets are assigned to
const Assignment = ({
  assignment
}) => assignment ? /*#__PURE__*/React.createElement("div", {
  className: "jsx-2884615928"
}, assignment.assigned.toLocaleString('en'), " of", ' ', assignment.total.toLocaleString('en'), " at level ", assignment.level, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Assignment.propTypes = {
  assignment: PropTypes.object
};

// The levels its data sets and programs are assigned at, deepest first
const describeLevels = ({
  assignedOrgUnitLevels
}) => assignedOrgUnitLevels !== null && assignedOrgUnitLevels !== void 0 && assignedOrgUnitLevels.levels.length ? listWithSeveral(assignedOrgUnitLevels, assignedOrgUnitLevels.levels) : '–';
const describeShortestDirectType = profile => {
  if (profile.assignedPeriodTypes.shortestDirectType) {
    return profile.assignedPeriodTypes.shortestDirectType;
  }
  return isPlacedByDate(profile) ? 'any' : 'unknown';
};

// Org unit selections to try, one per kind of selection item
const ORG_UNIT_SCENARIOS = [['Org units', `${SIERRA_LEONE}, ${BO}, ${JUNCTIONLA_MCHP}, USER_ORGUNIT_CHILDREN`], ['Levels in Bo', `${BO}, LEVEL-3, LEVEL-4`], ['District group', 'OU_GROUP-w1Atoz18PCL'], ['Clinic group in Bo', `${BO}, OU_GROUP-RXL3lPSK8oG`]];
export const ProfilesAndCompatibility = () => {
  var _relativePeriodTypes$, _relativePeriodTypes$2;
  const [periodsText, setPeriodsText] = useState('2025W2, 202501, 2025Q1, 2025, LAST_12_MONTHS, LAST_4_WEEKS, Weekly');
  const periods = useMemo(() => splitList(periodsText), [periodsText]);
  // Typed org units apply on blur: each change sends requests
  const [orgUnitsText, setOrgUnitsText] = useState(ORG_UNIT_SCENARIOS[0][1]);
  const [orgUnitsDraft, setOrgUnitsDraft] = useState(orgUnitsText);
  const applyOrgUnits = text => {
    setOrgUnitsDraft(text);
    setOrgUnitsText(text);
  };
  const orgUnits = useMemo(() => splitList(orgUnitsText), [orgUnitsText]);
  const orgUnitItems = readOrgUnitSelection(orgUnits).selectionItems.map(({
    id
  }) => id);
  const {
    loading,
    error,
    profiles,
    relativePeriodTypes,
    getDataItemCompatibility
  } = useDataItemProfiles(ITEMS, {
    orgUnits
  });
  return /*#__PURE__*/React.createElement("div", null, tableStyle, /*#__PURE__*/React.createElement(ApiPanel, {
    signature: "useDataItemProfiles(items, { orgUnits })",
    runs: "When the items or the org units change (metadata only)",
    input: "items: [{ id, dimensionItemType }], as in a visualization's dx items; orgUnits: DV's org unit items (ids, LEVEL-n, OU_GROUP-id, USER_ORGUNIT\u2026)",
    summary: "For each data item: the period types and org unit levels its data sets and programs are assigned at, and a function that tells whether chosen periods and org units will return all its values.",
    basedOn: "Metadata only (each element's data sets and their period types, indicator expressions; where the data sets and programs are assigned, as counts per level under the org units), the server's weekly and financial year settings, its calendar and version. No analytics request.",
    returns: "{ loading, error, profiles, orgUnitCoverage, relativePeriodTypes, getDataItemCompatibility(itemId, { periods, orgUnits }) }",
    uses: "fetchDataItemProfileMetadata, fetchOrgUnitCoverage, getDataItemProfile, getDataItemProfileCompatibility (getDataItemProfilePeriodCompatibility, getDataItemProfileOrgUnitCompatibility)",
    references: [{
      title: 'Compatibility statuses',
      columns: ['Status', 'Meaning', 'Period example', 'Org unit example'],
      rows: STATUS_DEFINITIONS
    }, {
      title: 'Period reasons (none: added up for the period)',
      columns: ['Code', 'Meaning', 'With', 'Example'],
      rows: PERIOD_REASON_DEFINITIONS
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
    className: "jsx-1349894501" + " " + "inputs"
  }, /*#__PURE__*/React.createElement(InputField, {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "jsx-1349894501" + " " + "scenarios"
  }, ORG_UNIT_SCENARIOS.map(([label, text]) => /*#__PURE__*/React.createElement(Button, {
    key: label,
    small: true,
    onClick: () => applyOrgUnits(text)
  }, label))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1349894501"
  }, [".scenarios.jsx-1349894501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;margin-block-start:8px;}"])), loading && /*#__PURE__*/React.createElement(Loading, null), error && /*#__PURE__*/React.createElement(ErrorNotice, {
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
  }, "Compatibility", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility")), orgUnitItems.length > 0 && /*#__PURE__*/React.createElement("th", {
    colSpan: orgUnitItems.length,
    className: "group"
  }, "Org units", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "JSON"), /*#__PURE__*/React.createElement("th", null, "Period types"), /*#__PURE__*/React.createElement("th", null, "Org unit levels"), /*#__PURE__*/React.createElement("th", null, "Shortest direct type"), periods.map(period => /*#__PURE__*/React.createElement("th", {
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
    }, JSON.stringify(profile, null, 2)))), /*#__PURE__*/React.createElement("td", null, describePeriodTypes(profile)), /*#__PURE__*/React.createElement("td", null, describeLevels(profile)), /*#__PURE__*/React.createElement("td", null, describeShortestDirectType(profile)), compatibility.periods.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result))), (_compatibility$orgUni = compatibility.orgUnits) === null || _compatibility$orgUni === void 0 ? void 0 : _compatibility$orgUni.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result), /*#__PURE__*/React.createElement(Assignment, {
      assignment: result.assignment
    }))));
  })))));
};
ProfilesAndCompatibility.storyName = 'Profiles and compatibility';