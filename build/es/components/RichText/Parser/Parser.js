import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { MdParser } from './MdParser.js';
export const Parser = _ref => {
  let {
    children,
    style
  } = _ref;
  const MdParserInstance = useMemo(() => new MdParser(), []);
  return children ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: MdParserInstance.render(children)
    }
  }) : null;
};
Parser.defaultProps = {
  style: null
};
Parser.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object
};