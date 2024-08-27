import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { CircularLoader, IconChevronDown24, IconChevronUp24, colors, spacers } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { InterpretationForm } from './InterpretationForm.js';
import { InterpretationList } from './InterpretationList.js';
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
export const InterpretationsUnit = /*#__PURE__*/forwardRef((_ref2, ref) => {
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
  const [isExpanded, setIsExpanded] = useState(true);
  const [interpretations, setInterpretations] = useState([]);
  const showNoTimeDimensionHelpText = type === 'eventVisualization' && !visualizationHasTimeDimension;
  const {
    loading,
    fetching,
    refetch
  } = useDataQuery(interpretationsQuery, {
    lazy: true,
    onComplete: data => setInterpretations(data.interpretations.interpretations)
  });
  const onCompleteAction = useCallback(() => {
    refetch({
      type,
      id
    });
  }, [type, id, refetch]);
  useImperativeHandle(ref, () => ({
    refresh: onCompleteAction
  }), [onCompleteAction]);
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4120713286", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + (cx('container', {
      expanded: isExpanded
    }) || "")
  }, fetching && !loading && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4120713286", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "fetching-loader"
  }, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: _JSXStyle.dynamic([["4120713286", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "header"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["4120713286", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "title"
  }, i18n.t('Interpretations')), isExpanded ? /*#__PURE__*/React.createElement(IconChevronUp24, {
    color: colors.grey700
  }) : /*#__PURE__*/React.createElement(IconChevronDown24, {
    color: colors.grey700
  })), isExpanded && /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4120713286", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "loader"
  }, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  })), interpretations && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InterpretationForm, {
    currentUser: currentUser,
    type: type,
    id: id,
    onSave: onCompleteAction,
    disabled: disabled,
    showNoTimeDimensionHelpText: showNoTimeDimensionHelpText
  }), /*#__PURE__*/React.createElement(InterpretationList, {
    currentUser: currentUser,
    interpretations: interpretations,
    onInterpretationClick: onInterpretationClick,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: onReplyIconClick,
    refresh: onCompleteAction,
    disabled: disabled,
    dashboardRedirectUrl: dashboardRedirectUrl
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4120713286",
    dynamic: [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]
  }, [`.container.__jsx-style-dynamic-selector{position:relative;padding:${spacers.dp16};border-bottom:1px solid ${colors.grey400};background-color:${colors.white};}`, ".fetching-loader.__jsx-style-dynamic-selector{position:absolute;inset:0px;background-color:rgba(255,255,255,0.8);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1;}", `.expanded.__jsx-style-dynamic-selector{padding-bottom:${spacers.dp32};}`, ".loader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;}", `.title.__jsx-style-dynamic-selector{font-size:16px;font-weight:500;line-height:21px;color:${colors.grey900};}`]));
});
InterpretationsUnit.displayName = 'InterpretationsUnit';
InterpretationsUnit.defaultProps = {
  onInterpretationClick: Function.prototype,
  visualizationHasTimeDimension: true
};
InterpretationsUnit.propTypes = {
  currentUser: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool,
  renderId: PropTypes.number,
  visualizationHasTimeDimension: PropTypes.bool,
  onInterpretationClick: PropTypes.func,
  onReplyIconClick: PropTypes.func
};