import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { SharingDialog, colors, spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InterpretationSharingLink = _ref => {
  let {
    type,
    id
  } = _ref;
  const [showSharingDialog, setShowSharingDialog] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["3990725326", [spacers.dp4, spacers.dp8, colors.grey800]]]) + " " + "container"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setShowSharingDialog(true),
    className: _JSXStyle.dynamic([["3990725326", [spacers.dp4, spacers.dp8, colors.grey800]]]) + " " + "link"
  }, i18n.t('Manage sharing'))), showSharingDialog && /*#__PURE__*/React.createElement(SharingDialog, {
    open: true,
    type: type,
    id: id,
    onClose: () => setShowSharingDialog(false)
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3990725326",
    dynamic: [spacers.dp4, spacers.dp8, colors.grey800]
  }, [".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;gap:".concat(spacers.dp4, ";margin-top:").concat(spacers.dp8, ";font-size:13px;color:").concat(colors.grey800, ";cursor:pointer;}"), ".link.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;}"]));
};

InterpretationSharingLink.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};
export { InterpretationSharingLink };