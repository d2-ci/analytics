"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _VisualizationOptionsStyle = require("./styles/VisualizationOptions.style.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VisualizationOptions = _ref => {
  let {
    initiallyActiveTabKey,
    optionsConfig,
    onClose,
    onUpdate
  } = _ref;
  const [activeTabKey, setActiveTabKey] = (0, _react.useState)(initiallyActiveTabKey);
  const generateTabContent = sections => sections.map(_ref2 => {
    let {
      key,
      label,
      content,
      helpText
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      className: _VisualizationOptionsStyle.tabSection.className
    }, /*#__PURE__*/_react.default.createElement(_ui.FieldSet, null, label ? /*#__PURE__*/_react.default.createElement(_ui.Legend, null, /*#__PURE__*/_react.default.createElement("span", {
      className: _VisualizationOptionsStyle.tabSectionTitle.className
    }, label)) : null, content, helpText ? /*#__PURE__*/_react.default.createElement(_ui.Legend, null, /*#__PURE__*/_react.default.createElement(_ui.Help, null, helpText)) : null));
  });
  const generateTabs = tabs => tabs.map(_ref3 => {
    let {
      key,
      label,
      content
    } = _ref3;
    return {
      key,
      label,
      content: generateTabContent(content)
    };
  });
  const getModalContent = () => {
    const tabs = generateTabs(optionsConfig);
    let activeTabIndex = tabs.findIndex(tab => tab.key === activeTabKey);
    if (activeTabIndex < 0) {
      activeTabIndex = 0;
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: _VisualizationOptionsStyle.tabBar.className
    }, /*#__PURE__*/_react.default.createElement(_ui.TabBar, {
      dataTest: 'options-modal-tab-bar'
    }, tabs.map((_ref4, index) => {
      let {
        key,
        label
      } = _ref4;
      return /*#__PURE__*/_react.default.createElement(_ui.Tab, {
        key: key,
        onClick: () => setActiveTabKey(key),
        selected: index === activeTabIndex
      }, label);
    })), _VisualizationOptionsStyle.tabBar.styles), /*#__PURE__*/_react.default.createElement("div", {
      className: _VisualizationOptionsStyle.tabContent.className
    }, tabs[activeTabIndex].content, _VisualizationOptionsStyle.tabContent.styles, _VisualizationOptionsStyle.tabSection.styles, _VisualizationOptionsStyle.tabSectionTitle.styles, _VisualizationOptionsStyle.tabSectionTitleDisabled.styles, _VisualizationOptionsStyle.tabSectionTitleMargin.styles, _VisualizationOptionsStyle.tabSectionOption.styles, _VisualizationOptionsStyle.tabSectionOptionItem.styles, _VisualizationOptionsStyle.tabSectionOptionToggleable.styles, _VisualizationOptionsStyle.tabSectionToggleableSubsection.styles, _VisualizationOptionsStyle.tabSectionOptionComplexInline.styles, _VisualizationOptionsStyle.tabSectionOptionText.styles, _VisualizationOptionsStyle.tabSectionOptionIcon.styles));
  };
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    onClose: onClose,
    position: "top",
    large: true,
    dataTest: 'options-modal'
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _d2I18n.default.t('Options')), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    className: _VisualizationOptionsStyle.modalContent.className,
    dataTest: 'options-modal-content'
  }, getModalContent()), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, {
    dataTest: 'options-modal-actions'
  }, /*#__PURE__*/_react.default.createElement(_ui.ButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    type: "button",
    secondary: true,
    onClick: onClose,
    dataTest: 'options-modal-action-cancel'
  }, _d2I18n.default.t('Hide')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onUpdate,
    dataTest: 'options-modal-action-confirm',
    type: "button",
    primary: true
  }, _d2I18n.default.t('Update')))), _VisualizationOptionsStyle.modalContent.styles);
};
VisualizationOptions.propTypes = {
  optionsConfig: _propTypes.default.array.isRequired,
  initiallyActiveTabKey: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onUpdate: _propTypes.default.func
};
var _default = VisualizationOptions;
exports.default = _default;