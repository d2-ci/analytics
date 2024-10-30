import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { Center, CircularLoader } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import styles from './styles/InfoPopover.style.js';
export const getCommonFields = displayNameProp => `id,code,created,lastUpdated,createdBy,${displayNameProp}~rename(displayName),displayDescription`;
export const InfoTable = _ref => {
  let {
    data,
    error,
    loading,
    children
  } = _ref;
  const {
    fromServerDate
  } = useTimeZoneConversion();
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "loader"
  }, /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  }))), error && 'some error occured', data && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: `jsx-${styles.__hash}` + " " + "data-table"
  }, /*#__PURE__*/React.createElement("tbody", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Name')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Code')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.code)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.displayDescription)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Created by')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.createdBy.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Last updated')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${moment(fromServerDate(data.lastUpdated)).fromNow()} (${moment(fromServerDate(data.lastUpdated)).format('YYYY-MM-DD')})`)), children))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
InfoTable.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool
};