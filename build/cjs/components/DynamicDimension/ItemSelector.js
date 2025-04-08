"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _GenericIcon = _interopRequireDefault(require("../../assets/DimensionItemIcons/GenericIcon.js"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dimensionSelectorHelper = require("../../modules/dimensionSelectorHelper.js");
var _utils = require("../../modules/utils.js");
var _SelectedEmptyPlaceholder = require("../DataDimension/SelectedEmptyPlaceholder.js");
var _SourceEmptyPlaceholder = require("../DataDimension/SourceEmptyPlaceholder.js");
var _DimensionSelectorStyle = _interopRequireDefault(require("../styles/DimensionSelector.style.js"));
var _TransferOption = require("../TransferOption.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ItemSelector = _ref => {
  let {
    selectedItems,
    noItemsMessage,
    onFetch,
    onSelect,
    rightFooter,
    dataTest
  } = _ref;
  const [state, setState] = (0, _react.useState)({
    searchTerm: '',
    options: [],
    loading: true,
    nextPage: 1
  });
  const debouncedSearchTerm = (0, _utils.useDebounce)(state.searchTerm, 500);
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
    const result = await onFetch(page, state.searchTerm);
    const newOptions = (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.map(_ref2 => {
      let {
        id,
        name,
        disabled
      } = _ref2;
      return {
        label: name,
        value: id,
        disabled
      };
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
  (0, _utils.useDidUpdateEffect)(() => {
    fetchItems(1);
  }, [debouncedSearchTerm]);
  const onChange = selectedIds => {
    const newSelectedWithLabel = selectedIds.map(id => ({
      value: id,
      label: [...state.options, ...selectedItems].find(item => item.value === id).label
    }));
    onSelect(newSelectedWithLabel);
  };
  const onEndReached = () => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: _ref3 => {
      let {
        selected
      } = _ref3;
      return onChange(selected);
    },
    selected: selectedItems.map(item => item.value),
    options: [...state.options, ...selectedItems],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/_react.default.createElement(_SourceEmptyPlaceholder.SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      noItemsMessage: noItemsMessage
    }),
    onEndReached: onEndReached,
    filterable: true,
    filterPlaceholder: _index.default.t('Search'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: _ref4 => {
      let {
        value
      } = _ref4;
      return setSearchTerm(value);
    },
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(_SelectedEmptyPlaceholder.SelectedEmptyPlaceholder, null),
    rightHeader: /*#__PURE__*/_react.default.createElement("p", {
      className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "rightHeader"
    }, _index.default.t('Selected Items')),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, _extends({}, props, {
      icon: _GenericIcon.default,
      dataTest: `${dataTest}-transfer-option`
    })),
    dataTest: `${dataTest}-transfer`
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};
ItemSelector.propTypes = {
  onFetch: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  noItemsMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.exact({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  }))
};
ItemSelector.defaultProps = {
  selectedItems: []
};
var _default = exports.default = ItemSelector;