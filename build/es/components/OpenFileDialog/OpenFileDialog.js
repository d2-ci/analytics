import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Box, Modal, ModalTitle, ModalContent, DataTable, DataTableHead, DataTableBody, DataTableRow, DataTableCell, DataTableColumnHeader, NoticeBox, CircularLoader, Button } from '@dhis2/ui';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { VIS_TYPE_GROUP_ALL, VIS_TYPE_GROUP_CHARTS } from '../../modules/visTypes.js';
import { CreatedByFilter, CREATED_BY_ALL, CREATED_BY_ALL_BUT_CURRENT_USER, CREATED_BY_CURRENT_USER } from './CreatedByFilter.js';
import { FileList } from './FileList.js';
import { NameFilter } from './NameFilter.js';
import { styles } from './OpenFileDialog.styles.js';
import { PaginationControls } from './PaginationControls.js';
import { getTranslatedString, AOTypeMap } from './utils.js';
import { VisTypeFilter } from './VisTypeFilter.js';
const getQuery = type => ({
  files: {
    resource: AOTypeMap[type].apiEndpoint,
    params: _ref => {
      let {
        sortField = 'displayName',
        sortDirection = 'iasc',
        page = 1,
        filters
      } = _ref;
      const queryParams = {
        filter: filters,
        fields: `id,type,displayName,title,displayDescription,created,lastUpdated,user,access,href`,
        paging: true,
        pageSize: 8,
        page
      };
      if (sortDirection !== 'default') {
        queryParams.order = `${sortField}:${sortDirection}`;
      }
      return queryParams;
    }
  }
});
export const OpenFileDialog = _ref2 => {
  let {
    type,
    open,
    filterVisTypes,
    defaultFilterVisType,
    onClose,
    onFileSelect,
    onNew,
    currentUser
  } = _ref2;
  const filesQuery = useMemo(() => getQuery(type), [type]);
  const defaultFilters = {
    searchTerm: '',
    createdBy: CREATED_BY_ALL,
    visType: defaultFilterVisType
  };
  const [{
    page,
    sortField,
    sortDirection,
    filters
  }, setState] = useReducer((state, newState) => ({
    ...state,
    ...newState
  }), {
    page: 1,
    sortField: 'displayName',
    sortDirection: 'asc',
    filters: defaultFilters
  });
  const [nameFilterValue, setNameFilterValue] = useState(defaultFilters.searchTerm);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const formatFilters = useCallback(() => {
    const queryFilters = [];
    switch (filters.createdBy) {
      case CREATED_BY_ALL_BUT_CURRENT_USER:
        queryFilters.push(`user.id:!eq:${currentUser.id}`);
        break;
      case CREATED_BY_CURRENT_USER:
        queryFilters.push(`user.id:eq:${currentUser.id}`);
        break;
      case CREATED_BY_ALL:
      default:
        break;
    }
    if (filters.visType) {
      switch (filters.visType) {
        case VIS_TYPE_GROUP_ALL:
          break;
        case VIS_TYPE_GROUP_CHARTS:
          queryFilters.push('type:!eq:PIVOT_TABLE');
          break;
        default:
          queryFilters.push(`type:eq:${filters.visType}`);
          break;
      }
    }
    if (filters.searchTerm) {
      queryFilters.push(`identifiable:token:${filters.searchTerm}`);
    }
    return queryFilters;
  }, [currentUser, filters]);
  const formatSortDirection = useCallback(() => {
    if (sortField === 'displayName' && sortDirection !== 'default') {
      return `i${sortDirection}`;
    }
    return sortDirection;
  }, [sortField, sortDirection]);
  const {
    loading,
    error,
    data,
    refetch
  } = useDataQuery(filesQuery, {
    lazy: true,
    onComplete: response => {
      if (page !== response.files.pager.page) {
        setPage(response.files.pager.page);
      }
    }
  });
  const resetFilters = () => {
    setState({
      filters: defaultFilters,
      page: 1
    });
    setNameFilterValue(defaultFilters.searchTerm);
  };
  const setPage = pageNum => setState({
    page: pageNum
  });
  const sortData = _ref3 => {
    let {
      name,
      direction
    } = _ref3;
    return setState({
      sortField: name,
      sortDirection: direction,
      page: 1
    });
  };
  useEffect(() => {
    // only fetch data when the dialog is open
    if (open) {
      refetch({
        page,
        sortField,
        sortDirection: formatSortDirection(),
        filters: formatFilters()
      });
    }
  }, [open, page, sortField, filters, refetch, formatFilters, formatSortDirection]);
  const headers = [{
    field: 'displayName',
    label: i18n.t('Name'),
    width: '470px'
  }, {
    field: 'created',
    label: i18n.t('Created'),
    width: '110px'
  }, {
    field: 'lastUpdated',
    label: i18n.t('Last updated'),
    width: '110px'
  }];
  if (filterVisTypes !== null && filterVisTypes !== void 0 && filterVisTypes.length) {
    headers.splice(1, 0, {
      field: 'type',
      label: i18n.t('Type'),
      width: '60px'
    });
  }
  const getSortDirection = fieldName => fieldName === sortField ? sortDirection : 'default';
  const cypressSelector = 'open-file-dialog-modal';
  return /*#__PURE__*/React.createElement(Modal, {
    large: true,
    position: "top",
    hide: !open,
    onClose: onClose,
    dataTest: cypressSelector
  }, /*#__PURE__*/React.createElement(ModalTitle, null, getTranslatedString(type, 'modalTitle')), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(Box, {
    minHeight: "496px"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "search-and-filter-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "search-field-container"
  }, /*#__PURE__*/React.createElement(NameFilter, {
    dataTest: `${cypressSelector}-name-filter`,
    value: nameFilterValue,
    onChange: value => {
      setNameFilterValue(value);
      clearTimeout(searchTimeout);
      setSearchTimeout(setTimeout(() => setState({
        page: 1,
        filters: {
          ...filters,
          searchTerm: value
        }
      }), 200));
    }
  })), (filterVisTypes === null || filterVisTypes === void 0 ? void 0 : filterVisTypes.length) && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "type-field-container"
  }, /*#__PURE__*/React.createElement(VisTypeFilter, {
    visTypes: filterVisTypes,
    selected: filters.visType,
    onChange: value => setState({
      page: 1,
      filters: {
        ...filters,
        visType: value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "created-by-field-container"
  }, /*#__PURE__*/React.createElement(CreatedByFilter, {
    selected: filters.createdBy,
    onChange: value => setState({
      page: 1,
      filters: {
        ...filters,
        createdBy: value
      }
    })
  })), !isEqual(filters, defaultFilters) && /*#__PURE__*/React.createElement(Button, {
    onClick: resetFilters,
    secondary: true,
    small: true
  }, i18n.t('Clear filters'))), error ? /*#__PURE__*/React.createElement(NoticeBox, {
    title: getTranslatedString(type, 'errorTitle'),
    warning: true
  }, getTranslatedString(type, 'errorText')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "data-table-wrapper"
  }, /*#__PURE__*/React.createElement(DataTable, {
    layout: "fixed"
  }, /*#__PURE__*/React.createElement(DataTableHead, null, /*#__PURE__*/React.createElement(DataTableRow, null, data !== null && data !== void 0 && data.files[AOTypeMap[type].apiEndpoint].length ? headers.map(_ref4 => {
    let {
      field,
      label,
      width
    } = _ref4;
    return /*#__PURE__*/React.createElement(DataTableColumnHeader, {
      width: width,
      key: field,
      name: field,
      onSortIconClick: sortData,
      sortDirection: getSortDirection(field)
    }, label);
  }) : /*#__PURE__*/React.createElement(DataTableColumnHeader, null))), /*#__PURE__*/React.createElement(DataTableBody, {
    className: "data-table-body"
  }, loading && /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
    large: true
  }, /*#__PURE__*/React.createElement(Box, {
    height: "342px"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-cell"
  }, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  }), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "info-text"
  }, getTranslatedString(type, 'loadingText')))))), !loading && !(data !== null && data !== void 0 && data.files[AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/React.createElement(DataTableRow, null, /*#__PURE__*/React.createElement(DataTableCell, {
    large: true
  }, /*#__PURE__*/React.createElement(Box, {
    minHeight: "342px"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-container"
  }, !isEqual(filters, defaultFilters) ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "info-text"
  }, getTranslatedString(type, 'noFilteredDataText')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-text"
  }, getTranslatedString(type, 'noDataText')), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-button"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      onNew();
      onClose();
    }
  }, getTranslatedString(type, 'newButtonLabel'))))))))), (data === null || data === void 0 ? void 0 : data.files[AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/React.createElement(FileList, {
    data: data.files[AOTypeMap[type].apiEndpoint],
    onSelect: onFileSelect,
    showVisTypeColumn: Boolean(filterVisTypes === null || filterVisTypes === void 0 ? void 0 : filterVisTypes.length)
  })))), (data === null || data === void 0 ? void 0 : data.files[AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "pagination-controls"
  }, /*#__PURE__*/React.createElement(PaginationControls, {
    page: data.files.pager.page,
    pager: data.files.pager,
    onPageChange: setPage
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles))));
};
OpenFileDialog.propTypes = {
  currentUser: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(Object.keys(AOTypeMap)).isRequired,
  onClose: PropTypes.func.isRequired,
  onFileSelect: PropTypes.func.isRequired,
  onNew: PropTypes.func.isRequired,
  defaultFilterVisType: PropTypes.string,
  filterVisTypes: PropTypes.array
};
export default OpenFileDialog;