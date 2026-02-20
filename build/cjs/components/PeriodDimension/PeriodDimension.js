"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _PeriodTransfer = _interopRequireDefault(require("./PeriodTransfer.js"));
var _useDataOutputPeriodTypes = require("./useDataOutputPeriodTypes.js");
var _enabledPeriodTypes = require("./utils/enabledPeriodTypes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const userSettingsQuery = {
  userSettings: {
    resource: 'userSettings',
    params: {
      key: ['keyUiLocale']
    }
  }
};
const SELECTED_PERIODS_PROP_DEFAULT = [];
const PeriodDimension = ({
  onSelect,
  selectedPeriods = SELECTED_PERIODS_PROP_DEFAULT,
  rightFooter,
  excludedPeriodTypes,
  infoBoxMessage,
  height
}) => {
  const config = (0, _appRuntime.useConfig)();
  const {
    systemInfo
  } = config;
  const userSettingsResult = (0, _appRuntime.useDataQuery)(userSettingsQuery);
  const {
    supportsEnabledPeriodTypes,
    enabledPeriodTypesData
  } = (0, _useDataOutputPeriodTypes.useDataOutputPeriodTypes)();
  const {
    calendar = 'gregory'
  } = systemInfo;
  const {
    data: {
      userSettings: {
        keyUiLocale: locale
      } = {}
    } = {}
  } = userSettingsResult;
  const periodsSettings = {
    calendar,
    locale
  };
  const selectPeriods = periods => {
    onSelect({
      dimensionId: _predefinedDimensions.DIMENSION_ID_PERIOD,
      items: periods
    });
  };
  const selectedPeriodsWithCustomDisplayNames = (0, _enabledPeriodTypes.applyPeriodNameOverrides)(selectedPeriods, enabledPeriodTypesData === null || enabledPeriodTypesData === void 0 ? void 0 : enabledPeriodTypesData.metaData);
  return /*#__PURE__*/_react.default.createElement(_PeriodTransfer.default, {
    onSelect: selectPeriods,
    selectedItems: selectedPeriodsWithCustomDisplayNames,
    infoBoxMessage: infoBoxMessage,
    rightFooter: rightFooter,
    dataTest: 'period-dimension',
    excludedPeriodTypes: excludedPeriodTypes,
    periodsSettings: periodsSettings,
    height: height,
    enabledPeriodTypesData: enabledPeriodTypesData,
    supportsEnabledPeriodTypes: supportsEnabledPeriodTypes
  });
};
PeriodDimension.propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  height: _propTypes.default.string,
  infoBoxMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedPeriods: _propTypes.default.array
};
var _default = exports.default = PeriodDimension;