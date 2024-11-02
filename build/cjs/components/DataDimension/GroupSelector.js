"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _dimensions = require("../../api/dimensions.js");
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dataTypes = require("../../modules/dataTypes.js");
var _DetailSelector = require("./DetailSelector.js");
var _MetricSelector = require("./MetricSelector.js");
var _GroupSelectorStyle = _interopRequireDefault(require("./styles/GroupSelector.style.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GroupSelector = _ref => {
  var _dataTypes$dataType, _dataTypes$dataType2, _dataTypes$dataType3, _dataTypes$dataType4, _dataTypes$dataType5, _dataTypes$dataType6, _dataTypes$dataType7;
  let {
    dataType,
    currentGroup,
    onGroupChange,
    dataTest,
    displayNameProp,
    currentSubGroup,
    onSubGroupChange
  } = _ref;
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const [groups, setGroups] = (0, _react.useState)([]);
  const [isLoading, setIsLoading] = (0, _react.useState)(true);
  const defaultGroup = (_dataTypes$dataType = _dataTypes.dataTypeMap[dataType]) === null || _dataTypes$dataType === void 0 ? void 0 : _dataTypes$dataType.defaultGroup;
  const subGroupType = (_dataTypes$dataType2 = _dataTypes.dataTypeMap[dataType]) === null || _dataTypes$dataType2 === void 0 ? void 0 : _dataTypes$dataType2.subGroup;
  (0, _react.useEffect)(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      const result = await (0, _dimensions.apiFetchGroups)(dataEngine, dataType, displayNameProp);
      setGroups(result);
      setIsLoading(false);
    };
    fetchGroups();
  }, [dataEngine, dataType, displayNameProp]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_GroupSelectorStyle.default.__hash}` + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _GroupSelectorStyle.default.__hash
  }, _GroupSelectorStyle.default), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_GroupSelectorStyle.default.__hash}` + " " + "group-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: (_dataTypes$dataType3 = _dataTypes.dataTypeMap[dataType]) === null || _dataTypes$dataType3 === void 0 ? void 0 : _dataTypes$dataType3.getGroupLabel(),
    dataTest: `${dataTest}-groups-select-field`,
    selected: currentGroup || defaultGroup.id,
    placeholder: !currentGroup && (_dataTypes$dataType4 = _dataTypes.dataTypeMap[dataType]) !== null && _dataTypes$dataType4 !== void 0 && _dataTypes$dataType4.getPlaceholder ? _dataTypes.dataTypeMap[dataType].getPlaceholder() : null,
    onChange: ref => onGroupChange(ref.selected),
    dense: true,
    empty: ((_dataTypes$dataType5 = _dataTypes.dataTypeMap[dataType]) === null || _dataTypes$dataType5 === void 0 ? void 0 : _dataTypes$dataType5.getGroupEmptyLabel()) || _index.default.t('No data'),
    loadingText: ((_dataTypes$dataType6 = _dataTypes.dataTypeMap[dataType]) === null || _dataTypes$dataType6 === void 0 ? void 0 : _dataTypes$dataType6.getGroupLoadingLabel()) || _index.default.t('Loading'),
    loading: isLoading
  }, (_dataTypes$dataType7 = _dataTypes.dataTypeMap[dataType]) !== null && _dataTypes$dataType7 !== void 0 && _dataTypes$dataType7.defaultGroup ? /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: defaultGroup.id,
    key: defaultGroup.id,
    label: defaultGroup.getName(),
    dataTest: `${dataTest}-groups-select-field-option-${defaultGroup.id}`
  }) : null, !isLoading ? groups.map(item => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: item.id,
    key: item.id,
    label: item.name,
    dataTest: `${dataTest}-groups-select-field-option-${item.id}`
  })) : null)), subGroupType === _dataTypes.SUB_GROUP_DETAIL && /*#__PURE__*/_react.default.createElement(_DetailSelector.DetailSelector, {
    currentValue: currentSubGroup,
    onChange: onSubGroupChange,
    dataTest: `${dataTest}-sub-group-select-field`
  }), subGroupType === _dataTypes.SUB_GROUP_METRIC && /*#__PURE__*/_react.default.createElement(_MetricSelector.MetricSelector, {
    currentValue: currentSubGroup,
    onChange: onSubGroupChange,
    dataTest: `${dataTest}-sub-group-select-field`
  }));
};
GroupSelector.propTypes = {
  dataType: _propTypes.default.string.isRequired,
  displayNameProp: _propTypes.default.string.isRequired,
  onGroupChange: _propTypes.default.func.isRequired,
  onSubGroupChange: _propTypes.default.func.isRequired,
  currentGroup: _propTypes.default.string,
  currentSubGroup: _propTypes.default.string,
  dataTest: _propTypes.default.string
};
var _default = GroupSelector;
exports.default = _default;