"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriodTypeOptions = void 0;
var _v = require("./versions/v42.js");
var _v2 = require("./versions/v43.js");
var _v3 = require("./versions/v44.js");
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
        periodsSettings,
        excludedPeriodTypes
      });
    default:
      return (0, _v.getV42PeriodTypeOptions)({
        periodsSettings,
        excludedPeriodTypes
      });
  }
};
exports.getPeriodTypeOptions = getPeriodTypeOptions;