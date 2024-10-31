"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationModal = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _InterpretationThread = require("./InterpretationThread.js");
var _useModalContentWidth = require("./useModalContentWidth.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const modalCSS = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2559940363"
  }, ["aside.jsx-2559940363{max-width:calc(100vw - 128px) !important;max-height:calc(100vh - 128px) !important;width:auto !important;height:calc(100vh - 128px) !important;overflow-y:hidden;}", "aside.hidden.jsx-2559940363{display:none;}", "aside.jsx-2559940363>div>div{height:100%;}"]),
  className: "jsx-2559940363"
};
function getModalContentCSS(width) {
  return {
    styles: /*#__PURE__*/_react.default.createElement(_style.default, {
      id: "2099285089",
      dynamic: [width]
    }, [`div.__jsx-style-dynamic-selector{width:${width}px;overflow-y:visible;}`]),
    className: _style.default.dynamic([["2099285089", [width]]])
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
      fields: ['access[write,manage]', 'id', 'text', 'created', 'createdBy[id,displayName]', 'likes', 'likedBy', 'comments[id,text,created,createdBy[id,displayName]]']
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
  const modalContentWidth = (0, _useModalContentWidth.useModalContentWidth)();
  const modalContentCSS = getModalContentCSS(modalContentWidth);
  const [isDirty, setIsDirty] = (0, _react.useState)(false);
  const {
    data,
    error,
    loading,
    fetching,
    refetch
  } = (0, _appRuntime.useDataQuery)(query, {
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
  (0, _react.useEffect)(() => {
    if (interpretationId) {
      refetch({
        id: interpretationId
      });
    }
  }, [interpretationId, refetch]);
  const filters = (0, _react.useMemo)(() => {
    return {
      relativePeriodDate: interpretation === null || interpretation === void 0 ? void 0 : interpretation.created
    };
  }, [interpretation === null || interpretation === void 0 ? void 0 : interpretation.created]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loadingInProgress && /*#__PURE__*/_react.default.createElement(_ui.Layer, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null))), /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    fluid: true,
    onClose: handleClose,
    className: (0, _classnames.default)(modalCSS.className, {
      hidden: loadingInProgress
    }),
    dataTest: "interpretation-modal"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "ellipsis"
  }, _d2I18n.default.t('Viewing interpretation: {{- visualisationName}}', {
    visualisationName: visualization.displayName || visualization.name,
    nsSeparator: '^^'
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    className: modalContentCSS.className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "container"
  }, error && /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
    error: true,
    title: _d2I18n.default.t('Could not load interpretation')
  }, error.message || _d2I18n.default.t('The interpretation couldn’t be displayed. Try again or contact your system administrator.')), shouldRenderModalContent && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "visualisation-wrap"
  }, /*#__PURE__*/_react.default.createElement(VisualizationPlugin, {
    filters: filters,
    visualization: visualization,
    onResponsesReceived: onResponsesReceived,
    displayProperty: (_currentUser$settings = currentUser.settings) === null || _currentUser$settings === void 0 ? void 0 : _currentUser$settings.keyAnalysisDisplayProperty,
    isInModal: true,
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]])
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "thread-wrap"
  }, /*#__PURE__*/_react.default.createElement(_InterpretationThread.InterpretationThread, {
    currentUser: currentUser,
    fetching: fetching,
    interpretation: interpretation,
    onInterpretationDeleted: onInterpretationDeleted,
    onThreadUpdated: onThreadUpdated,
    initialFocus: initialFocus,
    downloadMenuComponent: downloadMenuComponent,
    onLikeToggled: onLikeToggled
  }))))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    disabled: fetching,
    onClick: handleClose
  }, _d2I18n.default.t('Hide interpretation'))), modalCSS.styles, modalContentCSS.styles, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2014146191",
    dynamic: [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]
  }, [`.title.__jsx-style-dynamic-selector{color:${_ui.colors.grey900};margin:0px;padding:${_ui.spacers.dp24} 0 ${_ui.spacers.dp4};}`, ".ellipsis.__jsx-style-dynamic-selector{display:inline-block;font-size:20px;font-weight:500;line-height:24px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;}", ".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}", ".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:16px;height:100%;}", ".visualisation-wrap.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:0;}", `.thread-wrap.__jsx-style-dynamic-selector{padding-right:${_ui.spacers.dp4};-webkit-flex-basis:300px;-ms-flex-preferred-size:300px;flex-basis:300px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}`])));
};
exports.InterpretationModal = InterpretationModal;
InterpretationModal.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  isVisualizationLoading: _propTypes.default.bool.isRequired,
  pluginComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired,
  visualization: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onResponsesReceived: _propTypes.default.func.isRequired,
  downloadMenuComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  initialFocus: _propTypes.default.bool,
  onInterpretationUpdate: _propTypes.default.func
};