"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationThread = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../common/index.js");
var _Comment = require("./Comment.js");
var _CommentAddForm = require("./CommentAddForm.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationThread = _ref => {
  let {
    currentUser,
    fetching,
    interpretation,
    onInterpretationDeleted,
    onLikeToggled,
    initialFocus,
    onThreadUpdated,
    downloadMenuComponent: DownloadMenu,
    dashboardRedirectUrl
  } = _ref;
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  const focusRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (initialFocus && focusRef.current) {
      window.requestAnimationFrame(() => {
        focusRef.current.focus();
      });
    }
  }, [initialFocus]);
  const interpretationAccess = (0, _index.getInterpretationAccess)(interpretation, currentUser);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3292109121" + " " + ((0, _classnames.default)('container', {
      fetching,
      dashboard: !!dashboardRedirectUrl
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3292109121" + " " + 'title'
  }, /*#__PURE__*/_react.default.createElement(_ui.IconClock16, {
    color: _ui.colors.grey700
  }), (0, _moment.default)(fromServerDate(interpretation.created)).format('LLL')), DownloadMenu && /*#__PURE__*/_react.default.createElement(DownloadMenu, {
    relativePeriodDate: interpretation.created,
    className: "jsx-3292109121"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3292109121" + " " + 'thread'
  }, /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    currentUser: currentUser,
    interpretation: interpretation,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: interpretationAccess.comment ? () => {
      var _focusRef$current;
      return (_focusRef$current = focusRef.current) === null || _focusRef$current === void 0 ? void 0 : _focusRef$current.focus();
    } : null,
    onUpdated: () => onThreadUpdated(true),
    onDeleted: onInterpretationDeleted,
    dashboardRedirectUrl: dashboardRedirectUrl,
    isInThread: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3292109121" + " " + 'comments'
  }, interpretation.comments.map(comment => /*#__PURE__*/_react.default.createElement(_Comment.Comment, {
    key: comment.id,
    comment: comment,
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onThreadUpdated: onThreadUpdated,
    canComment: interpretationAccess.comment
  })))), interpretationAccess.comment && /*#__PURE__*/_react.default.createElement(_CommentAddForm.CommentAddForm, {
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onSave: () => onThreadUpdated(true),
    focusRef: focusRef
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3292109121"
  }, [".thread.jsx-3292109121{margin-top:var(--spacers-dp16);overflow-y:auto;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".dashboard.jsx-3292109121 .thread.jsx-3292109121{overflow-y:hidden;}", ".container.jsx-3292109121{position:relative;overflow:auto;max-height:calc(100vh - 285px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".container.dashboard.jsx-3292109121{max-height:none;}", ".container.fetching.jsx-3292109121::before{content:'';position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);}", ".container.fetching.jsx-3292109121::after{content:'';position:absolute;top:calc(50% - 12px);left:calc(50% - 12px);width:24px;height:24px;border-width:4px;border-style:solid;border-color:rgba(110,122,138,0.15) rgba(110,122,138,0.15) rgb(20,124,215);border-image:initial;border-radius:50%;-webkit-animation:1s linear 0s infinite normal none running rotation-jsx-3292109121;animation:1s linear 0s infinite normal none running rotation-jsx-3292109121;}", ".title.jsx-3292109121{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:var(--spacers-dp8);color:var(--colors-grey900);font-size:14px;line-height:18px;}", ".comments.jsx-3292109121{padding-left:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:var(--spacers-dp4);gap:var(--spacers-dp4);}", "@-webkit-keyframes rotation-jsx-3292109121{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-jsx-3292109121{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};
exports.InterpretationThread = InterpretationThread;
InterpretationThread.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  fetching: _propTypes.default.bool.isRequired,
  interpretation: _propTypes.default.object.isRequired,
  onInterpretationDeleted: _propTypes.default.func.isRequired,
  onLikeToggled: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  downloadMenuComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  initialFocus: _propTypes.default.bool,
  onThreadUpdated: _propTypes.default.func
};