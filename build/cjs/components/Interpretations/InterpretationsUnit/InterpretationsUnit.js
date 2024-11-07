"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationsUnit = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _InterpretationForm = require("./InterpretationForm.js");
var _InterpretationList = require("./InterpretationList.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const interpretationsQuery = {
  interpretations: {
    resource: 'interpretations',
    params: _ref => {
      let {
        type,
        id
      } = _ref;
      return {
        fields: ['access[write,manage]', 'id', 'createdBy[id,displayName]', 'created', 'text', 'comments[id]', 'likes', 'likedBy[id]'],
        filter: `${type}.id:eq:${id}`
      };
    }
  }
};
const InterpretationsUnit = exports.InterpretationsUnit = /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    currentUser,
    type,
    id,
    visualizationHasTimeDimension,
    onInterpretationClick,
    onReplyIconClick,
    disabled,
    renderId,
    dashboardRedirectUrl
  } = _ref2;
  const [isExpanded, setIsExpanded] = (0, _react.useState)(true);
  const [interpretations, setInterpretations] = (0, _react.useState)([]);
  const showNoTimeDimensionHelpText = type === 'eventVisualization' && !visualizationHasTimeDimension;
  const {
    loading,
    fetching,
    refetch
  } = (0, _appRuntime.useDataQuery)(interpretationsQuery, {
    lazy: true,
    onComplete: data => setInterpretations(data.interpretations.interpretations)
  });
  const onCompleteAction = (0, _react.useCallback)(() => {
    refetch({
      type,
      id
    });
  }, [type, id, refetch]);
  (0, _react.useImperativeHandle)(ref, () => ({
    refresh: onCompleteAction
  }), [onCompleteAction]);
  (0, _react.useEffect)(() => {
    if (id) {
      refetch({
        type,
        id
      });
    }
  }, [type, id, renderId, refetch]);
  const onLikeToggled = _ref3 => {
    let {
      id,
      likedBy
    } = _ref3;
    const interpretation = interpretations.find(interp => interp.id === id);
    interpretation.likedBy = likedBy;
    interpretation.likes = likedBy.length;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4120713286", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + ((0, _classnames.default)('container', {
      expanded: isExpanded
    }) || "")
  }, fetching && !loading && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4120713286", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "fetching-loader"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: _style.default.dynamic([["4120713286", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["4120713286", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "title"
  }, _d2I18n.default.t('Interpretations')), isExpanded ? /*#__PURE__*/_react.default.createElement(_ui.IconChevronUp24, {
    color: _ui.colors.grey700
  }) : /*#__PURE__*/_react.default.createElement(_ui.IconChevronDown24, {
    color: _ui.colors.grey700
  })), isExpanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4120713286", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "loader"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  })), interpretations && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InterpretationForm.InterpretationForm, {
    currentUser: currentUser,
    type: type,
    id: id,
    onSave: onCompleteAction,
    disabled: disabled,
    showNoTimeDimensionHelpText: showNoTimeDimensionHelpText
  }), /*#__PURE__*/_react.default.createElement(_InterpretationList.InterpretationList, {
    currentUser: currentUser,
    interpretations: interpretations,
    onInterpretationClick: onInterpretationClick,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: onReplyIconClick,
    refresh: onCompleteAction,
    disabled: disabled,
    dashboardRedirectUrl: dashboardRedirectUrl
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4120713286",
    dynamic: [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]
  }, [`.container.__jsx-style-dynamic-selector{position:relative;padding:${_ui.spacers.dp16};border-bottom:1px solid ${_ui.colors.grey400};background-color:${_ui.colors.white};}`, ".fetching-loader.__jsx-style-dynamic-selector{position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1;}", `.expanded.__jsx-style-dynamic-selector{padding-bottom:${_ui.spacers.dp32};}`, ".loader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;}", `.title.__jsx-style-dynamic-selector{font-size:16px;font-weight:500;line-height:21px;color:${_ui.colors.grey900};}`]));
});
InterpretationsUnit.displayName = 'InterpretationsUnit';
InterpretationsUnit.defaultProps = {
  onInterpretationClick: Function.prototype,
  visualizationHasTimeDimension: true
};
InterpretationsUnit.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  renderId: _propTypes.default.number,
  visualizationHasTimeDimension: _propTypes.default.bool,
  onInterpretationClick: _propTypes.default.func,
  onReplyIconClick: _propTypes.default.func
};