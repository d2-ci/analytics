"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataDimensionContext = exports.default = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _dataTypes = require("../../modules/dataTypes.js");
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _InfoPopover = require("./Info/InfoPopover.js");
var _ItemOptionsSelector = require("./ItemOptionsSelector/ItemOptionsSelector.js");
var _ItemSelector = _interopRequireDefault(require("./ItemSelector/ItemSelector.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DataDimensionCtx = /*#__PURE__*/(0, _react.createContext)({});
const DataDimension = _ref => {
  let {
    currentUser,
    onSelect,
    selectedDimensions,
    displayNameProp,
    enabledDataTypes,
    infoBoxMessage,
    onCalculationSave,
    visType
  } = _ref;
  const {
    serverVersion
  } = (0, _appRuntime.useConfig)();
  const itemsRef = (0, _react.useRef)(new Map());
  const filterDataTypesByVersion = (0, _react.useCallback)(dataTypes => dataTypes.filter(_ref2 => {
    let {
      id
    } = _ref2;
    return (
      // Calculations only available from 2.40
      id !== _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM || serverVersion.minor >= 40
    );
  }), [serverVersion.minor]);
  const [dataTypes, setDataTypes] = (0, _react.useState)(filterDataTypesByVersion(enabledDataTypes || Object.values(_dataTypes.dataTypeMap)));
  const supportsEDI = dataTypes.map(_ref3 => {
    let {
      id
    } = _ref3;
    return id;
  }).includes(_dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM);
  const [currentCalculation, setCurrentCalculation] = (0, _react.useState)();
  const [currentDataItem, setCurrentDataItem] = (0, _react.useState)();
  const [infoDataItem, setInfoDataItem] = (0, _react.useState)();
  const onSelectItems = selectedItem => onSelect({
    dimensionId: _predefinedDimensions.DIMENSION_ID_DATA,
    items: selectedItem.map(item => ({
      id: item.value,
      name: item.label,
      type: item.type,
      optionSetId: item.optionSetId,
      expression: item.expression
    }))
  });
  (0, _react.useEffect)(() => enabledDataTypes && setDataTypes(filterDataTypesByVersion(enabledDataTypes)), [enabledDataTypes, filterDataTypesByVersion]);
  const onEditClick = dataItem => {
    var _dataItem$access;
    if (dataItem.type === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && !(((_dataItem$access = dataItem.access) === null || _dataItem$access === void 0 ? void 0 : _dataItem$access.write) === false) && supportsEDI) {
      // calculation
      setCurrentCalculation({
        id: dataItem.value,
        name: dataItem.label,
        expression: dataItem.expression
      });
    } else if (dataItem.optionSetId) {
      setCurrentDataItem({
        id: dataItem.value,
        name: dataItem.label,
        type: dataItem.type,
        optionSetId: dataItem.optionSetId
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(DataDimensionCtx.Provider, {
    value: {
      visType,
      currentUser
    }
  }, /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    selectedItems: selectedDimensions.map(item => ({
      value: item.id,
      label: item.name,
      isActive: item.isActive,
      type: item.type,
      optionSetId: item.optionSetId,
      expression: item.expression,
      access: item.access
    })),
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    infoBoxMessage: infoBoxMessage,
    dataTest: 'data-dimension',
    dataTypes: dataTypes,
    itemsRef: itemsRef,
    supportsEDI: supportsEDI,
    onEDISave: onCalculationSave,
    isOptionViewMode: Boolean(currentDataItem),
    currentCalculation: currentCalculation,
    setCurrentCalculation: setCurrentCalculation,
    infoDataItem: infoDataItem,
    setInfoDataItem: setInfoDataItem,
    onEditClick: onEditClick
  }), currentDataItem && /*#__PURE__*/_react.default.createElement(_ItemOptionsSelector.ItemOptionsSelector, _extends({}, currentDataItem, {
    selectedItems: selectedDimensions.map(item => ({
      value: item.id,
      label: item.name,
      isActive: item.isActive,
      type: item.type,
      optionSetId: item.optionSetId,
      expression: item.expression,
      access: item.access
    })),
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    dataTest: 'data-dimension',
    itemsRef: itemsRef,
    infoDataItem: infoDataItem,
    setInfoDataItem: setInfoDataItem,
    onClose: () => setCurrentDataItem(),
    onEditClick: onEditClick
  })), infoDataItem && /*#__PURE__*/_react.default.createElement(_InfoPopover.InfoPopover, {
    dataTest: 'data-dimension-info',
    item: infoDataItem,
    reference: itemsRef.current.get(infoDataItem.id),
    onClose: () => setInfoDataItem(),
    displayNameProp: displayNameProp
  }));
};
DataDimension.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  selectedDimensions: _propTypes.default.arrayOf(_propTypes.default.shape({
    expression: _propTypes.default.string,
    id: _propTypes.default.string,
    isActive: _propTypes.default.bool,
    name: _propTypes.default.string,
    type: _propTypes.default.string
  })).isRequired,
  onSelect: _propTypes.default.func.isRequired,
  currentUser: _propTypes.default.object,
  enabledDataTypes: _propTypes.default.array,
  infoBoxMessage: _propTypes.default.string,
  visType: _propTypes.default.string,
  onCalculationSave: _propTypes.default.func
};
DataDimension.defaultProps = {
  selectedDimensions: [],
  onSelect: Function.prototype
};
const useDataDimensionContext = () => (0, _react.useContext)(DataDimensionCtx);
exports.useDataDimensionContext = useDataDimensionContext;
var _default = exports.default = DataDimension;