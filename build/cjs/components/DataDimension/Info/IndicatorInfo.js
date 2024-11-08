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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const indicatorQuery = {
  indicator: {
    resource: 'indicators',
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
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},annualized,dataSets[id,displayName],decimals,denominator,displayDenominatorDescription,displayNumeratorDescription,indicatorGroups[id,displayName],indicatorType[displayName,factor],legendSets[id,displayName],numerator`
      };
    }
  }
};
const IndicatorInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const [data, setData] = (0, _react.useState)();
  const [error, setError] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const engine = (0, _appRuntime.useDataEngine)();
  const [getHumanReadableExpression] = (0, _appRuntime.useDataMutation)(_expression.validateExpressionMutation, {
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
      if (result !== null && result !== void 0 && result.description) {
        indicator.humanReadableDenominatorExpression = result.description;
      }
    }
    if (indicator.numerator) {
      const result = await getHumanReadableExpression({
        expression: indicator.numerator
      });
      if (result !== null && result !== void 0 && result.description) {
        indicator.humanReadableNumeratorExpression = result.description;
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
    data: data === null || data === void 0 ? void 0 : data.indicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Numerator description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.displayNumeratorDescription)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Numerator expression in human readable format')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.indicator.humanReadableNumeratorExpression) || _index.default.t('None'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Denominator description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.displayDenominatorDescription)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Denominator expression in human readable format')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.indicator.humanReadableDenominatorExpression) || _index.default.t('None'))), /*#__PURE__*/_react.default.createElement("tr", {
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
  }, `${data === null || data === void 0 ? void 0 : data.indicator.displayName}, ${data === null || data === void 0 ? void 0 : data.indicator.factor}`)), (data === null || data === void 0 ? void 0 : data.indicator.decimals) && /*#__PURE__*/_react.default.createElement("tr", {
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
  }, data.indicator.dataSets.length === 1 ? data.indicator.dataSets[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.dataSets.map(_ref4 => {
    let {
      id,
      displayName
    } = _ref4;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  })))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Group membership')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.indicator.indicatorGroups.length) === 1 ? data.indicator.indicatorGroups[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.indicator.indicatorGroups.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  })))), Boolean(data === null || data === void 0 ? void 0 : data.indicator.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.legendSets.length === 1 ? data.indicator.legendSets[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.indicator.legendSets.map(_ref6 => {
    let {
      id,
      displayName
    } = _ref6;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.IndicatorInfo = IndicatorInfo;
IndicatorInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string
};