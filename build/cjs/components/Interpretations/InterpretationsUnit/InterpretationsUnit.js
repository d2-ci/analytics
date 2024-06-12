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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const interpretationsQuery = {
  interpretations: {
    resource: 'interpretations',
    params: _ref => {
      let {
        type,
        id
      } = _ref;
      return {
        fields: ['access', 'id', 'user[displayName]', 'created', 'text', 'comments[id]', 'likes', 'likedBy[id]'],
        filter: "".concat(type, ".id:eq:").concat(id)
      };
    }
  }
};
const InterpretationsUnit = /*#__PURE__*/(0, _react.forwardRef)((_ref2, ref) => {
  let {
    currentUser,
    type,
    id,
    onInterpretationClick,
    onReplyIconClick,
    disabled,
    renderId
  } = _ref2;
  const [isExpanded, setIsExpanded] = (0, _react.useState)(true);
  const [interpretations, setInterpretations] = (0, _react.useState)([]);
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
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement(_InterpretationList.InterpretationList, {
    currentUser: currentUser,
    interpretations: interpretations,
    onInterpretationClick: onInterpretationClick,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: onReplyIconClick,
    refresh: onCompleteAction,
    disabled: disabled
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4120713286",
    dynamic: [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]
  }, [".container.__jsx-style-dynamic-selector{position:relative;padding:".concat(_ui.spacers.dp16, ";border-bottom:1px solid ").concat(_ui.colors.grey400, ";background-color:").concat(_ui.colors.white, ";}"), ".fetching-loader.__jsx-style-dynamic-selector{position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1;}", ".expanded.__jsx-style-dynamic-selector{padding-bottom:".concat(_ui.spacers.dp32, ";}"), ".loader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;}", ".title.__jsx-style-dynamic-selector{font-size:16px;font-weight:500;line-height:21px;color:".concat(_ui.colors.grey900, ";}")]));
});
exports.InterpretationsUnit = InterpretationsUnit;
InterpretationsUnit.displayName = 'InterpretationsUnit';
InterpretationsUnit.defaultProps = {
  onInterpretationClick: Function.prototype
};
InterpretationsUnit.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  renderId: _propTypes.default.number,
  onInterpretationClick: _propTypes.default.func,
  onReplyIconClick: _propTypes.default.func
};