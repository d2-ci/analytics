"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpretation = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("../../InterpretationsProvider/hooks.js");
var _index = require("../index.js");
var _InterpretationDeleteButton = require("./InterpretationDeleteButton.js");
var _InterpretationUpdateForm = require("./InterpretationUpdateForm.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Interpretation = ({
  id,
  onReplyIconClick,
  dashboardRedirectUrl,
  disabled,
  isInThread,
  onClick,
  onDeleted
}) => {
  const interpretation = (0, _hooks.useInterpretation)(id);
  const interpretationAccess = (0, _hooks.useInterpretationAccess)(interpretation);
  const [isUpdateMode, setIsUpdateMode] = (0, _react.useState)(false);
  const [showSharingDialog, setShowSharingDialog] = (0, _react.useState)(false);
  const {
    toggleLike,
    isLikedByCurrentUser,
    toggleLikeInProgress
  } = (0, _hooks.useLike)(id);
  const shouldShowButton = Boolean(!!onClick && !disabled & !dashboardRedirectUrl);
  let tooltip = _d2I18n.default.t('Reply');
  if (!interpretationAccess.comment) {
    if (isInThread) {
      tooltip = _d2I18n.default.t('{{count}} replies', {
        count: interpretation.comments.length,
        defaultValue: '{{count}} reply',
        defaultValue_plural: '{{count}} replies'
      });
    } else {
      tooltip = _d2I18n.default.t('View replies');
    }
  }

  // Maps still uses old url style /?id= instead of hash
  const getAppInterpretationUrl = () => dashboardRedirectUrl.includes('?') ? `${dashboardRedirectUrl}&interpretationId=${id}` : `${dashboardRedirectUrl}?interpretationId=${id}`;
  return isUpdateMode ? /*#__PURE__*/_react.default.createElement(_InterpretationUpdateForm.InterpretationUpdateForm, {
    onComplete: () => setIsUpdateMode(false),
    id: id,
    showSharingLink: interpretationAccess.share,
    text: interpretation.text
  }) : /*#__PURE__*/_react.default.createElement(_index.Message, {
    text: interpretation.text,
    created: interpretation.created,
    username: interpretation.createdBy.displayName
  }, !disabled && /*#__PURE__*/_react.default.createElement(_index.MessageStatsBar, null, /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: isLikedByCurrentUser ? _d2I18n.default.t('Unlike') : _d2I18n.default.t('Like'),
    iconComponent: _ui.IconThumbUp16,
    onClick: toggleLike,
    selected: isLikedByCurrentUser,
    count: interpretation.likes,
    disabled: toggleLikeInProgress,
    dataTest: "interpretation-like-unlike-button"
  }), /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: tooltip,
    iconComponent: _ui.IconReply16,
    onClick: () => onReplyIconClick === null || onReplyIconClick === void 0 ? void 0 : onReplyIconClick(id),
    count: interpretation.comments.length,
    dataTest: "interpretation-reply-button",
    viewOnly: isInThread && !interpretationAccess.comment
  }), dashboardRedirectUrl && !isInThread && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('See interpretation'),
    iconComponent: _ui.IconView16,
    onClick: () => onClick(id),
    dataTest: "interpretation-view-button"
  }), dashboardRedirectUrl && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('Open in app'),
    iconComponent: _ui.IconLaunch16,
    onClick: () => window.open(getAppInterpretationUrl(), '_blank'),
    dataTest: "interpretation-launch-in-app-button"
  }), interpretationAccess.share && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    iconComponent: _ui.IconShare16,
    tooltipContent: _d2I18n.default.t('Share'),
    onClick: () => setShowSharingDialog(true),
    dataTest: "interpretation-share-button"
  }), showSharingDialog && /*#__PURE__*/_react.default.createElement(_ui.SharingDialog, {
    open: true,
    type: 'interpretation',
    id: id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, interpretationAccess.edit && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    iconComponent: _ui.IconEdit16,
    tooltipContent: _d2I18n.default.t('Edit'),
    onClick: () => setIsUpdateMode(true),
    dataTest: "interpretation-edit-button"
  }), interpretationAccess.delete && /*#__PURE__*/_react.default.createElement(_InterpretationDeleteButton.InterpretationDeleteButton, {
    id: id,
    onComplete: onDeleted
  }))), shouldShowButton && /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    onClick: (_, event) => {
      event.stopPropagation();
      onClick(id);
    }
  }, _d2I18n.default.t('See interpretation')));
};
exports.Interpretation = Interpretation;
Interpretation.propTypes = {
  id: _propTypes.default.string.isRequired,
  onReplyIconClick: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  isInThread: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onDeleted: _propTypes.default.func
};