import i18n from '@dhis2/d2-i18n';
import { MenuItem } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
export const UserList = _ref => {
  let {
    users,
    selectedUserIndex,
    onUserClick,
    pager
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, users.map(u => {
    var _users$selectedUserIn;

    return /*#__PURE__*/React.createElement(MenuItem, {
      dense: true,
      key: u.id,
      onClick: onUserClick(u),
      label: "".concat(u.displayName, " (").concat(u.username, ")"),
      active: ((_users$selectedUserIn = users[selectedUserIndex]) === null || _users$selectedUserIn === void 0 ? void 0 : _users$selectedUserIn.id) === u.id
    });
  }), pager.total > pager.pageSize && /*#__PURE__*/React.createElement(MenuItem, {
    dense: true,
    disabled: true,
    label: i18n.t('Too many results. Try refining the search.')
  }));
};
UserList.propTypes = {
  pager: PropTypes.object.isRequired,
  selectedUserIndex: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired
};