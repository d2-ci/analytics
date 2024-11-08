"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _PeriodTransfer = _interopRequireDefault(require("./PeriodTransfer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const userSettingsQuery = {
  userSettings: {
    resource: 'userSettings',
    params: {
      key: ['keyUiLocale']
    }
  }
};
const PeriodDimension = _ref => {
  let {
    onSelect,
    selectedPeriods,
    rightFooter,
    excludedPeriodTypes,
    infoBoxMessage
  } = _ref;
  const {
    systemInfo
  } = (0, _appRuntime.useConfig)();
  const result = (0, _appRuntime.useDataQuery)(userSettingsQuery);
  const {
    calendar = 'gregory'
  } = systemInfo;
  const {
    data: {
      userSettings: {
        keyUiLocale: locale
      } = {}
    } = {}
  } = result;
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
  return /*#__PURE__*/_react.default.createElement(_PeriodTransfer.default, {
    onSelect: selectPeriods,
    selectedItems: selectedPeriods,
    infoBoxMessage: infoBoxMessage,
    rightFooter: rightFooter,
    dataTest: 'period-dimension',
    excludedPeriodTypes: excludedPeriodTypes,
    periodsSettings: periodsSettings
  });
};
PeriodDimension.propTypes = {
  onSelect: _propTypes.default.func.isRequired,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  infoBoxMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedPeriods: _propTypes.default.array
};
PeriodDimension.defaultProps = {
  selectedPeriods: []
};
var _default = exports.default = PeriodDimension;