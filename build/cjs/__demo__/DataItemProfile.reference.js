"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioPanel = exports.STATUS_DEFINITIONS = exports.REASON_DEFINITIONS = exports.ORG_UNIT_REASON_DEFINITIONS = exports.DemoHeading = exports.ApiPanel = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS_DEFINITIONS = exports.STATUS_DEFINITIONS = [['full', 'Fully compatible with all the item’s data sets and programs that collect for the selection: every value collected comes back (also averaged, carried, or where only some units collect it).', 'Data element captured monthly, with aggregation enabled, requested quarterly', 'Indicator with all its components captured at facility level, with aggregation enabled, requested at district level'], ['partial', 'Compatible with only some of the item’s data sets and programs that collect for the selection: the others’ values are left out. Only for an item collected in several data sets or programs that differ (mixed). For an expression, computed from such an operand (OPERAND_PARTIAL).', 'Data element captured weekly from Monday in one data set and from Wednesday in another, requested by Monday week', 'Data element captured at facility level in one data set and at district level in another, requested at a facility'], ['none', 'Compatible with none of the item’s data sets and programs that collect for the selection: no value comes back. For an expression, an operand gives none (OPERAND_EMPTY).', 'Data element captured monthly, requested weekly', 'Data element captured at district level, requested at a facility'], ['unknown', 'Can’t tell: see the reasons.', 'Relative weeks when the weekly start setting is missing', 'An org unit group, or an event data item without its program in its id']];
const REASON_DEFINITIONS = exports.REASON_DEFINITIONS = [['OPERAND_EMPTY', 'An expression whose operand gives no value has none: a ratio without its denominator.', 'none', 'ANC 1 Coverage by week: ANC 1st visit is monthly'], ['OPERAND_PARTIAL', 'An expression computed from an operand that leaves values out: it can be off either way.', 'partial', 'An indicator over IDSR Measles by Monday week'], ['AVERAGED', 'Repeated from the data period that holds it.', 'full, partial', 'Total Population (yearly) by month'], ['CARRIED', 'From another data period (FIRST, LAST).', 'full, partial', 'Monthly LAST data on 15 July: June’s value'], ['SHORTER', 'Period shorter than the data’s type.', 'partial, none', 'ANC 1st visit (monthly) by week'], ['OTHER_TYPE', 'Same length, other type.', 'partial, none', 'IDSR Measles’ Wednesday weeks by Monday week'], ['REPORTING_RATE', 'Reporting rate in a shorter period.', 'partial, none', 'Child Health reporting rate by week'], ['NOTHING_TO_CARRY', 'FIRST or LAST with no data period that counts.', 'partial, none', 'Monthly LAST data on 1 January'], ['PROFILE_UNKNOWN', 'Missing metadata: see the profile’s reasons.', 'unknown', 'An element in no data set'], ['UNKNOWN_PERIOD', 'Unreadable period id.', 'unknown', 'A mistyped period id, like 2025X1'], ['SETTING_MISSING', 'Relative period type needs a setting not given.', 'unknown', 'LAST_4_WEEKS on weekly data, weekly start unknown'], ['UNSUPPORTED_VERSION', 'Type this server version can’t answer.', 'unknown', '2025NovQ1 on 2.40']];
const ORG_UNIT_REASON_DEFINITIONS = exports.ORG_UNIT_REASON_DEFINITIONS = [['NOT_ASSIGNED', 'Its data sets aren’t assigned there, though they are at that level elsewhere.', 'none', 'ANC 1st visit at Junctionla MCHP'], ['BELOW_COLLECTION', 'Data is entered above the level asked: nothing is split down. Partial when another data set fills the place.', 'none, partial', 'District data by facility'], ['AGGREGATION_LEVEL', 'The data element’s aggregation levels stop values entered below them from reaching the level asked. Partial when another data set fills the place.', 'none, partial', 'Facility data with aggregation level 2, asked by district'], ['PARTLY_ASSIGNED', 'Assigned to only some of the units at the deepest level entered: the others don’t collect it, so nothing is left out.', 'full', 'ANC 1st visit in Sierra Leone: 1,159 of 1,166 facilities'], ['ORG_UNIT_FIELD', 'A program indicator places its values by another org unit than the event’s or enrollment’s (registration, or an org unit attribute): they can be anywhere, wherever its program is assigned.', 'full', 'A program indicator by registration org unit'], ['UNKNOWN_ORG_UNIT', 'An org unit or level that isn’t loaded or can’t be read.', 'unknown', 'A mistyped id'], ['EVENT_DATA', 'Event data whose program can’t be told from its id.', 'unknown', 'An event data item named by its data element alone']];
const ReferenceTable = ({
  title,
  columns,
  rows
}) => /*#__PURE__*/_react.default.createElement("details", {
  className: "jsx-413093121"
}, /*#__PURE__*/_react.default.createElement("summary", {
  className: "jsx-413093121"
}, title), /*#__PURE__*/_react.default.createElement("table", {
  className: "jsx-413093121"
}, /*#__PURE__*/_react.default.createElement("thead", {
  className: "jsx-413093121"
}, /*#__PURE__*/_react.default.createElement("tr", {
  className: "jsx-413093121"
}, columns.map(column => /*#__PURE__*/_react.default.createElement("th", {
  key: column,
  className: "jsx-413093121"
}, column)))), /*#__PURE__*/_react.default.createElement("tbody", {
  className: "jsx-413093121"
}, rows.map(([code, ...cells]) => /*#__PURE__*/_react.default.createElement("tr", {
  key: code,
  className: "jsx-413093121"
}, /*#__PURE__*/_react.default.createElement("td", {
  className: "jsx-413093121"
}, /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-413093121"
}, code)), cells.map((cell, i) => /*#__PURE__*/_react.default.createElement("td", {
  key: i,
  className: "jsx-413093121"
}, cell)))))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "413093121"
}, ["details.jsx-413093121{margin-block-start:6px;}", "table.jsx-413093121{border-collapse:collapse;margin-block:6px;}", "th.jsx-413093121,td.jsx-413093121{padding:2px 12px 2px 0;text-align:start;vertical-align:top;}"]));
ReferenceTable.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.string),
  rows: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.string)),
  title: _propTypes.default.string
};

