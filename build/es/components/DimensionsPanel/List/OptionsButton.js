import { IconMore16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';

const OptionsButton = _ref => {
  let {
    style,
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(IconMore16, null));
};

OptionsButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default OptionsButton;