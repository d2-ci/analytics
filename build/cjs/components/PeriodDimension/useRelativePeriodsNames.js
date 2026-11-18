"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRelativePeriodsNames = void 0;
var _react = require("react");
var _useDataOutputPeriodTypes = require("./useDataOutputPeriodTypes.js");
var _relativePeriods = require("./utils/relativePeriods.js");
// Relative period id -> name map, for apps that need to show relative period
// names outside of the PeriodDimension (i.e. to populate their metadata).
// The names are the same used by the PeriodDimension:
// - v42: the hardcoded client names
// - v43: the hardcoded client names with the names derived from the server
//   period type labels (financial years and weeks)
// - v44: the server names (label translation -> label -> default name)
// The hardcoded client names are always used as fallback, for relative periods
// not returned by the server (i.e. of disabled period types), while loading and
// when the request fails, so the ids are never shown as names.
const useRelativePeriodsNames = () => {
  const {
    enabledPeriodTypesData,
    loading,
    error
  } = (0, _useDataOutputPeriodTypes.useDataOutputPeriodTypes)();
  const relativePeriodsNames = (0, _react.useMemo)(() => {
    const names = (0, _relativePeriods.getRelativePeriodsName)();
    Object.entries((enabledPeriodTypesData === null || enabledPeriodTypesData === void 0 ? void 0 : enabledPeriodTypesData.metaData) || {}).forEach(([id, {
      name
    }]) => {
      if (name) {
        names[id] = name;
      }
    });
    return names;
  }, [enabledPeriodTypesData]);
  return {
    relativePeriodsNames,
    loading,
    error
  };
};
exports.useRelativePeriodsNames = useRelativePeriodsNames;