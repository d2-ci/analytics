"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgramIndicatorInfo = void 0;
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
const programIndicatorQuery = {
  programIndicator: {
    resource: 'programIndicators',
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
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,analyticsPeriodBoundaries[analyticsPeriodBoundaryType,boundaryTarget,id,offsetPeriodType,offsetPeriods],analyticsType,decimals,expression,filter,legendSets[id,displayName],program[displayName]`
      };
    }
  }
};
const ProgramIndicatorInfo = _ref3 => {
  let {
    type,
    id,
    displayNameProp
  } = _ref3;
  const [data, setData] = (0, _react.useState)();
  const [error, setError] = (0, _react.useState)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const engine = (0, _appRuntime.useDataEngine)();
  const [getHumanReadableExpression] = (0, _appRuntime.useDataMutation)(_expression.validateProgramIndicatorExpressionMutation, {
    onError: setError
  });
  const [getHumanReadableFilter] = (0, _appRuntime.useDataMutation)(_expression.validateProgramIndicatorFilterMutation, {
    onError: setError
  });
  const fetchData = (0, _react.useCallback)(async () => {
    const {
      programIndicator
    } = await engine.query(programIndicatorQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (programIndicator.expression) {
      const result = await getHumanReadableExpression({
        expression: programIndicator.expression
      });
      if (result) {
        programIndicator.humanReadableExpression = result;
      }
    }
    if (programIndicator.filter) {
      const result = await getHumanReadableFilter({
        filter: programIndicator.filter
      });
      if (result) {
        programIndicator.humanReadableFilter = result;
      }
    }
    programIndicator.analyticsPeriodBoundaries.forEach((_ref4, index) => {
      let {
        boundaryTarget
      } = _ref4;
      programIndicator.analyticsPeriodBoundaries[index].boundaryTarget = ['ENROLLMENT_DATE', 'EVENT_DATE', 'INCIDENT_DATE'].includes(boundaryTarget) ? (0, _InfoTable.sentenceCaseText)(boundaryTarget) : _index.default.t('Custom');
    });
    setData({
      programIndicator
    });
    setLoading(false);
  }, [displayNameProp, engine, id, getHumanReadableExpression, getHumanReadableFilter]);
  (0, _react.useEffect)(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.programIndicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Program')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.program.displayName)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Analytics type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.programIndicator.analyticsType) === 'ENROLLMENT' ? _index.default.t('Enrollment') : _index.default.t('Event'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Analytics period boundaries')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.analyticsPeriodBoundaries.map(_ref5 => {
    let {
      analyticsPeriodBoundaryType,
      boundaryTarget,
      id,
      offsetPeriodType,
      offsetPeriods
    } = _ref5;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "label"
    }, _index.default.t('Type:'), "\xA0"), (0, _InfoTable.sentenceCaseText)(analyticsPeriodBoundaryType)), /*#__PURE__*/_react.default.createElement("br", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "label"
    }, _index.default.t('Target:'), "\xA0"), boundaryTarget), Boolean(offsetPeriods) && Boolean(offsetPeriodType) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "label"
    }, _index.default.t('Offset:'), "\xA0"), _index.default.t('{{ offsetPeriodType }} × {{ offsetPeriods }}', {
      offsetPeriodType,
      offsetPeriods
    }))));
  }))))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Expression')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.programIndicator.humanReadableExpression ? (0, _InfoTable.renderHumanReadableExpression)(data.programIndicator.humanReadableExpression) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Filter')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.programIndicator.humanReadableFilter ? (0, _InfoTable.renderHumanReadableExpression)(data.programIndicator.humanReadableFilter) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Aggregation type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.aggregationType)), (data === null || data === void 0 ? void 0 : data.programIndicator) && 'decimals' in data.programIndicator && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Decimals in output')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.programIndicator.decimals)), Boolean(data === null || data === void 0 ? void 0 : data.programIndicator.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (0, _InfoTable.renderLegendSets)(data.programIndicator.legendSets)))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.ProgramIndicatorInfo = ProgramIndicatorInfo;
ProgramIndicatorInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string,
  type: _propTypes.default.string
};