"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SKIP_IF_ANY_VALUE_MISSING = exports.SKIP_IF_ALL_VALUES_MISSING = exports.REASON_UNSUPPORTED_VERSION = exports.REASON_UNKNOWN_PERIOD = exports.REASON_UNKNOWN_ORG_UNIT = exports.REASON_STOPPED_BY_AGGREGATION_LEVEL = exports.REASON_SETTING_MISSING = exports.REASON_REPORTING_RATE_TOO_SHORT = exports.REASON_REPEATED_VALUE = exports.REASON_PROFILE_UNKNOWN = exports.REASON_PERIOD_TYPE_MISMATCH = exports.REASON_PERIOD_TOO_SHORT = exports.REASON_PARTLY_ASSIGNED = exports.REASON_ORDER = exports.REASON_OPERAND_PARTIAL = exports.REASON_OPERAND_EMPTY = exports.REASON_NO_ORG_UNITS_AT_LEVEL = exports.REASON_NO_EARLIER_PERIOD_VALUE = exports.REASON_NOT_ASSIGNED = exports.REASON_EMPTY_GROUP = exports.REASON_EARLIER_PERIOD_VALUE = exports.REASON_ASSIGNED_AT_HIGHER_LEVEL = exports.REASON_ANY_ORG_UNIT = exports.PROGRAM_ORG_UNIT_FIELDS = exports.PROFILE_REASON_UNSUPPORTED_ITEM_TYPE = exports.PROFILE_REASON_UNKNOWN_PERIOD_TYPE = exports.PROFILE_REASON_UNKNOWN_OPERAND = exports.PROFILE_REASON_NO_DATA_SET = exports.PROFILE_REASON_NOT_AGGREGATABLE = exports.PROFILE_REASON_MISSING_PROGRAM = exports.PROFILE_REASON_MISSING_METADATA = exports.PERIOD_TYPE_FREQUENCY_ORDER = exports.PERIOD_TYPES = exports.PERIOD_AGGREGATION_LAST = exports.PERIOD_AGGREGATION_FIRST = exports.PERIOD_AGGREGATION_AVERAGE = exports.ORG_UNIT_ITEM_TYPE_USER = exports.ORG_UNIT_ITEM_TYPE_UNKNOWN = exports.ORG_UNIT_ITEM_TYPE_ORG_UNIT = exports.ORG_UNIT_ITEM_TYPE_LEVEL = exports.ORG_UNIT_ITEM_TYPE_GROUP = exports.OPERAND_TYPE_UNKNOWN = exports.OPERAND_TYPE_ORG_UNIT_GROUP = exports.OPERAND_TYPE_DAYS = exports.OPERAND_TYPE_CONSTANT = exports.NOT_AGGREGATABLE_AGGREGATION_TYPES = exports.NEVER_SKIP = exports.LEFT_OUT_REASONS = exports.COMPATIBILITY_UNKNOWN = exports.COMPATIBILITY_SEVERITY = exports.COMPATIBILITY_PARTIAL = exports.COMPATIBILITY_NONE = exports.COMPATIBILITY_FULL = void 0;
// Compatibility statuses: compatible with all, some or none of the item's sources that apply to the selection
const COMPATIBILITY_FULL = exports.COMPATIBILITY_FULL = 'full';
const COMPATIBILITY_PARTIAL = exports.COMPATIBILITY_PARTIAL = 'partial';
const COMPATIBILITY_NONE = exports.COMPATIBILITY_NONE = 'none';
const COMPATIBILITY_UNKNOWN = exports.COMPATIBILITY_UNKNOWN = 'unknown';

// Most severe first: where all results are needed (an indicator's two sides), the most severe wins
const COMPATIBILITY_SEVERITY = exports.COMPATIBILITY_SEVERITY = [COMPATIBILITY_NONE, COMPATIBILITY_PARTIAL, COMPATIBILITY_UNKNOWN, COMPATIBILITY_FULL];

