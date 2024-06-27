"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserSearchResults = void 0;

var _appRuntime = require("@dhis2/app-runtime");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersQuery = {
  users: {
    resource: 'users/gist',
    params: _ref => {
      let {
        searchText
      } = _ref;
      return {
        fields: 'id,displayName,username',
        order: 'firstName,surname',
        total: true,
        filter: "username:ilike:".concat(searchText, ",firstName:ilike:").concat(searchText, ",surname:ilike:").concat(searchText, ",email:ilike:").concat(searchText),
        rootJunction: 'OR'
      };
    }
  }
};

const useUserSearchResults = _ref2 => {
  let {
    searchText
  } = _ref2;
  const [{
    users,
    pager
  }, setData] = (0, _react.useState)({
    users: [],
    pager: {}
  });
  const {
    data,
    fetching,
    refetch
  } = (0, _appRuntime.useDataQuery)(usersQuery, {
    lazy: true
  });
  const debouncedRefetch = (0, _react.useCallback)((0, _debounce.default)(refetch, 250), [refetch]);
  (0, _react.useEffect)(() => {
    if (searchText.length) {
      debouncedRefetch({
        searchText
      });
    }

    return () => debouncedRefetch.cancel();
  }, [searchText, debouncedRefetch]);
  (0, _react.useEffect)(() => {
    if (data) {
      setData(data.users);
    }
  }, [data]);
  return {
    users,
    pager,
    fetching,
    clear: () => setData({
      users: [],
      pager: {}
    })
  };
};

exports.useUserSearchResults = useUserSearchResults;