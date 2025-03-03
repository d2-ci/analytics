import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
export const PivotTableEngineContext = /*#__PURE__*/createContext(null);
export const Provider = _ref => {
  let {
    engine,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(PivotTableEngineContext.Provider, {
    value: engine
  }, children);
};
Provider.propTypes = {
  engine: PropTypes.object.isRequired,
  children: PropTypes.node
};
export const usePivotTableEngine = () => {
  return useContext(PivotTableEngineContext);
};