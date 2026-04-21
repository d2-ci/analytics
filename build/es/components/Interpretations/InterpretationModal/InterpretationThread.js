import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Interpretation, getInterpretationAccess } from '../common/index.js';
import { useInterpretationsCurrentUser } from '../InterpretationsProvider/hooks.js';
import { Comment } from './Comment.js';
import { CommentAddForm } from './CommentAddForm.js';
const InterpretationThread = ({
  loading,
  interpretation,
  onInterpretationDeleted,
  initialFocus,
  downloadMenuComponent: DownloadMenu,
  dashboardRedirectUrl
}) => {
  const currentUser = useInterpretationsCurrentUser();
  const focusRef = useRef();
  useEffect(() => {
    if (initialFocus && focusRef.current) {
      window.setTimeout(() => {
        focusRef.current.focus();
      }, 25);
    }
  }, [initialFocus]);
  const interpretationAccess = getInterpretationAccess(interpretation, currentUser);
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-3453223443" + " " + (cx('container', {
      fetching: loading,
      dashboard: !!dashboardRedirectUrl
    }) || "")
  }, DownloadMenu && /*#__PURE__*/React.createElement(DownloadMenu, {
    relativePeriodDate: interpretation.created,
    className: "jsx-3453223443"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jsx-3453223443" + " " + 'thread'
  }, /*#__PURE__*/React.createElement(Interpretation, {
    id: interpretation.id,
    onReplyIconClick: interpretationAccess.comment ? () => {
      var _focusRef$current;
      return (_focusRef$current = focusRef.current) === null || _focusRef$current === void 0 ? void 0 : _focusRef$current.focus();
    } : null,
    dashboardRedirectUrl: dashboardRedirectUrl,
    isInThread: true,
    onDeleted: onInterpretationDeleted
  }), /*#__PURE__*/React.createElement("div", {
    className: "jsx-3453223443" + " " + 'comments'
  }, interpretation.comments.map(comment => /*#__PURE__*/React.createElement(Comment, {
    key: comment.id,
    comment: comment,
    canComment: interpretationAccess.comment
  })))), interpretationAccess.comment && /*#__PURE__*/React.createElement(CommentAddForm, {
    focusRef: focusRef
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3453223443"
  }, [".thread.jsx-3453223443{overflow-y:auto;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", ".dashboard.jsx-3453223443 .thread.jsx-3453223443{overflow-y:hidden;}", ".container.jsx-3453223443{position:relative;overflow:auto;max-height:calc(100vh - 258px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".container.dashboard.jsx-3453223443{max-height:none;}", ".container.fetching.jsx-3453223443::before{content:'';position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);}", ".container.fetching.jsx-3453223443::after{content:'';position:absolute;top:calc(50% - 12px);left:calc(50% - 12px);width:24px;height:24px;border-width:4px;border-style:solid;border-color:rgba(110,122,138,0.15) rgba(110,122,138,0.15) rgb(20,124,215);border-image:initial;border-radius:50%;-webkit-animation:1s linear 0s infinite normal none running rotation-jsx-3453223443;animation:1s linear 0s infinite normal none running rotation-jsx-3453223443;}", ".comments.jsx-3453223443{margin-inline-start:var(--spacers-dp4);margin-block-start:var(--spacers-dp8);margin-block-end:var(--spacers-dp12);padding-inline-start:var(--spacers-dp12);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-block-start:var(--spacers-dp4);gap:var(--spacers-dp16);border-inline-start:2px solid var(--colors-grey300);}", "@-webkit-keyframes rotation-jsx-3453223443{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-jsx-3453223443{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};
InterpretationThread.propTypes = {
  interpretation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onInterpretationDeleted: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  downloadMenuComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  initialFocus: PropTypes.bool
};
export { InterpretationThread };