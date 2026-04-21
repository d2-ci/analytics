"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationThread = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
var _Comment = require("./Comment.js");
var _CommentAddForm = require("./CommentAddForm.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationThread = ({
  loading,
  interpretation,
  onInterpretationDeleted,
  initialFocus,
  downloadMenuComponent: DownloadMenu,
  dashboardRedirectUrl
}) => {
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const focusRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (initialFocus && focusRef.current) {
      window.setTimeout(() => {
        focusRef.current.focus();
      }, 25);
    }
  }, [initialFocus]);
  const interpretationAccess = (0, _index.getInterpretationAccess)(interpretation, currentUser);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3453223443" + " " + ((0, _classnames.default)('container', {
      fetching: loading,
      dashboard: !!dashboardRedirectUrl
    }) || "")
  }, DownloadMenu && /*#__PURE__*/_react.default.createElement(DownloadMenu, {
    relativePeriodDate: interpretation.created,
    className: "jsx-3453223443"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3453223443" + " " + 'thread'
  }, /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    id: interpretation.id,
    onReplyIconClick: interpretationAccess.comment ? () => {
      var _focusRef$current;
      return (_focusRef$current = focusRef.current) === null || _focusRef$current === void 0 ? void 0 : _focusRef$current.focus();
    } : null,
    dashboardRedirectUrl: dashboardRedirectUrl,
    isInThread: true,
    onDeleted: onInterpretationDeleted
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-3453223443" + " " + 'comments'
  }, interpretation.comments.map(comment => /*#__PURE__*/_react.default.createElement(_Comment.Comment, {
    key: comment.id,
    comment: comment,
    canComment: interpretationAccess.comment
  })))), interpretationAccess.comment && /*#__PURE__*/_react.default.createElement(_CommentAddForm.CommentAddForm, {
    focusRef: focusRef
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3453223443"
  }, [".thread.jsx-3453223443{overflow-y:auto;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".dashboard.jsx-3453223443 .thread.jsx-3453223443{overflow-y:hidden;}", ".container.jsx-3453223443{position:relative;overflow:auto;max-height:calc(100vh - 258px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".container.dashboard.jsx-3453223443{max-height:none;}", ".container.fetching.jsx-3453223443::before{content:'';position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);}", ".container.fetching.jsx-3453223443::after{content:'';position:absolute;top:calc(50% - 12px);left:calc(50% - 12px);width:24px;height:24px;border-width:4px;border-style:solid;border-color:rgba(110,122,138,0.15) rgba(110,122,138,0.15) rgb(20,124,215);border-image:initial;border-radius:50%;-webkit-animation:1s linear 0s infinite normal none running rotation-jsx-3453223443;animation:1s linear 0s infinite normal none running rotation-jsx-3453223443;}", ".comments.jsx-3453223443{margin-inline-start:var(--spacers-dp4);margin-block-start:var(--spacers-dp8);margin-block-end:var(--spacers-dp12);padding-inline-start:var(--spacers-dp12);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-block-start:var(--spacers-dp4);gap:var(--spacers-dp16);border-inline-start:2px solid var(--colors-grey300);}", "@-webkit-keyframes rotation-jsx-3453223443{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-jsx-3453223443{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};
exports.InterpretationThread = InterpretationThread;
InterpretationThread.propTypes = {
  interpretation: _propTypes.default.object.isRequired,
  loading: _propTypes.default.bool.isRequired,
  onInterpretationDeleted: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  downloadMenuComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  initialFocus: _propTypes.default.bool
};