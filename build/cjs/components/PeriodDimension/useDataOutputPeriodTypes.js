"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataOutputPeriodTypes = exports.getPeriodTypeOptions = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _v = require("./versions/v42.js");
var _v2 = require("./versions/v43.js");
var _v3 = require("./versions/v44.js");
const useDataOutputPeriodTypes = () => {
  const {
    serverVersion
  } = (0, _appRuntime.useConfig)();
  const supportsEnabledPeriodTypes = serverVersion.minor >= 43;
  const supportsPeriodLabelTranslations = serverVersion.minor >= 44;
  const v43Data = (0, _v2.useV43DataOutputPeriodTypes)({
    enabled: supportsEnabledPeriodTypes && !supportsPeriodLabelTranslations
  });
  const v44Data = (0, _v3.useV44DataOutputPeriodTypes)({
    enabled: supportsPeriodLabelTranslations
  });
  return {
    supportsEnabledPeriodTypes,
    enabledPeriodTypesData: supportsPeriodLabelTranslations ? v44Data : v43Data
  };
};
exports.useDataOutputPeriodTypes = useDataOutputPeriodTypes;
const getPeriodTypeOptions = ({
  enabledPeriodTypesData,
  periodsSettings,
  excludedPeriodTypes
}) => {
  switch (enabledPeriodTypesData === null || enabledPeriodTypesData === void 0 ? void 0 : enabledPeriodTypesData.version) {
    case 44:
      return (0, _v3.getV44PeriodTypeOptions)({
        enabledPeriodTypesData,
        periodsSettings,
        excludedPeriodTypes
      });
    case 43:
      return (0, _v2.getV43PeriodTypeOptions)({
        enabledPeriodTypesData,
        periodsSettings
      });
    default:
      return (0, _v.getV42PeriodTypeOptions)({
        periodsSettings,
        excludedPeriodTypes
      });
  }
};
exports.getPeriodTypeOptions = getPeriodTypeOptions;