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
var _ItemSelector = _interopRequireDefault(require("./ItemSelector.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DataDimensionCtx = /*#__PURE__*/(0, _react.createContext)({});
const DataDimension = _ref => {
  let {
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
  const onSelectItems = selectedItem => onSelect({
    dimensionId: _predefinedDimensions.DIMENSION_ID_DATA,
    items: selectedItem.map(item => ({
      id: item.value,
      name: item.label,
      type: item.type,
      expression: item.expression
    }))
  });
  (0, _react.useEffect)(() => enabledDataTypes && setDataTypes(filterDataTypesByVersion(enabledDataTypes)), [enabledDataTypes, filterDataTypesByVersion]);
  return /*#__PURE__*/_react.default.createElement(DataDimensionCtx.Provider, {
    value: {
      visType
    }
  }, /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    selectedItems: selectedDimensions.map(item => ({
      value: item.id,
      label: item.name,
      isActive: item.isActive,
      type: item.type,
      expression: item.expression,
      access: item.access
    })),
    onSelect: onSelectItems,
    displayNameProp: displayNameProp,
    infoBoxMessage: infoBoxMessage,
    dataTest: 'data-dimension',
    dataTypes: dataTypes,
    onEDISave: onCalculationSave
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