"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OpenFileDialog = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _visTypes = require("../../modules/visTypes.js");
var _CreatedByFilter = require("./CreatedByFilter.js");
var _FileList = require("./FileList.js");
var _NameFilter = require("./NameFilter.js");
var _OpenFileDialogStyles = require("./OpenFileDialog.styles.js");
var _PaginationControls = require("./PaginationControls.js");
var _utils = require("./utils.js");
var _VisTypeFilter = require("./VisTypeFilter.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getQuery = type => ({
  files: {
    resource: _utils.AOTypeMap[type].apiEndpoint,
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
const OpenFileDialog = _ref2 => {
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
  const filesQuery = (0, _react.useMemo)(() => getQuery(type), [type]);
  const defaultFilters = {
    searchTerm: '',
    createdBy: _CreatedByFilter.CREATED_BY_ALL,
    visType: defaultFilterVisType
  };
  const [{
    page,
    sortField,
    sortDirection,
    filters
  }, setState] = (0, _react.useReducer)((state, newState) => ({
    ...state,
    ...newState
  }), {
    page: 1,
    sortField: 'displayName',
    sortDirection: 'asc',
    filters: defaultFilters
  });
  const [nameFilterValue, setNameFilterValue] = (0, _react.useState)(defaultFilters.searchTerm);
  const [searchTimeout, setSearchTimeout] = (0, _react.useState)(null);
  const formatFilters = (0, _react.useCallback)(() => {
    const queryFilters = [];
    switch (filters.createdBy) {
      case _CreatedByFilter.CREATED_BY_ALL_BUT_CURRENT_USER:
        queryFilters.push(`user.id:!eq:${currentUser.id}`);
        break;
      case _CreatedByFilter.CREATED_BY_CURRENT_USER:
        queryFilters.push(`user.id:eq:${currentUser.id}`);
        break;
      case _CreatedByFilter.CREATED_BY_ALL:
      default:
        break;
    }
    if (filters.visType) {
      switch (filters.visType) {
        case _visTypes.VIS_TYPE_GROUP_ALL:
          break;
        case _visTypes.VIS_TYPE_GROUP_CHARTS:
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
  const formatSortDirection = (0, _react.useCallback)(() => {
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
  } = (0, _appRuntime.useDataQuery)(filesQuery, {
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
  (0, _react.useEffect)(() => {
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
    label: _d2I18n.default.t('Name'),
    width: '470px'
  }, {
    field: 'created',
    label: _d2I18n.default.t('Created'),
    width: '110px'
  }, {
    field: 'lastUpdated',
    label: _d2I18n.default.t('Last updated'),
    width: '110px'
  }];
  if (filterVisTypes !== null && filterVisTypes !== void 0 && filterVisTypes.length) {
    headers.splice(1, 0, {
      field: 'type',
      label: _d2I18n.default.t('Type'),
      width: '60px'
    });
  }
  const getSortDirection = fieldName => fieldName === sortField ? sortDirection : 'default';
  const cypressSelector = 'open-file-dialog-modal';
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    large: true,
    position: "top",
    hide: !open,
    onClose: onClose,
    dataTest: cypressSelector
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, (0, _utils.getTranslatedString)(type, 'modalTitle')), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement(_ui.Box, {
    minHeight: "496px"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "search-and-filter-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "search-field-container"
  }, /*#__PURE__*/_react.default.createElement(_NameFilter.NameFilter, {
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
  })), (filterVisTypes === null || filterVisTypes === void 0 ? void 0 : filterVisTypes.length) && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "type-field-container"
  }, /*#__PURE__*/_react.default.createElement(_VisTypeFilter.VisTypeFilter, {
    visTypes: filterVisTypes,
    selected: filters.visType,
    onChange: value => setState({
      page: 1,
      filters: {
        ...filters,
        visType: value
      }
    })
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "created-by-field-container"
  }, /*#__PURE__*/_react.default.createElement(_CreatedByFilter.CreatedByFilter, {
    selected: filters.createdBy,
    onChange: value => setState({
      page: 1,
      filters: {
        ...filters,
        createdBy: value
      }
    })
  })), !(0, _isEqual.default)(filters, defaultFilters) && /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: resetFilters,
    secondary: true,
    small: true
  }, _d2I18n.default.t('Clear filters'))), error ? /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
    title: (0, _utils.getTranslatedString)(type, 'errorTitle'),
    warning: true
  }, (0, _utils.getTranslatedString)(type, 'errorText')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "data-table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTable, {
    layout: "fixed"
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTableHead, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, data !== null && data !== void 0 && data.files[_utils.AOTypeMap[type].apiEndpoint].length ? headers.map(_ref4 => {
    let {
      field,
      label,
      width
    } = _ref4;
    return /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, {
      width: width,
      key: field,
      name: field,
      onSortIconClick: sortData,
      sortDirection: getSortDirection(field)
    }, label);
  }) : /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, null))), /*#__PURE__*/_react.default.createElement(_ui.DataTableBody, {
    className: "data-table-body"
  }, loading && /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    large: true
  }, /*#__PURE__*/_react.default.createElement(_ui.Box, {
    height: "342px"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-cell"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-text"
  }, (0, _utils.getTranslatedString)(type, 'loadingText')))))), !loading && !(data !== null && data !== void 0 && data.files[_utils.AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    large: true
  }, /*#__PURE__*/_react.default.createElement(_ui.Box, {
    minHeight: "342px"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-cell"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-container"
  }, !(0, _isEqual.default)(filters, defaultFilters) ? /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-text"
  }, (0, _utils.getTranslatedString)(type, 'noFilteredDataText')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-text"
  }, (0, _utils.getTranslatedString)(type, 'noDataText')), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "info-button"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: () => {
      onNew();
      onClose();
    }
  }, (0, _utils.getTranslatedString)(type, 'newButtonLabel'))))))))), (data === null || data === void 0 ? void 0 : data.files[_utils.AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/_react.default.createElement(_FileList.FileList, {
    data: data.files[_utils.AOTypeMap[type].apiEndpoint],
    onSelect: onFileSelect,
    showVisTypeColumn: Boolean(filterVisTypes === null || filterVisTypes === void 0 ? void 0 : filterVisTypes.length)
  })))), (data === null || data === void 0 ? void 0 : data.files[_utils.AOTypeMap[type].apiEndpoint].length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OpenFileDialogStyles.styles.__hash}` + " " + "pagination-controls"
  }, /*#__PURE__*/_react.default.createElement(_PaginationControls.PaginationControls, {
    page: data.files.pager.page,
    pager: data.files.pager,
    onPageChange: setPage
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OpenFileDialogStyles.styles.__hash
  }, _OpenFileDialogStyles.styles))));
};
exports.OpenFileDialog = OpenFileDialog;
OpenFileDialog.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  open: _propTypes.default.bool.isRequired,
  type: _propTypes.default.oneOf(Object.keys(_utils.AOTypeMap)).isRequired,
  onClose: _propTypes.default.func.isRequired,
  onFileSelect: _propTypes.default.func.isRequired,
  onNew: _propTypes.default.func.isRequired,
  defaultFilterVisType: _propTypes.default.string,
  filterVisTypes: _propTypes.default.array
};
var _default = exports.default = OpenFileDialog;