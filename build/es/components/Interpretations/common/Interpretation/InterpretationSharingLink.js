import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { Button, SharingDialog } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
const InterpretationSharingLink = ({
  type,
  id
}) => {
  const [showSharingDialog, setShowSharingDialog] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "jsx-3323593508" + " " + "container"
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    onClick: () => setShowSharingDialog(true)
  }, i18n.t('Manage sharing'))), showSharingDialog && /*#__PURE__*/React.createElement(SharingDialog, {
    open: true,
    type: type,
    id: id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3323593508"
  }, [".container.jsx-3323593508{margin-inline-start:auto;}"]));
};
InterpretationSharingLink.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};
export { InterpretationSharingLink };