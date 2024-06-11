import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Modal, ModalActions, ModalContent, NoticeBox, Button, spacers, colors, Layer, CenteredContent, CircularLoader } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import { InterpretationThread } from './InterpretationThread.js';
import { useModalContentWidth } from './useModalContentWidth.js';
const modalCSS = {
  styles: /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "422732072"
  }, ["aside.jsx-422732072{max-width:calc(100vw - 128px) !important;max-height:calc(100vh - 128px) !important;width:auto !important;height:auto !important;overflow-y:hidden;}", "aside.hidden.jsx-422732072{display:none;}", "aside.jsx-422732072>div>div{max-height:none;}"]),
  className: "jsx-422732072"
};

function getModalContentCSS(width) {
  return {
    styles: /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "1689110567",
      dynamic: [width]
    }, ["div.__jsx-style-dynamic-selector{width:".concat(width, "px;}")]),
    className: _JSXStyle.dynamic([["1689110567", [width]]])
  };
}

const query = {
  interpretation: {
    resource: 'interpretations',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: {
      fields: ['access', 'id', 'text', 'created', 'user[id,displayName]', 'likes', 'likedBy', 'comments[access,id,text,created,createdBy[id,displayName]]']
    }
  }
};

const InterpretationModal = _ref2 => {
  var _currentUser$settings;

  let {
    currentUser,
    isVisualizationLoading,
    visualization,
    onResponsesReceived,
    downloadMenuComponent,
    onClose,
    onInterpretationUpdate,
    interpretationId,
    initialFocus,
    pluginComponent: VisualizationPlugin
  } = _ref2;
  const modalContentWidth = useModalContentWidth();
  const modalContentCSS = getModalContentCSS(modalContentWidth);
  const [isDirty, setIsDirty] = useState(false);
  const {
    data,
    error,
    loading,
    fetching,
    refetch
  } = useDataQuery(query, {
    lazy: true
  });
  const interpretation = data === null || data === void 0 ? void 0 : data.interpretation;
  const shouldRenderModalContent = !error && interpretation;
  const loadingInProgress = loading || isVisualizationLoading;

  const handleClose = () => {
    if (isDirty) {
      onInterpretationUpdate();
      setIsDirty(false);
    }

    onClose();
  };

  const onThreadUpdated = affectsInterpretation => {
    if (affectsInterpretation) {
      setIsDirty(true);
    }

    refetch({
      id: interpretationId
    });
  };

  const onLikeToggled = _ref3 => {
    let {
      likedBy
    } = _ref3;
    setIsDirty(true);
    interpretation.likedBy = likedBy;
    interpretation.likes = likedBy.length;
  };

  const onInterpretationDeleted = () => {
    setIsDirty(false);
    onInterpretationUpdate();
    onClose();
  };

  useEffect(() => {
    if (interpretationId) {
      refetch({
        id: interpretationId
      });
    }
  }, [interpretationId, refetch]);
  const filters = useMemo(() => {
    return {
      relativePeriodDate: interpretation === null || interpretation === void 0 ? void 0 : interpretation.created
    };
  }, [interpretation === null || interpretation === void 0 ? void 0 : interpretation.created]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, loadingInProgress && /*#__PURE__*/React.createElement(Layer, null, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null))), /*#__PURE__*/React.createElement(Modal, {
    fluid: true,
    onClose: handleClose,
    className: cx(modalCSS.className, {
      hidden: loadingInProgress
    }),
    dataTest: "interpretation-modal"
  }, /*#__PURE__*/React.createElement("h1", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "title"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "ellipsis"
  }, i18n.t('Viewing interpretation: {{- visualisationName}}', {
    visualisationName: visualization.displayName || visualization.name,
    nsSeparator: '^^'
  }))), /*#__PURE__*/React.createElement(ModalContent, {
    className: modalContentCSS.className
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "container"
  }, error && /*#__PURE__*/React.createElement(NoticeBox, {
    error: true,
    title: i18n.t('Could not load interpretation')
  }, error.message || i18n.t('The interpretation couldn’t be displayed. Try again or contact your system administrator.')), shouldRenderModalContent && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "visualisation-wrap"
  }, /*#__PURE__*/React.createElement(VisualizationPlugin, {
    filters: filters,
    visualization: visualization,
    onResponsesReceived: onResponsesReceived,
    displayProperty: (_currentUser$settings = currentUser.settings) === null || _currentUser$settings === void 0 ? void 0 : _currentUser$settings.keyAnalysisDisplayProperty,
    isInModal: true,
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]])
  })), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3175860552", [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]]]) + " " + "thread-wrap"
  }, /*#__PURE__*/React.createElement(InterpretationThread, {
    currentUser: currentUser,
    fetching: fetching,
    interpretation: interpretation,
    onInterpretationDeleted: onInterpretationDeleted,
    onThreadUpdated: onThreadUpdated,
    initialFocus: initialFocus,
    downloadMenuComponent: downloadMenuComponent,
    onLikeToggled: onLikeToggled
  }))))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(Button, {
    disabled: fetching,
    onClick: handleClose
  }, i18n.t('Hide interpretation'))), modalCSS.styles, modalContentCSS.styles, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3175860552",
    dynamic: [colors.grey900, spacers.dp24, spacers.dp4, spacers.dp4]
  }, [".title.__jsx-style-dynamic-selector{color:".concat(colors.grey900, ";margin:0px;padding:").concat(spacers.dp24, " 0 ").concat(spacers.dp4, ";}"), ".ellipsis.__jsx-style-dynamic-selector{display:inline-block;font-size:20px;font-weight:500;line-height:24px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;}", ".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:16px;}", ".visualisation-wrap.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:0;}", ".thread-wrap.__jsx-style-dynamic-selector{padding-right:".concat(spacers.dp4, ";-webkit-flex-basis:300px;-ms-flex-preferred-size:300px;flex-basis:300px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow-y:auto;}")])));
};

InterpretationModal.propTypes = {
  currentUser: PropTypes.object.isRequired,
  interpretationId: PropTypes.string.isRequired,
  isVisualizationLoading: PropTypes.bool.isRequired,
  pluginComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  visualization: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onResponsesReceived: PropTypes.func.isRequired,
  downloadMenuComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  initialFocus: PropTypes.bool,
  onInterpretationUpdate: PropTypes.func
};
export { InterpretationModal };