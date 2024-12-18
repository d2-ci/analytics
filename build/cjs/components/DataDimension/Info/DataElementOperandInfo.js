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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const dataElementOperandsQuery = {
  dataElementOperands: {
    resource: 'dataElementOperands',
    params: _ref => {
      let {
        displayNameProp,
        id
      } = _ref;
      return {
        filter: `id:eq:${id}`,
        fields: [`${(0, _InfoTable.getCommonFields)(displayNameProp)}`, 'categoryOptionCombo[categoryCombo[categories[displayName,id],displayName],displayName]', `dataElement[${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,categoryCombo[displayName,categories[id,displayName]],dataElementGroups[id,displayName],dataSetElements[dataSet[id,displayName]],legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant]`, 'displayName,id']
      };
    }
  }
};
const DataElementOperandInfo = _ref2 => {
  let {
    id,
    displayNameProp,
    type
  } = _ref2;
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
  }, [displayNameProp, engine, id]);
  (0, _react.useEffect)(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    type: type,
    data: data === null || data === void 0 ? void 0 : data.dataElementOperand,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Data set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.dataSetElements) && (0, _InfoTable.renderDataSets)(data.dataElementOperand.dataElement.dataSetElements.map(_ref3 => {
    let {
      dataSet
    } = _ref3;
    return dataSet;
  })))), /*#__PURE__*/_react.default.createElement("tr", {
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
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.categoryCombo.categories.map(_ref4 => {
    let {
      id,
      displayName
    } = _ref4;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))), (data === null || data === void 0 ? void 0 : data.dataElementOperand.dataElement.optionSet) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("td", {
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
  }, data === null || data === void 0 ? void 0 : data.dataElementOperand.categoryOptionCombo.categoryCombo.categories.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.DataElementOperandInfo = DataElementOperandInfo;
DataElementOperandInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string,
  type: _propTypes.default.string
};