/* Why a profile is unknown (profile.reasons, each with the id it concerns):
 * metadata is missing or can't be read, never guessed */
const PROFILE_REASON_MISSING_METADATA = exports.PROFILE_REASON_MISSING_METADATA = 'MISSING_METADATA';
const PROFILE_REASON_MISSING_PROGRAM = exports.PROFILE_REASON_MISSING_PROGRAM = 'MISSING_PROGRAM';
const PROFILE_REASON_UNKNOWN_OPERAND = exports.PROFILE_REASON_UNKNOWN_OPERAND = 'UNKNOWN_OPERAND';
const PROFILE_REASON_UNKNOWN_PERIOD_TYPE = exports.PROFILE_REASON_UNKNOWN_PERIOD_TYPE = 'UNKNOWN_PERIOD_TYPE';
const PROFILE_REASON_UNSUPPORTED_ITEM_TYPE = exports.PROFILE_REASON_UNSUPPORTED_ITEM_TYPE = 'UNSUPPORTED_ITEM_TYPE';
const PROFILE_REASON_NO_DATA_SET = exports.PROFILE_REASON_NO_DATA_SET = 'NO_DATA_SET';
const PROFILE_REASON_NOT_AGGREGATABLE = exports.PROFILE_REASON_NOT_AGGREGATABLE = 'NOT_AGGREGATABLE';

/* Why a compatibility status, in the order results list them */

// An operand gives no value: a sum misses it, a side where all are missing has none (a ratio without its denominator)
const REASON_OPERAND_EMPTY = exports.REASON_OPERAND_EMPTY = 'OPERAND_EMPTY';
// An expression computed from an operand that leaves values out: it can be off either way
const REASON_OPERAND_PARTIAL = exports.REASON_OPERAND_PARTIAL = 'OPERAND_PARTIAL';

// The period is shorter than the period type of the data sets
const REASON_PERIOD_TOO_SHORT = exports.REASON_PERIOD_TOO_SHORT = 'PERIOD_TOO_SHORT';
// Another period type of the same length (Wednesday weeks asked by Monday week)
const REASON_PERIOD_TYPE_MISMATCH = exports.REASON_PERIOD_TYPE_MISMATCH = 'PERIOD_TYPE_MISMATCH';
// A reporting rate asked for a shorter period: a meaningless value
const REASON_REPORTING_RATE_TOO_SHORT = exports.REASON_REPORTING_RATE_TOO_SHORT = 'REPORTING_RATE_TOO_SHORT';
// FIRST or LAST data with no data period that counts for the period
const REASON_NO_EARLIER_PERIOD_VALUE = exports.REASON_NO_EARLIER_PERIOD_VALUE = 'NO_EARLIER_PERIOD_VALUE';
// The value of a longer data period, repeated (period aggregation AVERAGE)
const REASON_REPEATED_VALUE = exports.REASON_REPEATED_VALUE = 'REPEATED_VALUE';
// The value of an earlier data period (period aggregation FIRST or LAST)
const REASON_EARLIER_PERIOD_VALUE = exports.REASON_EARLIER_PERIOD_VALUE = 'EARLIER_PERIOD_VALUE';

