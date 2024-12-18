import _JSXStyle from "styled-jsx/style";
import { useConfig, useTimeZoneConversion } from '@dhis2/app-runtime';
import { Center, CircularLoader } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../../locales/index.js';
import { REPORTING_RATE } from '../../../modules/dataSets.js'; // data sets
import { DIMENSION_TYPE_DATA_ELEMENT,
// data element totals
DIMENSION_TYPE_DATA_ELEMENT_OPERAND,
// data element details
DIMENSION_TYPE_INDICATOR, DIMENSION_TYPE_PROGRAM_ATTRIBUTE,
// event data items
DIMENSION_TYPE_PROGRAM_DATA_ELEMENT,
// event data items
DIMENSION_TYPE_PROGRAM_INDICATOR } from '../../../modules/dataTypes.js';
import { useDataDimensionContext } from '../DataDimension.js';
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
    }, dataSets.map(_ref => {
      let {
        id,
        displayName
      } = _ref;
      return /*#__PURE__*/React.createElement("li", {
        key: id,
        className: `jsx-${styles.__hash}`
      }, displayName);
    }))), /*#__PURE__*/React.createElement(_JSXStyle, {
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
    }, groups.map(_ref2 => {
      let {
        id,
        displayName
      } = _ref2;
      return /*#__PURE__*/React.createElement("li", {
        key: id,
        className: `jsx-${styles.__hash}`
      }, displayName);
    }))), /*#__PURE__*/React.createElement(_JSXStyle, {
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
  }, legendSets.map(_ref3 => {
    let {
      id,
      displayName
    } = _ref3;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
const renderMaintenanceLink = _ref4 => {
  let {
    baseUrl,
    authorities,
    type,
    id
  } = _ref4;
  const maintenanceAppAuthority = 'M_dhis-web-maintenance';
  const canOpenMaintenanceApp = Array.isArray(authorities) ? authorities.includes(maintenanceAppAuthority) : authorities.has(maintenanceAppAuthority);
  const maintenanceUrlMap = {
    [DIMENSION_TYPE_INDICATOR]: '/edit/indicatorSection/indicator/',
    [DIMENSION_TYPE_DATA_ELEMENT]: '/edit/dataElementSection/dataElement/',
    [DIMENSION_TYPE_DATA_ELEMENT_OPERAND]: '/edit/dataElementSection/dataElement/',
    [DIMENSION_TYPE_PROGRAM_ATTRIBUTE]: '/edit/programSection/trackedEntityAttribute/',
    [DIMENSION_TYPE_PROGRAM_DATA_ELEMENT]: '/edit/dataElementSection/dataElement/',
    [DIMENSION_TYPE_PROGRAM_INDICATOR]: '/edit/indicatorSection/programIndicator/',
    [REPORTING_RATE]: '/edit/dataSetSection/dataSet/'
  };

  // not everyone has access to Maintenance app
  // calculations don't have a page in Maintenance
  if (!canOpenMaintenanceApp || !maintenanceUrlMap[type]) {
    return null;
  }
  const maintenanceUrl = new URL(`dhis-web-maintenance/index.html#${maintenanceUrlMap[type]}${id}`, baseUrl === '..' ? window.location.href.split('dhis-web-data-visualizer/')[0] : `${baseUrl}/`).href;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Maintenance link')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("a", {
    href: maintenanceUrl,
    target: "_blank",
    rel: "noreferrer",
    className: `jsx-${styles.__hash}`
  }, i18n.t('Open in Maintenance app')))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
export const InfoTable = _ref5 => {
  let {
    type,
    data,
    error,
    loading,
    children
  } = _ref5;
  const {
    fromServerDate
  } = useTimeZoneConversion();
  const {
    baseUrl
  } = useConfig();
  const {
    currentUser
  } = useDataDimensionContext();
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
  }, data.displayName)), children, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Description')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.displayDescription ? /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, data.displayDescription) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Code')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.code ? data.code : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
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
  }, `${moment(fromServerDate(data.created)).fromNow()} (${moment(fromServerDate(data.created)).format('YYYY-MM-DD')})`)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Created by')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, `${data.createdBy.displayName}, ${data.createdBy.username}`)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('API link')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("a", {
    href: data.href,
    target: "_blank",
    rel: "noreferrer",
    className: `jsx-${styles.__hash}`
  }, i18n.t('Open in API')))), renderMaintenanceLink({
    baseUrl,
    authorities: currentUser === null || currentUser === void 0 ? void 0 : currentUser.authorities,
    type,
    id: data.id
  }), data.attributeValues.map(_ref6 => {
    let {
      attribute,
      value
    } = _ref6;
    return /*#__PURE__*/React.createElement("tr", {
      key: attribute.id,
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("th", {
      className: `jsx-${styles.__hash}`
    }, attribute.displayName), /*#__PURE__*/React.createElement("td", {
      className: `jsx-${styles.__hash}`
    }, value));
  })))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
InfoTable.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string
};