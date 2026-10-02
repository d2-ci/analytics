"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataItemProfiles = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
var _assignedOrgUnitCounts = require("../../api/dataItemProfile/assignedOrgUnitCounts.js");
var _fetchDataItemProfileMetadata = require("../../api/dataItemProfile/fetchDataItemProfileMetadata.js");
var _fetchOrgUnitCoverage = require("../../api/dataItemProfile/fetchOrgUnitCoverage.js");
var _getDataItemProfile = require("../../modules/dataItemProfile/getDataItemProfile.js");
var _getDataItemProfileCompatibility = require("../../modules/dataItemProfile/getDataItemProfileCompatibility.js");
var _assignedOrgUnitLevels = require("../../modules/dataItemProfile/profile/assignedOrgUnitLevels.js");
var _utils = require("./utils.js");
/**
 * The profiles of data items, and whether a selection suits them.
 *
 * `items` are { id, dimensionItemType }, as in a visualization's dx items.
 * `profiles` are keyed by item id. Each has its assigned org unit levels
 * unless `withAssignedOrgUnitCounts: false`; it then gets them once
 * `orgUnits` are given and their coverage is loaded.
 *
 * `getDataItemCompatibility(itemId, { periods, orgUnits })` runs
 * getDataItemProfileCompatibility on the item's profile, with the server's
 * settings for relative weeks and financial years, its calendar and its
 * version; it gives undefined for an item not loaded.
 *
 * Periods need no request, so they are only passed to
 * getDataItemCompatibility. Org units do: `orgUnits` (DV's org unit items)
 * loads where the items' data sets and programs are assigned under them
 * (fetchOrgUnitCoverage, `orgUnitCoverage`), so getDataItemCompatibility can
 * judge any selection whose org units it loaded, such as a level under one of
 * them.
 */
const useDataItemProfiles = (items, {
  calendar,
  orgUnits,
  withAssignedOrgUnitCounts = true
} = {}) => {
  var _state$metadata, _state$error;
  const engineRef = (0, _utils.useEngineRef)();
  const itemsKey = (0, _utils.getItemsKey)(items);
  const resolvedCalendar = (0, _utils.useCalendar)(calendar);
  const {
    serverVersion
  } = (0, _appRuntime.useConfig)();
  const [state, setState] = (0, _react.useState)({
    loading: false,
    error: undefined,
    metadata: undefined,
    options: {}
  });
  const [coverageState, setCoverageState] = (0, _react.useState)({
    loading: false,
    error: undefined,
    coverage: undefined
  });
  const orgUnitsKey = JSON.stringify(orgUnits !== null && orgUnits !== void 0 ? orgUnits : []);
  (0, _react.useEffect)(() => {
    const engine = engineRef.current;
    const requestedItems = (0, _utils.parseItemsKey)(itemsKey);
    let cancelled = false;
    if (!requestedItems.length) {
      setState({
        loading: false,
        metadata: undefined,
        options: {}
      });
      return undefined;
    }
    setState(previous => ({
      ...previous,
      loading: true,
      error: undefined
    }));
    Promise.all([(0, _fetchDataItemProfileMetadata.fetchDataItemProfileMetadata)(engine, requestedItems, {
      withAssignedOrgUnitCounts
    }), (0, _utils.fetchRelativePeriodTypeOptions)(engine)]).then(([metadata, options]) => {
      if (!cancelled) {
        setState({
          loading: false,
          metadata,
          options
        });
      }
    }).catch(error => {
      if (!cancelled) {
        setState({
          loading: false,
          error,
          options: {}
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [engineRef, itemsKey, withAssignedOrgUnitCounts]);
  const metadataProfiles = (0, _react.useMemo)(() => state.metadata && Object.fromEntries((0, _utils.parseItemsKey)(itemsKey).map(item => [item.id, (0, _getDataItemProfile.getDataItemProfile)(item, state.metadata)])), [itemsKey, state.metadata]);
  const sourcesKey = JSON.stringify(metadataProfiles ? (0, _assignedOrgUnitCounts.getCountableSources)(Object.values(metadataProfiles)) : null);
  const knownAssignedOrgUnitCounts = (_state$metadata = state.metadata) === null || _state$metadata === void 0 ? void 0 : _state$metadata.assignedOrgUnitCounts;
  (0, _react.useEffect)(() => {
    const engine = engineRef.current;
    const sources = JSON.parse(sourcesKey);
    const requestedOrgUnits = JSON.parse(orgUnitsKey);
    let cancelled = false;
    if (!sources || !requestedOrgUnits.length) {
      setCoverageState({
        loading: false,
        coverage: undefined
      });
      return undefined;
    }
    setCoverageState(previous => ({
      ...previous,
      loading: true,
      error: undefined
    }));
    (0, _fetchOrgUnitCoverage.fetchOrgUnitCoverage)(engine, {
      sources,
      orgUnits: requestedOrgUnits,
      assignedOrgUnitCounts: knownAssignedOrgUnitCounts
    }).then(coverage => {
      if (!cancelled) {
        setCoverageState({
          loading: false,
          coverage
        });
      }
    }).catch(error => {
      if (!cancelled) {
        setCoverageState({
          loading: false,
          error
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [engineRef, sourcesKey, orgUnitsKey, knownAssignedOrgUnitCounts]);

  // Without the counts in the metadata, the coverage gives the assigned org unit levels
  const profiles = (0, _react.useMemo)(() => metadataProfiles && Object.fromEntries(Object.entries(metadataProfiles).map(([id, profile]) => [id, profile.assignedOrgUnitLevels || !coverageState.coverage ? profile : (0, _assignedOrgUnitLevels.addAssignedOrgUnitLevels)(profile, coverageState.coverage.assignedOrgUnitCounts)])), [metadataProfiles, coverageState.coverage]);
  const options = (0, _react.useMemo)(() => ({
    ...state.options,
    calendar: resolvedCalendar,
    serverVersion,
    orgUnitCoverage: coverageState.coverage
  }), [state.options, resolvedCalendar, serverVersion, coverageState.coverage]);
  const getDataItemCompatibility = (0, _react.useCallback)((itemId, selection) => profiles !== null && profiles !== void 0 && profiles[itemId] ? (0, _getDataItemProfileCompatibility.getDataItemProfileCompatibility)(profiles[itemId], selection, options) : undefined, [profiles, options]);
  return {
    loading: state.loading || coverageState.loading,
    error: (_state$error = state.error) !== null && _state$error !== void 0 ? _state$error : coverageState.error,
    profiles,
    orgUnitCoverage: coverageState.coverage,
    relativePeriodTypes: state.options,
    getDataItemCompatibility
  };
};
exports.useDataItemProfiles = useDataItemProfiles;