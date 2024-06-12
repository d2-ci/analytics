import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Layer, CenteredContent, CircularLoader, NoticeBox } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
const CachedDataQueryCtx = /*#__PURE__*/createContext({});

const CachedDataQueryProvider = _ref => {
  let {
    query,
    dataTransformation,
    children
  } = _ref;
  const {
    data: rawData,
    ...rest
  } = useDataQuery(query);
  const {
    error,
    loading
  } = rest;
  const data = rawData && dataTransformation ? dataTransformation(rawData) : rawData;

  if (loading) {
    return /*#__PURE__*/React.createElement(Layer, {
      translucent: true
    }, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null)));
  }

  if (error) {
    const fallbackMsg = i18n.t('This app could not retrieve required data.');
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Network error')
    }, error.message || fallbackMsg);
  }

  return /*#__PURE__*/React.createElement(CachedDataQueryCtx.Provider, {
    value: data
  }, children);
};

CachedDataQueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
  query: PropTypes.object.isRequired,
  dataTransformation: PropTypes.func
};

const useCachedDataQuery = () => useContext(CachedDataQueryCtx);

export { CachedDataQueryProvider, useCachedDataQuery };