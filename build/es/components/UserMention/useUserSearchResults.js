import { useDataQuery } from '@dhis2/app-runtime';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';
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
        filter: `username:ilike:${searchText},firstName:ilike:${searchText},surname:ilike:${searchText},email:ilike:${searchText}`,
        rootJunction: 'OR'
      };
    }
  }
};
export const useUserSearchResults = _ref2 => {
  let {
    searchText
  } = _ref2;
  const [{
    users,
    pager
  }, setData] = useState({
    users: [],
    pager: {}
  });
  const {
    data,
    fetching,
    refetch
  } = useDataQuery(usersQuery, {
    lazy: true
  });
  const debouncedRefetch = useCallback(debounce(refetch, 250), [refetch]);
  useEffect(() => {
    if (searchText.length) {
      debouncedRefetch({
        searchText
      });
    }
    return () => debouncedRefetch.cancel();
  }, [searchText, debouncedRefetch]);
  useEffect(() => {
    if (fetching === false && data) {
      setData(data.users);
    }
  }, [data, fetching]);
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