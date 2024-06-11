import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { IconClock16, colors } from '@dhis2/ui';
import cx from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Interpretation, getInterpretationAccess } from '../common/index.js';
import { Comment } from './Comment.js';
import { CommentAddForm } from './CommentAddForm.js';
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
  } = useTimeZoneConversion();
  const focusRef = useRef();
  useEffect(() => {
    if (initialFocus && focusRef.current) {
      window.requestAnimationFrame(() => {
        focusRef.current.focus();
      });
    }
  }, [initialFocus]);
  const interpretationAccess = getInterpretationAccess(interpretation, currentUser);
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-3292109121" + " " + (cx('container', {
      fetching,
      dashboard: !!dashboardRedirectUrl
    }) || "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-3292109121" + " " + 'title'
  }, /*#__PURE__*/React.createElement(IconClock16, {
    color: colors.grey700
  }), moment(fromServerDate(interpretation.created)).format('LLL')), DownloadMenu && /*#__PURE__*/React.createElement(DownloadMenu, {
    relativePeriodDate: interpretation.created,
    className: "jsx-3292109121"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jsx-3292109121" + " " + 'thread'
  }, /*#__PURE__*/React.createElement(Interpretation, {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "jsx-3292109121" + " " + 'comments'
  }, interpretation.comments.map(comment => /*#__PURE__*/React.createElement(Comment, {
    key: comment.id,
    comment: comment,
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onThreadUpdated: onThreadUpdated,
    canComment: interpretationAccess.comment
  })))), interpretationAccess.comment && /*#__PURE__*/React.createElement(CommentAddForm, {
    currentUser: currentUser,
    interpretationId: interpretation.id,
    onSave: () => onThreadUpdated(true),
    focusRef: focusRef
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3292109121"
  }, [".thread.jsx-3292109121{margin-top:var(--spacers-dp16);overflow-y:auto;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".dashboard.jsx-3292109121 .thread.jsx-3292109121{overflow-y:hidden;}", ".container.jsx-3292109121{position:relative;overflow:auto;max-height:calc(100vh - 285px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".container.dashboard.jsx-3292109121{max-height:none;}", ".container.fetching.jsx-3292109121::before{content:'';position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);}", ".container.fetching.jsx-3292109121::after{content:'';position:absolute;top:calc(50% - 12px);left:calc(50% - 12px);width:24px;height:24px;border-width:4px;border-style:solid;border-color:rgba(110,122,138,0.15) rgba(110,122,138,0.15) rgb(20,124,215);border-image:initial;border-radius:50%;-webkit-animation:1s linear 0s infinite normal none running rotation-jsx-3292109121;animation:1s linear 0s infinite normal none running rotation-jsx-3292109121;}", ".title.jsx-3292109121{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:var(--spacers-dp8);color:var(--colors-grey900);font-size:14px;line-height:18px;}", ".comments.jsx-3292109121{padding-left:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:var(--spacers-dp4);gap:var(--spacers-dp4);}", "@-webkit-keyframes rotation-jsx-3292109121{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-jsx-3292109121{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};
InterpretationThread.propTypes = {
  currentUser: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  interpretation: PropTypes.object.isRequired,
  onInterpretationDeleted: PropTypes.func.isRequired,
  onLikeToggled: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  downloadMenuComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  initialFocus: PropTypes.bool,
  onThreadUpdated: PropTypes.func
};
export { InterpretationThread };