// Neither the org unit nor its ancestors are assigned: nothing is there to show
const REASON_NOT_ASSIGNED = exports.REASON_NOT_ASSIGNED = 'NOT_ASSIGNED';
// Assigned only at higher levels than the one asked: analytics never splits values down
const REASON_ASSIGNED_AT_HIGHER_LEVEL = exports.REASON_ASSIGNED_AT_HIGHER_LEVEL = 'ASSIGNED_AT_HIGHER_LEVEL';
// The data element's aggregation levels stop values from reaching the level asked
const REASON_STOPPED_BY_AGGREGATION_LEVEL = exports.REASON_STOPPED_BY_AGGREGATION_LEVEL = 'STOPPED_BY_AGGREGATION_LEVEL';
// No org unit at the level asked under the parent org units, or no group member under them
const REASON_NO_ORG_UNITS_AT_LEVEL = exports.REASON_NO_ORG_UNITS_AT_LEVEL = 'NO_ORG_UNITS_AT_LEVEL';
// An org unit group without members: analytics refuses it (E7143), leave it out of the request
const REASON_EMPTY_GROUP = exports.REASON_EMPTY_GROUP = 'EMPTY_GROUP';
// Assigned to only some org units at the deepest level: the others aren't assigned, so nothing is left out
const REASON_PARTLY_ASSIGNED = exports.REASON_PARTLY_ASSIGNED = 'PARTLY_ASSIGNED';
// A program indicator placed by registration or an org unit attribute: values can be at any org unit
const REASON_ANY_ORG_UNIT = exports.REASON_ANY_ORG_UNIT = 'ANY_ORG_UNIT';

// The profile is unknown: see its reasons
const REASON_PROFILE_UNKNOWN = exports.REASON_PROFILE_UNKNOWN = 'PROFILE_UNKNOWN';
// The period id can't be read
const REASON_UNKNOWN_PERIOD = exports.REASON_UNKNOWN_PERIOD = 'UNKNOWN_PERIOD';
// A relative period's type depends on a setting that wasn't given, and its types disagree
const REASON_SETTING_MISSING = exports.REASON_SETTING_MISSING = 'SETTING_MISSING';
// The server version can't answer it (QuarterlyNov before 2.41, a program indicator without period boundaries before 2.43)
const REASON_UNSUPPORTED_VERSION = exports.REASON_UNSUPPORTED_VERSION = 'UNSUPPORTED_VERSION';
// The org unit, level or group isn't loaded or can't be read
const REASON_UNKNOWN_ORG_UNIT = exports.REASON_UNKNOWN_ORG_UNIT = 'UNKNOWN_ORG_UNIT';
const REASON_ORDER = exports.REASON_ORDER = [REASON_OPERAND_EMPTY, REASON_OPERAND_PARTIAL, REASON_PERIOD_TOO_SHORT, REASON_PERIOD_TYPE_MISMATCH, REASON_REPORTING_RATE_TOO_SHORT, REASON_NO_EARLIER_PERIOD_VALUE, REASON_REPEATED_VALUE, REASON_EARLIER_PERIOD_VALUE, REASON_NOT_ASSIGNED, REASON_ASSIGNED_AT_HIGHER_LEVEL, REASON_STOPPED_BY_AGGREGATION_LEVEL, REASON_NO_ORG_UNITS_AT_LEVEL, REASON_EMPTY_GROUP, REASON_PARTLY_ASSIGNED, REASON_ANY_ORG_UNIT, REASON_PROFILE_UNKNOWN, REASON_UNKNOWN_PERIOD, REASON_SETTING_MISSING, REASON_UNSUPPORTED_VERSION, REASON_UNKNOWN_ORG_UNIT];

// Values that exist but can't reach the org unit level asked
const LEFT_OUT_REASONS = exports.LEFT_OUT_REASONS = new Set([REASON_ASSIGNED_AT_HIGHER_LEVEL, REASON_STOPPED_BY_AGGREGATION_LEVEL]);

/* How an expression treats missing operand values (dhis2-core
 * MissingValueStrategy). Indicators evaluate each side with
 * SKIP_IF_ALL_VALUES_MISSING, then need both; expression dimension items
 * have their own, SKIP_IF_ALL_VALUES_MISSING by default. NEVER_SKIP counts
 * missing values as 0 even when all are. */
const SKIP_IF_ANY_VALUE_MISSING = exports.SKIP_IF_ANY_VALUE_MISSING = 'SKIP_IF_ANY_VALUE_MISSING';
const SKIP_IF_ALL_VALUES_MISSING = exports.SKIP_IF_ALL_VALUES_MISSING = 'SKIP_IF_ALL_VALUES_MISSING';
const NEVER_SKIP = exports.NEVER_SKIP = 'NEVER_SKIP';

