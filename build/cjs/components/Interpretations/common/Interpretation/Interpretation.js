"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interpretation = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _InterpretationDeleteButton = require("./InterpretationDeleteButton.js");
var _InterpretationUpdateForm = require("./InterpretationUpdateForm.js");
var _useLike = require("./useLike.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Interpretation = _ref => {
  let {
    interpretation,
    currentUser,
    onClick,
    onUpdated,
    onDeleted,
    disabled,
    onReplyIconClick,
    dashboardRedirectUrl,
    isInThread,
    onLikeToggled
  } = _ref;
  const [isUpdateMode, setIsUpdateMode] = (0, _react.useState)(false);
  const [showSharingDialog, setShowSharingDialog] = (0, _react.useState)(false);
  const {
    toggleLike,
    isLikedByCurrentUser,
    toggleLikeInProgress
  } = (0, _useLike.useLike)({
    interpretation,
    currentUser,
    onComplete: likedBy => onLikeToggled({
      id: interpretation.id,
      likedBy
    })
  });
  const shouldShowButton = Boolean(!!onClick && !disabled & !dashboardRedirectUrl);
  const interpretationAccess = (0, _index.getInterpretationAccess)(interpretation, currentUser);
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
  const getAppInterpretationUrl = () => dashboardRedirectUrl.includes('?') ? `${dashboardRedirectUrl}&interpretationId=${interpretation.id}` : `${dashboardRedirectUrl}?interpretationId=${interpretation.id}`;
  return isUpdateMode ? /*#__PURE__*/_react.default.createElement(_InterpretationUpdateForm.InterpretationUpdateForm, {
    close: () => setIsUpdateMode(false),
    id: interpretation.id,
    showSharingLink: interpretationAccess.share,
    onComplete: onUpdated,
    text: interpretation.text,
    currentUser: currentUser
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
    onClick: () => onReplyIconClick && onReplyIconClick(interpretation.id),
    count: interpretation.comments.length,
    dataTest: "interpretation-reply-button",
    viewOnly: isInThread && !interpretationAccess.comment
  }), dashboardRedirectUrl && !isInThread && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('See interpretation'),
    iconComponent: _ui.IconView16,
    onClick: () => onClick(interpretation.id),
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
    id: interpretation.id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, interpretationAccess.edit && /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    iconComponent: _ui.IconEdit16,
    tooltipContent: _d2I18n.default.t('Edit'),
    onClick: () => setIsUpdateMode(true),
    dataTest: "interpretation-edit-button"
  }), interpretationAccess.delete && /*#__PURE__*/_react.default.createElement(_InterpretationDeleteButton.InterpretationDeleteButton, {
    id: interpretation.id,
    onComplete: onDeleted
  }))), shouldShowButton && /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    onClick: (_, event) => {
      event.stopPropagation();
      onClick(interpretation.id);
    }
  }, _d2I18n.default.t('See interpretation')));
};
exports.Interpretation = Interpretation;
Interpretation.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  interpretation: _propTypes.default.object.isRequired,
  onDeleted: _propTypes.default.func.isRequired,
  onLikeToggled: _propTypes.default.func.isRequired,
  onReplyIconClick: _propTypes.default.func.isRequired,
  onUpdated: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  isInThread: _propTypes.default.bool,
  onClick: _propTypes.default.func
};