"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemOptionsSelector = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _dimensions = require("../../../api/dimensions.js");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _dimensionListItem = require("../../../modules/dimensionListItem.js");
var _dimensionSelectorHelper = require("../../../modules/dimensionSelectorHelper.js");
var _utils = require("../../../modules/utils.js");
var _DimensionSelectorStyle = _interopRequireDefault(require("../../styles/DimensionSelector.style.js"));
var _SelectedEmptyPlaceholder = require("../SelectedEmptyPlaceholder.js");
var _SourceEmptyPlaceholder = require("../SourceEmptyPlaceholder.js");
var _TransferOption = require("../TransferOption.js");
var _ItemOptionSelectorStyle = _interopRequireDefault(require("./styles/ItemOptionSelector.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const formatOptionsFilters = (dataItemType, dataItemId) => {
  const optionsFilters = {
    dataItemId
  };
  if (dataItemType === _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT) {
    optionsFilters.dataType = _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION;
  } else if (dataItemType === _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE) {
    optionsFilters.dataType = _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION;
  }
  return optionsFilters;
};
const SELECTED_ITEMS_PROP_DEFAULT = [];
const ItemOptionsSelector = ({
  id: dataItemId,
  name: dataItemName,
  type: dataItemType,
  selectedItems = SELECTED_ITEMS_PROP_DEFAULT,
  infoDataItem,
  setInfoDataItem,
  displayNameProp,
  itemsRef,
  onEditClick,
  onSelect,
  onClose,
  dataTest
}) => {
  var _state$filter;
  const [state, setState] = (0, _react.useState)({
    searchTerm: '',
    filter: formatOptionsFilters(dataItemType, dataItemId),
    options: [],
    loading: true,
    nextPage: 1
  });
  const debouncedSearchTerm = (0, _utils.useDebounce)(state.searchTerm, 500);
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const setSearchTerm = searchTerm => setState(state => ({
    ...state,
    searchTerm
  }));
  const fetchItems = async page => {
    var _result$dimensionItem;
    setState(state => ({
      ...state,
      nextPage: page === 1 ? 1 : state.nextPage,
      loading: true
    }));
    const result = await (0, _dimensions.apiFetchOptions)({
      dataEngine,
      nameProp: displayNameProp,
      page,
      filter: state.filter,
      searchTerm: state.searchTerm
    });
    const newOptions = [];
    (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.forEach(item => {
      newOptions.push({
        label: item.name,
        value: item.id,
        disabled: item.disabled,
        // XXX is this returned by the api?!
        type: item.dimensionItemType,
        expression: item.expression,
        optionSetId: item.optionSetId
      });
    });
    setState(state => ({
      ...state,
      loading: false,
      options: page > 1 ? [...state.options, ...newOptions] : newOptions,
      nextPage: result.nextPage
    }));
    /*  The following handles a very specific edge-case where the user can select all items from a
        page and then reopen the modal. Usually Transfer triggers the onEndReached when the end of
        the page is reached (scrolling down) or if too few items are on the left side (e.g. selecting
        49 items from page 1, leaving only 1 item on the left side). However, due to the way Transfer
        works, if 0 items are available, more items are fetched, but all items are already selected
        (leaving 0 items on the left side still), the onReachedEnd won't trigger. Hence the code below:
        IF there is a next page AND some options were just fetched AND you have the same or more
        selected items than fetched items AND all fetched items are already selected -> fetch more!
    */
    if (result.nextPage && newOptions.length && selectedItems.length >= newOptions.length && newOptions.every(newOption => selectedItems.find(selectedItem => selectedItem.value === newOption.value))) {
      fetchItems(result.nextPage);
    }
  };
  (0, _react.useEffect)(() => {
    setState(state => ({
      ...state,
      filter: {
        ...state.filter,
        ...formatOptionsFilters(dataItemType, dataItemId)
      }
    }));
  }, [dataItemId, dataItemType]);
  (0, _utils.useDidUpdateEffect)(() => {
    fetchItems(1);
  }, [debouncedSearchTerm, (_state$filter = state.filter) === null || _state$filter === void 0 ? void 0 : _state$filter.dataItemId]);
  const onChange = selectedIds => {
    const newSelectedItems = selectedIds.map(id => {
      const matchingItem = [...state.options, ...selectedItems].find(item => item.value === id);
      return {
        value: id,
        label: matchingItem.label,
        type: matchingItem.type,
        optionSetId: matchingItem.optionSetId,
        ...(matchingItem.expression ? {
          expression: matchingItem.expression
        } : {})
      };
    });
    onSelect(newSelectedItems);
  };
  const onEndReached = () => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  };
  const isActive = value => {
    const item = selectedItems.find(item => item.value === value);
    return !item || item.isActive;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash} jsx-${_ItemOptionSelectorStyle.default.__hash}` + " " + "transfer-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: ({
      selected
    }) => onChange(selected),
    selected: selectedItems.map(item => item.value),
    options: [...state.options,
    // remove items already in the options list
    ...selectedItems.filter(selectedItem => {
      var _state$options;
      return !((_state$options = state.options) !== null && _state$options !== void 0 && _state$options.find(option => option.value === selectedItem.value));
    })],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/_react.default.createElement(_SourceEmptyPlaceholder.SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      allItemsSelectedMessage: state.options.every(sourceItem => Boolean(selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.find(selectedItem => sourceItem.value === selectedItem.value))) && !state.nextPage ? _index.default.t('All available options are already selected') : '',
      noItemsMessage: _index.default.t('No available options for this item'),
      dataType: state.filter.dataType,
      dataTest: `${dataTest}-empty-source`
    }),
    onEndReached: onEndReached,
    filterable: true,
    filterPlaceholder: _index.default.t('Search by option name'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: ({
      value
    }) => setSearchTerm(value),
    leftHeader: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionSelectorStyle.default.__hash} jsx-${_ItemOptionSelectorStyle.default.__hash}` + " " + "option-set-back-button"
    }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      onClick: onClose,
      icon: /*#__PURE__*/_react.default.createElement(_ui.IconArrowLeft16, null),
      small: true,
      dataTest: `${dataTest}-option-set-back-button`
    }, _index.default.t('Back to all items'))), /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionSelectorStyle.default.__hash} jsx-${_ItemOptionSelectorStyle.default.__hash}` + " " + "option-set-name"
    }, dataItemName, ": ", _index.default.t('Options'))),
    rightHeader: /*#__PURE__*/_react.default.createElement("p", {
      className: `jsx-${_DimensionSelectorStyle.default.__hash} jsx-${_ItemOptionSelectorStyle.default.__hash}` + " " + "rightHeader"
    }, _index.default.t('Selected items')),
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(_SelectedEmptyPlaceholder.SelectedEmptyPlaceholder, null),
    renderOption: props => {
      return /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption
      /* eslint-disable react/prop-types */, _extends({}, props, {
        active: isActive(props.value),
        showingInfo: (infoDataItem === null || infoDataItem === void 0 ? void 0 : infoDataItem.id) === props.value,
        icon: (0, _dimensionListItem.getIcon)(props.type),
        dataItemType: props.type,
        dimensionType: (0, _dimensionListItem.getDimensionType)({
          type: props.type,
          expression: props.expression
        }),
        dataTest: `${dataTest}-transfer-option`,
        itemsRef: itemsRef,
        onEditClick: () => onEditClick(props),
        onInfoClick: () => setInfoDataItem({
          id: props.value,
          type: props.type
        })
        /* eslint-enable react/prop-types */
      }));
    },
    dataTest: `${dataTest}-option-view-mode-transfer`
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _ItemOptionSelectorStyle.default.__hash
  }, _ItemOptionSelectorStyle.default));
};
exports.ItemOptionsSelector = ItemOptionsSelector;
ItemOptionsSelector.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  infoDataItem: _propTypes.default.object,
  itemsRef: _propTypes.default.object,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.exact({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    access: _propTypes.default.object,
    isActive: _propTypes.default.bool,
    type: _propTypes.default.string,
    expression: _propTypes.default.string,
    optionSetId: _propTypes.default.string
  })),
  setInfoDataItem: _propTypes.default.func,
  onEditClick: _propTypes.default.func
};