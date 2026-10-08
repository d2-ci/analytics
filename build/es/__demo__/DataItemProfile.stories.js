import _JSXStyle from "styled-jsx/style";
import { Button, Checkbox, InputField } from '@dhis2/ui';
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

// The status table with one example column: periods or org units
const statusReference = (exampleColumn, exampleIndex) => ({
  title: 'Compatibility statuses',
  columns: ['Status', 'Meaning', exampleColumn],
  rows: STATUS_DEFINITIONS.map(([status, meaning, ...examples]) => [status, meaning, examples[exampleIndex]])
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
}) => assignment ? /*#__PURE__*/React.createElement("div", {
  className: "jsx-2884615928"
}, assignment.assigned.toLocaleString('en'), assignment.total !== undefined && ` of ${assignment.total.toLocaleString('en')}`, ' ', "at level ", assignment.level, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2884615928"
}, ["div.jsx-2884615928{margin-block-start:4px;font-size:12px;color:#4a5768;}"])) : null;
Assignment.propTypes = {
  assignment: PropTypes.object
};

// The item's name, its status when the profile is unknown, and the profile as JSON
const ItemCells = ({
  name,
  profile
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", null, name, profile.unknown && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Status, {
  status: "unknown",
  reasons: profile.reasons.map(({
    code
  }) => code)
}))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "Show"), /*#__PURE__*/React.createElement("pre", {
  className: "json"
}, JSON.stringify(profile, null, 2)))));
ItemCells.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.object
};

// What a story judges is judged alone: this says so above its table
const AloneNote = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  className: "jsx-1036927177"
}, children, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "1036927177"
}, ["p.jsx-1036927177{max-inline-size:900px;font-size:13px;color:#4a5768;}"]));
AloneNote.propTypes = {
  children: PropTypes.node
};
const PERIOD_EXAMPLES = 0;
const ORG_UNIT_EXAMPLES = 1;
export const Periods = () => {
  var _relativePeriodTypes$, _relativePeriodTypes$2;
  const [periodsText, setPeriodsText] = useState('2025W2, 202501, 2025Q1, 2025, LAST_12_MONTHS, LAST_4_WEEKS, Weekly');
  const periods = useMemo(() => splitList(periodsText), [periodsText]);
  // No org units: periods need no request beyond the metadata
  const {
    loading,
    error,
    profiles,
    relativePeriodTypes,
    getDataItemCompatibility
  } = useDataItemProfiles(ITEMS);
  return /*#__PURE__*/React.createElement("div", null, tableStyle, /*#__PURE__*/React.createElement(ApiPanel, {
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
      rows: PERIOD_REASON_DEFINITIONS
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
  })), loading && /*#__PURE__*/React.createElement(Loading, null), error && /*#__PURE__*/React.createElement(ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AloneNote, null, "Each period is judged alone, over all the item\u2019s data sets and programs, whatever the org units: where they are assigned isn\u2019t read here. Relative weeks:", ' ', (_relativePeriodTypes$ = relativePeriodTypes.weeklyPeriodType) !== null && _relativePeriodTypes$ !== void 0 ? _relativePeriodTypes$ : 'unknown', ". Relative financial years:", ' ', (_relativePeriodTypes$2 = relativePeriodTypes.financialYearPeriodType) !== null && _relativePeriodTypes$2 !== void 0 ? _relativePeriodTypes$2 : 'unknown', "."), /*#__PURE__*/React.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/React.createElement("th", {
    colSpan: 3,
    className: "group"
  }, "Profile ", /*#__PURE__*/React.createElement("code", null, "getDataItemProfile")), periods.length > 0 && /*#__PURE__*/React.createElement("th", {
    colSpan: periods.length,
    className: "group"
  }, "Each period", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "JSON"), /*#__PURE__*/React.createElement("th", null, "Period types"), /*#__PURE__*/React.createElement("th", null, "Shortest direct type"), periods.map(period => /*#__PURE__*/React.createElement("th", {
    key: period
  }, period)))), /*#__PURE__*/React.createElement("tbody", null, ITEMS.map(({
    id,
    name
  }) => {
    const profile = profiles[id];
    const {
      periods: results
    } = getDataItemCompatibility(id, {
      periods
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, /*#__PURE__*/React.createElement(ItemCells, {
      name: name,
      profile: profile
    }), /*#__PURE__*/React.createElement("td", null, describePeriodTypes(profile)), /*#__PURE__*/React.createElement("td", null, describeShortestDirectType(profile)), results.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result))));
  })))));
};
Periods.storyName = 'Periods';

