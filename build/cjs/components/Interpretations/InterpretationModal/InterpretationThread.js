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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InterpretationThread = _ref => {
  let {
    currentUser,
    fetching,
    interpretation,
    onInterpretationDeleted,
    onLikeToggled,
    initialFocus,
    onThreadUpdated,
    downloadMenuComponent: DownloadMenu
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-615306698" + " " + ((0, _classnames.default)('container', {
      fetching
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-615306698" + " " + 'scrollbox'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-615306698" + " " + 'title'
  }, /*#__PURE__*/_react.default.createElement(_ui.IconClock16, {
    color: _ui.colors.grey700
  }), (0, _moment.default)(fromServerDate(interpretation.created)).format('LLL')), DownloadMenu && /*#__PURE__*/_react.default.createElement(DownloadMenu, {
    relativePeriodDate: interpretation.created,
    className: "jsx-615306698"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-615306698" + " " + 'thread'
  }, /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    currentUser: currentUser,
    interpretation: interpretation,
    onReplyIconClick: () => {
      var _focusRef$current;

      return (_focusRef$current = focusRef.current) === null || _focusRef$current === void 0 ? void 0 : _focusRef$current.focus();
    },
    onUpdated: () => onThreadUpdated(true),
    onDeleted: onInterpretationDeleted,
    onLikeToggled: onLikeToggled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-615306698" + " " + 'comments'
  }, interpretation.comments.map(comment => /*#__PURE__*/_react.default.createElement(_Comment.Comment, {
    key: comment.id,
    comment: comment,
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onThreadUpdated: onThreadUpdated
  }))), /*#__PURE__*/_react.default.createElement(_CommentAddForm.CommentAddForm, {
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onSave: () => onThreadUpdated(true),
    focusRef: focusRef
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "615306698"
  }, [".thread.jsx-615306698{margin-top:var(--spacers-dp16);}", ".container.jsx-615306698{position:relative;overflow:hidden;max-height:calc(100vh - 285px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".container.fetching.jsx-615306698::before{content:'';position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);}", ".container.fetching.jsx-615306698::after{content:'';position:absolute;top:calc(50% - 12px);left:calc(50% - 12px);width:24px;height:24px;border-width:4px;border-style:solid;border-color:rgba(110,122,138,0.15) rgba(110,122,138,0.15) rgb(20,124,215);border-image:initial;border-radius:50%;-webkit-animation:1s linear 0s infinite normal none running rotation-jsx-615306698;animation:1s linear 0s infinite normal none running rotation-jsx-615306698;}", ".scrollbox.jsx-615306698{overflow-y:auto;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".title.jsx-615306698{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:var(--spacers-dp8);color:var(--colors-grey900);font-size:14px;line-height:18px;}", ".comments.jsx-615306698{padding-left:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:var(--spacers-dp4);gap:var(--spacers-dp4);}", "@-webkit-keyframes rotation-jsx-615306698{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-jsx-615306698{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};

exports.InterpretationThread = InterpretationThread;
InterpretationThread.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  fetching: _propTypes.default.bool.isRequired,
  interpretation: _propTypes.default.object.isRequired,
  onInterpretationDeleted: _propTypes.default.func.isRequired,
  onLikeToggled: _propTypes.default.func.isRequired,
  downloadMenuComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  initialFocus: _propTypes.default.bool,
  onThreadUpdated: _propTypes.default.func
};