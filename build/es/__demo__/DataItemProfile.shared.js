import _JSXStyle from "styled-jsx/style";
import { DataProvider } from '@dhis2/app-runtime';
import { ConfigProvider } from '@dhis2/app-service-config';
import { CircularLoader, NoticeBox, Tag } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';

/* Log in to the server in the same browser first. It must allow requests
 * from Storybook (localhost:5000): this dev server does, the play instances
 * don't. */
export const BASE_URL = 'https://dev.im.dhis2.org/analytics-dev/';
export const Wrapper = story => /*#__PURE__*/React.createElement(ConfigProvider, {
  config: {
    baseUrl: BASE_URL,
    apiVersion: 44,
    serverVersion: {
      major: 2,
      minor: 44,
      patch: 0
    },
    systemInfo: {
      calendar: 'iso8601'
    }
  }
}, /*#__PURE__*/React.createElement(DataProvider, {
  baseUrl: BASE_URL,
  apiVersion: "44"
}, story()));

// Sierra Leone demo items, one per case
export const ITEMS = [{
  id: 'fbfJHSPpUQD',
  dimensionItemType: 'DATA_ELEMENT',
  name: 'ANC 1st visit (monthly, sum)'
}, {
  id: 'fbfJHSPpUQD.pq2XI5kz2BY',
  dimensionItemType: 'DATA_ELEMENT_OPERAND',
  name: 'ANC 1st visit at facilities (category: Fixed)'
}, {
  id: 'WUg3MYWQ7pt',
  dimensionItemType: 'DATA_ELEMENT',
  name: 'Total Population (yearly, averaged)'
}, {
  id: 'YazgqXbizv1',
  dimensionItemType: 'DATA_ELEMENT',
  name: 'IDSR Measles (Monday and Wednesday weeks)'
}, {
  id: 'Uvn6LCg7dVU',
  dimensionItemType: 'INDICATOR',
  name: 'ANC 1 Coverage (indicator over the population)'
}, {
  id: 'BfMAe6Itzgt.REPORTING_RATE',
  dimensionItemType: 'REPORTING_RATE',
  name: 'Child Health reporting rate (monthly)'
}, {
  id: 'GSae40Fyppf',
  dimensionItemType: 'PROGRAM_INDICATOR',
  name: 'Age at visit (program indicator)'
}, {
  id: 'gKv1pdjF3wM',
  dimensionItemType: 'INDICATOR',
  name: 'Inpatient cases per 10 000 population (indicator over a program indicator)'
}, {
  id: 'eBAyeGv0exc.vV9UWAZohSf',
  dimensionItemType: 'PROGRAM_DATA_ELEMENT',
  name: 'Weight in kg (program data element)'
}];
export const SIERRA_LEONE = 'ImspTQPwCqd';
// A district, and a facility without Reproductive Health (ANC 1st visit)
export const BO = 'O6uvpzGd5pu';
export const JUNCTIONLA_MCHP = 'QCnJDmNjQy0';
export const splitList = text => text.split(/[,\s]+/).map(value => value.trim()).filter(Boolean);
const STATUS_TAG = {
  full: {
    positive: true
  },
  partial: {
    neutral: true
  },
  none: {
    negative: true
  },
  unknown: {}
};
const NO_REASONS = [];
export const Status = ({
  status,
  reasons = NO_REASONS
}) => /*#__PURE__*/React.createElement("span", {
  className: "jsx-177987364"
}, /*#__PURE__*/React.createElement(Tag, STATUS_TAG[status], status), reasons.length > 0 && /*#__PURE__*/React.createElement("span", {
  className: "jsx-177987364" + " " + "reasons"
}, reasons.join(', ')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "177987364"
}, [".reasons.jsx-177987364{margin-inline-start:4px;font-size:12px;color:#4a5768;}"]));
Status.propTypes = {
  reasons: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string
};
export const Loading = () => /*#__PURE__*/React.createElement(CircularLoader, {
  small: true
});
export const ErrorNotice = ({
  error
}) => /*#__PURE__*/React.createElement(NoticeBox, {
  error: true,
  title: "The request failed"
}, error.message, ". Are you logged in to ", BASE_URL, " in this browser?");
ErrorNotice.propTypes = {
  error: PropTypes.object
};
export const tableStyle = /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "3513042369"
}, ["table.profiles{border-collapse:collapse;margin-block:16px;font-size:14px;}", "table.profiles th,table.profiles td{border:1px solid #d5dde5;padding:6px 8px;text-align:start;vertical-align:top;}", "table.profiles th{background:#f3f5f7;}", "table.profiles th.group{background:#e8edf2;}", ".inputs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:16px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;max-inline-size:900px;margin-block-end:16px;}", ".update{padding-block-end:8px;}", "pre.json{font-size:11px;max-block-size:300px;max-inline-size:360px;overflow:auto;}"]);