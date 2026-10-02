import _JSXStyle from "styled-jsx/style";
import { Checkbox, InputField, NoticeBox } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { useDataItemProfiles } from '../components/DataItemProfile/useDataItemProfiles.js';
import { ScenarioPanel } from './DataItemProfile.reference.js';
import { ErrorNotice, ITEMS, Loading, SIERRA_LEONE, splitList, Status, tableStyle, Wrapper } from './DataItemProfile.shared.js';
export default {
  title: 'DataItemProfile/Typical use in Data Visualizer',
  decorators: [Wrapper]
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
}) => /*#__PURE__*/React.createElement("table", {
  className: "profiles"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Period type"), items.map(({
  id,
  name
}) => /*#__PURE__*/React.createElement("th", {
  key: id
}, name)))), /*#__PURE__*/React.createElement("tbody", null, PICKER_PERIOD_TYPES.map(periodType => /*#__PURE__*/React.createElement("tr", {
  key: periodType
}, /*#__PURE__*/React.createElement("td", null, periodType), items.map(({
  id
}) => /*#__PURE__*/React.createElement("td", {
  key: id
}, /*#__PURE__*/React.createElement(Status, getDataItemCompatibility(id, {
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
}) => /*#__PURE__*/React.createElement("table", {
  className: "profiles"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Level"), items.map(({
  id,
  name
}) => /*#__PURE__*/React.createElement("th", {
  key: id
}, name)))), /*#__PURE__*/React.createElement("tbody", null, levels.map(({
  level,
  name
}) => /*#__PURE__*/React.createElement("tr", {
  key: level
}, /*#__PURE__*/React.createElement("td", null, name), items.map(({
  id
}) => /*#__PURE__*/React.createElement("td", {
  key: id
}, /*#__PURE__*/React.createElement(Status, getDataItemCompatibility(id, {
  orgUnits: [SIERRA_LEONE, `LEVEL-${level}`]
}).orgUnits[0])))))));
OrgUnitLevelMarks.propTypes = {
  getDataItemCompatibility: PropTypes.func,
  items: PropTypes.array,
  levels: PropTypes.array
};
PeriodTypeMarks.propTypes = {
  getDataItemCompatibility: PropTypes.func,
  items: PropTypes.array
};

// One column per dimension
const Columns = ({
  period,
  orgUnit
}) => /*#__PURE__*/React.createElement("div", {
  className: "jsx-2882414800" + " " + "columns"
}, /*#__PURE__*/React.createElement("section", {
  className: "jsx-2882414800"
}, /*#__PURE__*/React.createElement("h4", {
  className: "jsx-2882414800"
}, "Period"), period), /*#__PURE__*/React.createElement("section", {
  className: "jsx-2882414800"
}, /*#__PURE__*/React.createElement("h4", {
  className: "jsx-2882414800"
}, "Org unit"), orgUnit !== null && orgUnit !== void 0 ? orgUnit : /*#__PURE__*/React.createElement("p", {
  className: "jsx-2882414800"
}, "Coming soon.")), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2882414800"
}, [".columns.jsx-2882414800{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}", "h4.jsx-2882414800{margin-block:0 8px;font-size:14px;color:#4a5768;}", "section.jsx-2882414800+section.jsx-2882414800{border-inline-start:1px solid #d5dde5;padding-inline-start:16px;}"]));
Columns.propTypes = {
  orgUnit: PropTypes.node,
  period: PropTypes.node
};
export const TypicalUse = () => {
  const [selectedIds, setSelectedIds] = useState(['fbfJHSPpUQD', 'Uvn6LCg7dVU', 'YazgqXbizv1']);
  const [periodsText, setPeriodsText] = useState('2025W2');
  const [orgUnitsText, setOrgUnitsText] = useState(SIERRA_LEONE);
  const items = useMemo(() => ITEMS.filter(({
    id
  }) => selectedIds.includes(id)), [selectedIds]);
  const periods = useMemo(() => splitList(periodsText), [periodsText]);
  const orgUnits = useMemo(() => splitList(orgUnitsText), [orgUnitsText]);
  // The country, for the levels in the picker, and the units selected
  const loadedOrgUnits = useMemo(() => [...new Set([SIERRA_LEONE, ...orgUnits])], [orgUnits]);
  const {
    loading,
    error,
    profiles,
    orgUnitCoverage,
    getDataItemCompatibility
  } = useDataItemProfiles(items, {
    orgUnits: loadedOrgUnits
  });
  const toggle = id => setSelectedIds(ids => ids.includes(id) ? ids.filter(other => other !== id) : [...ids, id]);
  return /*#__PURE__*/React.createElement("div", null, tableStyle, /*#__PURE__*/React.createElement(ScenarioPanel, {
    title: "A user builds a chart in Data Visualizer",
    steps: STEPS
  }), /*#__PURE__*/React.createElement("h3", null, "Data items"), ITEMS.map(({
    id,
    name
  }) => /*#__PURE__*/React.createElement(Checkbox, {
    key: id,
    label: name,
    checked: selectedIds.includes(id),
    onChange: () => toggle(id)
  })), loading && /*#__PURE__*/React.createElement(Loading, null), error && /*#__PURE__*/React.createElement(ErrorNotice, {
    error: error
  }), profiles && items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Pickers"), /*#__PURE__*/React.createElement(Columns, {
    period: /*#__PURE__*/React.createElement(PeriodTypeMarks, {
      items: items,
      getDataItemCompatibility: getDataItemCompatibility
    }),
    orgUnit: orgUnitCoverage ? /*#__PURE__*/React.createElement(OrgUnitLevelMarks, {
      items: items,
      levels: orgUnitCoverage.levels,
      getDataItemCompatibility: getDataItemCompatibility
    }) : /*#__PURE__*/React.createElement(Loading, null)
  }), /*#__PURE__*/React.createElement("h3", null, "Selected, before Update"), /*#__PURE__*/React.createElement(Columns, {
    period: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "inputs"
    }, /*#__PURE__*/React.createElement(InputField, {
      label: "Fixed or relative periods",
      value: periodsText,
      onChange: ({
        value
      }) => setPeriodsText(value)
    })), /*#__PURE__*/React.createElement(NoticeBox, {
      title: "Derived from current metadata only"
    }, "Past data may have been collected with a different configuration."), /*#__PURE__*/React.createElement("table", {
      className: "profiles"
    }, /*#__PURE__*/React.createElement("tbody", null, items.map(({
      id,
      name
    }) => {
      var _getDataItemCompatibi;
      return /*#__PURE__*/React.createElement("tr", {
        key: id
      }, /*#__PURE__*/React.createElement("td", null, name), /*#__PURE__*/React.createElement("td", null, (_getDataItemCompatibi = getDataItemCompatibility(id, {
        periods
      })) === null || _getDataItemCompatibi === void 0 ? void 0 : _getDataItemCompatibi.periods.map(result => /*#__PURE__*/React.createElement("div", {
        key: result.id
      }, /*#__PURE__*/React.createElement("code", null, result.id), ' ', /*#__PURE__*/React.createElement(Status, result), ' ', adviceFor(result, profiles[id]), ' '))));
    })))),
    orgUnit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "inputs"
    }, /*#__PURE__*/React.createElement(InputField, {
      label: "Org units: ids, LEVEL-n, OU_GROUP-id, USER_ORGUNIT\u2026",
      value: orgUnitsText,
      onChange: ({
        value
      }) => setOrgUnitsText(value)
    })), /*#__PURE__*/React.createElement("table", {
      className: "profiles"
    }, /*#__PURE__*/React.createElement("tbody", null, items.map(({
      id,
      name
    }) => {
      var _getDataItemCompatibi2;
      return /*#__PURE__*/React.createElement("tr", {
        key: id
      }, /*#__PURE__*/React.createElement("td", null, name), /*#__PURE__*/React.createElement("td", null, orgUnitCoverage ? (_getDataItemCompatibi2 = getDataItemCompatibility(id, {
        orgUnits
      })) === null || _getDataItemCompatibi2 === void 0 || (_getDataItemCompatibi2 = _getDataItemCompatibi2.orgUnits) === null || _getDataItemCompatibi2 === void 0 ? void 0 : _getDataItemCompatibi2.map(result => /*#__PURE__*/React.createElement("div", {
        key: result.id
      }, /*#__PURE__*/React.createElement("code", null, result.id), ' ', /*#__PURE__*/React.createElement(Status, result), ' ', orgUnitAdviceFor(result, orgUnitCoverage.levels))) : null));
    }))))
  })));
};
TypicalUse.storyName = 'Typical use in Data Visualizer';