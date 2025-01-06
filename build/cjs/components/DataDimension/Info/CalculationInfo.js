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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const calculationQuery = {
  calculation: {
    resource: 'expressionDimensionItems',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: _ref2 => {
      let {
        displayNameProp
      } = _ref2;
      return {
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},expression`
      };
    }
  }
};
const CalculationInfo = _ref3 => {
  let {
    type,
    id,
    displayNameProp
  } = _ref3;
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
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string,
  type: _propTypes.default.string
};