// The API a story shows, apart from the demo itself
const NO_REFERENCES = [];
const ApiPanel = ({
  basedOn,
  runs,
  input,
  signature,
  summary,
  returns,
  uses,
  references = NO_REFERENCES
}) => /*#__PURE__*/_react.default.createElement("aside", {
  className: "jsx-633160760"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-633160760" + " " + "label"
}, "API"), /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-633160760" + " " + "signature"
}, signature), /*#__PURE__*/_react.default.createElement("p", {
  className: "jsx-633160760"
}, summary), /*#__PURE__*/_react.default.createElement("dl", {
  className: "jsx-633160760"
}, /*#__PURE__*/_react.default.createElement("dt", {
  className: "jsx-633160760"
}, "Based on"), /*#__PURE__*/_react.default.createElement("dd", {
  className: "jsx-633160760"
}, basedOn), /*#__PURE__*/_react.default.createElement("dt", {
  className: "jsx-633160760"
}, "Input"), /*#__PURE__*/_react.default.createElement("dd", {
  className: "jsx-633160760"
}, /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-633160760"
}, input)), /*#__PURE__*/_react.default.createElement("dt", {
  className: "jsx-633160760"
}, "Runs"), /*#__PURE__*/_react.default.createElement("dd", {
  className: "jsx-633160760"
}, runs), /*#__PURE__*/_react.default.createElement("dt", {
  className: "jsx-633160760"
}, "Returns"), /*#__PURE__*/_react.default.createElement("dd", {
  className: "jsx-633160760"
}, /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-633160760"
}, returns)), /*#__PURE__*/_react.default.createElement("dt", {
  className: "jsx-633160760"
}, "Uses"), /*#__PURE__*/_react.default.createElement("dd", {
  className: "jsx-633160760"
}, /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-633160760"
}, uses))), references.map(reference => /*#__PURE__*/_react.default.createElement(ReferenceTable, _extends({
  key: reference.title
}, reference))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "633160760"
}, ["aside.jsx-633160760{max-inline-size:900px;margin-block-end:24px;padding:12px 16px;background:#f3f5f7;border-inline-start:4px solid #147cd7;font-size:13px;color:#212934;}", ".label.jsx-633160760{font-size:11px;font-weight:600;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;color:#147cd7;text-transform:uppercase;}", ".signature.jsx-633160760{display:block;margin-block:4px;font-size:15px;font-weight:600;}", "p.jsx-633160760{margin-block:4px 8px;}", "dl.jsx-633160760{display:grid;grid-template-columns:max-content 1fr;gap:2px 12px;margin:0;}", "dt.jsx-633160760{color:#4a5768;}", "dd.jsx-633160760{margin:0;}"]));
exports.ApiPanel = ApiPanel;
ApiPanel.propTypes = {
  basedOn: _propTypes.default.string,
  input: _propTypes.default.string,
  references: _propTypes.default.arrayOf(_propTypes.default.shape({
    columns: _propTypes.default.arrayOf(_propTypes.default.string),
    rows: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.string)),
    title: _propTypes.default.string
  })),
  returns: _propTypes.default.string,
  runs: _propTypes.default.string,
  signature: _propTypes.default.string,
  summary: _propTypes.default.string,
  uses: _propTypes.default.string
};
const DemoHeading = () => /*#__PURE__*/_react.default.createElement("h3", {
  className: "jsx-4011752644"
}, "Demo", /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "4011752644"
}, ["h3.jsx-4011752644{margin-block:0 12px;font-size:16px;}"]));

// The steps of a scenario, apart from the demo itself
exports.DemoHeading = DemoHeading;
const ScenarioPanel = ({
  title,
  steps
}) => /*#__PURE__*/_react.default.createElement("aside", {
  className: "jsx-146638582"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-146638582" + " " + "label"
}, "Scenario"), /*#__PURE__*/_react.default.createElement("div", {
  className: "jsx-146638582" + " " + "title"
}, title), /*#__PURE__*/_react.default.createElement("ol", {
  className: "jsx-146638582"
}, steps.map(([text, code]) => /*#__PURE__*/_react.default.createElement("li", {
  key: text,
  className: "jsx-146638582"
}, text, " ", code && /*#__PURE__*/_react.default.createElement("code", {
  className: "jsx-146638582"
}, code)))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: "146638582"
}, ["aside.jsx-146638582{max-inline-size:900px;margin-block-end:24px;padding:12px 16px;background:#f3f5f7;border-inline-start:4px solid #147cd7;font-size:13px;color:#212934;}", ".label.jsx-146638582{font-size:11px;font-weight:600;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;color:#147cd7;text-transform:uppercase;}", ".title.jsx-146638582{margin-block:4px;font-size:15px;font-weight:600;}", "ol.jsx-146638582{margin:4px 0 0;padding-inline-start:20px;}"]));
exports.ScenarioPanel = ScenarioPanel;
ScenarioPanel.propTypes = {
  steps: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.string)),
  title: _propTypes.default.string
};