"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataElementOperandInfo = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _valueTypes = require("../../../modules/valueTypes.js");
var _InfoTable = require("./InfoTable.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const dataElementOperandsQuery = {
  dataElementOperands: {
    resource: 'dataElementOperands',
    params: ({
      displayNameProp,
      id
    }) => ({
      filter: `id:eq:${id}`,
      fields: [`${(0, _InfoTable.getCommonFields)(displayNameProp)}`, 'categoryOptionCombo[categoryCombo[categories[displayName,id],displayName],displayName]', `dataElement[${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,categoryCombo[displayName,categories[id,displayName]],dataElementGroups[id,displayName],dataSetElements[dataSet[id,displayName]],legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant]`, 'displayName,id']
    })
  }
};
const DataElementOperandInfo = ({
  type,
  id,
  displayNameProp
}) => {
  const [data, setData] = (0, _react.useState)();
  const [error, setError] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const {
    baseUrl,
    apiVersion
  } = (0, _appRuntime.useConfig)();
  const engine = (0, _appRuntime.useDataEngine)();
  const fetchData = (0, _react.useCallback)(async () => {
    const {
      dataElementOperands
    } = await engine.query(dataElementOperandsQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    const dataElementOperand = dataElementOperands.dataElementOperands[0]

    // copy some common fields from dataElement
;
    ['code', 'created', 'createdBy', 'displayDescription', 'lastUpdated'].forEach(key => dataElementOperand[key] = dataElementOperand.dataElement[key]);

    // inject href as it is not returned from the API
    dataElementOperand.href = new URL(`${dataElementOperandsQuery.dataElementOperands.resource}?${new URLSearchParams({
      filter: `id:eq:${id}`
    })}`, new URL(`api/${apiVersion}/`, baseUrl === '..' ? window.location.href.split('dhis-web-data-visualizer/')[0] : `${baseUrl}/`)).href;
    setData({
      dataElementOperand
    });
    setLoading(false);
  }, [apiVersion, baseUrl, displayNameProp, engine, id]);
  (0, _react.useEffect)(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.dataElementOperand,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Data set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataSetElements) && (0, _InfoTable.renderDataSets)(data.dataElementOperand.dataElement.dataSetElements.map(({
    dataSet
  }) => dataSet)))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Zero is significant')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.dataElementOperand.dataElement.zeroIsSignificant ? _index.default.t('True') : _index.default.t('False'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Value type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _valueTypes.valueTypeDisplayNames[data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.valueType])), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Aggregation type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.aggregationType)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Category combo')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.displayName) === 'default' ? /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')) : /*#__PURE__*/_react.default.createElement("details", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.displayName), /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.categories.map(({
    id,
    displayName
  }) => /*#__PURE__*/_react.default.createElement("li", {
    key: id,
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, displayName)))))), (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.optionSet) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Option set')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElementOperand.dataElement.optionSet.displayName)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Group membership')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataElementGroups) && (0, _InfoTable.renderGroupMemberships)(data.dataElementOperand.dataElement.dataElementGroups))), Boolean(data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (0, _InfoTable.renderLegendSets)(data.dataElementOperand.dataElement.legendSets))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Category option name')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.displayName)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Category combo name')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.categoryCombo.displayName)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Categories name')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.categoryCombo.categories.map(({
    id,
    displayName
  }) => /*#__PURE__*/_react.default.createElement("li", {
    key: id,
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, displayName)))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.DataElementOperandInfo = DataElementOperandInfo;
DataElementOperandInfo.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired
};