// Org unit selections to try, one per kind of selection item
const ORG_UNIT_SCENARIOS = [['Org units', `${SIERRA_LEONE}, ${BO}, ${JUNCTIONLA_MCHP}, USER_ORGUNIT_CHILDREN`], ['Levels in Bo', `${BO}, LEVEL-3, LEVEL-4`], ['District group', 'OU_GROUP-w1Atoz18PCL'], ['Clinic group in Bo', `${BO}, OU_GROUP-RXL3lPSK8oG`]];
export const OrgUnits = () => {
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
  const [withAssignmentTotals, setWithAssignmentTotals] = useState(false);
  const {
    loading,
    error,
    profiles,
    getDataItemCompatibility
  } = useDataItemProfiles(ITEMS, {
    orgUnits,
    withAssignmentTotals
  });
  return /*#__PURE__*/React.createElement("div", null, tableStyle, /*#__PURE__*/React.createElement(ApiPanel, {
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
      rows: ORG_UNIT_REASON_DEFINITIONS
    }]
  }), /*#__PURE__*/React.createElement(DemoHeading, null), /*#__PURE__*/React.createElement("div", {
    className: "jsx-2587292789" + " " + "orgUnitInputs"
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
    className: "jsx-2587292789" + " " + "scenarios"
  }, ORG_UNIT_SCENARIOS.map(([label, text]) => /*#__PURE__*/React.createElement(Button, {
    key: label,
    small: true,
    onClick: () => applyOrgUnits(text)
  }, label))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Count the org units too (x of y, PARTLY_ASSIGNED): more requests",
    checked: withAssignmentTotals,
    onChange: ({
      checked
    }) => setWithAssignmentTotals(checked),
    dense: true
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2587292789"
  }, [".orgUnitInputs.jsx-2587292789{margin-block-end:16px;}", ".scenarios.jsx-2587292789{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-block-start:8px;}"])), loading && /*#__PURE__*/React.createElement(Loading, null), error && /*#__PURE__*/React.createElement(ErrorNotice, {
    error: error
  }), profiles && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AloneNote, null, "Each org unit, level or group is judged alone, over all the item\u2019s data sets and programs, whatever the periods: their period types aren\u2019t read here."), /*#__PURE__*/React.createElement("table", {
    className: "profiles"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    rowSpan: 2
  }, "Item"), /*#__PURE__*/React.createElement("th", {
    colSpan: 2,
    className: "group"
  }, "Profile ", /*#__PURE__*/React.createElement("code", null, "getDataItemProfile")), orgUnitItems.length > 0 && /*#__PURE__*/React.createElement("th", {
    colSpan: orgUnitItems.length,
    className: "group"
  }, "Each org unit", ' ', /*#__PURE__*/React.createElement("code", null, "getDataItemCompatibility"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "JSON"), /*#__PURE__*/React.createElement("th", null, "Org unit levels"), orgUnitItems.map(orgUnit => /*#__PURE__*/React.createElement("th", {
    key: orgUnit
  }, orgUnit)))), /*#__PURE__*/React.createElement("tbody", null, ITEMS.map(({
    id,
    name
  }) => {
    const profile = profiles[id];
    const {
      orgUnits: results = []
    } = getDataItemCompatibility(id, {
      orgUnits
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, /*#__PURE__*/React.createElement(ItemCells, {
      name: name,
      profile: profile
    }), /*#__PURE__*/React.createElement("td", null, describeLevels(profile)), results.map(result => /*#__PURE__*/React.createElement("td", {
      key: result.id
    }, /*#__PURE__*/React.createElement(Status, result), /*#__PURE__*/React.createElement(Assignment, {
      assignment: result.assignment
    }))));
  })))));
};
OrgUnits.storyName = 'Org units';