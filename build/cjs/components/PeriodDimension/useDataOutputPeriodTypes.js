"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataOutputPeriodTypes = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _v = require("./versions/v43.js");
var _v2 = require("./versions/v44.js");
const useDataOutputPeriodTypes = () => {
  const {
    serverVersion
  } = (0, _appRuntime.useConfig)();
  const supportsEnabledPeriodTypes = serverVersion.minor >= 43;
  const supportsPeriodLabelTranslations = serverVersion.minor >= 44;
  const v43 = (0, _v.useV43DataOutputPeriodTypes)({
    enabled: supportsEnabledPeriodTypes && !supportsPeriodLabelTranslations
  });
  const v44 = (0, _v2.useV44DataOutputPeriodTypes)({
    enabled: supportsPeriodLabelTranslations
  });

  // enabledPeriodTypesData stays null on v42 and when the request fails,
  // loading tells consumers whether to wait for it
  const {
    enabledPeriodTypesData,
    loading
  } = supportsPeriodLabelTranslations ? v44 : v43;
  return {
    supportsEnabledPeriodTypes,
    enabledPeriodTypesData,
    loading
  };
};
exports.useDataOutputPeriodTypes = useDataOutputPeriodTypes;