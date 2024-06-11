import _JSXStyle from "styled-jsx/style";
import { useDataQuery, useDataMutation, useTimeZoneConversion } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Button, CircularLoader, IconChevronDown24, IconChevronUp24, IconClock16, IconShare16, IconSubscribe24, IconSubscribeOff24, IconUser16, IconView16, colors } from '@dhis2/ui';
import cx from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState, forwardRef, useImperativeHandle } from 'react';
import { formatList } from '../../modules/list.js';
import { RichTextParser } from '../RichText/index.js';
import styles from './styles/AboutAOUnit.style.js';
import { getTranslatedString, AOTypeMap } from './utils.js';
const READ_ONLY = 'r';
const READ_AND_WRITE = 'rw';
const getQueries = type => ({
  ao: {
    resource: AOTypeMap[type].apiEndpoint,
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: {
      fields: 'id,displayDescription,created,createdBy[displayName],lastUpdated,subscribed,sharing'
    }
  },
  dataStatistics: {
    resource: 'dataStatistics/favorites',
    id: _ref2 => {
      let {
        id
      } = _ref2;
      return id;
    }
  }
});
const getSubscribeMutation = (type, id) => ({
  resource: `${AOTypeMap[type].apiEndpoint}/${id}/subscriber`,
  type: 'create'
});
const getUnsubscribeMutation = (type, id) => ({
  resource: `${AOTypeMap[type].apiEndpoint}/${id}/subscriber`,
  type: 'delete'
});
const AboutAOUnit = /*#__PURE__*/forwardRef((_ref3, ref) => {
  var _data$ao$createdBy;
  let {
    type,
    id,
    renderId
  } = _ref3;
  const [isExpanded, setIsExpanded] = useState(true);
  const {
    fromServerDate
  } = useTimeZoneConversion();
  const queries = useMemo(() => getQueries(type), [type]);
  console.log('testing build from d2-ci 3');
  const {
    data,
    loading: dataIsLoading,
    refetch
  } = useDataQuery(queries, {
    lazy: true
  });
  const subscribeMutation = useMemo(() => getSubscribeMutation(type, id), [type, id]);
  const unsubscribeMutation = useMemo(() => getUnsubscribeMutation(type, id), [type, id]);
  const [subscribe, {
    loading: subscribeIsLoading
  }] = useDataMutation(subscribeMutation, {
    onComplete: res => {
      if (res.status === 'OK') {
        refetch({
          id
        });
      }
    }
  });
  const [unsubscribe, {
    loading: unsubscribeIsLoading
  }] = useDataMutation(unsubscribeMutation, {
    onComplete: res => {
      if (res.status === 'OK') {
        refetch({
          id
        });
      }
    }
  });
  useEffect(() => {
    if (id) {
      refetch({
        id
      });
    }
  }, [id, renderId, refetch]);
  useImperativeHandle(ref, () => ({
    refresh: refetch
  }), [refetch]);
  const getAccessLevelString = access => {
    const re = new RegExp(`(?<accessLevel>${READ_AND_WRITE}?)`);
    const accessMatch = re.exec(access);
    switch (accessMatch.groups.accessLevel) {
      case READ_ONLY:
        return i18n.t('view only');
      case READ_AND_WRITE:
        return i18n.t('view and edit');
    }
  };
  const getSharingSummary = ao => {
    const sharingTextParts = [];
    const re = new RegExp(`^${READ_AND_WRITE}?`);
    if (re.test(ao.sharing.public)) {
      sharingTextParts.push(i18n.t('all users ({{accessLevel}})', {
        accessLevel: getAccessLevelString(ao.sharing.public)
      }));
    }
    const userAccesses = ao.sharing.users;
    const groupAccesses = ao.sharing.userGroups;
    Object.values(userAccesses).concat(Object.values(groupAccesses)).forEach(accessRule => {
      sharingTextParts.push(i18n.t('{{userOrGroup}} ({{accessLevel}})', {
        userOrGroup: accessRule.displayName,
        accessLevel: getAccessLevelString(accessRule.access)
      }));
    });
    return sharingTextParts.length ? i18n.t('Shared with {{commaSeparatedListOfUsersAndGroups}}', {
      commaSeparatedListOfUsersAndGroups: formatList(sharingTextParts)
    }) : i18n.t('Not shared with any users or groups');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('container', {
      expanded: isExpanded
    }) || "")
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: `jsx-${styles.__hash}` + " " + "header"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "title"
  }, getTranslatedString(type, 'unitTitle')), isExpanded ? /*#__PURE__*/React.createElement(IconChevronUp24, {
    color: colors.grey700
  }) : /*#__PURE__*/React.createElement(IconChevronDown24, {
    color: colors.grey700
  })), isExpanded && /*#__PURE__*/React.createElement(React.Fragment, null, dataIsLoading && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "loader"
  }, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  })), data && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('detailLine', {
      description: true,
      noDescription: !data.ao.displayDescription
    }) || "")
  }, data.ao.displayDescription ? /*#__PURE__*/React.createElement(RichTextParser, null, data.ao.displayDescription) : /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('No description'))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/React.createElement(IconShare16, {
    color: colors.grey700
  }), getSharingSummary(data.ao)), /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/React.createElement(IconClock16, {
    color: colors.grey700
  }), i18n.t('Testing testing {{time}}', {
    time: moment(fromServerDate(data.ao.lastUpdated)).fromNow()
  })), /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/React.createElement(IconUser16, {
    color: colors.grey700
  }), (_data$ao$createdBy = data.ao.createdBy) !== null && _data$ao$createdBy !== void 0 && _data$ao$createdBy.displayName ? i18n.t('Created {{time}} by {{author}}', {
    time: moment(fromServerDate(data.ao.created)).fromNow(),
    author: data.ao.createdBy.displayName
  }) : i18n.t('Created {{time}}', {
    time: moment(fromServerDate(data.ao.created)).fromNow()
  })), /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/React.createElement(IconView16, {
    color: colors.grey700
  }), i18n.t('Viewed {{count}} times', {
    count: data.dataStatistics.views,
    defaultValue: 'Viewed 1 time',
    defaultValue_plural: 'Viewed {{count}} times'
  }))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "subsection"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "subsectionTitle"
  }, i18n.t('Notifications')), data.ao.subscribed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "subscriptionLabel"
  }, i18n.t("You're subscribed and getting updates about new interpretations.")), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(IconSubscribeOff24, {
      color: colors.grey700
    }),
    secondary: true,
    small: true,
    loading: unsubscribeIsLoading,
    onClick: unsubscribe
  }, i18n.t('Unsubscribe'))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "subscriptionLabel"
  }, i18n.t('Subscribe to get updates about new interpretations.')), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(IconSubscribe24, {
      color: colors.grey700
    }),
    secondary: true,
    small: true,
    loading: subscribeIsLoading,
    onClick: subscribe
  }, i18n.t('Subscribe')))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
});
AboutAOUnit.displayName = 'AboutUnit';
AboutAOUnit.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  renderId: PropTypes.number
};
export default AboutAOUnit;