"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculationInfo = void 0;
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
const calculationQuery = {
  calculation: {
    resource: 'expressionDimensionItems',
    id: ({
      id
    }) => id,
    params: ({
      displayNameProp
    }) => ({
      fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},expression`
    })
  }
};
const CalculationInfo = ({
  type,
  id,
  displayNameProp
}) => {
  const [data, setData] = (0, _react.useState)();
  const [error, setError] = (0, _react.useState)();
  const [expressionError, setExpressionError] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const {
    baseUrl,
    apiVersion
  } = (0, _appRuntime.useConfig)();
  const engine = (0, _appRuntime.useDataEngine)();
  const [getHumanReadableExpression] = (0, _appRuntime.useDataMutation)(_expression.validateIndicatorExpressionMutation, {
    onError: setExpressionError
  });
  const fetchData = (0, _react.useCallback)(async () => {
    const {
      calculation
    } = await engine.query(calculationQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (calculation.expression) {
      const result = await getHumanReadableExpression({
        expression: calculation.expression
      });
      if (result) {
        calculation.humanReadableExpression = result;
      }
    }

    // inject href as it is not returned from the API
    calculation.href = new URL(`${calculationQuery.calculation.resource}/${id}`, new URL(`api/${apiVersion}/`, baseUrl === '..' ? window.location.href.split('dhis-web-data-visualizer/')[0] : `${baseUrl}/`)).href;
    setData({
      calculation
    });
    setLoading(false);
  }, [displayNameProp, engine, getHumanReadableExpression, id, apiVersion, baseUrl]);
  (0, _react.useEffect)(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.calculation,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Expression description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.calculation.humanReadableExpression ? (0, _InfoTable.renderHumanReadableExpression)(data.calculation.humanReadableExpression) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, expressionError ? _index.default.t('Error loading value') : _index.default.t('None'))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.CalculationInfo = CalculationInfo;
CalculationInfo.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired
};