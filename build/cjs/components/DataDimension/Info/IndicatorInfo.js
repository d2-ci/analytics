"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndicatorInfo = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _expression = require("../../../api/expression.js");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _InfoTable = require("./InfoTable.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const indicatorQuery = {
  indicator: {
    resource: 'indicators',
    id: ({
      id
    }) => id,
    params: ({
      displayNameProp
    }) => ({
      fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},annualized,dataSets[id,displayName],decimals,denominator,displayDenominatorDescription,displayNumeratorDescription,indicatorGroups[id,displayName],indicatorType[displayName,factor],legendSets[id,displayName],numerator`
    })
  }
};
const IndicatorInfo = ({
  type,
  id,
  displayNameProp
}) => {
  const [data, setData] = (0, _react.useState)();
  const [error, setError] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const engine = (0, _appRuntime.useDataEngine)();
  const [getHumanReadableExpression] = (0, _appRuntime.useDataMutation)(_expression.validateIndicatorExpressionMutation, {
    onError: setError
  });
  const fetchData = (0, _react.useCallback)(async () => {
    const {
      indicator
    } = await engine.query(indicatorQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (indicator.denominator) {
      const result = await getHumanReadableExpression({
        expression: indicator.denominator
      });
      if (result) {
        indicator.humanReadableDenominatorExpression = result;
      }
    }
    if (indicator.numerator) {
      const result = await getHumanReadableExpression({
        expression: indicator.numerator
      });
      if (result) {
        indicator.humanReadableNumeratorExpression = result;
      }
    }
    setData({
      indicator
    });
    setLoading(false);
  }, [displayNameProp, engine, getHumanReadableExpression, id]);
  (0, _react.useEffect)(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.indicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Numerator description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.indicator.displayNumeratorDescription ? data.indicator.displayNumeratorDescription : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Numerator expression')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.indicator.humanReadableNumeratorExpression ? (0, _InfoTable.renderHumanReadableExpression)(data.indicator.humanReadableNumeratorExpression) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Denominator description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.indicator.displayDenominatorDescription ? data.indicator.displayDenominatorDescription : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Denominator expression')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.indicator.humanReadableDenominatorExpression ? (0, _InfoTable.renderHumanReadableExpression)(data.indicator.humanReadableDenominatorExpression) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Annualized')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.indicator.annualized ? _index.default.t('Yes') : _index.default.t('No'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Indicator type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, `${data === null || data === void 0 ? void 0 : data.indicator.indicatorType.displayName}, ${data === null || data === void 0 ? void 0 : data.indicator.indicatorType.factor}`)), (data === null || data === void 0 ? void 0 : data.indicator.decimals) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Decimals in output')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.decimals)), Boolean(data === null || data === void 0 ? void 0 : data.indicator.dataSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Data set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.dataSets.length === 1 ? data.indicator.dataSets[0].displayName : /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.dataSets.map(({
    id,
    displayName
  }) => /*#__PURE__*/_react.default.createElement("li", {
    key: id,
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, displayName)))))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Group membership')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.indicator.indicatorGroups) && (0, _InfoTable.renderGroupMemberships)(data.indicator.indicatorGroups))), Boolean(data === null || data === void 0 ? void 0 : data.indicator.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (0, _InfoTable.renderLegendSets)(data.indicator.legendSets)))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.IndicatorInfo = IndicatorInfo;
IndicatorInfo.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired
};