/* Expression operands without a dimension item type: constants, org unit
 * group counts and [days] have no source; an unknown prefix makes the
 * profile unknown */
const OPERAND_TYPE_CONSTANT = exports.OPERAND_TYPE_CONSTANT = 'CONSTANT';
const OPERAND_TYPE_ORG_UNIT_GROUP = exports.OPERAND_TYPE_ORG_UNIT_GROUP = 'ORG_UNIT_GROUP';
const OPERAND_TYPE_DAYS = exports.OPERAND_TYPE_DAYS = 'DAYS';
const OPERAND_TYPE_UNKNOWN = exports.OPERAND_TYPE_UNKNOWN = 'UNKNOWN';

// How values aggregate over time (dhis2-core periodAggregationType)
const PERIOD_AGGREGATION_AVERAGE = exports.PERIOD_AGGREGATION_AVERAGE = 'AVERAGE';
const PERIOD_AGGREGATION_FIRST = exports.PERIOD_AGGREGATION_FIRST = 'FIRST';
const PERIOD_AGGREGATION_LAST = exports.PERIOD_AGGREGATION_LAST = 'LAST';
const NOT_AGGREGATABLE_AGGREGATION_TYPES = exports.NOT_AGGREGATABLE_AGGREGATION_TYPES = new Set(['NONE']);

/* A program indicator's orgUnitField that places values where its program is
 * assigned: the event's or enrollment's org unit (unset, EVENT, ENROLLMENT),
 * or the owner's, which falls back to it. REGISTRATION and an org unit data
 * element or attribute (its id) can place values at any org unit. */
const PROGRAM_ORG_UNIT_FIELDS = exports.PROGRAM_ORG_UNIT_FIELDS = new Set(['EVENT', 'ENROLLMENT', 'OWNER_AT_START', 'OWNER_AT_END']);

// Org unit selection items, as DV saves them
const ORG_UNIT_ITEM_TYPE_ORG_UNIT = exports.ORG_UNIT_ITEM_TYPE_ORG_UNIT = 'ORG_UNIT';
const ORG_UNIT_ITEM_TYPE_LEVEL = exports.ORG_UNIT_ITEM_TYPE_LEVEL = 'LEVEL';
const ORG_UNIT_ITEM_TYPE_GROUP = exports.ORG_UNIT_ITEM_TYPE_GROUP = 'GROUP';
const ORG_UNIT_ITEM_TYPE_USER = exports.ORG_UNIT_ITEM_TYPE_USER = 'USER';
const ORG_UNIT_ITEM_TYPE_UNKNOWN = exports.ORG_UNIT_ITEM_TYPE_UNKNOWN = 'UNKNOWN';

// Server period type names with their frequencyOrder, as /api/periodTypes returns them
const PERIOD_TYPE_FREQUENCY_ORDER = exports.PERIOD_TYPE_FREQUENCY_ORDER = {
  Daily: 1,
  Weekly: 7,
  WeeklyWednesday: 7,
  WeeklyThursday: 7,
  WeeklyFriday: 7,
  WeeklySaturday: 7,
  WeeklySunday: 7,
  BiWeekly: 14,
  Monthly: 30,
  BiMonthly: 61,
  Quarterly: 91,
  QuarterlyNov: 91,
  SixMonthly: 182,
  SixMonthlyApril: 182,
  SixMonthlyNov: 182,
  Yearly: 365,
  FinancialFeb: 365,
  FinancialApril: 365,
  FinancialJuly: 365,
  FinancialAug: 365,
  FinancialSep: 365,
  FinancialOct: 365,
  FinancialNov: 365,
  TwoYearly: 730
};
const PERIOD_TYPES = exports.PERIOD_TYPES = Object.keys(PERIOD_TYPE_FREQUENCY_ORDER);