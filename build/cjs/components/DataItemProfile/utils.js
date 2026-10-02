"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEngineRef = exports.useCalendar = exports.parseItemsKey = exports.getItemsKey = exports.fetchRelativePeriodTypeOptions = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
var _periodTypes = require("../../modules/dataItemProfile/periods/periodTypes.js");
const SETTING_KEYS = ['analyticsWeeklyStart', 'analyticsFinancialYearStart'];

// A setting a version doesn't have is left out, never guessed
const fetchSetting = (engine, key) => engine.query({
  setting: {
    resource: `systemSettings/${key}`
  }
}).then(({
  setting
}) => setting === null || setting === void 0 ? void 0 : setting[key]).catch(() => undefined);
const fetchRelativePeriodTypeOptions = async engine => {
  const values = await Promise.all(SETTING_KEYS.map(key => fetchSetting(engine, key)));
  return (0, _periodTypes.getRelativePeriodTypeOptions)(Object.fromEntries(SETTING_KEYS.map((key, i) => [key, values[i]])));
};
exports.fetchRelativePeriodTypeOptions = fetchRelativePeriodTypeOptions;
const useCalendar = calendar => {
  var _ref;
  const {
    systemInfo
  } = (0, _appRuntime.useConfig)();
  return (_ref = calendar !== null && calendar !== void 0 ? calendar : systemInfo === null || systemInfo === void 0 ? void 0 : systemInfo.calendar) !== null && _ref !== void 0 ? _ref : 'gregory';
};

// Items are compared by value, so a new array with the same items sends no request
exports.useCalendar = useCalendar;
const getItemsKey = (items = []) => JSON.stringify(items.map(item => typeof item === 'string' ? [item] : [item.id, item.dimensionItemType]));
exports.getItemsKey = getItemsKey;
const parseItemsKey = itemsKey => JSON.parse(itemsKey).map(([id, dimensionItemType]) => ({
  id,
  dimensionItemType
}));

/* The latest engine, without making requests depend on its identity: a test
 * provider can give a new one on each render */
exports.parseItemsKey = parseItemsKey;
const useEngineRef = () => {
  const engine = (0, _appRuntime.useDataEngine)();
  const engineRef = (0, _react.useRef)(engine);
  engineRef.current = engine;
  return engineRef;
};
exports.useEngineRef = useEngineRef;