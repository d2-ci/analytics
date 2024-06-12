"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserList = void 0;

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserList = _ref => {
  let {
    users,
    selectedUserIndex,
    onUserClick,
    pager
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, users.map(u => {
    var _users$selectedUserIn;

    return /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
      dense: true,
      key: u.id,
      onClick: onUserClick(u),
      label: "".concat(u.displayName, " (").concat(u.username, ")"),
      active: ((_users$selectedUserIn = users[selectedUserIndex]) === null || _users$selectedUserIn === void 0 ? void 0 : _users$selectedUserIn.id) === u.id
    });
  }), pager.total > pager.pageSize && /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    dense: true,
    disabled: true,
    label: _d2I18n.default.t('Too many results. Try refining the search.')
  }));
};

exports.UserList = UserList;
UserList.propTypes = {
  pager: _propTypes.default.object.isRequired,
  selectedUserIndex: _propTypes.default.number.isRequired,
  users: _propTypes.default.array.isRequired,
  onUserClick: _propTypes.default.func.isRequired
};