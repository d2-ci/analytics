import _JSXStyle from "styled-jsx/style";
import { useDhis2ConnectionStatus } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Tooltip } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './styles/OfflineTooltip.style.js';
const OfflineTooltip = _ref => {
  let {
    disabledWhenOffline,
    disabled,
    content,
    children
  } = _ref;
  const {
    isDisconnected: offline
  } = useDhis2ConnectionStatus();
  const notAllowed = disabled || disabledWhenOffline && offline;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
    content: content || i18n.t('Not available offline'),
    openDelay: 200,
    closeDelay: 100
  }, _ref2 => {
    let {
      onMouseOver,
      onMouseOut,
      ref
    } = _ref2;
    return /*#__PURE__*/React.createElement("span", {
      onMouseOver: () => notAllowed && onMouseOver(),
      onMouseOut: () => notAllowed && onMouseOut(),
      ref: ref,
      className: `jsx-${styles.__hash}` + " " + (cx('tooltip', {
        notAllowed
      }) || "")
    }, children);
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OfflineTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  disabledWhenOffline: PropTypes.bool
};
OfflineTooltip.defaultProps = {
  disabled: false,
  disabledWhenOffline: true
};
export { OfflineTooltip };