import i18n from '@dhis2/d2-i18n';
import { ButtonStrip, Modal, ModalTitle, ModalContent, ModalActions, Button, FieldSet, Legend, TabBar, Tab, Help } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { modalContent, tabSection, tabSectionTitle, tabSectionTitleMargin, tabSectionOption, tabSectionOptionItem, tabSectionOptionToggleable, tabSectionToggleableSubsection, tabSectionOptionComplexInline, tabSectionOptionText, tabBar, tabContent, tabSectionOptionIcon } from './styles/VisualizationOptions.style.js';

const VisualizationOptions = _ref => {
  let {
    optionsConfig,
    onClose,
    onUpdate
  } = _ref;
  const [activeTabKey, setActiveTabKey] = useState();

  const generateTabContent = sections => sections.map(_ref2 => {
    let {
      key,
      label,
      content,
      helpText
    } = _ref2;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: tabSection.className
    }, /*#__PURE__*/React.createElement(FieldSet, null, label ? /*#__PURE__*/React.createElement(Legend, null, /*#__PURE__*/React.createElement("span", {
      className: tabSectionTitle.className
    }, label)) : null, content, helpText ? /*#__PURE__*/React.createElement(Legend, null, /*#__PURE__*/React.createElement(Help, null, helpText)) : null));
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

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: tabBar.className
    }, /*#__PURE__*/React.createElement(TabBar, {
      dataTest: 'options-modal-tab-bar'
    }, tabs.map((_ref4, index) => {
      let {
        key,
        label
      } = _ref4;
      return /*#__PURE__*/React.createElement(Tab, {
        key: key,
        onClick: () => setActiveTabKey(key),
        selected: index === activeTabIndex
      }, label);
    })), tabBar.styles), /*#__PURE__*/React.createElement("div", {
      className: tabContent.className
    }, tabs[activeTabIndex].content, tabContent.styles, tabSection.styles, tabSectionTitle.styles, tabSectionTitleMargin.styles, tabSectionOption.styles, tabSectionOptionItem.styles, tabSectionOptionToggleable.styles, tabSectionToggleableSubsection.styles, tabSectionOptionComplexInline.styles, tabSectionOptionText.styles, tabSectionOptionIcon.styles));
  };

  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    position: "top",
    large: true,
    dataTest: 'options-modal'
  }, /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Options')), /*#__PURE__*/React.createElement(ModalContent, {
    className: modalContent.className,
    dataTest: 'options-modal-content'
  }, getModalContent()), /*#__PURE__*/React.createElement(ModalActions, {
    dataTest: 'options-modal-actions'
  }, /*#__PURE__*/React.createElement(ButtonStrip, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    secondary: true,
    onClick: onClose,
    dataTest: 'options-modal-action-cancel'
  }, i18n.t('Hide')), /*#__PURE__*/React.createElement(Button, {
    onClick: onUpdate,
    dataTest: 'options-modal-action-confirm',
    type: "button",
    primary: true
  }, i18n.t('Update')))), modalContent.styles);
};

VisualizationOptions.propTypes = {
  optionsConfig: PropTypes.array.isRequired,
  onClose: PropTypes.func,
  onUpdate: PropTypes.func
};
export default VisualizationOptions;