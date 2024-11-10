"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _list = require("../../modules/list.js");
var _index = require("../RichText/index.js");
var _AboutAOUnitStyle = _interopRequireDefault(require("./styles/AboutAOUnit.style.js"));
var _utils = require("./utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const READ_ONLY = 'r';
const READ_AND_WRITE = 'rw';
const getQueries = type => ({
  ao: {
    resource: _utils.AOTypeMap[type].apiEndpoint,
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
  resource: `${_utils.AOTypeMap[type].apiEndpoint}/${id}/subscriber`,
  type: 'create'
});
const getUnsubscribeMutation = (type, id) => ({
  resource: `${_utils.AOTypeMap[type].apiEndpoint}/${id}/subscriber`,
  type: 'delete'
});
const AboutAOUnit = /*#__PURE__*/(0, _react.forwardRef)((_ref3, ref) => {
  var _data$ao$createdBy;
  let {
    type,
    id,
    renderId
  } = _ref3;
  const [isExpanded, setIsExpanded] = (0, _react.useState)(true);
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  const queries = (0, _react.useMemo)(() => getQueries(type), [type]);
  const {
    data,
    loading: dataIsLoading,
    refetch
  } = (0, _appRuntime.useDataQuery)(queries, {
    lazy: true
  });
  const subscribeMutation = (0, _react.useMemo)(() => getSubscribeMutation(type, id), [type, id]);
  const unsubscribeMutation = (0, _react.useMemo)(() => getUnsubscribeMutation(type, id), [type, id]);
  const [subscribe, {
    loading: subscribeIsLoading
  }] = (0, _appRuntime.useDataMutation)(subscribeMutation, {
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
  }] = (0, _appRuntime.useDataMutation)(unsubscribeMutation, {
    onComplete: res => {
      if (res.status === 'OK') {
        refetch({
          id
        });
      }
    }
  });
  (0, _react.useEffect)(() => {
    if (id) {
      refetch({
        id
      });
    }
  }, [id, renderId, refetch]);
  (0, _react.useImperativeHandle)(ref, () => ({
    refresh: refetch
  }), [refetch]);
  const getAccessLevelString = access => {
    const re = new RegExp(`(?<accessLevel>${READ_AND_WRITE}?)`);
    const accessMatch = re.exec(access);
    switch (accessMatch.groups.accessLevel) {
      case READ_ONLY:
        return _d2I18n.default.t('view only');
      case READ_AND_WRITE:
        return _d2I18n.default.t('view and edit');
    }
  };
  const getSharingSummary = ao => {
    const sharingTextParts = [];
    const re = new RegExp(`^${READ_AND_WRITE}?`);
    if (re.test(ao.sharing.public)) {
      sharingTextParts.push(_d2I18n.default.t('all users ({{accessLevel}})', {
        accessLevel: getAccessLevelString(ao.sharing.public)
      }));
    }
    const userAccesses = ao.sharing.users;
    const groupAccesses = ao.sharing.userGroups;
    Object.values(userAccesses).concat(Object.values(groupAccesses)).forEach(accessRule => {
      sharingTextParts.push(_d2I18n.default.t('{{userOrGroup}} ({{accessLevel}})', {
        userOrGroup: accessRule.displayName,
        accessLevel: getAccessLevelString(accessRule.access)
      }));
    });
    return sharingTextParts.length ? _d2I18n.default.t('Shared with {{commaSeparatedListOfUsersAndGroups}}', {
      commaSeparatedListOfUsersAndGroups: (0, _list.formatList)(sharingTextParts)
    }) : _d2I18n.default.t('Not shared with any users or groups');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + ((0, _classnames.default)('container', {
      expanded: isExpanded
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "title"
  }, (0, _utils.getTranslatedString)(type, 'unitTitle')), isExpanded ? /*#__PURE__*/_react.default.createElement(_ui.IconChevronUp24, {
    color: _ui.colors.grey700
  }) : /*#__PURE__*/_react.default.createElement(_ui.IconChevronDown24, {
    color: _ui.colors.grey700
  })), isExpanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dataIsLoading && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "loader"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  })), data && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + ((0, _classnames.default)('detailLine', {
      description: true,
      noDescription: !data.ao.displayDescription
    }) || "")
  }, data.ao.displayDescription ? /*#__PURE__*/_react.default.createElement(_index.RichTextParser, null, data.ao.displayDescription) : /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}`
  }, _d2I18n.default.t('No description'))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconShare16, {
    color: _ui.colors.grey700
  }), getSharingSummary(data.ao)), /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconClock16, {
    color: _ui.colors.grey700
  }), _d2I18n.default.t('Last updated {{time}}', {
    time: (0, _moment.default)(fromServerDate(data.ao.lastUpdated)).fromNow()
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconUser16, {
    color: _ui.colors.grey700
  }), (_data$ao$createdBy = data.ao.createdBy) !== null && _data$ao$createdBy !== void 0 && _data$ao$createdBy.displayName ? _d2I18n.default.t('Created {{time}} by {{author}}', {
    time: (0, _moment.default)(fromServerDate(data.ao.created)).fromNow(),
    author: data.ao.createdBy.displayName
  }) : _d2I18n.default.t('Created {{time}}', {
    time: (0, _moment.default)(fromServerDate(data.ao.created)).fromNow()
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "detailLine"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconView16, {
    color: _ui.colors.grey700
  }), _d2I18n.default.t('Viewed {{count}} times', {
    count: data.dataStatistics.views,
    defaultValue: 'Viewed 1 time',
    defaultValue_plural: 'Viewed {{count}} times'
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "subsection"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "subsectionTitle"
  }, _d2I18n.default.t('Notifications')), data.ao.subscribed ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "subscriptionLabel"
  }, _d2I18n.default.t("You're subscribed and getting updates about new interpretations.")), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSubscribeOff24, {
      color: _ui.colors.grey700
    }),
    secondary: true,
    small: true,
    loading: unsubscribeIsLoading,
    onClick: unsubscribe
  }, _d2I18n.default.t('Unsubscribe'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_AboutAOUnitStyle.default.__hash}` + " " + "subscriptionLabel"
  }, _d2I18n.default.t('Subscribe to get updates about new interpretations.')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconSubscribe24, {
      color: _ui.colors.grey700
    }),
    secondary: true,
    small: true,
    loading: subscribeIsLoading,
    onClick: subscribe
  }, _d2I18n.default.t('Subscribe')))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _AboutAOUnitStyle.default.__hash
  }, _AboutAOUnitStyle.default));
});
AboutAOUnit.displayName = 'AboutUnit';
AboutAOUnit.propTypes = {
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  renderId: _propTypes.default.number
};
var _default = exports.default = AboutAOUnit;