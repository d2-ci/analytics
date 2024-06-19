"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _sortable = require("@dnd-kit/sortable");
var _debounce = require("@react-hook/debounce");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _dimensions = require("../../../api/dimensions.js");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _DataElementOption = _interopRequireDefault(require("./DataElementOption.js"));
var _DataElementSelectorStyle = _interopRequireDefault(require("./styles/DataElementSelector.style.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getOptions = () => ({
  [_dataTypes.TOTALS]: _index.default.t('Totals only'),
  [_dataTypes.DETAIL]: _index.default.t('Details only')
});
const GroupSelector = _ref => {
  var _dataTypes$DIMENSION_;
  let {
    currentValue,
    onChange,
    displayNameProp
  } = _ref;
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const [loading, setLoading] = (0, _react.useState)(true);
  const [groups, setGroups] = (0, _react.useState)([]);
  const defaultGroup = (_dataTypes$DIMENSION_ = _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_DATA_ELEMENT]) === null || _dataTypes$DIMENSION_ === void 0 ? void 0 : _dataTypes$DIMENSION_.defaultGroup;
  (0, _react.useEffect)(() => {
    const fetchGroups = async () => {
      setLoading(true);
      const result = await (0, _dimensions.apiFetchGroups)(dataEngine, _dataTypes.DIMENSION_TYPE_DATA_ELEMENT, displayNameProp);
      setGroups(result);
      setLoading(false);
    };
    fetchGroups();
  }, [dataEngine, displayNameProp]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "group-select"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true,
    loading: loading,
    loadingText: _index.default.t('Loading'),
    dataTest: 'data-element-group-select'
  }, defaultGroup ? /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: defaultGroup.id,
    key: defaultGroup.id,
    label: defaultGroup.getName(),
    dataTest: `data-element-group-select-option-${defaultGroup.id}`
  }) : null, !loading ? groups.map(group => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: group.id,
    key: group.id,
    label: group.name,
    dataTest: `data-element-group-select-option-${group.id}`
  })) : null), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataElementSelectorStyle.default.__hash
  }, _DataElementSelectorStyle.default));
};
GroupSelector.propTypes = {
  currentValue: _propTypes.default.string.isRequired,
  displayNameProp: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired
};
const DisaggregationSelector = _ref2 => {
  let {
    currentValue,
    onChange
  } = _ref2;
  const options = getOptions();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "group-select"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true,
    dataTest: 'data-element-disaggregation-select'
  }, Object.entries(options).map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: option[0],
    key: option[0],
    label: option[1],
    dataTest: `data-element-disaggregation-select-option-${option[0]}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataElementSelectorStyle.default.__hash
  }, _DataElementSelectorStyle.default));
};
DisaggregationSelector.propTypes = {
  currentValue: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired
};
const DataElementSelector = _ref3 => {
  let {
    displayNameProp,
    onDoubleClick
  } = _ref3;
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const [searchTerm, setSearchTerm] = (0, _react.useState)('');
  const [group, setGroup] = (0, _react.useState)(_dataTypes.DIMENSION_TYPE_ALL);
  const [subGroup, setSubGroup] = (0, _react.useState)(_dataTypes.TOTALS);
  const [options, setOptions] = (0, _react.useState)([]);
  const [loading, setLoading] = (0, _react.useState)(true);
  const {
    isSorting
  } = (0, _sortable.useSortable)({});
  const rootRef = (0, _react.useRef)();
  const hasNextPageRef = (0, _react.useRef)(false);
  const searchTermRef = (0, _react.useRef)(searchTerm);
  const pageRef = (0, _react.useRef)(0);
  const filterRef = (0, _react.useRef)({
    dataType: _dataTypes.DIMENSION_TYPE_DATA_ELEMENT,
    group,
    subGroup
  });
  const fetchData = async scrollToTop => {
    try {
      setLoading(true);
      const result = await (0, _dimensions.apiFetchOptions)({
        dataEngine,
        nameProp: displayNameProp,
        filter: filterRef.current,
        searchTerm: searchTermRef.current,
        page: pageRef.current
      });
      if (result !== null && result !== void 0 && result.dimensionItems) {
        const newOptions = result.dimensionItems.map(item => ({
          label: item.name,
          value: item.id,
          type: item.dimensionItemType,
          expression: item.expression
        }));
        setOptions(prevOptions => pageRef.current > 1 ? [...prevOptions, ...newOptions] : newOptions);
        setLoading(false);
      }
      hasNextPageRef.current = result !== null && result !== void 0 && result.nextPage ? true : false;
    } catch (error) {
      // TODO handle errors
      console.log('apiFetchOptions error: ', error);
    } finally {
      if (scrollToTop) {
        rootRef.current.scrollTo({
          top: 0
        });
      }
    }
  };
  const debouncedFetchData = (0, _debounce.useDebounceCallback)(newSearchTerm => {
    hasNextPageRef.current = false;
    pageRef.current = 1;
    searchTermRef.current = newSearchTerm;
    fetchData(true);
  }, 500);
  const onSearchChange = _ref4 => {
    let {
      value
    } = _ref4;
    const newSearchTerm = value;
    setSearchTerm(newSearchTerm);

    // debounce the fetch
    debouncedFetchData(newSearchTerm);
  };
  const onFilterChange = newFilter => {
    if (newFilter.group) {
      setGroup(newFilter.group);
      filterRef.current.group = newFilter.group;
    }
    if (newFilter.subGroup) {
      setSubGroup(newFilter.subGroup);
      filterRef.current.subGroup = newFilter.subGroup;
    }
    hasNextPageRef.current = false;
    pageRef.current = 1;
    fetchData(true);
  };
  const onEndReached = _ref5 => {
    let {
      isIntersecting
    } = _ref5;
    if (isIntersecting) {
      // if hasNextPage is set it means at least 1 request already happened and there is
      // another page, fetch the next page
      if (hasNextPageRef.current) {
        pageRef.current += 1;
        fetchData();
      } else if (pageRef.current === 0) {
        // this is for fetching the initial page
        pageRef.current = 1;
        fetchData();
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "filter-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "sub-header"
  }, _index.default.t('Data elements')), /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    value: searchTerm,
    onChange: onSearchChange,
    placeholder: _index.default.t('Search by data element name'),
    dense: true,
    type: 'search',
    dataTest: 'data-element-search'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "selector-wrapper"
  }, /*#__PURE__*/_react.default.createElement(GroupSelector, {
    currentValue: group,
    onChange: group => onFilterChange({
      group
    }),
    displayNameProp: displayNameProp
  }), /*#__PURE__*/_react.default.createElement(DisaggregationSelector, {
    currentValue: subGroup,
    onChange: subGroup => onFilterChange({
      subGroup
    })
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "dimension-list-container"
  }, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "dimension-list-overlay"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)), /*#__PURE__*/_react.default.createElement("div", {
    ref: rootRef,
    onScroll: () => {
      if (isSorting) {
        rootRef.current.scrollTo({
          top: 0
        });
      }
    },
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "dimension-list-scrollbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "dimension-list",
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + ((0, _classnames.default)('dimension-list-scroller', {
      loading
    }) || "")
  }, Boolean(options.length) && options.map(_ref6 => {
    let {
      label,
      value
    } = _ref6;
    return /*#__PURE__*/_react.default.createElement(_DataElementOption.default, {
      key: value,
      label: label,
      value: value,
      onDoubleClick: onDoubleClick
    });
  }), !loading && !options.length && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "empty-list"
  }, searchTermRef.current ? _index.default.t('No data elements found for "{{- searchTerm}}"', {
    searchTerm: searchTermRef.current
  }) : _index.default.t('No data elements found')), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementSelectorStyle.default.__hash}` + " " + "scroll-detector"
  }, /*#__PURE__*/_react.default.createElement(_ui.IntersectionDetector, {
    onChange: onEndReached,
    rootRef: rootRef
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataElementSelectorStyle.default.__hash
  }, _DataElementSelectorStyle.default));
};
DataElementSelector.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  onDoubleClick: _propTypes.default.func.isRequired
};
var _default = exports.default = DataElementSelector;