import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Layer, CenteredContent, CircularLoader, NoticeBox } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
const CachedDataQueryCtx = /*#__PURE__*/createContext({});
const CachedDataQueryProvider = _ref => {
  let {
    query,
    dataTransformation,
    children,
    translucent = true
  } = _ref;
  const {
    data: rawData,
    error,
    loading
  } = useDataQuery(query);
  const [transformedData, setTransformedData] = useState(undefined);
  const [transformLoading, setTransformLoading] = useState(Boolean(dataTransformation));
  const [transformError, setTransformError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const transform = async () => {
      if (!rawData || !dataTransformation) {
        setTransformedData(rawData);
        return;
      }
      try {
        const result = dataTransformation(rawData);
        if (result instanceof Promise) {
          setTransformLoading(true);
          const awaitedResult = await result;
          isMounted && setTransformedData(awaitedResult);
        } else {
          isMounted && setTransformedData(result);
        }
      } catch (err) {
        isMounted && setTransformError(err);
      } finally {
        isMounted && setTransformLoading(false);
      }
    };
    transform();
    return () => {
      isMounted = false;
    };
  }, [rawData, dataTransformation]);
  if (loading || transformLoading) {
    return /*#__PURE__*/React.createElement(Layer, {
      translucent: translucent
    }, /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, null)));
  }
  if (error || transformError) {
    const fallbackMsg = i18n.t('This app could not retrieve required data.');
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Network error')
    }, (error === null || error === void 0 ? void 0 : error.message) || (transformError === null || transformError === void 0 ? void 0 : transformError.message) || fallbackMsg);
  }
  return /*#__PURE__*/React.createElement(CachedDataQueryCtx.Provider, {
    value: transformedData
  }, children);
};
CachedDataQueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
  query: PropTypes.object.isRequired,
  dataTransformation: PropTypes.func,
  translucent: PropTypes.bool
};
const useCachedDataQuery = () => useContext(CachedDataQueryCtx);
export { CachedDataQueryProvider, useCachedDataQuery };