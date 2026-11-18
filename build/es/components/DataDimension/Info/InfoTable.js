import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { Center, CircularLoader } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM // calculation
} from '../../../modules/dataTypes.js';
import styles from './styles/InfoPopover.style.js';
export const getCommonFields = displayNameProp => `attributeValues[attribute[id,displayName],value],code,created,createdBy,${displayNameProp}~rename(displayName),displayDescription,href,id,lastUpdated`;
export const capitalizeText = text => text && text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
export const sentenceCaseText = text => text && capitalizeText(text.replaceAll('_', ' ').toLowerCase());
export const renderDataSets = dataSets => {
  if (dataSets.length === 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "none"
    }, i18n.t('None')), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  } else if (dataSets.length === 1) {
    return dataSets[0].displayName;
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "content-wrap"
    }, /*#__PURE__*/React.createElement("ul", {
      className: `jsx-${styles.__hash}`
    }, dataSets.map(({
      id,
      displayName
    }) => /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName)))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }
};
export const renderGroupMemberships = groups => {
  if (groups.length === 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "none"
    }, i18n.t('None')), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  } else if (groups.length === 1) {
    return groups[0].displayName;
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "content-wrap"
    }, /*#__PURE__*/React.createElement("ul", {
      className: `jsx-${styles.__hash}`
    }, groups.map(({
      id,
      displayName
    }) => /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName)))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }
};
export const renderHumanReadableExpression = expressionData => /*#__PURE__*/React.createElement(React.Fragment, null, expressionData.status === 'ERROR' ? /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "none"
}, expressionData.message) : /*#__PURE__*/React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "code"
}, expressionData.description), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
export const renderLegendSets = legendSets => {
  return legendSets.length === 1 ? legendSets[0].displayName : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, legendSets.map(({
    id,
    displayName
  }) => /*#__PURE__*/React.createElement("li", {
    key: id,
    className: `jsx-${styles.__hash}`
  }, displayName)))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
export const InfoTable = ({
  dataType,
  data,
  error,
  loading,
  children
}) => {
  const {
    fromServerDate
  } = useTimeZoneConversion();
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "loader"
  }, /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  }))), error && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "error"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('There was a problem loading information for this data item.'))), data && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: `jsx-${styles.__hash}` + " " + "data-table"
  }, /*#__PURE__*/React.createElement("tbody", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Name')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.displayName)), children, dataType !== DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM ? /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.displayDescription ? /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, data.displayDescription) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))) : data.displayDescription && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, data.displayDescription))), dataType !== DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM ? /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Code')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.code ? data.code : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))) : data.code && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Code')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.code)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('ID')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data.id))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Last updated date')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${moment(fromServerDate(data.lastUpdated)).fromNow()} (${moment(fromServerDate(data.lastUpdated)).format('YYYY-MM-DD')})`)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Created date')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${moment(fromServerDate(data.created)).fromNow()} (${moment(fromServerDate(data.created)).format('YYYY-MM-DD')})`)), data.createdBy && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Created by')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${data.createdBy.displayName}, ${data.createdBy.username}`)), data.attributeValues.map(({
    attribute,
    value
  }) => /*#__PURE__*/React.createElement("tr", {
    key: attribute.id,
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, attribute.displayName), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, value)))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
InfoTable.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  dataType: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool
};